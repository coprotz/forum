import React from 'react'
import './madas.css'
import img1 from '../../assets/images/img3.jpg'
import { useNavigate } from 'react-router-dom'
import {  BsArrowLeft } from "react-icons/bs";
import Remarks from '../../components/remarks/Remarks';
import Search from '../../components/search/Search'
import { motion } from 'framer-motion';
import { BsChatLeftDotsFill,BsFillPersonFill } from "react-icons/bs";
import CreateMada from './CreateMada';

const Madas = () => {
    const navigate = useNavigate();
  return (
    <div className='madas'>            
        <div className="top_madas_wrapper">
            {/* <div className="meeting_top">            
                <button onClick={() => navigate(-1)} className='btn'><BsArrowLeft/></button>            
                <div className="mada_auth_photo">
                    <img src={img1} alt="" />
                </div>
                <h4>Na: Shukuru Comrade</h4>
            </div> */}
            <div className='author_div'>
                <button className="create_new btn_mada">
                    Anzisha Mada
                </button> 
                <div className="mada_author">
                    <div className="mada_auth_photo">
                        <img src={img1} alt="" />
                    </div>
                    <h4>Na: Shukuru Comrade</h4>
                    <button className='btn_btn'><BsChatLeftDotsFill/></button>
                </div>
            </div>
            <CreateMada/>    
        </div>
        <motion.div 
             initial={{ y:'100vw'}}
             animate={{y:0}} 
             transition={{ ease: "easeOut", duration: 0.5 }}  
            className="madas_body">
            <div className="mada_left"> 
                <Search title='Tafuta Mada'/>            
                <div className="mada_left_card">
                    <h2>Mapinduzi ya Viwanga na Uislam nchini na nini tinajifunza</h2>
                    <div className="mada_action">
                        <small>12 June 2022</small>
                        <Remarks/>
                    </div>
                </div>
                <div className="mada_left_card">
                    <h2>Mapinduzi ya Viwanga na Uislam nchini na nini tinajifunza</h2>
                    <div className="mada_action">
                        <small>12 June 2022</small>
                        <Remarks/>
                    </div>
                </div>
                <div className="mada_left_card">
                    <h2>Mapinduzi ya Viwanga na Uislam nchini na nini tinajifunza</h2>
                    <div className="mada_action">
                        <small>12 June 2022</small>
                        <Remarks/>
                    </div>
                </div>
                <div className="mada_left_card">
                    <h2>Mapinduzi ya Viwanga na Uislam nchini na nini tinajifunza</h2>
                    <div className="mada_action">
                        <small>12 June 2022</small>
                        <Remarks/>
                    </div>
                </div>
                <div className="mada_left_card">
                    <h2>Mapinduzi ya Viwanga na Uislam nchini na nini tinajifunza</h2>
                    <div className="mada_action">
                        <small>12 June 2022</small>
                        <Remarks/>
                    </div>
                </div>
                <div className="mada_left_card">
                    <h2>Mapinduzi ya Viwanga na Uislam nchini na nini tinajifunza</h2>
                    <div className="mada_action">
                        <small>12 June 2022</small>
                        <Remarks/>
                    </div>
                </div>
                <div className="mada_left_card">
                    <h2>Mapinduzi ya Viwanga na Uislam nchini na nini tinajifunza</h2>
                    <div className="mada_action">
                        <small>12 June 2022</small>
                        <Remarks/>
                    </div>
                </div>
                <div className="mada_left_card">
                    <h2>Mapinduzi ya Viwanga na Uislam nchini na nini tinajifunza</h2>
                    <div className="mada_action">
                        <small>12 June 2022</small>
                        <Remarks/>
                    </div>
                </div>
                <div className="mada_left_card">
                    <h2>Mapinduzi ya Viwanga na Uislam nchini na nini tinajifunza</h2>
                    <div className="mada_action">
                        <small>12 June 2022</small>
                        <Remarks/>
                    </div>
                </div>
            </div>
            {/* <div className="mada_right">
                <div className="madas_photo">
                    <img src={img1} alt="" />
                </div>
                <h3>Na: Shukuru Comrade</h3>
                <button className='btn_btn'><BsChatLeftDotsFill/></button>
            </div> */}
        </motion.div>
       
    </div>
  )
}

export default Madas
