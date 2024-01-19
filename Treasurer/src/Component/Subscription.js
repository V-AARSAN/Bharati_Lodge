import React, { useState } from "react";
import { Button, Col, Container, Dropdown, Form, FormGroup, InputGroup, Modal, Nav, Row, Stack, Table } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faEdit, faEye, faRightFromBracket, faSearch } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import "../assets/css/style.css";
import Draggable, { DraggableCore } from "react-draggable";


export default function Subscription() {

  const navigate = useNavigate();

  const [formated, setFormated] = useState({ 
    show: false ,
    historyShow: false,
    payShow:false,
    historyData:[],
    id:0
  });

  
  // const tableData = [
  //   {
  //     "Year": 2023,
  //     "Amount": 4000,
  //     "Paid": 2000,
  //     "Status": "Unpaid"
  //   },
  //   {
  //     "Year": 2024,
  //     "Amount": 4000,
  //     "Paid": 4000,
  //     "Status": "paid"
  //   },
  //   {
  //     "Year": 2023,
  //     "Amount": 4000,
  //     "Paid": 1000,
  //     "Status": "Unpaid"
  //   },
  //   {
  //     "Year": 2024,
  //     "Amount": 4000,
  //     "Paid": 3000,
  //     "Status": "Unpaid"
  //   },
    
  // ];

  const dummyDataArray = [
    {
      "id":1,
      "Reg_No": 21092,
      "RGLSI": "pqli.102",
      "Member_Name": "Ajay Virmani",
      "Degree": "Craft",
      "Year" : 2024,
      "Amount" : 5000,
      "C_status" : "paid",
      "paiddate" : "01-01-2024",
      "paid":5000,
      "paymentmethod":"Gpay",
      "Arrear" : {
        "year":2023,
        "Amount":1000,
        "A_status" : "Unpaid"
      }
    },
    {
      "id":2,
      "Reg_No": 21093,
      "RGLSI": "pqli.103",
      "Member_Name": "John Doe",
      "Degree": "RAM",
      "Year" : 2024,
      "Amount" : 5000,
      "C_status" : "Unpaid",
      "Arrear" : {
        "year":2023,
        "Amount":2000,
        "A_status" : "Unpaid"
      }
    },
    {
      "id":3,
      "Reg_No": 21094,
      "RGLSI": "pqli.104",
      "Member_Name": "  Jane Smith",
      "Degree": "Chapter",
      "Year" : 2024,
      "Amount" : 15000,
      "C_status" : "Unpaid",
      "Arrear" : {
        "year":2023,
        "Amount":6000,
        "A_status" : "Unpaid"
      }

    }
  ]
  const showHistoryData = dummyDataArray.find((item)=>item.id === formated.id)

  const onhideDetails = (id) =>{
    setFormated({
      historyShow:false,
      payShow:true,
      id:id
    })
  }

  const handleSubmit = () =>{
    setFormated({
      historyShow:true,
      payShow:false,
      historyData:[showHistoryData]
    })
  }

  const handlepaymodel = () =>{
    
    console.log(showHistoryData,"history")
    setFormated({
      historyShow:true,
      payShow:false,
      historyData:[showHistoryData]
    })

  }

  console.log(formated.id,"data get")
  
  const setShowHistory = (id) =>{
    const showHistoryData1 = dummyDataArray.find((item)=>item.id === id)
    setFormated({historyData:[showHistoryData1],historyShow:true})
    
  }

  return (
    <>
      <div id="subscribe-bg">

        {/* Header */}
          <Row className="g-0 bg-success py-1">
            <Col lg={4} md={4} sm={12}>
              <h1 className=" px-3 text-white">Bharati Lodge</h1>
            </Col>
            <Col lg={8} md={8} sm={12} className="d-flex  justify-content-end px-3 pt-2 ">
              <Nav variant="tabs" className="tabs">
                {[
                  { path: "/subscription", icon: "fa-user-tie", text: "Subscription Modal" },
                  { path: "/manage", icon: "fa-people-roof", text: "Manage Members",textcolor:"text-white" },
                  { path: "/master", icon: "fa-user-tag", text: "Degree Master",textcolor:"text-white" },
                ].map((item, index) => (
                  <Nav.Item key={index}>
                    <Nav.Link className={`${item.textcolor} fw-bold ${item.path === "/subscription" ? "active" : ""}`} onClick={() => navigate(item.path)}>
                      <i className={`fa-solid ${item.icon}`}></i> <span>{item.text}</span>
                    </Nav.Link>
                  </Nav.Item>
                ))}
              </Nav>
              <div className="ms-2">
                <img src={require('../assets/images/icon/user_552721.png')} width={'40px'} height={'40px'} onClick={() => setFormated({ show: true })} style={{ cursor: 'pointer' }} alt="user icon" />
              </div>
              <Modal Modal show={formated.show} onHide={() => setFormated({ show: false })} backdrop="static" keyboard={false} centered>
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
          <Container fluid className="py-3">
            <h3 className="text-center text-white fw-bold">Subscription Modal</h3>
            <Row className="d-flex justify-content-end">
              <Col lg={4} md={4} sm={8}>
                <InputGroup  className="my-2">
                  <InputGroup.Text id="basic-addon1">
                  <FontAwesomeIcon icon={faSearch} />
                  </InputGroup.Text>
                  <Form.Control type="text" placeholder="Search" />
                </InputGroup>
              </Col>
              <Col lg={2} md={2} sm={4} className="my-2">
              <Button variant="primary" className=""><i className="fa fa-download"></i> Download</Button>
              </Col>
              <Col lg={6} md={6} sm={12} className="d-flex justify-content-end my-2 ">
                <Dropdown className="mx-2">
                  <Dropdown.Toggle variant="info">Degree</Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item>All</Dropdown.Item>
                    <Dropdown.Item>Craft</Dropdown.Item>
                    <Dropdown.Item>Chapter</Dropdown.Item>
                    <Dropdown.Item>Mark</Dropdown.Item>
                    <Dropdown.Item>RAM</Dropdown.Item>
                    <Dropdown.Item>Conclave</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
                <Dropdown className="mx-2">
                  <Dropdown.Toggle variant="info">Year</Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item>All</Dropdown.Item>
                    <Dropdown.Item>2023</Dropdown.Item>
                    <Dropdown.Item>2024</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
                <Dropdown className="mx-2">
                  <Dropdown.Toggle variant="info">Payment</Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item>All</Dropdown.Item>
                    <Dropdown.Item>Paid</Dropdown.Item>
                    <Dropdown.Item>Unpaid</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Col>
            </Row>
            
            <div className="table-container overflow-auto" style={{ height: '400px'}}  >
              <Table  striped hover  className="text-center mb-0 shadow text-nowrap"   >
                <thead className="table-info  position-sticky top-0">
                  <tr>
                    <th>SI.NO</th>
                    <th>RGLSI Id</th>
                    <th>Member Name</th>
                    <th>Degree</th>
                    <th>Year</th>
                    <th>Amount</th>
                    <th>C.Status</th>
                    <th>Arrear</th>
                    <th>A.Status</th>
                    <th>History</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody className="table-light">
                  {dummyDataArray.map((data,index) => (
                    <tr key={index}>
                      <td>{index +1}</td>
                      <td>{data.RGLSI}</td>
                      <td>{data.Member_Name}</td>
                      <td>{data.Degree}</td>
                      <td>{data.Year}</td>
                      <td>{data.Amount}</td>
                      <td>{data.C_status}</td>
                      <td>{data.Arrear.Amount}</td>
                      <td>{data.Arrear.A_status}</td>
                      <td><FontAwesomeIcon icon={faEye} className="text-primary" onClick={()=>setShowHistory(data.id)} style={{ cursor: 'pointer' }} /></td>
                      <td><Button variant="info"><FontAwesomeIcon icon={faEdit} className="" style={{ cursor: 'pointer' }} />Edit</Button></td>
                      {/* History Modal start */}

                      <Draggable  >
                        <Modal show={formated.historyShow} onHide={()=>setFormated({historyShow:false})} backdrop="" keyboard={false} centered scrollable className="shadow-lg "  size={"lg"}>
                        <Modal.Header   closeButton>
                          <Modal.Title>
                            History 
                          </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                        {formated?.historyData?.map((data,index)=>(
                          <React.Fragment key={index}>
                            <div className="d-flex justify-content-between mx-3 text-size">
                              <p><span className="fw-bold ">RGLSI Id</span> : {data?.RGLSI}</p>
                              <p><span className="fw-bold ">Name</span> : {data?.Member_Name}</p>
                              <p><span className="fw-bold ">Degree</span> : {data?.Degree}</p>
                            </div>
                            <Table borderless className="text-nowrap text-center">
                              <thead className="table-secondary">
                                <td>Si.No</td>
                                <td>Year</td>
                                <td>Amount</td>
                                <td>Paid</td>
                                <td>Paid Date</td>
                                <td>Payment Type</td>
                                <td>Status</td>
                                <td>Pay</td>
                                <td>Action</td>
                              </thead>
                              <tbody className="table-light">
                                
                                  <tr>
                                    <td>{index * 2 + 1}</td>
                                    <td>{data?.Year}</td>
                                    <td>{data?.Amount}</td>
                                    <td>{data?.paid ? data?.paid : 0}</td>
                                    <td>{data?.paiddate ? data?.paiddate : "00-00-0000"}</td>
                                    <td>{data?.paymentmethod ? data?.paymentmethod : "None"}</td>
                                    <td>{data?.C_status === "paid" ? <Button variant="success" data-bs-theme="custom-theme"> Paid</Button> : <Button variant="danger">Unpaid</Button>}</td>
                                    <td>{data?.C_status === "Unpaid" ? <Button variant="success" className="" onClick={()=>onhideDetails(data.id) } data-bs-theme="custom-theme"><i className="fa fa-credit-card"></i> Pay</Button> : <Button variant="primary" className=""><i className="fa fa-download"></i> Download</Button>}</td>
                                    <td><Button variant="info"><FontAwesomeIcon icon={faEdit} className="" style={{ cursor: 'pointer' }} />Edit</Button></td>

                                  </tr>
                                  <tr>
                                    <td>{index * 2 + 2}</td>
                                    <td>{data?.Arrear.year}</td>
                                    <td>{data?.Arrear.Amount}</td>
                                    <td>{data?.Arrear.paid ? data?.Arrear.paid : 0}</td>
                                    <td>{data?.Arrear.paiddate ? data?.Arrear.paiddate : "00-00-0000"}</td>
                                    <td>{data?.Arrear.paymentmethod ? data?.Arrear.paymentmethod : "None"}</td>
                                    <td>{data?.Arrear.A_status === "paid" ? <Button variant="success" className="" data-bs-theme="custom-theme">Paid</Button> : <Button variant="danger" className=""> Unpaid</Button>}</td>
                                    <td>{data?.Arrear.A_status === "Unpaid" ? <Button variant="success" className="" onClick={()=>onhideDetails(data.id)} data-bs-theme="custom-theme"><i className="fa fa-credit-card"></i> Pay</Button> : <Button variant="primary" className=""><i className="fa fa-download"></i> Download</Button>}</td>
                                    <td><Button variant="info"><FontAwesomeIcon icon={faEdit} className="" style={{ cursor: 'pointer' }} />Edit</Button></td>
                                  </tr>
                                  <tr className="fw-bold table-warning">
                                    <td colSpan={5} className="text-end">Total</td>
                                    <td colSpan={4} className="text-start">{data?.Amount + data?.Arrear.Amount}</td>
                                  </tr>
                                  <tr  className="fw-bold table-secondary">
                                    <td colSpan={5} className="text-end">Paid</td>
                                    <td colSpan={4} className="text-start">{ data?.paid + (data?.Arrear.paid || 0) || 0}</td>
                                  </tr>
                                  <tr  className="fw-bold table-info">
                                    <td colSpan={5} className="text-end">Balance</td>
                                    <td colSpan={4} className="text-start">{(data?.Amount + data?.Arrear.Amount ) - (data.paid + (data.Arrear.paid || 0)) || data.Amount + data?.Arrear.Amount }</td>
                                  </tr>
                                
                              </tbody>
                            </Table>
                          </React.Fragment>
                          ))} 

                        </Modal.Body>
                        <Modal.Footer>
                          <Button variant="danger" onClick={()=>setFormated({historyShow:false})}>
                            Close
                          </Button>
                        </Modal.Footer>
                      </Modal>
                      </Draggable>

                      {/* view Modal end */}

                      {/* pay Modal start */}
                      <Modal show={formated.payShow} onHide={()=>setFormated({payShow:false})} scrollable backdrop="static">
                      <Modal.Header closeButton>
                        <Modal.Title className="fw-bold mx-auto ps-5" id="contained-modal-title-vcenter">
                        Payment Details
                        </Modal.Title>
                      </Modal.Header>
                      <Modal.Body >
                      <Form className="text-center p-3" onSubmit={handleSubmit}>
                                <Stack gap={3} >
                                <FormGroup>
                                    <InputGroup>
                                        <InputGroup.Text style={{padding:'0px 12px'}}>Amount Paid</InputGroup.Text>
                                        <Form.Control type="text" placeholder="type here...." required />
                                    </InputGroup>
                                </FormGroup>
                                <FormGroup>
                                    <InputGroup>
                                        <InputGroup.Text style={{padding:'0px 8px'}}>Payment Type</InputGroup.Text>
                                        <Form.Select type="text" required>
                                          <option>Select Type</option>
                                          <option value="By Cash">By Cash</option>
                                          <option value="UPI">UPI</option>
                                          <option value="Gpay">Gpay</option>
                                          <option value="Phonepay">Phonepay</option>
                                          <option value="Paytm">Paytm</option>
                                        </Form.Select>
                                    </InputGroup>
                                </FormGroup>
                                <FormGroup>
                                    <InputGroup>
                                        <InputGroup.Text style={{padding:'0px 8px'}}>Transaction Id</InputGroup.Text>
                                        <Form.Control type="text" placeholder="type here...."  required/>
                                    </InputGroup>
                                </FormGroup>
                                <FormGroup>
                                    <InputGroup>
                                        <Form.Control type="file" placeholder="type here...."  required/>
                                    </InputGroup>
                                </FormGroup>
                                <FormGroup>
                                    <InputGroup>
                                        <InputGroup.Text style={{padding:'0px 30px'}}>Notice</InputGroup.Text>
                                        <Form.Control as="textarea"  placeholder="type here...." required />
                                    </InputGroup>
                                </FormGroup>
                                </Stack>
                            </Form>
                            <div className="text-end">
                              <Button onClick={handlepaymodel}>Pay</Button>
                            </div>
                      </Modal.Body>
                      <Modal.Footer>
                        <Button onClick={handleSubmit}>Close</Button>
                      </Modal.Footer>
                    </Modal>

                      {/* <td>{[
                          {name:"Edit",icon:faEdit,color:"outline-primary"},
                          {name:"Delete",icon:faTrash,color:"outline-danger"}].map((data)=>(
                          <Button key={index} size={"sm"} variant={data.color} className="mx-2 rounded-circle"><FontAwesomeIcon icon={data.icon}/>{data.name}</Button>
                        ))}</td> */}
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
