import React, { useState } from "react";
import { Button, Col, Container, Form, InputGroup, Modal, Nav, Row, Table } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightFromBracket, faEdit, faSearch } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import "../assets/css/style.css";


export default function Master() {

  const navigate = useNavigate();

  const [formated, setFormated] = useState({ 
    show: false 
  });

  const master = [
    {
    "degeree":"Craft",
    "Amount":"4000",
    "Year":"2024"
  },
  {
    "degeree":"Chapter",
    "Amount":"1000",
    "Year":"2024"
  },
  {
    "degeree":"Mark",
    "Amount":"1000",
    "Year":"2024"
  },
  {
    "degeree":"RAM",
    "Amount":"1000",
    "Year":"2024"
  },
  {
    "degeree":"Conclave",
    "Amount":"2000",
    "Year":"2024"
  }
]

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
                <img src={require('../assets/images/icon/user_552721.png')} width={'40px'} height={'40px'} onClick={() => setFormated({ show: true })} style={{ cursor: 'pointer' }} alt="user icon" />
              </div>
              <Modal show={formated.show} onHide={() => setFormated({ show: false })} backdrop="static" keyboard={false} centered>
                <Modal.Header closeButton>
                  <Modal.Title>Modal title</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <p>Username: Aarsan V</p>
                  <p>Password: ********</p>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="outline-danger" onClick={()=>navigate('/')}>Logout <FontAwesomeIcon icon={faRightFromBracket} /></Button>                </Modal.Footer>
              </Modal>
            </Col>
          </Row>

        {/* Section */}
          <Container fluid className="py-3 ">
            <h3 className="text-center text-white fw-bold">Degree Master</h3>
            <div className="d-flex justify-content-end">
              <Col lg={3} md={4} sm={12}>
                <InputGroup  className="mb-3">
                  <InputGroup.Text id="basic-addon1">
                    <FontAwesomeIcon icon={faSearch} />
                  </InputGroup.Text>
                  <Form.Control type="text" placeholder="Search" />
                </InputGroup>
              </Col>
            </div>
            <div className="table-container overflow-auto" style={{ height: '400px'}}  >
              <Table  striped hover  className="text-center mb-0 shadow text-nowrap"   >
                <thead className="table-info  position-sticky top-0">
                  <tr className="">
                      <th>SI.NO</th>
                      <th>Year</th>
                      <th>Degree</th>
                      <th>Amount</th>
                      <th>Action</th>
                      {/* <th>Action</th> */}
                    </tr>
                  </thead>
                  <tbody className="table-light">
                    {master.map((data,index) => (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{data?.Year}</td>
                        <td>{data?.degeree}</td>
                        <td>{data?.Amount}</td>
                        {/* <td>{[
                          {name:"Edit",icon:faEdit,color:"outline-primary"},
                          {name:"Delete",icon:faTrash,color:"outline-danger"}].map((data)=>(
                          <Button key={index} variant={data.color} className="mx-2 rounded-circle"><FontAwesomeIcon icon={data.icon}/>{data.name}</Button>
                        ))}</td> */}
                        <td><Button variant="outline-info" className="mx-2 rounded-circle fw-bold"><FontAwesomeIcon icon={faEdit}/>Edit</Button></td>
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
