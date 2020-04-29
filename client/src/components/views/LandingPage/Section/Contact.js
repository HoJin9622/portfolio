import React from "react";
import styled from "styled-components";

function Contact() {
  const TitleContainer = styled.div`
    display: flex;
    font-size: 36px;
    padding-top: 50px;
    font-weight: 700;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding-bottom: 80px;
  `;

  const Form = styled.form`
    max-width: 600px;
    margin: auto;
    padding: 0 10px;
    overflow: hidden;
  `;

  const Input = styled.input`
    display: block;
    width: 100%;
    margin: 16px 0;
    border: 0;
    background: #111;
    padding: 20px 40px;
    outline: none;
    color: #ddd;
    transition: 0.5s;
    ${this}: focus {
      box-shadow: 0 0 10px 4px #34495e;
    }
  `;

  const Textarea = styled.textarea`
    display: block;
    width: 100%;
    margin: 16px 0;
    border: 0;
    background: #111;
    padding: 20px 40px;
    outline: none;
    color: #ddd;
    transition: 0.5s;
    ${this}: focus {
      box-shadow: 0 0 10px 4px #34495e;
    }
    resize: none;
    height: 120px;
  `;

  const Button = styled.input`
    float: right;
    border: 0;
    background: #34495e;
    color: #fff;
    padding: 12px 50px;
    border-radius: 20px;
    cursor: pointer;
    transition: 0.5s;
    ${this}: hover {
      background: #2980b9;
    }
  `;

  return (
    <React.Fragment>
      <TitleContainer>
        Contact
        <br />
        <hr style={{ width: "300px", height: "5px", background: "black" }} />
      </TitleContainer>
      <Form class="contact-form" action mthod>
        <Input type="text" placeholder="Your name" />
        <Input type="email" placeholder="Your email" />
        <Input type="text" placeholder="Your phone" />
        <Textarea placeholder="Your message"></Textarea>
        <Button type="submit" value="Send" />
      </Form>
    </React.Fragment>
  );
}

export default Contact;
