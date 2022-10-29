import React from 'react'
import moment from 'moment'
import { useNavigate } from 'react-router-dom'
import useData from '../../hooks/useData'
import { GrLike } from 'react-icons/gr'



const QueCard = ({q}) => {
    const navigate = useNavigate()
    const { comments } = useData()
    const coms = comments?.filter(c => c.docId === q.id)

    const lastanswer = comments?.findLast(c => c.docId === q.id)

    console.log('lastanswer', lastanswer)

  return (
    <div className="que_card" key={q.id}>
        <div className="que_author">
            <img src={q?.photo} />
        </div>
        <div className="que_body">
            <div className="que_date">
                <small>{moment(q?.createdAt?.toDate()).fromNow(true)}</small>
            </div>
            <div className="que_title" onClick={()=>navigate(`/questions/${q.id}`)}>
                <h2>{q.que}</h2>
            </div>
            <div className="que_last">
                <p>{lastanswer?.text}</p>
            </div>
            <small>{moment(lastanswer?.createdAt?.toDate()).fromNow(true)}</small>
            <div className="que_cations">
                <div className="ques_act_left">
                    <div className="que_answers">
                        {coms.length} Majibu
                    </div>
                    <div className="que_answers">
                        <button className='btn_likes'><GrLike/></button>
                        12 Penda
                    </div>
                </div>
                <div>
                    <button className='btn_que' onClick={()=>navigate(`/questions/${q.id}`)}>Jibu</button>  
                </div>
                        
            </div>
        </div>
    </div> 
  )
}

export default QueCard
