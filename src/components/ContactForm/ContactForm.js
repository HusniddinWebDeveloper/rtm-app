import React from 'react';
import classes from "./ContactForm.module.css";
import { YMaps, Map, Placemark,FullscreenControl } from 'react-yandex-maps';

const ContactForm = ({ className }) => {
    return (
        <section className={classes.ContactForm} >
        	<div className="container">
        		<div className="row">
        			<div className="col-md-6 col-sm-12 col-xs-12">
    				   <YMaps>
					    <div className={classes.mapsContact}>
					      <Map width="100%" height="485px" defaultState={{ 
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
        						<h3>Get in Touch</h3>
        						<p>Have some suggestions or just want to say hi? Our  support team are ready to help you 24/7.</p>
        					</div>
        					<form>
        						<input type="text" name="name" placeholder="Name" />
        						<input type="email" name="email" placeholder="Email" />
        						<input type="tel" name="tel" placeholder="Phone" />
        						<input type="text" name="tel" placeholder="Subject" />
        						<textarea placeholder="Message"></textarea>
        						<button type="submit">submit</button>
        					</form>
        				</div>
        			</div>
        		</div>
        	</div>
        </section>
    );
};
export default ContactForm;
