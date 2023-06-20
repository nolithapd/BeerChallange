import React, { useState } from 'react';
import BeerModal from './BeerModal';

export default function Table({ tableData }) {
    const [show, setShow] = useState(false);
    const [modalData, setModalData] = useState([]);
  
    const handleRowClick = (beer) => {
        setShow(true);
        fetch(`beer/${beer.id}`).then((results) => {
            return results.json();
        })
            .then(data => {
                setModalData(data);              
            })      
    }
    const toggle = () => setShow(!show);
    return (
        <>
        <table className='table table-striped' aria-labelledby="tabelLabel" >
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Tag Line</th>
                    <th>First Brewed</th>
                    <th>Description</th>
                    <th>Image URL</th>
                    <th>ABV</th>
                    <th>IBU</th>
                    <th>Target FG</th>
                    <th>Target OG</th>
                    <th>EBC</th>
                    <th>SRM</th>
                    <th>PH</th>
                    <th>Attenuation Level</th>
                    <th>Contributed By</th>
                    <th>Brewers tips</th>
                </tr>
            </thead>
            <tbody>
                    {tableData?.map((beer, index) =>
                        <tr key={index} onClick={() => handleRowClick(beer)}>
                <td>{beer.name}</td>
                <td>{beer.tagLine}</td>
                <td>{beer.firstBrewed }</td>
                <td className="ellipsis">{beer.description }</td>
                <td><a>{beer.imageUrl}</a></td>
                <td>{beer.abv}</td>
                <td>{beer.ibu}</td>
                <td>{beer.targetFg}</td>
                <td>{beer.targetOg}</td>
                <td>{beer.ebc}</td>
                <td>{beer.srm}</td>
                <td>{beer.ph}</td>
                <td>{beer.attenuationLevel}</td>              
                <td>{beer.contributedBy}</td>
                <td className="ellipsis">{beer.brewersTips}</td>
                 </tr>)}

            </tbody>
            </table>
            <BeerModal modalData={modalData} show={show} toggle={toggle } />
        </>
    )
}
