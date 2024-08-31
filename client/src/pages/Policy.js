import React from "react";
import Layout from "./../components/Layout/Layout";

const Policy = () => {
  return (
    <Layout title={"Privacy Policy"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/contactus.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p><br /><br /><br /><br />1. Information We Collect

            Personal Data: Includes your name, email, address, and payment details when you make a purchase or contact us.
            Usage Data: Information like your IP address, browser type, and pages viewed.
            Cookies: We use cookies to improve your experience. You can manage these through your browser settings.
            <br />2. How We Use Your Information

            We use your data to process orders, improve our services, and communicate with you. We may also send marketing emails if you opt-in.

            <br />3. Sharing Your Information

            We do not sell your information. We may share it with service providers for order processing or if required by law.

            <br />4. Data Security

            We take steps to protect your data, but no system is completely secure.
            <br />  Contact Us

            <br />For questions, reach out to us at:

            <br />UniMart
            Email: yashraj190402@gmail.com</p>
        </div>
      </div>
    </Layout>
  );
};

export default Policy;
