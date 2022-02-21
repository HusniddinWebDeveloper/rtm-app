import React, {useState} from 'react';
import classes from "./Question.module.css";
import QuestionData from "./QuestionData";
import QuestionItem from "./QuestionItem/QuestionItem";
import {BiPlay} from "react-icons/bi";
import Modal from "../Modal/Modal";
import {useSelector, useDispatch} from "react-redux";
import {openModal} from "../../redux/actions/action";

const Question = ({ className }) => {
    const modal = useSelector((store) => store.data.modal);
    const dispatch = useDispatch();
	const [data] = useState(QuestionData);
    const [showArr, setShowArr] = useState([false, false, false, false]);
    return (
        <>
        	<section className={classes.Question} >
        		<div className="container" >
        			<div className="row" >
        				<div className="col-md-6 col-sm-6 col-xs-12" style={{padding: 0}}>
        					<div className={classes.QuestionWrapper} >
        						<div className={classes.QuestionTitle} >
        							<h2>Frequently Asked Questions</h2>
        						</div>
        						<div className={classes.QuestionDropDownWrapper} >
        							<ul>
        								{data.map((item, index) => {
        								 return	<QuestionItem 
        								 					key={item.id} 
        								 					id={item.id} 
        								 					index={index} 
                                                            showIt={showArr[index]}
                                                            showArr={showArr}
        								 					title={item.title} 
                                                            setShowArr={setShowArr}
        								 					description={item.description} />
        								})}
        							</ul>
        						</div>
        					</div>
        				</div>
        				<div className="col-md-6 col-sm-6 col-xs-12" style={{padding: 0}}>
        					<div className={classes.BgPosts}>
        						<div>
        							<div className={classes.videoWrapper}>
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
        			</div>
        		</div>
                {modal ? <Modal iframeUrl={"https://www.youtube.com/embed/yJ8qREjHbSA"}/> : "" }
        	</section>
        </>
    );
};

export default Question;
