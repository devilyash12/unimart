import React from "react";
import Layout from "./../components/Layout/Layout";

const About = () => {
  return (
    <Layout title={"About us - Ecommer app"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/about.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p className="text-justify mt-2">
            <h1>Welcome to UniMart</h1> <br></br>Your go-to online store for handpicked, high-quality products. As a single-seller platform, we take pride in offering a curated selection that reflects our commitment to quality and uniqueness. Every item is carefully chosen to ensure it meets our standards for value and style.

            At UniMart, we believe in personal connection and excellent customer service. Thank you for choosing us as your trusted shopping destination.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
