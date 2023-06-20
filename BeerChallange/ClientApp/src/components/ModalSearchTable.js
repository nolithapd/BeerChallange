import { Modal, ModalBody, ModalFooter, Button } from 'reactstrap' 
export default function ModalSearchTable({ searchData, showModal, toggle }) {

    return (
        <Modal isOpen={showModal} className="modal-xl">
            <ModalBody>
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
                           
                        </tr>
                    </thead>
                    <tbody>
                        {searchData?.map((beer, index) =>
                            <tr key={index}>
                                <td>{beer.name}</td>
                                <td>{beer.tagLine}</td>
                                <td>{beer.firstBrewed}</td>
                                <td className="ellipsis">{beer.description}</td>
                                <td>{beer.imageUrl}</td>
                                <td>{beer.abv}</td>
                                <td>{beer.ibu}</td>
                                <td>{beer.targetFg}</td>
                                <td>{beer.targetOg}</td>
                                <td>{beer.ebc}</td>
                                <td>{beer.srm}</td>
                                <td>{beer.ph}</td>
                                <td>{beer.attenuationLevel}</td>                            
                            </tr>)}

                    </tbody>
                </table>
            </ModalBody>
            <ModalFooter>
                <Button color="primary" onClick={toggle}>Okay</Button>
            </ModalFooter>
        </Modal>
    );
}