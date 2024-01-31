import React, { useEffect, useState } from "react";
import { Button, Card, Col, Container, Form, FormGroup, ProgressBar, Row, Stack, Toast, ToastContainer } from "react-bootstrap";
import "../assets/css/style.css";
import {useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {  faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { checkLogin } from "../Redux/Slice/treasurerActions";
// import API from "../Api"

export default function Login(){

    //declaring a conditions 
    const[formatted,setFormatted] = useState({
        erroradmin:false,
        error:false,
        errorToast:true,
        errorToastLogout:false
    })

    const {loginAuth} = useSelector((state)=>state.Treasurer)

    //Declaring to hold data
    const[progres,setProgres] = useState({progres : 0});
    const[username,setUsername] = useState();
    const[password,setPassword] = useState();
    
    //Use navigate to another component
    const navigate = useNavigate();
    const dispatch = useDispatch()
    
    //Handle loging form submission
    const gotomanage =(e)=>{
        e.preventDefault();

       if(loginAuth && loginAuth.error){
        setFormatted({errorToast:true})
       }
       const data = new FormData()
         data.append('username',username)
         data.append('password',password)
 
         // const data = {
         //     username : username,
         //     password :password
         // }
         dispatch(checkLogin(data))
     
    }
   
//    if(loginAuth.success == true){
//         setInterval(()=>{
//             setFormatted((prev)=>({progres: prev.progres + 1}))
//         },[1000])
//    }

    useEffect(()=>{
        if (loginAuth && loginAuth.success) {
            setFormatted({errorToast:true})
            setInterval(()=>{
                setProgres((prev) => ({ ...prev, progres: prev.progres + 1 }));
            },[3])
            localStorage.setItem("cerdentials",JSON.stringify(loginAuth.success))
            setTimeout(()=>{
                navigate("/subscription")
            //Store the data in localstorage to maintain athentication on component after logout
            },[1000])
        }

    },[checkLogin,loginAuth])
    
    console.log(formatted.progres);
    return(
        <>
        {/*========== Login Form section  =============  */}

        <div id="bg-image">
            <Container>
                <Row className=" d-flex align-items-center vh-100">

                {/* Toast For An error message to show user */}
                <ToastContainer  position="top-end" className="p-3 fadeInRight" style={{ zIndex: 1 }}>
                    <Toast show={formatted.errorToast} className={loginAuth && loginAuth.success ? "bg-success" : "bg-danger"} >
                        {loginAuth && loginAuth.success ? <ProgressBar style={{height:'6px'}} now={progres.progres} /> : null}
                        <Toast.Body className="d-flex justify-content-between text-white">{loginAuth && loginAuth.error ? loginAuth.error : "Login Succesfull"}<span  style={{cursor:'pointer'}} className="fw-bold" onClick={()=>setFormatted({errorToast:false})}><FontAwesomeIcon icon={faX}/></span></Toast.Body> 
                    </Toast>
                </ToastContainer>
{/*              
                <ToastContainer  position="top-end" className="p-3 fadeInRight" style={{ zIndex: 1 }}>
                    <Toast show={formatted.errorToastLogout} className={"bg-success"} >
                        <Toast.Body className="d-flex justify-content-between text-white">Logout Succesfull<span  style={{cursor:'pointer'}} className="fw-bold" onClick={()=>setFormatted({errorToastLogout:false})}><FontAwesomeIcon icon={faX}/></span></Toast.Body> 
                    </Toast>
                </ToastContainer> */}


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
                                        <Form.Control type="text" placeholder="Treasurer id" className="text-center  shadow-sm" onChange={(e)=>setUsername(e.target.value)} required/>
                                    </Col>
                                </FormGroup>

                                {/* if treasurer id is invalid */}
                                <FormGroup className="ps-5 pe-5 ">
                                <Col >
                                        <Form.Control type="password" placeholder="Password" className="text-center shadow-sm" onChange={(e)=>setPassword(e.target.value)} required/>
                                    </Col>
                                </FormGroup>

                                {/* if treasurer password is invalid */}
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