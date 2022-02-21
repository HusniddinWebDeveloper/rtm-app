import React from 'react';
import classes from "./AboutVideo.module.css";
import {BiPlay} from "react-icons/bi";
import Modal from "../Modal/Modal";
import {useSelector, useDispatch} from "react-redux";
import {openModal} from "../../redux/actions/action";

const AboutVideo = () => {
	const modal = useSelector((store) => store.data.modal);
    const dispatch = useDispatch();
    return (
        <section className={classes.AboutVideo}>
        	<div className="container">
        		<div className="row">
        			<div className="col-md-12 col-xs-12">
        				<div className={classes.videoContent}>
        					<div className={classes.playingContent}>
        						<span>
        							<span>
        								<span onClick={() => dispatch(openModal(true))}><BiPlay /></span>
        							</span>
        						</span>
        					</div>
        				</div>
        			</div>
        		</div>
        	</div>
        	{modal ? <Modal iframeUrl={"https://www.youtube.com/embed/qVWtnlBHnMs"}/> : "" }
        </section>
    );
};
export default AboutVideo;
