import React from 'react';
import classes from "./Modal.module.css";
import {MdClose} from "react-icons/md";
import {useDispatch} from "react-redux";
import {openModal} from "../../redux/actions/action";

const Modal = ({ iframeUrl }) => {
    const dispatch = useDispatch();
    return (
        <div className={classes.Modal} >
        	<div className={classes.Backdrop}  onClick={() => dispatch(openModal(false))} ></div>
        	<div className={classes.ModalContent} >
        	<iframe src={iframeUrl} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        		<div className={classes.closeIcon} >
        			<span onClick={() => dispatch(openModal(false))}>
        				<MdClose />
        			</span>
        		</div>
        	</div>
        </div>
    );
};

export default Modal;
