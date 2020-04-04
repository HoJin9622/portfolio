import React from "react";
import "./Banner.css";
import "./About.css";

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

      {/*   Technology */}

      {/* Testimonials */}

      {/* Contact */}

      {/*       Footer */}
    </div>
  );
}

export default TestPage;
