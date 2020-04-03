import React from "react";
import { Input, Button } from "antd";
import "./Contact.css";

const { TextArea } = Input;

function Contact() {
  return (
    <div className="contact__container">
      <div style={{ textAlign: "center", fontSize: "2rem", fontWeight: "600" }}>
        CONTACT
      </div>
      <hr />
      <br />

      <div
        style={{ textAlign: "center", fontSize: "1.2rem", fontWeight: "500" }}
      >
        Have a question or want to work together?
      </div>
      <br />

      <div>
        <Input placeholder="Name" />
      </div>
      <br />

      <div>
        <Input placeholder="Enter email" />
      </div>
      <br />

      <div>
        <TextArea rows={4} placeholder="Your Message" />
      </div>
      <br />

      <div style={{ display: "flex", justifyContent: "center" }}>
        <Button type="primary" size="large">
          Submit
        </Button>
      </div>
    </div>
  );
}

export default Contact;
