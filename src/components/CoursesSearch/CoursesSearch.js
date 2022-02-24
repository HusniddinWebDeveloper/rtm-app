import React, { useState } from 'react';
import classes from "./CoursesSearch.module.css";
import {BsFillGridFill} from "react-icons/bs";
import {FaListUl, FaSearch} from "react-icons/fa";
import CousesItem from "./CoursesItem/CoursesItem";
import CoursesData from "./CoursesData";
import {useSelector, useDispatch} from "react-redux";
import {gridChange} from "../../redux/actions/action";

const CoursesSearch = ({ className }) => {
    const gridTrue = useSelector((store) => store.data.grid);
    const dispatch = useDispatch();
    const [data] = useState(CoursesData);
    return (
        <section className={classes.searchCourses} >
        	<div className="container" >
        		<div className="row">
        			<div className="col-md-6 col-xs-12 center-xs">
        				<div className={classes.SearchResl} >
        					<div className={classes.resultContent}>
        						<div className={gridTrue ? classes.column : `${classes.column} ${classes.active}`}  onClick={() => dispatch(gridChange(false))}>
        							<span><BsFillGridFill /></span>
        						</div>
        						<div className={gridTrue ? `${classes.rowGrid} ${classes.active}` : classes.rowGrid} onClick={() => dispatch(gridChange(true))} >
        							<span>
        								<FaListUl />
        							</span>
        						</div>
        						<div className={classes.ResInfo} >
        							<span>Showing 1-9 of 49 results</span>
        						</div>
        					</div>
        				</div>
        			</div>
        			<div className="col-md-6 col-xs-12 center-xs">
        				<div className={classes.searchForm} >
        					<form>
        						<div className={classes.searchInput} >
        							<input type="search" name="search" placeholder="Search our courses" />
        						</div>
        						<div className={classes.searchBtn}>
        							<button type="submit">
        								<FaSearch />
        							</button>
        						</div>
        					</form>
        				</div>
        			</div>
        		</div>
                <div className={classes.coursesGrid} >
                    <div className="row">
                        {data.map((item) => {
                                return <CousesItem 
                                            key={item.id}
                                            imgUrl={item.imgUrl} 
                                            linkText={item.linkText} 
                                            linkUrl={item.linkUrl}
                                            price={item.price}
                                            raiting={item.raiting}
                                            name={item.name}
                                            people={item.people}
                                            stars={item.stars}
                                            />
                            })}
                    </div>
                </div>
        	</div>
        </section>
    );
};

export default CoursesSearch;
