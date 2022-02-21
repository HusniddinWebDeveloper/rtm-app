import React, {useState} from 'react';
import classes from "./BlogSection.module.css";
import BlogItem from "./BlogItem/BlogItem";
import BlogData from "./BlogData";
import {Link} from "react-router-dom";
import {FiChevronRight} from "react-icons/fi";
import {FaSearch} from "react-icons/fa";


const BlogSection = () => {
	const [data] = useState(BlogData);
    return (
        <section className={classes.BlogSection} >
        	<div className="container">
        		<div className="row">
        			<div className="col-md-8 col-xs-12">
        				<div className={classes.articleBlog} >
        					{data.map(({id,imgurl, linkTitle, date, admin, univer, parag}) => {
        					 return	<BlogItem imgurl={imgurl} linkTitle={linkTitle} date={date} admin={admin} univer={univer} parag={parag} key={id}  />
        					})}
        				</div>
        			</div>
        			<div className="col-md-4 col-xs-12">
        				<div className={classes.searchAside} >
        					<div className={classes.searchForm}>
    							<form>
    								<input type="search" name="search" placeholder="Searching..." />
    								<button type="submit"><FaSearch /></button>
    							</form>
        					</div>
        					<div className={classes.recenPosts} >
        						<div className={classes.titleRecent} >
        							<h4>Recent Posts</h4>
        						</div>
        						<ul>
        							<li>
        								<Link to="/" >
        									<span><FiChevronRight /></span>
        									<span>Majority of students dissatisfied for world coronavirus support</span>
        								</Link>
        							</li>
        							<li>
        								<Link to="/" >
        									<span><FiChevronRight /></span>
        									<span>Majority of students dissatisfied for world coronavirus support</span>
        								</Link>
        							</li>
        							<li>
        								<Link to="/" >
        									<span><FiChevronRight /></span>
        									<span>Majority of students dissatisfied for world coronavirus support</span>
        								</Link>
        							</li>
        							<li>
        								<Link to="/" >
        									<span><FiChevronRight /></span>
        									<span>Majority of students dissatisfied for world coronavirus support</span>
        								</Link>
        							</li>
        						</ul>
        					</div>
        					<div className={classes.Categories} >
	        					<div className={classes.CategoriesTitle} >
	        						<h4>Categories</h4>
	        					</div>
        						<ul>
        							<li>
        								<Link to="/">
        									<span><FiChevronRight /></span>
        									<span>College</span>
        								</Link>
        							</li>
        							<li>
        								<Link to="/">
        									<span><FiChevronRight /></span>
        									<span>Gym</span>
        								</Link>
        							</li>
        							<li>
        								<Link to="/">
        									<span><FiChevronRight /></span>
        									<span>High School</span>
        								</Link>
        							</li>
        							<li>
        								<Link to="/">
        									<span><FiChevronRight /></span>
        									<span>Primary</span>
        								</Link>
        							</li>
        							<li>
        								<Link to="/">
        									<span><FiChevronRight /></span>
        									<span>School</span>
        								</Link>
        							</li>
        							<li>
        								<Link to="/">
        									<span><FiChevronRight /></span>
        									<span>University</span>
        								</Link>
        							</li>
        						</ul>
        					</div>
        					<div className={classes.Tags} >
	        					<div className={classes.titleRecent} >
        							<h4>Popular Tags</h4>
        						</div>
        						<ul>
        							<li><Link to="/">artist</Link></li>
        							<li><Link to="/">book</Link></li>
        							<li><Link to="/">education</Link></li>
        							<li><Link to="/">general</Link></li>
        							<li><Link to="/">learn</Link></li>
        							<li><Link to="/">online</Link></li>
        							<li><Link to="/">students</Link></li>
        							<li><Link to="/">teaching</Link></li>
        						</ul>
        					</div>
        				</div>
        			</div>
        		</div>
        	</div>
        </section>
    );
};
export default BlogSection;
