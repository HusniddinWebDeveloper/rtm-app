import React, { useState, useRef } from 'react';
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
    const [filter, setFilter] = useState(data);
    const inputRef = useRef(null);
    const search = (e) => {
		e.preventDefault();
        setFilter(data.filter((item) => {
            return item.linkText.toLowerCase().match(new RegExp(inputRef.current.value.toLowerCase(), 'g')) ||
            item.name.toLowerCase().match(new RegExp(inputRef.current.value.toLowerCase(), 'g'));
        }));
    }
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
        							<span>Showing {1}-{filter.length} of {data.length} results</span>
        						</div>
        					</div>
        				</div>
        			</div>
        			<div className="col-md-6 col-xs-12 center-xs">
        				<div className={classes.searchForm} >
        					<form onSubmit={search}>
        						<div className={classes.searchInput} >
        							<input type="text" onChange={search} ref={inputRef} name="search" placeholder="Search our courses" />
        						</div>
        						<div className={classes.searchBtn}>
        							<button onClick={search}>
        								<FaSearch />
        							</button>
        						</div>
        					</form>
        				</div>
        			</div>
        		</div>
                <div className={classes.coursesGrid} >
                    <div className="row">
						{filter.length > 0 ? filter.map((item,index) => {
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
                                            delay={index}
                                            />
                            }) : 
							<span>Kurslar topilmadi</span>
							}
                        {}
                    </div>
                </div>
        	</div>
        </section>
    );
};

export default CoursesSearch;
