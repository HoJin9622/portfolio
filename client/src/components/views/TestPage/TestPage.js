import React from "react";
import "./Banner.css";
import "./About.css";
import "./Services.css";
import "./Technology.css";
import "./Common.css";
import "./Client.css";

function TestPage() {
  return (
    <div>
      {/* Banner */}
      <div className="banner">
        <header>
          <a href="#" className="logo">
            Brand Name
          </a>
          <div className="toggle"></div>
        </header>
        <img src="/images/bg.jpg" />
        <div className="content">
          <h2>Sucess by Design</h2>
          <p>
            At Success by Design, we understand how important it is for
            educators to find the right tools for student success. When it comes
            to buying materials in bulk, teachers and campus administrators feel
            the weight of that responsibility twice over. No one wants to spend
            their limited resources on a product their students are just going
            to set aside.
          </p>
        </div>
      </div>

      {/* About */}
      <section className="about">
        <div className="contentBx">
          <h2 className="heading">About Us</h2>
          <p className="text">
            At Success by Design, we understand how important it is for
            educators to find the right tools for student success. When it comes
            to buying materials in bulk, teachers and campus administrators feel
            the weight of that responsibility twice over. No one wants to spend
            their limited resources on a product their students are just going
            to set aside.
            <br />
            <br />
            At Success by Design, we understand how important it is for
            educators to find the right tools for student success. When it comes
            to buying materials in bulk, teachers and campus administrators feel
            the weight of that responsibility twice over. No one wants to spend
            their limited resources on a product their students are just going
            to set aside.
          </p>
        </div>
        <div className="imgBx"></div>
      </section>

      {/*  Services */}
      <section className="services">
        <h2 className="heading">Our Services</h2>
        <p className="text">
          At Success by Design, we understand how important it is for educators
          to find the right tools for student success. When it comes to buying
          materials in bulk, teachers and campus administrators feel the weight
          of that responsibility twice over. No one wants to spend their limited
          resources on a product their students are just going to set aside.
          <div className="container">
            <div className="serviceBx">
              <div>
                <img src="/images/icon1.png" />
                <h2>Design</h2>
              </div>
            </div>
            <div className="serviceBx">
              <div>
                <img src="/images/icon2.png" />
                <h2>Development</h2>
              </div>
            </div>
            <div className="serviceBx">
              <div>
                <img src="/images/icon3.png" />
                <h2>Branding</h2>
              </div>
            </div>
          </div>
        </p>
      </section>

      {/*   Technology */}
      <section className="technology">
        <div className="contentBx">
          <h2 className="heading">We use cutting edge technology</h2>
          <p className="text">
            At Success by Design, we understand how important it is for
            educators to find the right tools for student success. When it comes
            to buying materials in bulk, teachers and campus administrators feel
            the weight of that responsibility twice over. No one wants to spend
            their limited resources on a product their students are just going
            to set aside.
          </p>
        </div>
        <div className="imgBx">
          <img src="/images/tech.png" />
        </div>
      </section>

      {/* Client */}
      <section className="client">
        <h2 className="heading">Our Client</h2>
        <p className="text">
          At Success by Design, we understand how important it is for educators
          to find the right tools for student success. When it comes to buying
          materials in bulk, teachers and campus administrators feel the weight
          of that responsibility twice over. No one wants to spend their limited
          resources on a product their students are just going to set aside.
        </p>
        <div className="imgBx">
          <img src="/images/brand1.png" />
          <img src="/images/brand2.png" />
          <img src="/images/brand3.png" />
          <img src="/images/brand4.png" />
        </div>
      </section>

      {/* Testimonials */}

      {/* Contact */}

      {/* Footer */}
    </div>
  );
}

export default TestPage;
