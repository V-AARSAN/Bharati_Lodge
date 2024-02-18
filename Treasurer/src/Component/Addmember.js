import React, {  useState } from "react";
import { Button, Card, Col, Container, Form, FormGroup, InputGroup, Row, Stack } from "react-bootstrap";
import "../assets/css/style.css";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { postTheData } from "../Redux/Slice/treasurerSlice";
import { addMember } from "../Redux/Slice/treasurerActions";

export default function Addmember(){

    const dispatch = useDispatch();
    const locate = useLocation();

    const [inputs, setInputs] = useState({
        RGLSI_Id:`pqli${202}`
    });
     
    const[editshow, setEditshow] = useState( locate.state && locate.state.show || false)
    const handleChange = (event) => {
      const name = event.target.name;
      const value = event.target.value;
      setInputs(values => ({...values, [name]: value}))
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        setInputs({RGLSI_Id:`pqli${Math.floor(Math.random() * 900) + 100}` })
        dispatch(addMember(inputs))
    }


    const navigate = useNavigate()


    return(
        <>
        <div id="add-bg">
            <Container>
                <Row className=" d-flex align-items-center vh-100">
                    <Col lg={9} md={7} sm={12}  className="mx-auto">
                        <Card className="transparency shadow-lg p-3  ">
                            <Form className="text-center p-2" onSubmit={handleSubmit}>
                                <h3 className="fw-bold text-start pb-2">Add Member</h3>
                                <Stack gap={2} >
                                <Row>
                                    <Col lg={6} md={6} sm={12} className="mb-1">
                                    <FormGroup>
                                    <InputGroup>
                                        <InputGroup.Text style={{padding:'0px 4px'}}>Register No</InputGroup.Text>
                                        <Form.Control type="text" placeholder="Enter Register_No" name="Register_No" value={(inputs.Register_No || "") }   onChange={handleChange}  />
                                    </InputGroup>
                                    </FormGroup>
                                    </Col>
                                    <Col lg={6} md={6} sm={12}>
                                    <FormGroup>
                                        <InputGroup>
                                            <InputGroup.Text style={{padding:'0px 30px'}}>Title</InputGroup.Text>
                                            <Form.Control type="text" placeholder="Enter title" name="Title" value={inputs.Title || ""} onChange={handleChange}  />
                                        </InputGroup>
                                    </FormGroup>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col lg={6} md={6} sm={12} className="mb-1">
                                    <FormGroup>
                                    <InputGroup>
                                        <InputGroup.Text style={{padding:'0px 23px'}}>Name</InputGroup.Text>
                                        <Form.Control type="text" placeholder="Enter Member Name" name="Member_Name"  value={inputs.Member_Name || ""} onChange={handleChange}  />
                                    </InputGroup>
                                    </FormGroup>
                                    </Col>
                                    <Col lg={6} md={6} sm={12}>
                                    <FormGroup>
                                        <InputGroup>
                                            <InputGroup.Text style={{padding:'0px 28px'}}>DOB</InputGroup.Text>
                                            <Form.Control type="date" placeholder="Enter DOB" name="DOB" value={inputs.DOB || ""} onChange={handleChange}  />
                                        </InputGroup>
                                    </FormGroup>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col lg={6} md={6} sm={12} className="mb-1">
                                    <FormGroup>
                                    <InputGroup>
                                        <InputGroup.Text style={{padding:'0px 23px'}}>Sts_Dt</InputGroup.Text>
                                        <Form.Control type="date" placeholder="Enter Sts_Dt" name="Sts_Dt" value={inputs.Sts_Dt || ""} onChange={handleChange} />
                                    </InputGroup>
                                    </FormGroup>
                                    </Col>
                                    <Col lg={6} md={6} sm={12}>
                                    <FormGroup>
                                        <InputGroup>
                                            <InputGroup.Text style={{padding:'0px 15px'}}>Sts_Type</InputGroup.Text>
                                            <Form.Control type="text" placeholder="Enter Sts_Type" name="Sts_Type" value={inputs.Sts_Type || ""} onChange={handleChange} />
                                        </InputGroup>
                                    </FormGroup>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col lg={6} md={6} sm={12} className="mb-1">
                                    <FormGroup>
                                    <InputGroup>
                                        <InputGroup.Text style={{padding:'0px 20px'}}>Master</InputGroup.Text>
                                        <Form.Control type="text" placeholder="Enter Master" name="Master" value={inputs.Master || ""}  onChange={handleChange} />
                                    </InputGroup>
                                    </FormGroup>
                                    </Col>
                                    <Col lg={6} md={6} sm={12}>
                                    <FormGroup>
                                        <InputGroup>
                                            <InputGroup.Text style={{padding:'0px 10px'}}>R_G_Rank</InputGroup.Text>
                                            <Form.Control type="text" placeholder="Enter R_G_Rank" name="R_G_Rank" value={inputs.R_G_Rank || ""} onChange={handleChange}  />
                                        </InputGroup>
                                    </FormGroup>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col lg={6} md={6} sm={12} className="mb-1">
                                    <FormGroup>
                                    <InputGroup>
                                        <InputGroup.Text style={{padding:'0px 18px'}}>G_Rank</InputGroup.Text>
                                        <Form.Control type="text" placeholder="Enter G_Rank" name="G_rank" value={inputs.G_rank || ""} onChange={handleChange} />
                                    </InputGroup>
                                    </FormGroup>
                                    </Col>
                                    <Col lg={6} md={6} sm={12}>
                                    <FormGroup>
                                        <InputGroup>
                                            <InputGroup.Text style={{padding:'0px 20px'}}>Mobile</InputGroup.Text>
                                            <Form.Control type="text" placeholder="Enter Mobile" name="Mobile" value={inputs.Mobile || ""} onChange={handleChange} />
                                        </InputGroup>
                                    </FormGroup>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col lg={6} md={6} sm={12} className="mb-1">
                                    <FormGroup>
                                    <InputGroup>
                                        <InputGroup.Text style={{padding:'0px 26px'}}>Email</InputGroup.Text>
                                        <Form.Control type="text" placeholder="Enter Email" name="Email" value={inputs.Email || ""} onChange={handleChange} />
                                    </InputGroup>
                                    </FormGroup>
                                    </Col>
                                    <Col lg={6} md={6} sm={12}>
                                    <FormGroup>
                                    <InputGroup>
                                        <InputGroup.Text style={{padding:'0px 18px'}}>Degree</InputGroup.Text>
                                        <Form.Control type="text" placeholder="Enter Degree" name="Degree" value={inputs.Degree || ""} onChange={handleChange} />
                                    </InputGroup>
                                    </FormGroup>
                                    </Col>
                                </Row>
                                <FormGroup>
                                    <InputGroup>
                                        <InputGroup.Text style={{padding:'0px 16px'}}>Address</InputGroup.Text>
                                        <Form.Control type="text" placeholder="Enter Address" name="Address" value={inputs.Address || ""} onChange={handleChange}  />
                                    </InputGroup>
                                </FormGroup>
                                <Row>
                                    <Col lg={6} md={6} sm={12} className="mb-1">
                                    <FormGroup>
                                    <InputGroup>
                                        <InputGroup.Text style={{padding:'0px 26px'}}>Username</InputGroup.Text>
                                        <Form.Control type="text" placeholder="Enter Username" name="Username" value={inputs.Username || ""} onChange={handleChange} />
                                    </InputGroup>
                                    </FormGroup>
                                    </Col>
                                    <Col lg={6} md={6} sm={12}>
                                    <FormGroup>
                                    <InputGroup>
                                        <InputGroup.Text style={{padding:'0px 18px'}}>Password</InputGroup.Text>
                                        <Form.Control type="text" placeholder="Enter Password" name="Password" value={inputs.Password || ""} onChange={handleChange} />
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