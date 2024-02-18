import React, { useEffect, useRef, useState } from "react";
import { Button, Card, Col, Container,  Dropdown,  Form, FormGroup, InputGroup,  Nav, Row, Stack, Table } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faEdit, faSearch, faDownLeftAndUpRightToCenter, faFileDownload } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import "../assets/css/style.css";
import { useDispatch, useSelector } from "react-redux";
import { deleteMember, getMasterDegree, getMember, treasurerCredntialsc, updateMember } from "../Redux/Slice/treasurerActions";
import Logout from "./Logout";
import { selectTheMember } from "../Redux/Slice/treasurerSlice";
import html2canvas from 'html2canvas';
import jspdf from 'jspdf';

export default function Manage() {

  const navigate = useNavigate();
  const checkCredentials = JSON.parse(localStorage.getItem("cerdentials"))
  const {memberState,selectMember} = useSelector((state)=>state.Treasurer);
  const dispatch = useDispatch();
  const pdfRef = useRef();

  const [formated, setFormated] = useState({ 
    show: false, 
    memberShow: true, 
    editShow: false
  });

  const[collapse, setCollapse] = useState(true)
  const[search,setSearch] = useState()
  const[id,setId] = useState()
  const[title,setTitle] = useState()
  const[register_no,setRegister_No] = useState()
  const[rglsi_id,setRglsi_Id] = useState()
  const[member_name,setMember_Name] = useState()
  const[dob,setDOB] = useState()
  const[sts_dt,setSts_Dt] = useState()
  const[sts_type,setSts_Type] = useState()
  const[master,setMaster] = useState()
  const[r_g_rank,setR_G_Rank] = useState()
  const[g_rank,setG_Rank] = useState()
  const[mobile,setMobile] = useState('')
  const[email,setEmail] = useState()
  const[degree,setDegree] = useState()
  const[address,setAddress] = useState()
  const[username,setUsername] = useState()
  const[password,setPassword] = useState()

  const logout = (data) =>{
    setFormated({show:data})

  }

  const handleEdit = (id) =>{
    dispatch(selectTheMember(id))
    setFormated({
      editShow:true,
      memberShow:false
    })    
  }
  
  const handleSubmit = (e) =>{
    e.preventDefault()
    const data = {
      id : id,
      Register_No : register_no,
      RGLSI_Id : rglsi_id,
      Title : title,
      Member_Name : member_name,
      DOB : dob,
      Degree : degree,
      Sts_Dt : sts_dt,
      Sts_Type : sts_type,
      Master : master,
      R_G_Rank : r_g_rank,
      G_rank : g_rank,
      Mobile : mobile,
      Email : email,
      Address : address,
      Username : username,
      Password : password
    }

    dispatch(updateMember(data))
    setFormated({
      memberShow:true,
      editShow:false
    })

  }

  const handleDelete = (id) =>{
    const data = new FormData() 
    data.append("id",id)
    dispatch(deleteMember(data))
  }


  useEffect(()=>{
    if(!checkCredentials){
      navigate('/')
    }
    if(Object.keys(selectMember).length !== 0){
        setId(selectMember.id)
        setTitle(selectMember.title)
        setRegister_No(selectMember.register_no)
        setRglsi_Id(selectMember.rglsi_id)
        setMember_Name(selectMember.member_name)
        setDOB(selectMember.dob)
        setSts_Dt(selectMember.sts_dt)
        setSts_Type(selectMember.sts_type)
        setMaster(selectMember.master)
        setR_G_Rank(selectMember.r_g_rank)
        setG_Rank(selectMember.g_rank)
        setMobile(selectMember.mobile)
        setEmail(selectMember.email)
        setDegree(selectMember.degree)
        setAddress(selectMember.address)
        setUsername(selectMember.username)
        setPassword(selectMember.password)
      }
    dispatch(treasurerCredntialsc())
    dispatch(getMember())
  },[checkCredentials,getMember,selectMember])

  const filterDegree = (data) =>{
    if (data == "All"){
      setSearch('')
    }else{
      setSearch(data)
    }
  }

  const serchItem = new RegExp(search,'gi')
  const checkIsArray = Array.isArray(memberState) ? memberState : [];
  const filteredMember = checkIsArray.filter((data) =>
  serchItem.test(data.member_name)  || serchItem.test(data.degree) 
  );

  const downloadPdf = () =>{
    setCollapse(false)
    setTimeout(()=>{
      const input = pdfRef.current;
      html2canvas(input).then((canvas)=>{
        const imgData = canvas.toDataURL('image/png')
        const pdf = new jspdf('p', 'mm', 'a4', true)
        const pdfWidth = pdf.internal.pageSize.getWidth()
        const pdfHeight = pdf.internal.pageSize.getHeight()
        const imgWidth = canvas.width;
        const imgHeight = canvas.height;
        const ratio = Math.min(pdfWidth / imgWidth,pdfHeight/imgHeight)
        const imgX = (pdfWidth - imgWidth * ratio) / 2;
        const imgY = 30
        pdf.addImage(imgData,'PNG',imgX,imgY, imgWidth * ratio , imgHeight *ratio)
        pdf.save('memberList.pdf')
      })
    },100)
    setTimeout(()=>{
      setCollapse(true)
    },1000)
  }


  return (
    <>
      <div className="vh-100" id="manage-bg" >
        
      {formated.memberShow && 
      <>
        {/* Header */}
      <Row className="g-0 bg-success py-1">
          <Col lg={4} md={4} sm={12}>
            <h1 className="px-3 text-white">Bharati Lodge</h1>
            
          </Col>
          <Col Col lg={8} md={8} sm={12} className="d-flex justify-content-end px-2 pt-2">
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
              <Col lg={5} md={53} xs={5} sm={5} className="my-2 d-flex">
                <InputGroup className="">
                  <InputGroup.Text id="basic-addon1">
                  <FontAwesomeIcon icon={faSearch} />
                  </InputGroup.Text>
                  <Form.Control type="text" placeholder="Search"  className="" onChange={(e)=>setSearch(e.target.value)}/>
                </InputGroup>
                <Button className="text-nowrap mx-3 rounded" variant="success" onClick={downloadPdf}>Download Pdf <FontAwesomeIcon icon={faFileDownload} className="fs-5 px-1"/></Button>
              </Col>
              <Col lg={7} md={7} sm={7} className="my-2 text-end d-flex justify-content-end">
              <Dropdown className="mx-2">
                  <Dropdown.Toggle variant="info">Degree</Dropdown.Toggle>
                  <Dropdown.Menu>
                    {["All","Craft", "Chapter","Mark", "RAM" , "Conclave"].map((data,index)=>(
                        <Dropdown.Item key={index} onClick={()=>filterDegree(data)}>{data}</Dropdown.Item>
                    ))}
                  </Dropdown.Menu>
                </Dropdown>
                <Button variant="primary" onClick={() => navigate('/add')} className=" text-nowrap">Add Member</Button>
              </Col>
            </Row>
            <div className="table-container overflow-auto" style={{ maxHeight: '400px'}}  >
              <Table  striped hover  className="text-center mb-0 shadow text-nowrap" ref={pdfRef}  >
                <thead className="table-info  position-sticky top-0">
                  <tr className="">
                    {[
                      "SI.NO", collapse && "Action", "Reg_No", "RGLSI Id", "Title", "Member_Name", "DOB", "Sts_Dt.", "Sts_Type", "Master", "Degree",
                      "R_G_Rank", "GRank", "Mobile", "Email", "Address"
                    ].map((item, index) => (
                      <th key={index}>{item}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {filteredMember.map((data,index) => (
                    <tr key={data.id}>
                      <td>{index + 1}</td>
                      <td>{[
                          {name:"Edit",icon:faEdit,color:"outline-primary",event:handleEdit},
                          {name:"Delete",icon:faTrash,color:"outline-danger",event:handleDelete}].map((handler,index)=>(
                          collapse && <Button key={`${index}_${handler.name}`} variant={handler.color} className="mx-2 rounded-circle" onClick={()=>handler.event(data.id)}><FontAwesomeIcon icon={handler.icon}/></Button>
                          ))}</td>
                      <td>{data?.register_no}</td>
                      <td>{data?.rglsi_id}</td>
                      <td>{data?.title}</td>
                      <td>{data?.member_name}</td>
                      <td>{data?.dob}</td>
                      <td>{data?.sts_dt}</td>
                      <td>{data?.sts_type}</td>
                      <td>{data?.master}</td>
                      <td>{data?.degree}</td>
                      <td>{data?.r_g_rank}</td>
                      <td>{data?.g_rank}</td>
                      <td>{data?.mobile}</td>
                      <td>{data?.email}</td>
                      <td>{data?.address}</td>
                       
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
          </Container> 
        </>
        }
        {formated.editShow && 
          <Container>
          <Row className=" d-flex align-items-center vh-100">
              <Col lg={9} md={7} sm={12}  className="mx-auto">
                  <Card className="transparency shadow-lg p-3  ">
                      <Form className="text-center p-2" onSubmit={handleSubmit}>
                          <h3 className="fw-bold text-start pb-2">Update Details</h3>
                          <Stack gap={2} >
                          <Row>
                              <Col lg={6} md={6} sm={12} className="mb-1">
                              <FormGroup>
                              <InputGroup>
                                  <InputGroup.Text style={{padding:'0px 4px'}}>Register No</InputGroup.Text>
                                  <Form.Control type="text" placeholder="Enter Register_No" name="Register_No" value={register_no} onChange={(e)=>setRegister_No(e.target.value)}    />
                              </InputGroup>
                              </FormGroup>
                              </Col>
                              <Col lg={6} md={6} sm={12}>
                              <FormGroup>
                                  <InputGroup>
                                      <InputGroup.Text style={{padding:'0px 30px'}}>Title</InputGroup.Text>
                                      <Form.Control type="text" placeholder="Enter title" name="Title" value={title}  onChange={(e)=>setTitle(e.target.value)}/>
                                  </InputGroup>
                              </FormGroup>
                              </Col>
                          </Row>
                          <Row>
                              <Col lg={6} md={6} sm={12} className="mb-1">
                              <FormGroup>
                              <InputGroup>
                                  <InputGroup.Text style={{padding:'0px 23px'}}>Name</InputGroup.Text>
                                  <Form.Control type="text" placeholder="Enter Member Name" name="Member_Name"  value={member_name}  onChange={(e)=>setMember_Name(e.target.value)}  />
                              </InputGroup>
                              </FormGroup>
                              </Col>
                              <Col lg={6} md={6} sm={12}>
                              <FormGroup>
                                  <InputGroup>
                                      <InputGroup.Text style={{padding:'0px 28px'}}>DOB</InputGroup.Text>
                                      <Form.Control type="date" placeholder="Enter DOB" name="DOB" value={dob }  onChange={(e)=>setDOB(e.target.value)}/>
                                  </InputGroup>
                              </FormGroup>
                              </Col>
                          </Row>
                          <Row>
                              <Col lg={6} md={6} sm={12} className="mb-1">
                              <FormGroup>
                              <InputGroup>
                                  <InputGroup.Text style={{padding:'0px 23px'}}>Sts_Dt</InputGroup.Text>
                                  <Form.Control type="date" placeholder="Enter Sts_Dt" name="Sts_Dt" value={sts_dt}  onChange={(e)=>setSts_Dt(e.target.value)}/>
                              </InputGroup>
                              </FormGroup>
                              </Col>
                              <Col lg={6} md={6} sm={12}>
                              <FormGroup>
                                  <InputGroup>
                                      <InputGroup.Text style={{padding:'0px 15px'}}>Sts_Type</InputGroup.Text>
                                      <Form.Control type="text" placeholder="Enter Sts_Type" name="Sts_Type" value={sts_type}  onChange={(e)=>setSts_Type(e.target.value)} />
                                  </InputGroup>
                              </FormGroup>
                              </Col>
                          </Row>
                          <Row>
                              <Col lg={6} md={6} sm={12} className="mb-1">
                              <FormGroup>
                              <InputGroup>
                                  <InputGroup.Text style={{padding:'0px 20px'}}>Master</InputGroup.Text>
                                  <Form.Control type="text" placeholder="Enter Master" name="Master" value={master}   onChange={(e)=>setMaster(e.target.value)} />
                              </InputGroup>
                              </FormGroup>
                              </Col>
                              <Col lg={6} md={6} sm={12}>
                              <FormGroup>
                                  <InputGroup>
                                      <InputGroup.Text style={{padding:'0px 10px'}}>R_G_Rank</InputGroup.Text>
                                      <Form.Control type="text" placeholder="Enter R_G_Rank" name="R_G_Rank" value={r_g_rank}  onChange={(e)=>setR_G_Rank(e.target.value)} />
                                  </InputGroup>
                              </FormGroup>
                              </Col>
                          </Row>
                          <Row>
                              <Col lg={6} md={6} sm={12} className="mb-1">
                              <FormGroup>
                              <InputGroup>
                                  <InputGroup.Text style={{padding:'0px 18px'}}>G_Rank</InputGroup.Text>
                                  <Form.Control type="text" placeholder="Enter G_Rank" name="G_rank" value={g_rank}  onChange={(e)=>setG_Rank(e.target.value)}/>
                              </InputGroup>
                              </FormGroup>
                              </Col>
                              <Col lg={6} md={6} sm={12}>
                              <FormGroup>
                                  <InputGroup>
                                      <InputGroup.Text style={{padding:'0px 20px'}}>Mobile</InputGroup.Text>
                                      <Form.Control type="text" placeholder="Enter Mobile" name="Mobile" value={mobile} onChange={(e)=>setMobile(e.target.value)}/>
                                  </InputGroup>
                              </FormGroup>
                              </Col>
                          </Row>
                          <Row>
                              <Col lg={6} md={6} sm={12} className="mb-1">
                              <FormGroup>
                              <InputGroup>
                                  <InputGroup.Text style={{padding:'0px 26px'}}>Email</InputGroup.Text>
                                  <Form.Control type="text" placeholder="Enter Email" name="Email" value={email}  onChange={(e)=>setEmail(e.target.value)}/>
                              </InputGroup>
                              </FormGroup>
                              </Col>
                              <Col lg={6} md={6} sm={12}>
                              <FormGroup>
                              <InputGroup>
                                  <InputGroup.Text style={{padding:'0px 18px'}}>Degree</InputGroup.Text>
                                  <Form.Control type="text" placeholder="Enter Degree" name="Degree" value={degree}  onChange={(e)=>setDegree(e.target.value)} />
                              </InputGroup>
                              </FormGroup>
                              </Col>
                          </Row>
                          <FormGroup>
                              <InputGroup>
                                  <InputGroup.Text style={{padding:'0px 16px'}}>Address</InputGroup.Text>
                                  <Form.Control type="text" placeholder="Enter Address" name="Address" value={address}  onChange={(e)=>setAddress(e.target.value)} />
                              </InputGroup>
                          </FormGroup>
                          <Row>
                              <Col lg={6} md={6} sm={12} className="mb-1">
                              <FormGroup>
                              <InputGroup>
                                  <InputGroup.Text style={{padding:'0px 26px'}}>Username</InputGroup.Text>
                                  <Form.Control type="text" placeholder="Enter Username" name="Username" value={username} onChange={(e)=>setUsername(e.target.value)}/>
                              </InputGroup>
                              </FormGroup>
                              </Col>
                              <Col lg={6} md={6} sm={12}>
                              <FormGroup>
                              <InputGroup>
                                  <InputGroup.Text style={{padding:'0px 18px'}}>Password</InputGroup.Text>
                                  <Form.Control type="text" placeholder="Enter Password" name="Password" value={password}  onChange={(e)=>setPassword(e.target.value)}/>
                              </InputGroup>
                              </FormGroup>
                              </Col>
                          </Row>
                          <div className="text-end">
                              <Button variant="outline-danger mx-2"  className="ps-4 pe-4 " onClick={()=>setFormated({editShow:false,memberShow:true})} >Close</Button> 
                              <Button variant="outline-primary"  type="submit" className="ps-4 pe-4 " >Submit</Button> 
                          </div>
                          </Stack>
                      </Form>
                  </Card>
              </Col>
          </Row>
      </Container>}
      </div>  
    </>
  );
}
