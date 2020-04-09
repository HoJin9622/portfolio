import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Banner.css";
import "./About.css";
import "./Services.css";
import "./Technology.css";
import "./Common.css";
import "./Client.css";
import "./Testimonials.css";
import "./Contact.css";
import "./Footer.css";

AOS.init({
  offset: 200,
  duration: 2000,
});

function TestPage() {
  return (
    <div>
      {/* Banner */}
      <div className="banner">
        <header>
          <a href="#" className="logo">
            HoJin.com
          </a>
          <div className="toggle"></div>
        </header>
        <img src="/images/bg.jpg" />
        <div data-aos="fade-in" className="content">
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
          <h2 data-aos="fade-right" className="heading">
            About Us
          </h2>
          <p data-aos="fade-right" className="text">
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
            <div data-aos="fade-right" className="serviceBx">
              <div>
                <img src="/images/icon1.png" />
                <h2>Design</h2>
              </div>
            </div>
            <div data-aos="fade-up" className="serviceBx">
              <div>
                <img src="/images/icon2.png" />
                <h2>Development</h2>
              </div>
            </div>
            <div data-aos="fade-left" className="serviceBx">
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
        <div data-aos="fade-right" className="contentBx">
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
        <div data-aos="fade-left" className="imgBx">
          <img src="/images/tech.png" />
        </div>
      </section>

      {/* Client */}
      <section className="client">
        <h2 data-aos="zoom-in" className="heading">
          Our Client
        </h2>
        <p data-aos="zoom-in" className="text">
          At Success by Design, we understand how important it is for educators
          to find the right tools for student success. When it comes to buying
          materials in bulk, teachers and campus administrators feel the weight
          of that responsibility twice over. No one wants to spend their limited
          resources on a product their students are just going to set aside.
        </p>
        <div data-aos="zoom-in" className="imgBx">
          <img src="/images/brand1.png" />
          <img src="/images/brand2.png" />
          <img src="/images/brand3.png" />
          <img src="/images/brand4.png" />
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials">
        <h2 data-aos="flip-left" class="heading">
          What Our Client says
        </h2>
        <div className="container">
          <div data-aos="flip-left" class="contentBx">
            <div>
              <p>
                At Success by Design, we understand how important it is for
                educators to find the right tools for student success. When it
                comes to buying materials in bulk, teachers and campus
                administrators feel the weight of that responsibility twice
                over. No one wants to spend their limited resources on a product
                their students are just going to set aside.
              </p>
              <br />
              <h3>Someone Famous</h3>
            </div>
          </div>

          <div data-aos="flip-left" class="contentBx">
            <div>
              <p>
                At Success by Design, we understand how important it is for
                educators to find the right tools for student success. When it
                comes to buying materials in bulk, teachers and campus
                administrators feel the weight of that responsibility twice
                over. No one wants to spend their limited resources on a product
                their students are just going to set aside.
              </p>
              <br />
              <h3>Someone Famous</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="contact">
        <h2 className="heading">Contact us</h2>
        <p className="text">
          At Success by Design, we understand how important it is for educators
          to find the right tools for student success. When it comes to buying
          materials in bulk, teachers and campus administrators feel the weight
          of that responsibility twice over. No one wants to spend their limited
          resources on a product their students are just going to set aside.
        </p>
      </section>

      <section className="about">
        <div className="contentBx redbg">
          <div data-aos="fade-right" className="form">
            <div className="inputBx">
              <input type="text" name="" placeholder="Full Name" />
            </div>
            <div className="inputBx">
              <input type="text" name="" placeholder="Email Address" />
            </div>
            <div className="inputBx">
              <input type="text" name="" placeholder="Mobile No." />
            </div>
            <div className="inputBx">
              <textarea placeholder="Write your message here" />
            </div>
            <div className="inputBx">
              <input type="submit" name="" value="Send" />
            </div>
          </div>
        </div>
        <div className="imgBx2"></div>
      </section>

      {/* Footer */}
      <section className="footer">
        <p className="text">Design & Developed By Online Tutorials</p>
        <ul>
          <p className="text">Follow us on : </p>
          <li>
            <a href="#">
              <img src="/images/facebook.png" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src="/images/twitter.png" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src="/images/linkedin.png" />
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
}

export default TestPage;
