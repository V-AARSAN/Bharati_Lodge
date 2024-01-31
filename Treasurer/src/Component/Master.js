import React, { useEffect, useState } from "react";
import { Button, Col, Container, Dropdown, Form, InputGroup, Modal, Nav, NavDropdown, Navbar, Row, Stack, Table } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faRightFromBracket, faEdit, faSearch } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import "../assets/css/style.css";
import { useDispatch, useSelector } from "react-redux";
import { deletethedata,  selectTheData } from "../Redux/Slice/treasurerSlice";
import {  getMasterDegree, treasurerCredntialsc, updateMasterDegree } from "../Redux/Slice/treasurerActions";
import Logout from "./Logout";


export default function Master() {

  const navigate = useNavigate();
  const checkCredentials = JSON.parse(localStorage.getItem("cerdentials"))
  const {treasurerState,masterDegree,selected} = useSelector((state)=>state.Treasurer);
  const dispatch = useDispatch();
  const [formated, setFormated] = useState({ 
    show: false ,
    search : '',
    editTable : false
  });
  const [id, setId] = useState()
  const [amount, setAmount] = useState()
  const [degree, setDegree] = useState()
  const [year, setYear] = useState()
  
  const searchTerm = new RegExp(formated?.search, 'i');
  const filteredMasterDegree = masterDegree.filter((data) =>
    searchTerm.test(data.degree)
  );

  const handleEdit = (id) =>{
      dispatch(selectTheData(id))
      setFormated({editTable: true})
  }


// const handleLogout = (e) =>{
//   e.preventDefault();
//   localStorage.removeItem("cerdentials")
//   navigate("/",{replace:true})
//   dispatch(deletethedata())
// }

const handleupdate =(e)=>{
  e.preventDefault();

  // Use this for php server
  const data = new FormData()
  data.append('id',id)
  data.append('degree',degree)
  data.append('amount',amount)
  data.append('year',year)

  // const data = {
  //     username : username,
  //     password :password
  // }
  
  dispatch(updateMasterDegree(data))
  setFormated({editTable:false})

}
const logout = (data) =>{
  setFormated({logout:data})

}


useEffect(()=>{
  if(!checkCredentials){
    navigate('/')
  }else{
    // navigate('/')
  }
      setId(selected.id)
      setAmount(selected.amount)
      setDegree(selected.degree)
      setYear(selected.year)
    
  dispatch(treasurerCredntialsc())
  dispatch(getMasterDegree())
  
},[treasurerCredntialsc,getMasterDegree,selected,updateMasterDegree])

  return (
    <>
      <div id="master-bg" className="">
        
        {/* Header */}
          <Row className="g-0 bg-success py-1">
            <Col lg={4} md={4} sm={12}>
              <h1 className=" px-3 text-white">Bharati Lodge</h1>
            </Col>
            <Col lg={8} md={8} sm={12} className="d-flex  justify-content-end px-3 pt-2 ">
              <Nav variant="tabs" className="tabs">
                {[
                  { path: "/subscription", icon: "fa-user-tie", text: "Subscription Modal",textcolor:"text-white" },
                  { path: "/manage", icon: "fa-people-roof", text: "Manage Members",textcolor:"text-white" },
                  { path: "/master", icon: "fa-user-tag", text: "Degree Master" },
                ].map((item, index) => (
                  <Nav.Item key={index}>
                    <Nav.Link className={`${item.textcolor} fw-bold ${item.path === "/master" ? "active" : ""}`} onClick={() => navigate(item.path)}>
                      <i className={`fa-solid ${item.icon}`}></i> <span>{item.text}</span>
                    </Nav.Link>
                  </Nav.Item>
                ))}
              </Nav>
              <div className="ms-2">
                <img src={require('../assets/images/icon/user_552721.png')} width={'40px'} height={'40px'} onClick={() => setFormated({ show: true})} style={{ cursor: 'pointer' }} alt="user icon" />
              </div>
              {formated.show && <Logout logout={logout}/>}
            </Col>
          </Row>

        {/* Section */}
          <Container fluid className="py-3 ">
            <h3 className="text-center text-light fw-bold">Degree Master</h3>
            <div className="d-flex justify-content-end">
              <Col lg={3} md={4} sm={12}>
                <InputGroup  className="mb-3">
                  <InputGroup.Text id="basic-addon1">
                    <FontAwesomeIcon icon={faSearch} />
                  </InputGroup.Text>
                  <Form.Control type="text" placeholder="Search" onChange={(e)=>setFormated({search:e.target.value})}/>
                </InputGroup>
              </Col>
            </div>
            <div className="table-container overflow-auto" style={{ height: '400px'}}  >
              <Table  striped hover  className="text-center mb-0 shadow text-nowrap"   >
                <thead className="table-info  position-sticky top-0">
                  <tr className="">
                      <th>SI.NO</th>
                      <th>Degree</th>
                      <th>Amount</th>
                      <th>Year</th>
                      <th>Action</th>
                      {/* <th>Action</th> */}
                    </tr>
                  </thead>
                  <tbody className="table-light">
                    {Array.isArray(filteredMasterDegree) > 0 && filteredMasterDegree.map((data,index) => (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{data?.degree}</td>
                        <td>{data?.amount}</td>
                        <td>{data?.year}</td>
                        <td><Button variant="outline-info" onClick={()=>handleEdit(data?.id)} className="mx-2 rounded-circle fw-bold"><FontAwesomeIcon icon={faEdit}/>Edit</Button></td>
                        
                        {/* Modal to edit data in the table */}
                        <Modal show={formated.editTable} onHide={()=>setFormated({editTable:false})} backdrop="" keyboard={false} centered scrollable className="shadow-lg"  >
                        <Modal.Header   closeButton>
                          <Modal.Title>History</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                              <Form>
                                <Stack gap={3}> 
                                  <InputGroup>
                                    <InputGroup.Text className="padding-1">Degree</InputGroup.Text>
                                    <Form.Control type="text" value={degree} onChange={(e)=>setDegree(e.target.value)}/>
                                  </InputGroup>
                                  <InputGroup>
                                    <InputGroup.Text className="padding-2">Amount</InputGroup.Text>
                                    <Form.Control type="text" value={amount} onChange={(e)=>setAmount(e.target.value)}/>
                                  </InputGroup>
                                  <InputGroup>
                                    <InputGroup.Text className="padding-3">Year</InputGroup.Text>
                                    <Form.Control type="text" value={year} onChange={(e)=>setYear(e.target.value)}/>
                                  </InputGroup>
                                </Stack>
                              </Form>
                        </Modal.Body>
                        <Modal.Footer>
                          <Button variant="danger" onClick={()=>setFormated({editTable:false})}>
                            Close
                          </Button>
                          <Button variant="primary" onClick={handleupdate}>
                            Update
                          </Button>
                        </Modal.Footer>
                      </Modal>

                      </tr>
                    ))}
                  </tbody>
                </Table>
              </div>
            </Container>
      </div>
    </>
  );
}
