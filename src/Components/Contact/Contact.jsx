import React from "react";
import style from "./Contact.module.css";
import msg_icon from "../../assets/msg-icon.png";
import mail_icon from "../../assets/mail-icon.png";
import phone_icon from "../../assets/phone-icon.png";
import location_icon from "../../assets/location-icon.png";
import white_arrow from "../../assets/white-arrow.png";

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "8818ea43-5b7b-4585-b92e-f28b6977a032");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully!");

      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <div className={style.contact} id="contact">
      <div className={style.contact_col}>
        <h3>
          Send us a message
          <img src={msg_icon} />
        </h3>
        <p>
          Feel free to reach out through contact form or find our contact
          information below. Your feedback, question, and suggestion are
          important to us as we strive to provide exceptional service to our
          university community.
        </p>
        <ul>
          <li>
            <img src={mail_icon} alt="" />
            Contact@gmail.com
          </li>
          <li>
            <img src={phone_icon} alt="" />
            +91 78253-08985
          </li>
          <li>
            <img src={location_icon} alt="" />
            423/1 New Patel Nagar <br />
            Delhi, India
          </li>
        </ul>
      </div>
      <div className={style.contact_col}>
        <form onSubmit={onSubmit}>
          <label>Your Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter Your Name"
            required
          />
          <label>Phone Number</label>
          <input
            type="tel"
            name="phone"
            placeholder="Enter Your Number"
            required
          />
          <label>Write Your message here</label>
          <textarea
            name="message"
            id=""
            rows="6"
            placeholder="Enter Your Message "
            required
          ></textarea>
          <button type="submit" className="btn dark-btn">
            Submit Now <img src={white_arrow} />
          </button>
        </form>
        <span className="request_data">{result}</span>
      </div>
    </div>
  );
};

export default Contact;
