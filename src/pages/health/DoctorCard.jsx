import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { BsChatLeftDotsFill,BsFillPersonFill, BsCalendarDay } from "react-icons/bs";
import NewChat from '../messages/NewChat';
import { useAuth } from '../../hooks/useAuth';
import useData from '../../hooks/useData';
import NewDonate from '../donates/NewDonate';
import moment from 'moment';



const DoctorCard = ({d, setAppoint}) => {
    const navigate = useNavigate()
    const { user } = useAuth()
    const { doctors, users, donates } = useData()
    const isDoc = user.uid === doctors?.find(l =>l.userId === user.uid)
    // console.log('isDoc', isDoc)

    const [donate, setDonate] = useState(false)
    const [open, setOpen] = useState(null)

    const mujaheed = donates?.find(d => d?.user_id === user.uid)   
    const a = new Date().getTime()
    const today = moment(a).format('MMM Do YY, LT')
    const expire = moment(mujaheed?.expiredAt).format('MMM Do YY, LT')
    const valid = expire > today

    const handelNew = (d) => {
        if(!valid){
            setDonate(d)
        }else{
            setOpen(d)
        }
    }


    

  return (
    <div className="doc_card" key={d.id}>
        {donate && <NewDonate setDonate={setDonate} item={donate}/>}
        {open && <NewChat setOpen={setOpen} myId={user.uid} item={open}/>} 
        <img src={d.photo} />
        <div className="doc_card_details">
            <div className="doc_info">
                <h4>{d.name}</h4>
                {d.specialize}  
            </div>
            <div className="meetings_actions">                    
                <button className='btn' onClick={() =>setAppoint(d)}><BsCalendarDay/></button>
                <button className='btn' onClick={() =>navigate(`/health/doctors/${d.id}`)}><BsFillPersonFill/></button>
                {!isDoc && 
                // <NewChat item={d} myId={user.uid}/> 
                <button className='btn_btn' onClick={() =>handelNew(d)}><BsChatLeftDotsFill/></button> 
                }       
            </div>
            
        </div>
    </div> 
  )
}

export default DoctorCard
