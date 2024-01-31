import React, { useEffect, useState } from "react";
import { Button, Col, Container, Dropdown, Form, InputGroup, Modal, Nav, Row, Table } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faEdit,faRightFromBracket, faSearch } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import "../assets/css/style.css";
import { useDispatch, useSelector } from "react-redux";
import { deletethedata } from "../Redux/Slice/treasurerSlice";
import { getMasterDegree, treasurerCredntialsc } from "../Redux/Slice/treasurerActions";
import Logout from "./Logout";

export default function Manage() {

  const navigate = useNavigate();
  const checkCredentials = JSON.parse(localStorage.getItem("cerdentials"))
  const {treasurerState} = useSelector((state)=>state.Treasurer);
  const dispatch = useDispatch();

  const [formated, setFormated] = useState({ 
    show: false, 
    collapse: false ,
    credentials : [],

  });

  const handleModalToggle = () => setFormated({ ...formated, show: !formated.show });

  const dummyDataArray = [
    {
      "Reg_No": 21092,
      "RGLSI": "pqli.102",
      "Title": "Comp",
      "Member_Name": "Ajay Virmani",
      "DOB": "02-09-1955",
      "Sts_Dt": "09/08/2005",
      "Sts_Type": "Ex",
      "Master": "P.PRES.COM",
      "R_G_Rank": "P.II.R.GR./20145",
      "GRank": "P.PRES.COM",
      "Mobile": 8978798900,
      "Email": "ajay@gmail.com",
      "Address": "20, Baja Nagaer"
    },
    {
      "Reg_No": 12345,
      "RGLSI": "pqli.456",
      "Title": "Engineer",
      "Member_Name": "John Doe",
      "DOB": "05-15-1980",
      "Sts_Dt": "01/20/2010",
      "Sts_Type":"Active",
      "Master":"Sr. Engineer",
      "R_G_Rank":  "P.II.R.GR./54321",
      "GRank": "Sr. Engineer",
      "Mobile": 9876543210,
      "Email": "john.doe@example.com",
      "Address": "123 Main Street"
    },
    {
      "Reg_No": 56789,
      "RGLSI": "pqli.789",
      "Title": "Manager",
      "Member_Name": "Jane Smith",
      "DOB": "08-20-1975",
      "Sts_Dt": "03/15/2008",
      "Sts_Type": "Active",
      "Master": "General Manager",
      "R_G_Rank": "P.II.R.GR./98765",
      "GRank": "General Manager",
      "Mobile": 8765432109,
      "Email": "jane.smith@example.com",
      "Address": "456 Oak Avenue"
    },
    {
      "Reg_No": 98765,
      "RGLSI": "pqli.987",
      "Title": "Analyst",
      "Member_Name": "Alice Johnson",
      "DOB": "12-10-1992",
      "Sts_Dt": "05/25/2015",
      "Sts_Type": "Active",
      "Master": "Senior Analyst",
      "R_G_Rank": "P.II.R.GR./87654",
      "GRank": "Senior Analyst",
      "Mobile": 7654321098,
      "Email": "alice.johnson@example.com",
      "Address": "789 Maple Street"
    },
    {
      "Reg_No": 65432,
      "RGLSI": "pqli.654",
      "Title": "Designer",
      "Member_Name": "Bob Williams",
      "DOB": "03-05-1988",
      "Sts_Dt": "09/12/2012",
      "Sts_Type": "Active",
      "Master": "Lead Designer",
      "R_G_Rank": "P.II.R.GR./54321",
      "GRank": "Lead Designer",
      "Mobile": 6543210987,
      "Email": "bob.williams@example.com",
      "Address": "987 Pine Avenue"
    },
    {
      "Reg_No": 54321,
      "RGLSI": "pqli.543",
      "Title": "Salesperson",
      "Member_Name": "Sara Davis",
      "DOB": "06-18-1977",
      "Sts_Dt":  "07/30/2011",
      "Sts_Type":"Active",
      "Master": "Sales Manager",
      "R_G_Rank": "P.II.R.GR./87654",
      "GRank": "Sales Manager",
      "Mobile": 5432109876,
      "Email": "sara.davis@example.com",
      "Address": "654 Cedar Street"
    },
    {
      "Reg_No": 87654,
      "RGLSI": "pqli.876",
      "Title": "Technician",
      "Member_Name": "Mike Brown",
      "DOB": "09-28-1985",
      "Sts_Dt": "02/15/2013",
      "Sts_Type": "Active",
      "Master":  "Lead Technician",
      "R_G_Rank":"P.II.R.GR./76543",
      "GRank": "Lead Technician",
      "Mobile": 4321098765,
      "Email": "mike.brown@example.com",
      "Address": "876 Birch Avenue"
    },
    {
      "Reg_No": 13579,
      "RGLSI": "pqli.135",
      "Title": "Administrator",
      "Member_Name": "Emily Wilson",
      "DOB": "04-12-1990",
      "Sts_Dt": "11/05/2016" ,
      "Sts_Type":"Active",
      "Master": "System Administrator",
      "R_G_Rank": "P.II.R.GR./24680",
      "GRank": "System Administrator",
      "Mobile": 9876543210,
      "Email": "emily.wilson@example.com",
      "Address": "246 Willow Street"
    },
    // Add 2 more objects with similar structure and different values
    // ...
  ];

  // const handleLogout = (e) =>{
  //   e.preventDefault();
  //   localStorage.removeItem("cerdentials")
  //   navigate("/",{replace:true})
  //   dispatch(deletethedata())
  // }

  const logout = (data) =>{
    setFormated({show:data})

  }

  useEffect(()=>{
    if(!checkCredentials){
      navigate('/')
    }else{
      // navigate('/')
    }
    dispatch(treasurerCredntialsc())
    dispatch(getMasterDegree())
  },[])

  return (
    <>
      <div className="vh-100" id="manage-bg" >
        
        {/* Header */}
        <Row className="g-0 bg-success py-1">
          <Col lg={4} md={4} sm={12}>
            <h1 className="px-3 text-white">Bharati Lodge</h1>
          </Col>
          <Col Col lg={8} md={8} sm={12} className="d-flex justify-content-end px-3 pt-2">
            <Nav variant="tabs" className="tabs">
              {[
                { path: "/subscription", icon: "fa-user-tie", text: "Subscription Modal",textcolor:"text-white" },
                { path: "/manage", icon: "fa-people-roof", text: "Manage Members" },
                { path: "/master", icon: "fa-user-tag", text: "Degree Master",textcolor:"text-white" },
              ].map((item, index) => (
                <Nav.Item key={index}>
                  <Nav.Link className={`${item.textcolor} fw-bold ${item.path === "/manage" ? "active" : ""}`} onClick={() => navigate(item.path)}>
                    <i className={`fa-solid ${item.icon}`}></i> <span className="">{item.text}</span>
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
          <Container fluid className="py-3">
            <h3 className="text-center text-dark fw-bold">Manage Members</h3>
            <Row>
              <Col lg={3} md={3} xs={8} sm={3} className="my-2">
                <InputGroup className="">
                  <InputGroup.Text id="basic-addon1">
                  <FontAwesomeIcon icon={faSearch} />
                  </InputGroup.Text>
                  <Form.Control type="text" placeholder="Search"  className=""/>
                </InputGroup>
              </Col>
              <Col lg={9} md={9} sm={9} className="my-2 text-end">
                <Button variant="primary" onClick={() => navigate('/add')} className=" text-nowrap">Add Member</Button>
              </Col>
            </Row>
            <div className="table-container overflow-auto" style={{ height: '400px'}}  >
              <Table  striped hover  className="text-center mb-0 shadow text-nowrap"   >
                <thead className="table-info  position-sticky top-0">
                  <tr className="">
                    {[
                      "SI.NO", "Reg_No", "RGLSI Id", "Title", "Member_Name", "DOB", "Sts_Dt.", "Sts_Type", "Master",
                      "R_G_Rank", "GRank", "Mobile", "Email", "Address", "Action"
                    ].map((item, index) => (
                      <th key={index}>{item}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {dummyDataArray.map((data,index) => (
                    <tr key={index}>
                      <td>{index + 1}</td>
                        <td>{data?.Reg_No}</td>
                        <td>{data?.RGLSI}</td>
                        <td>{data?.Title}</td>
                        <td>{data?.Member_Name}</td>
                        <td>{data?.DOB}</td>
                        <td>{data?.Sts_Dt}</td>
                        <td>{data?.Sts_Type}</td>
                        <td>{data?.Master}</td>
                        <td>{data?.R_G_Rank}</td>
                        <td>{data?.GRank}</td>
                        <td>{data?.Mobile}</td>
                        <td>{data?.Email}</td>
                        <td>{data?.Address}</td>
                        <td>{[
                          {name:"Edit",icon:faEdit,color:"outline-primary"},
                          {name:"Delete",icon:faTrash,color:"outline-danger"}].map((data)=>(
                          <Button key={index} variant={data.color} className="mx-2 rounded-circle"><FontAwesomeIcon icon={data.icon}/>{data.name}</Button>
                        ))}</td>
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
