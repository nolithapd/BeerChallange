import React, { useEffect, useState } from "react";
import InputSearch from "../components/InputSearch";
import Table from "../components/Table";
import { Modal, ModalBody, ModalFooter, Button } from "reactstrap"
import ModalSearchTable from "./ModalSearchTable";

export default function MainPage() {
    const [tableData, setTableData] = useState([])
    const [showToast, setShowToast] = useState(false);
    const [inputBeerName, setInputBeerName] = useState('');
    const [searchData, setSearchData] = useState([])
    const [showModal, setShowModal] = useState(false);
   
    useEffect(() => {
        fetch('beer').then((results) => { return results.json(); })
            .then(data => { setTableData(data); })
    })
    const handleChange = (evnt) => {
     
        const newInput = evnt.target.value;
        setInputBeerName(newInput)
    }
    const handleSubmit = (evnt) => {
        evnt.preventDefault();
        if (inputBeerName !== '') {         
            fetch(`beer/${inputBeerName}`).then((results) => { return results.json(); })
                .then(data => { setSearchData(data); })  
            setShowModal(true)
        } else {
            
            setShowToast(true);
       
        }
    }  
    const toggle = () => {
        setShowToast(!showToast);
    }
        const toggleModal = () => {
            setShowModal(!showModal); 
    }
    return (
        <>
            <h1>WELCOME TO BEER APPLICATION</h1>
            <InputSearch handleSubmit={handleSubmit} handleChange={handleChange} />
            {tableData.length < 0 ? <p><em>Loading...</em></p> : <Table tableData={tableData} />}
            <Modal className="p-3 bg-secondary my-2" isOpen={showToast}>
                <ModalBody>
                    Enter Beer Name to search
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={toggle}>Okay</Button>
                </ModalFooter>
            </Modal>
            <ModalSearchTable searchData={searchData} showModal={showModal} toggle={toggleModal} />
        </>
    );
}