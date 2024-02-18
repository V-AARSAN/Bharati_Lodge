import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { deletethedata } from '../Redux/Slice/treasurerSlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';

export default function Logout({key,logout}) {

  const [formated, setFormated] = useState({ 
      show: true 
  });

  const {treasurerState} = useSelector((state)=>state.Treasurer);
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const handleLogout = (e) =>{
    e.preventDefault();
    localStorage.removeItem("cerdentials")
    navigate("/",{replace:true})
    dispatch(deletethedata())
    localStorage.setItem('logout',true)
  }

 
  return (
    <>
    <Modal key={key} show={formated.show} onHide={()=>logout(false)} backdrop="static" keyboard={false} centered>
        <Modal.Header closeButton>
            <Modal.Title>Treasurer</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <p><span className="fw-bold pe-2 fs-5">Username :</span> {treasurerState && treasurerState.username}</p>
            <div className="fs-5 ">
                <form>
                <label className="form-label fw-bold pe-2" id='password'>Password :</label>
                <input type="password" className="border-0" name='password' style={{outlineColor:'white'}} defaultValue={treasurerState && treasurerState.password} />
                </form>
            </div>
        </Modal.Body>
        <Modal.Footer>
        <Button variant="outline-danger" onClick={handleLogout}>Logout <FontAwesomeIcon icon={faRightFromBracket} /></Button>                </Modal.Footer>
    </Modal>
    </>
  )
}
