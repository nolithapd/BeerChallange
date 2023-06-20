import React, { useState } from 'react';

export default function ViewBeer() {
    const [beerData, setBeerData] = useState([] );   
    const [show, setShow] = useState(false);
  
    const getRandomBeer = () => {
            fetch(`beer/${'random'}`).then((results) => {
                return results.json();
            }).then(data => {
                setBeerData(data);
            })
    } 
    const handleViewBeer = () => {
        setShow(true);
        getRandomBeer() 

    }
   
        return (
            <>
                <button type="search" onClick={handleViewBeer} className="btn btn-primary" >View Random Beer</button>
                {show ? <div className="spaceBetweenLabels" >
                    <div>
                        <label>Beer Name: </label>
                        <label id="inputBeerName" >{beerData.name}</label>
                    </div>
                    <div >
                        <label>Tag Line:</label>
                        <label id="inputTagline" >{beerData.tagLine}</label>
                    </div>
                    <div>
                        <label>First Brewed:</label>
                        <label id="inputFirstBrewed">{beerData.firstBrewed}</label>
                    </div>
                    <div >
                        <label>Description:</label>
                        <label id="inputDescription" >{beerData.description}</label>
                    </div>
                    <div>
                        <label>Image Url:</label>
                        <label id="inputImageUrl">{beerData.imageUrl}</label>
                    </div>
                    <div>
                        <label>ABV:</label>
                        <label id="inputAbv" >{beerData.abv}</label>
                    </div>
                    <div>
                        <label>IBU:</label>
                        <label id="inputAbu" >{beerData.ibu}</label>
                    </div>
                    <div>
                        <label>Target FG: </label>
                        <label id="inputTargetFg" >{beerData.targetFg}</label>
                    </div>
                    <div >
                        <label>Target OG:</label>
                        <label id="inputTargetOg" >{beerData.targetOg}</label>
                    </div>
                    <div>
                        <label>EBC:</label>
                        <label id="inputEbc" >{beerData.ebc}</label>
                    </div>
                    <div >
                        <label>SRM:</label>
                        <label id="inputSrm" >{beerData.srm}</label>
                    </div>
                    <div>
                        <label>PH:</label>
                        <label id="inputPO" >{beerData.ph}</label>
                    </div>
                    <div>
                        <label>Attenuation Level:</label>
                        <label id="inputAttenuationLevel" >{beerData.attenuationLevel}</label>
                    </div>
                    <div>
                        <label>Brewers Tips:</label>
                        <label id="inputBrewersTips" >{beerData.brewersTips}</label>
                    </div>
                    <div>
                        <label>Contributed By:</label>
                        <label id="inpuContributedBy" >{beerData.contributedBy}</label>
                    </div>

                </div> :null }
            </>
        );
    }  
