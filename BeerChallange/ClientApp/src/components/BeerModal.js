import { Modal, ModalBody, ModalFooter, ModalHeader, Button } from 'reactstrap' 

export default function BeerModal({ modalData, show, toggle }) {
  
    return (
        <Modal isOpen={show} className="modal-xl" >
            <ModalHeader>
                View beer
            </ModalHeader>
            <ModalBody>
                <div className="spaceBetweenLabels" >
                    <div>
                        <label>Beer Name: </label>
                        <label id="inputBeerName" >{modalData.name}</label>
                    </div>
                    <div >
                        <label>Tag Line:</label>
                        <label id="inputTagline" >{modalData.tagLine}</label>
                    </div>
                    <div>
                        <label>First Brewed:</label>
                        <label id="inputFirstBrewed">{modalData.firstBrewed}</label>
                    </div>
                    <div >
                        <label>Description:</label>
                        <label id="inputDescription" >{modalData.description}</label>
                    </div>
                    <div>
                        <label>Image Url:</label>
                        <label id="inputImageUrl">{modalData.imageUrl}</label>
                    </div>
                    <div>
                        <label>ABV:</label>
                        <label id="inputAbv" >{modalData.abv}</label>
                    </div>
                    <div>
                        <label>IBU:</label>
                        <label id="inputAbu" >{modalData.ibu}</label>
                    </div>
                    <div>
                        <label>Target FG: </label>
                        <label id="inputTargetFg" >{modalData.targetFg}</label>
                    </div>
                    <div >
                        <label>Target OG:</label>
                        <label id="inputTargetOg" >{modalData.targetOg}</label>
                    </div>
                    <div>
                        <label>EBC:</label>
                        <label id="inputEbc" >{modalData.ebc}</label>
                    </div>
                    <div >
                        <label>SRM:</label>
                        <label id="inputSrm" >{modalData.srm}</label>
                    </div>
                    <div>
                        <label>PH:</label>
                        <label id="inputPO" >{modalData.ph}</label>
                    </div>
                    <div>
                        <label>Attenuation Level:</label>
                        <label id="inputAttenuationLevel" >{modalData.attenuationLevel}</label>
                    </div>
                    <div>
                        <label>Brewers Tips:</label>
                        <label id="inputBrewersTips" >{modalData.brewersTips}</label>
                    </div>
                    <div>
                        <label>Contributed By:</label>
                        <label id="inpuContributedBy" >{modalData.contributedBy}</label>
                    </div>

                </div>
            </ModalBody>
            <ModalFooter>
                <Button color="primary" onClick={toggle}>Okay</Button>
            </ModalFooter>
        </Modal>
    );
}