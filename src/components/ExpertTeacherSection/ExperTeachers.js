import React, {useState} from 'react';
import Title from "../Title/Title";
import classes from "./ExperTeachers.module.css";
import ExperTeacherItem from "./ExperTeachersItem/ExperTeachersItem";
import TeacherData from "./TeachersData";

const ExpertTeachers = () => {
	const [data] = useState(TeacherData);
    return (
        <section className={classes.EpertTeacher}>
           <Title subtitle={"INSTRUCTOR"} title={"Expert Teachers"} colorSubtitle={"#00a85a"} colorTitle={"#101010"} />
        	<div className="container">
        		<div className="row">
        			{
        				data.map(({id,imgUrl,name,proff,ggurl,TwUrl,fsbook,linkedin},index) => {
        				 return	<ExperTeacherItem 
        									key={id}
        									imgUrl={imgUrl}
        									name={name}
        									proff={proff}
        									ggurl={ggurl}
        									TwUrl={TwUrl}
        									fsbook={fsbook}
        									linkedin={linkedin}
                                            delay={index}/>
        									
        				})
        			}
        		</div>
        	</div>
        </section>
    );
};
export default ExpertTeachers;
