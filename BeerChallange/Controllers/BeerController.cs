using BeerChallange.Model;
using BeerChallange.Repository;
using Microsoft.AspNetCore.Mvc;

namespace BeerChallange.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class BeerController : ControllerBase
    {
        BeerRepository beerRepository;
        BeerModel BeerModel = new BeerModel();  
        public BeerController()
        {
            beerRepository = new BeerRepository();
        }

        [HttpGet(Name = "GetBeer")]
        public async Task<ActionResult> GetBeers()
        {
            try
            {
                var results = await beerRepository.GetBeers();

                return new JsonResult(results);
            }
            catch (Exception ex)
            {

                return StatusCode(StatusCodes.Status500InternalServerError, new { message = $"An error occurred while retrieving beers data: Exception {ex.Message}" });
            }

        }
        [HttpGet("{id:int}")]
        public async Task<ActionResult> GetBeersById(int id)
        {
            try
            {
                var results = await beerRepository.GetBeersById(id);

                return new JsonResult(results);
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, new { message = $"An error occurred while retrieving beers data: Exception {ex.Message}" });
            }

        }

        [HttpGet("random")]
        public async Task<ActionResult> GetRandomBeers()
        {
            try
            {
                
               BeerModel = await beerRepository.GetRandomBeer();
                          
                return new JsonResult(BeerModel);
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, new { message = $"An error occurred while retrieving beers data: Exception {ex.Message}" });

            }

        }
        [HttpGet("{beer_name}")]
        public async Task<ActionResult> SearchBeers(string beer_name)
        {
            try
            {
                var results = await beerRepository.SearchBeer(beer_name);

                return new JsonResult(results);
            }
            catch (Exception ex)
            {

                return StatusCode(StatusCodes.Status500InternalServerError, new { message = $"An error occurred while retrieving beers data: Exception {ex.Message}" });
            }

        }
        public void RepopulateRandomBeer()
        {
            var startTimeSpan = TimeSpan.Zero;
            var periodTimeSpan = TimeSpan.FromDays(14);
            
            var timer = new System.Threading.Timer((e) =>
            {
              var res= GetRandomBeers();
            }, null, startTimeSpan, periodTimeSpan);

        }

    }

}
