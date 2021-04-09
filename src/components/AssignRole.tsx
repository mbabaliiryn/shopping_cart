// import * as React from 'react'
import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'


// import getUserDataNotAnyRole from '../../services/users/userHasNotRoleData';
import getRoleMasterData from './roleMasterData';

interface Role{
    name:string
}

const AssignRole = () => {
    const [users, setUsers] = useState([]);
    const [roles, setRoles] = useState([]);

    const [user, setUser] = useState("");
    const [role, setRole] = useState("");

    const [showModal, setShowModal] = useState(false);
    const handleCloseModal = () => setShowModal(false);
    const handleModal = () => setShowModal(true);

    // const changeUser = e => {
    //     setUser(e.target.value);

    // };

    // const changeRole = e => {
    //     setRole(e.target.value);

    // };
    

    // const submitRole = () => {
    //     if (user === "" || role === ""){
    //         alert("please fill all the values");
    //         return false;
    //     }
    //     const userData = JSON.parse(user);
    //     const roleData = JSON.parse(role);
    //     const data =  {
    //         id:1000,
    //         username: userData.username,
    //         name: userData.name,
    //         password: userData.password,
    //         role: roleData.name
    //        }; 
    // };

    // useEffect(() => {
    //     resetRoles(getRoleMasterData)

    // },[]);

    return(
        <>
       
        <Modal.Header closeButton>
          <Modal.Title className="text-dark">Assign Role</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form>
                <Form.Group as={Row} controlId="formPlaintextEmail">
                    <Form.Label column sm="4" className="text-dark">
                        select user
                    </Form.Label>
                    <Col sm="6">
                        <input
                                  
                        placeholder='Enter contact'
                        className="text-dark"
                        {
                        ...users.map((item, index) => (
                        <option >dfdsf</option>
            
                        ))
                        }
                        />
                    </Col>

                </Form.Group>
                <Form.Group as={Row} controlId="formPlaintextEmail">
                    <Form.Label column sm="4" className="text-dark">
                        select role
                    </Form.Label>
                    <Col sm="6">
                    
                    <select className="form-control">
                        <option value="" className="text-dark">please select a role</option>
                        <option value="" className="text-dark">Sales</option>
                        <option value="" className="text-dark">Finance</option>
                        <option value="" className="text-dark">Logistics</option>



                       {
                            roles.map((item, index) => (
                                <option>fdgfdhgfh</option>
                                // <option value={JSON.stringify(item)}  key={index}>{item.name}</option>

                            ))
                        }
                           
                       </select>
                    </Col>

                </Form.Group>
            </Form>

        </Modal.Body>
        <Modal.Footer>
            <Button className="btn btn-success">save</Button>
            {/* <Button onClick={submitRole} className="btn btn-success">save</Button> */}

         
        </Modal.Footer>
    
        </>
       
               
    )
}
export default AssignRole;

