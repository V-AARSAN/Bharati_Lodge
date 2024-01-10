import React, { useEffect, useState } from "react";
import { Button, Card, Col, Container, Form, FormGroup, InputGroup, Row, Stack } from "react-bootstrap";
import "../assets/css/style.css";
import { useNavigate } from "react-router-dom";

export default function Addmember(){

    const[formated, setFormated] = useState({

    });
    const navigate = useNavigate()

    return(
        <>
        <div id="add-bg">
            <Container>
                <Row className=" d-flex align-items-center vh-100">
                    <Col lg={9} md={7} sm={12}  className="mx-auto">
                        <Card className="transparency shadow-lg p-3  ">
                            <Form className="text-center p-3">
                                <h3 className="fw-bold text-start pb-2">Add Member</h3>
                                <Stack gap={2} >
                                <Row>
                                    <Col lg={6} md={6} sm={12} className="mb-1">
                                    <FormGroup>
                                    <InputGroup>
                                        <InputGroup.Text style={{padding:'0px 8px'}}>Register No</InputGroup.Text>
                                        <Form.Control type="text" placeholder="Enter Your Name"  />
                                    </InputGroup>
                                    </FormGroup>
                                    </Col>
                                    <Col lg={6} md={6} sm={12}>
                                    <FormGroup>
                                        <InputGroup>
                                            <InputGroup.Text style={{padding:'0px 28px'}}>Title</InputGroup.Text>
                                            <Form.Control type="text" placeholder="Enter title" />
                                        </InputGroup>
                                    </FormGroup>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col lg={6} md={6} sm={12} className="mb-1">
                                    <FormGroup>
                                    <InputGroup>
                                        <InputGroup.Text style={{padding:'0px 4px'}}>Member Name</InputGroup.Text>
                                        <Form.Control type="text" placeholder="Enter Your Name"  />
                                    </InputGroup>
                                    </FormGroup>
                                    </Col>
                                    <Col lg={6} md={6} sm={12}>
                                    <FormGroup>
                                        <InputGroup>
                                            <InputGroup.Text style={{padding:'0px 28px'}}>DOB</InputGroup.Text>
                                            <Form.Control type="date" placeholder="Enter title" />
                                        </InputGroup>
                                    </FormGroup>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col lg={6} md={6} sm={12} className="mb-1">
                                    <FormGroup>
                                    <InputGroup>
                                        <InputGroup.Text style={{padding:'0px 8px'}}>Register No</InputGroup.Text>
                                        <Form.Control type="text" placeholder="Enter Your Name"  />
                                    </InputGroup>
                                    </FormGroup>
                                    </Col>
                                    <Col lg={6} md={6} sm={12}>
                                    <FormGroup>
                                        <InputGroup>
                                            <InputGroup.Text style={{padding:'0px 28px'}}>Title</InputGroup.Text>
                                            <Form.Control type="text" placeholder="Enter title" />
                                        </InputGroup>
                                    </FormGroup>
                                    </Col>
                                </Row>
                                
                                <div className="text-end">
                                    <Button variant="outline-danger mx-2"  className="ps-4 pe-4 " onClick={()=>navigate('/manage')} >Close</Button> 
                                    <Button variant="outline-primary"  type="submit" className="ps-4 pe-4 " >Submit</Button> 
                                </div>
                                </Stack>
                            </Form>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
        </>
    )
}