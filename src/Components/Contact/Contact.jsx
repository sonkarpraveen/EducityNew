import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'
  
function Contact() {

    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "01fa8d62-22dd-4ab7-bb29-125fdf9b8638");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };
  

  return (
    <div className='contact'>
        <div className="contact-col">
            <h3>Send us amessage <img src={msg_icon} alt="" /> </h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio beatae vero architecto dolorem pariatur provident aliquam commodi velit, ad aliquid cupiditate unde numquam deserunt eos, rerum quasi. Amet, aliquam fugit! 
            </p>
            <ul>
                <li> <img src={mail_icon} alt="" /> Contact@educity.com </li>
                <li> <img src={phone_icon} alt="" /> +91 8887636469 </li>
                <li> <img src={location_icon} alt="" /> 876,skIV,indrapuram,Gaziabad,U.P,201014</li>
            </ul>
        </div>
        <div className="contact-col">
            <form onSubmit={onSubmit}>
                <label>Your Name</label>
                <input type="text"  name='name' placeholder='Enter your name' required/>
                <label >Phone Number </label>
                <input type="tel" name="phone" placeholder='Enter your mobile number ' />
                <label >Write your message here</label>
                <textarea name="message" rows='6' placeholder='Enter your message' required></textarea>
                <button type='submit' className='btn dark-btn'>Submit now <img src={white_arrow } alt="" /> </button>

            </form>
            <span>{result}</span>
        </div>

    </div>
  )
}

export default Contact