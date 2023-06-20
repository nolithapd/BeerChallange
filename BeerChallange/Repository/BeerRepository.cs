using BeerChallange.Model;
using Newtonsoft.Json;
using System.Net;

namespace BeerChallange.Repository
{
    public class BeerRepository
    {
        public async Task<List<BeerModel>> GetBeers()
        {
            string jsonString = GetDataFromAPI(string.Format("https://api.punkapi.com/v2/beers"));
            
            var beers = JsonConvert.DeserializeObject<List<BeerModel>>(jsonString);

            return beers;
        }
        public async Task<BeerModel> GetBeersById(int id)
        {

            string jsonString = GetDataFromAPI(string.Format($"https://api.punkapi.com/v2/beers/{id}"));
            var beers = JsonConvert.DeserializeObject<List<BeerModel>>(jsonString).FirstOrDefault();

            return beers;
        }

        public async Task<BeerModel> GetRandomBeer()
        {
            string jsonString = GetDataFromAPI(string.Format("https://api.punkapi.com/v2/beers/random"));
            var beers = JsonConvert.DeserializeObject<List<BeerModel>>(jsonString).FirstOrDefault();

            return beers;
        }

         public async Task<List<BeerModel>> SearchBeer(string beerName)
        {
            string jsonString = GetDataFromAPI(string.Format($"https://api.punkapi.com/v2/beers?beer_name={beerName}"));
            var beers = JsonConvert.DeserializeObject<List<BeerModel>>(jsonString);
            return beers;
        }

        private string GetDataFromAPI(string apiKey)
        {
            HttpWebRequest WebReq = (HttpWebRequest)WebRequest.Create(string.Format(apiKey));

           WebReq.Method = "GET";

            HttpWebResponse WebResp = (HttpWebResponse)WebReq.GetResponse();

            string jsonString;
            using (Stream stream = WebResp.GetResponseStream())
            {
                StreamReader reader = new StreamReader(stream, System.Text.Encoding.UTF8);
                jsonString = reader.ReadToEnd();
            }

            return jsonString;
        }

    
}
}
