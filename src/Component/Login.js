import React, { useState } from "react";
import { Button, Card, Col, Container, Form, FormGroup, Row, Stack } from "react-bootstrap";
import "../assets/css/style.css";
import { useNavigate } from "react-router-dom";

export default function Login(){

    const[adminId,setAdminId] = useState();
    const[password,setPassword] = useState();
    const[erroradmin, setErrorAdmin] = useState(false);
    const[errorpassword, setErrorpassword] = useState(false);

    const navigate = useNavigate();

    const gotomanage =(e)=>{
        e.preventDefault();

        if (adminId == "admin" && password == "admin"){
            navigate("/subscription")

        } else {
          if (adminId !== "admin") {
            setErrorAdmin(true);
            setTimeout(() => {
                setErrorAdmin(false);
            },3000);
          }
          if (password !== "admin") {
            setErrorpassword(true);
            setTimeout(() => {
                setErrorpassword(false);
            }, 3000);
          }
      
        }
    }
    return(
        <>
        <div id="bg-image">
            <Container>
                <Row className=" d-flex align-items-center vh-100">
                    <Col lg={5} md={7} sm={12}  className="mx-auto">
                        <Card className="transparent shadow-lg ">
                            <Form className="text-center p-3" onSubmit={gotomanage}>
                                <Stack  gap={3}>
                                <h3 className="fw-bold">Tr<span className="text-decoration-underline">easurer Lo</span>gin</h3>
                                <div className="text-center">
                                    <img src={require("../assets/images/icon/icons8-treasury-64.png")}  width={'100px'}/>
                                </div>
                                <FormGroup className="ps-5 pe-5 ">
                                    <Col>
                                        <Form.Control type="text" placeholder="Treasurer id" className="text-center  shadow-sm" onChange={(e)=>setAdminId(e.target.value)} required/>
                                        
                                    </Col>
                                </FormGroup>
                                {erroradmin && <p className="text-danger">Treasurer id invalid</p>}
                                <FormGroup className="ps-5 pe-5 ">
                                <Col >
                                        <Form.Control type="password" placeholder="Password " className="text-center shadow-sm" onChange={(e)=>setPassword(e.target.value)} required/>
                                    </Col>
                                </FormGroup>
                                {errorpassword && <p className="text-danger">Password invalid</p>}
                                <div className="">
                                    <Button variant="outline-primary"  type="submit" className="ps-4 pe-4 fw-bold fw-bold" >Submit</Button> 
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