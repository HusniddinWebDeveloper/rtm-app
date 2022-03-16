import React, {useRef, useState} from 'react';
import classes from "./ContactForm.module.css";
import { YMaps, Map, Placemark,FullscreenControl } from 'react-yandex-maps';
import InputMask from 'react-input-mask';

const ContactForm = ({ className }) => {
    const first_name_ref = useRef(null);
    const last_name_ref = useRef(null);
    const telefon_ref = useRef(null);
    const email_ref = useRef(null);
    const message_ref = useRef(null);
    const [phone, setPhone] = useState('');
    const handleInput = ({ target: { value } }) => setPhone(value);

    const submitHandler = (e) => {
        e.preventDefault();
        const BOT_TOKEN = "5062138931:AAHPM3NC3FUhAr_EMZwJ-hRP-YCAMXwj8b4";
        const CHAT_ID = "@rtm_murojatlar";
        const text = `Ismi: ${first_name_ref.current.value} \r\n\r
                       Familyasi: ${last_name_ref.current.value} +
                       Telefon: ${telefon_ref.current.value}
                       Email: ${email_ref.current.value}
                       Xabar: ${message_ref.current.value}`;
        const url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage?chat_id=${CHAT_ID}&text=${text}`;
        if (first_name_ref.current.value !== "" && last_name_ref.current.value !== "" && telefon_ref.current.value !== "" && email_ref.current.value !== "" && message_ref.current.value !== "") {
            fetch(url)
                .then((response) => response.json())
                .catch((error) => alert("Xabarizingiz yuborilmadi"));
            first_name_ref.current.value = "";
            last_name_ref.current.value = "";
            telefon_ref.current.value = "";
            setPhone("");
            email_ref.current.value = "";
            message_ref.current.value = "";
        }
        if (first_name_ref.current.value === "") {
            first_name_ref.current.focus();
        } else if (last_name_ref.current.value === "") {
            last_name_ref.current.focus();
        } else if (telefon_ref.current.value === "") {
            telefon_ref.current.focus();
        } else if (email_ref.current.value === "") {
            email_ref.current.focus();
        } else if (message_ref.current.value === "") {
            message_ref.current.focus();
        }
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
                                <input type="text" ref={first_name_ref} name="firstname" placeholder="Ism" />
                                <input type="text" ref={last_name_ref} name="lastname" placeholder="Familya" />
                                <InputMask
                                    mask='(+999) 99 999 9999'
                                    value={phone}
                                    onChange={handleInput}
                                    ref={telefon_ref} 
                                    name="phonenumber" 
                                    placeholder="Telefon raqam" >
                                </InputMask>
                                <input type="email" ref={email_ref} name="email" placeholder="Email" />
        						<textarea placeholder="Xabar" ref={message_ref}></textarea>
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
