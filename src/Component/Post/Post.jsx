import React from "react";
import { useState } from "react";
import Modal from "../Modal/Modal";

const Post = (props) => {
    const [openModal, setOpenModal] = useState(false);

    return(
        <div className='post'>
            <div className='img-thumb'>
                <img src='http://placeimg.com/200/150/tech' alt='dummy'/>
            </div>
            <div className='content'>
                <p className='title' onClick={() => {setOpenModal(true)}}>{props.title}</p>
                <p className='desc'>{props.desc}</p>
            </div>
            {openModal && <Modal mTitle={props.title} mDesc={props.desc} closeModal={setOpenModal}/>}
        </div>
    )
}

export default Post;