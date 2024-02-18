import React, { useEffect, useRef, useState } from "react";
import { Button, Card, Col, Container, Form, FormGroup, InputGroup, ProgressBar, Row, Stack, Toast, ToastContainer } from "react-bootstrap";
import "../assets/css/style.css";
import {useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {  faEye, faEyeSlash, faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { checkLogin } from "../Redux/Slice/treasurerActions";
// import API from "../Api"

export default function Login(){

    // react hooks
    const dispatch = useDispatch();
    const loginAuth = useSelector((state) => state.Treasurer.loginAuth); 
    const navigate = useNavigate();
    const intervalRef = useRef();

    // get localstorage data
    const checklogout = JSON.parse(localStorage.getItem('logout'))

    // use to store data in state
    const [formatted, setFormatted] = useState({
      erroradmin: false,
      error: false,
      errorToast: false
    });
    const [show, setShow] = useState(false);
    const [afterLogout, setafterLogout] = useState(false);
    const [progres, setProgres] = useState({ progres: 0 });
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
  
    // after submit
    const gotomanage = (e) => {
      e.preventDefault();
  
      const data = new FormData();
      data.append('username', username);
      data.append('password', password);
  
      dispatch(checkLogin(data));
    };
  
    // tis hook used to auto execute when ever the dependency trigger
    useEffect(() => {
      // if login success
      if (loginAuth && loginAuth.success) {
        setFormatted({ errorToast: true });
        // increse the progress bar value
        if (!intervalRef.current) {
          intervalRef.current = setInterval(() => {
            setProgres((prev) => ({ ...prev, progres: prev.progres + 1 }));
          }, 10);
        }
        // store the succes value in local storage
        localStorage.setItem("cerdentials", JSON.stringify(loginAuth.success));
      }
      // it show error in login
      if (loginAuth && loginAuth.error) {
        setFormatted({ errorToast: true });
      }
      // clear the interval 
      return () => clearInterval(intervalRef.current);
    }, [loginAuth]);
  

    useEffect(() => {
    // if true only go tonext page
      if (progres.progres >= 200) {
        clearInterval(intervalRef.current);
        navigate("/subscription");
      }
      
      if(checklogout){
        setafterLogout(true)
        setTimeout(()=>{
            localStorage.removeItem('logout')
            setafterLogout(false)
          },[2000])
      }
      

    }, [navigate, progres.progres]);
    
    return(
        <>
        {/*========== Login Form section  =============  */}

        <div id="bg-image">
            <Container>
                <Row className=" d-flex align-items-center vh-100">

                {/* Toast For An error or login success message to show user */}
                <ToastContainer  position="top-end" className="p-3 fadeInRight" style={{ zIndex: 1 }}>
                    <Toast show={formatted.errorToast} className={loginAuth && loginAuth.success ? "bg-success" : "bg-danger"} >
                        {loginAuth && loginAuth.success ? <ProgressBar style={{height:'6px'}} now={progres.progres} /> : null}
                        <Toast.Body className="d-flex justify-content-between text-white">{loginAuth && loginAuth.error ? loginAuth.error : "Login Succesfull"}<span  style={{cursor:'pointer'}} className="fw-bold" onClick={()=>setFormatted({errorToast:false})}><FontAwesomeIcon icon={faX}/></span></Toast.Body> 
                    </Toast>
                </ToastContainer>

                {/* Toast For An logout success message to show user */}
                <ToastContainer  position="top-end" className="p-3 fadeInRight" style={{ zIndex: 1 }}>
                    <Toast show={afterLogout} className={"bg-success"} >
                        <Toast.Body className="d-flex justify-content-between text-white">Logout Succesfull<span  style={{cursor:'pointer'}} className="fw-bold" onClick={()=>setafterLogout(false)}><FontAwesomeIcon icon={faX}/></span></Toast.Body> 
                    </Toast>
                </ToastContainer>

                    <Col lg={5} md={7} sm={12}  className="mx-auto">
                        <Card className="transparent shadow-lg ">
                            <Form className="text-center p-3" onSubmit={gotomanage}>
                                <Stack  gap={3}>
                                <h3 className="fw-bold">Tr<span className="text-decoration-underline">easurer Lo</span>gin</h3>
                                <div className="text-center">
                                    <img src={require("../assets/images/icon/icons8-treasury-64.png")} alt="user png" width={'100px'}/>
                                </div>
                                <FormGroup className="ps-5 pe-5 ">
                                    <Col>
                                        <Form.Control type="text" placeholder="Treasurer id" className="text-center  shadow-sm" onChange={(e)=>setUsername(e.target.value)} required/>
                                    </Col>
                                </FormGroup>
                                <FormGroup className="ps-5 pe-5 ">
                                    <Col >
                                        <InputGroup>
                                        <Form.Control type={show ? "text" : "password"} placeholder="Password" className="text-center ps-5 shadow-sm" onChange={(e)=>setPassword(e.target.value)} required/>
                                        <InputGroup.Text><FontAwesomeIcon icon={show ? faEyeSlash : faEye} onClick={()=>setShow(!show)}  style={{color:show ? 'blue' : 'grey',cursor:'pointer'}} title={show ? "Hide" : "Visible"} /></InputGroup.Text>
                                        </InputGroup>
                                    </Col>
                                </FormGroup>
                                <div>
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