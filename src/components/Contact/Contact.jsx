import "./contact.css";
import Phone from "../../Images/phone.png";
import Email from "../../Images/email.png";
import Location from "../../Images/address.png";
import { useContext, useRef, useState } from "react";
import emailjs from "emailjs-com";
import { ThemeContext } from "../../context";

const Contact = () => {
  const formRef = useRef();
  const [done, setDone] = useState(false);
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_j4yb74a",
        "template_y764d06",
        formRef.current,
        "user_M0ySqNdKz5hC7w8BYrMDI"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="c">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Let's discuss your project</h1>
          <div className="c-info">
            <div className="c-info-item">
              <img src={Phone} alt="" className="c-icon" />+ 370 622 39 728
            </div>
            <div className="c-info-item">
              <img src={Email} alt="" className="c-icon" />
              mrrufatabd@gmail.com
            </div>
            <div className="c-info-item">
              <img src={Location} alt="" className="c-icon" />
              Griciupio g. 9, Kaunas, Lithuania
            </div>
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc">
            <b>What's your story?</b> Get in touch. Always available for
            freelancing if the right project comes along. me.
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input
              style={{ backgroundColor: darkMode && "#333" }}
              type="text"
              placeholder="Name"
              name="user_name"
            />
            <input
              style={{ backgroundColor: darkMode && "#333" }}
              type="text"
              placeholder="Email"
              name="user_email"
            />
            <input
              style={{ backgroundColor: darkMode && "#333" }}
              type="text"
              placeholder="Subject"
              name="user_subject"
            />
            <textarea
              style={{ backgroundColor: darkMode && "#333" }}
              rows="5"
              placeholder="Message"
              name="message"
            />
            <button>Submit</button>
            {done && "  I got your message. I will return you soon :)"}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
