import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal'
import { Button, Form, FormControl, Nav, Navbar, NavDropdown, Table } from 'react-bootstrap'

import AssignRole from './AssignRole'
import getRoleMasterData from './roleMasterData'



interface Profile{
    profile_id: number;
    email: string;
    contact: string;
    role:string;
    action:string
}

const initial_profile: Profile=({
    email:"", contact:"",role:"",action:"", profile_id:0
  })

export default function Seller(){
    const [users, setUsers] = useState([]);
  
      const [profiles, setProfiles] = useState<Array<Profile>>([]);
      const[profile, setProfile] = React.useState(initial_profile)
      const handle_profile = (name: string, value: string)=>{
    setProfile({...profile, [name]: value})
      }
      const [showModal, setShowModal] = useState(false);

      const handleCloseModal = () => setShowModal(false);
      const handleShowModal = () => setShowModal(true);

   
 
    return(
        <div>
           
            <Navbar  expand="lg">
                <Navbar.Brand  className="text-white">Create Company Profiles</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                   
                 
                </Navbar.Collapse>
                </Navbar>
        <form>
        </form>
        <div className="container">
        <div className="row">
        <div className="col-3 mt-5">
          <ul className="list-group ">
                            <li className="active list-group-item text-white" >
                            <a href="/users" className="text-white font-size-5">Users</a>
                            </li>

                            <li className="list-group-item text-white">
                            <a href="/roles">Roles</a>
                            </li>

                            <li className="list-group-item text-white ">
                            <a href="/permissions">Permissions</a>
                            </li>
                          
            </ul>
          </div>
        <div className="col-9 mt-5">
        <div>
                   <div className="float-left">
                   <h2 className="text-dark">User List</h2>
                   </div>
                   <div className="float-right">
                       <button className="btn btn-success" onClick={handleShowModal}>
                          + Assign Role
                       </button>
                      
                   </div>

               </div>
        <Table striped bordered hover className="bg-dark user-table mt-5 ">
              <thead>
                  <tr className="mr-5">
                  <th className="w-25">Index</th>
                      <th className="w-25">Email</th>
                      <th className="w-25">Contact</th>
                      <th className="w-25">Role</th>
                      <th className="w-25">Action</th>
                     
                  </tr>
              </thead>
              <tbody>
               {
                 
                   profiles.map((item, index) => {
                       return(
                        <tr key={item.profile_id}  onClick={()=>{setProfile(item)}}>
                        <td>{index + 1}</td>
                        <td>{item.email}</td>
                        <td>{item.contact}</td>
                        <td>{item.role}</td>
                        <td>{item.action}</td>
                        <td>{item.role != null ? item.role : "-"}</td>
                        <td>
                            <button className="btn btn-success mr-2">edit</button>
                            <button className="btn btn-danger">delete</button>
                            </td>
                    </tr>
                       )
                   })
               }
              </tbody>
              
          </Table>
          <Modal show={showModal} onHide={handleCloseModal} animation={true} centered>
                            {/* <AssignRole onSubmit={onSubmitAssignRole}/> */}
                <AssignRole/>
            </Modal>
          </div>
          </div>
          
	    </div>
        </div>
    )
}