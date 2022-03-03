import React from 'react';
import classes from "./ContactForm.module.css";
import { YMaps, Map, Placemark,FullscreenControl } from 'react-yandex-maps';
import {useFetch} from "../useFetch/useFetch";

const ContactForm = ({ className }) => {
    const {data, loaded} = useFetch("https://ilyosbek.uz/rtm/api/course/getall");
    const submitHandler = (e) => {
        e.preventDefault();
        fetch("https://jsonplaceholder.typicode.com/posts", {
            method: 'POST',
            body: JSON.stringify({
                          "userId": 1,
                          "title": "husniddin",
                          "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
                        }),
            headers: {
          'Content-Type': 'application/json'
        }})
        .then(res => res.json())
        .then(data => console.log(data));
    }
    return (
        <section className={classes.ContactForm} >
        	<div className="container">
        		<div className="row">
        			<div className="col-md-6 col-sm-12 col-xs-12">
    				   <YMaps>
					    <div className={classes.mapsContact}>
					      <Map width="100%" height="100%" defaultState={{ 
					      		center: [40.441056, 71.716999], 
					      		zoom: 17,
					      		control: [], 
					      	}} >
						      <Placemark geometry={[40.441056, 71.716999]} />
						      <FullscreenControl />
					      </Map>
					    </div>
					  </YMaps>
        			</div>
        			<div className="col-md-6 col-sm-12 col-xs-12">
        				<div className={classes.FormContent} >
        					<div className={classes.FormTitle} >
        						<h3>Biz Bilan Aloqa</h3>
        						<p>Takliflaringiz bormi yoki shunchaki salom aytmoqchimisiz? Bizning qo'llab-quvvatlash jamoamiz sizga 24/7 yordam berishga tayyor.</p>
        					</div>
        					<form onSubmit={submitHandler}>
        						<input type="text" name="firstname" placeholder="Ism" />
        						<input type="text" name="lastname" placeholder="Familya" />
        						<input type="tel" name="phonenumber" placeholder="Telefon raqam" />
        						<input type="email" name="email" placeholder="Email" />
        						<textarea placeholder="Xabar"></textarea>
        						<button type="submit">Yuborish</button>
        					</form>
        				</div>
        			</div>
        		</div>
        	</div>
        </section>
    );
};
export default ContactForm;
