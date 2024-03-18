import React, { useState } from "react";

const FormSection = () => {
  const [formData, setFormData] = useState({
    FirstName: "",
    LastName: "",
    number: "",
    email: "",
  });
  const [formErrors, setFormErrors] = useState({
    FirstName: "",
    LastName: "",
    number: "",
    email: "",
  });
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    const regex = {
      FirstName: /^[a-zA-Z\s]+$/,
      LastName: /^[a-zA-Z\s]+$/,
      number: /^\d{10}$/,
      email:
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    };
    const errors = {};
    if (!regex.FirstName.test(formData.FirstName)) {
      errors.FirstName = "First Name is invalid.";
    }
    if (!regex.LastName.test(formData.LastName)) {
      errors.LastName = "Last Name is invalid.";
    }
    if (!regex.number.test(formData.number)) {
      errors.number = "Number is invalid.";
    }
    if (!regex.email.test(formData.email)) {
      errors.email = "Email is invalid.";
    }

    setFormErrors(errors);
    if (Object.keys(errors).length === 0) {
      setShowSuccessPopup(true);
    }
  };
  const handlePopupClose = () => {
    setShowSuccessPopup(false);
    setFormData({
      FirstName: "",
      LastName: "",
      number: "",
      email: "",
    });
    setFormErrors({
      FirstName: "",
      LastName: "",
      number: "",
      email: "",
    });
  };
  return (
    <div className="bg_formSection  py_110 position-relative  z-1">
      <div className="LayerImg"></div>

      <div className="container py-lg-5 my-lg-5">
        <div className="row align-items-center pt-sm-5">
          <div data-aos="zoom-in-down" className="col-lg-7 col-12 ">
            <div className="FormCard">
              <h2 className="ff_Roboto fw-bold fs_2xl lh_62 text_Main mb-0">
                Get updated with us
              </h2>
              <form onSubmit={handleSubmit}>
                <div className="d-sm-flex gap-4 pt-4">
                  <div className="d-flex flex-column w_50 pt-2 pt-sm-0">
                    {" "}
                    <label
                      htmlFor="FirstName"
                      className="ff_Roboto fw-medium fs_sm lh_18 text_Main "
                    >
                      First Name
                    </label>
                    <div className="inputPlace  ">
                      <input
                        type="text"
                        id="FirstName"
                        name="FirstName"
                        value={formData.FirstName}
                        onChange={handleChange}
                        placeholder="Park Seijun"
                        className="ff_Roboto fw-normal fs_xsm lh_20 inputM  "
                      />
                    </div>
                    {formErrors.FirstName && (
                      <p className="error-message">{formErrors.FirstName}</p>
                    )}
                  </div>
                  <div className="d-flex flex-column w_50 pt-2 pt-sm-0">
                    {" "}
                    <label
                      htmlFor="LastName"
                      className="ff_Roboto fw-medium fs_sm lh_18 text_Main "
                    >
                      Last Name
                    </label>
                    <div className="inputPlace ">
                      <input
                        type="text"
                        id="LastName"
                        name="LastName"
                        value={formData.LastName}
                        onChange={handleChange}
                        placeholder="Sejiun"
                        className="ff_Roboto fw-normal fs_xsm lh_20 inputM  "
                      />
                    </div>
                    {formErrors.LastName && (
                      <p className="error-message">{formErrors.LastName}</p>
                    )}
                  </div>
                </div>
                <div className="d-sm-flex gap-4 pt-3">
                  <div className="d-flex flex-column w_50 pt-2 pt-sm-0">
                    {" "}
                    <label
                      htmlFor="number"
                      className="ff_Roboto fw-medium fs_sm lh_18 text_Main "
                    >
                      Phone Number
                    </label>
                    <div className="inputPlace  ">
                      <input
                        type="number"
                        id="number"
                        name="number"
                        value={formData.number}
                        onChange={handleChange}
                        placeholder="+12 5858526478"
                        className="ff_Roboto fw-normal fs_xsm lh_20 inputM  "
                      />
                    </div>
                    {formErrors.number && (
                      <p className="error-message">{formErrors.number}</p>
                    )}
                  </div>
                  <div className="d-flex flex-column w_50 pt-2 pt-sm-0">
                    {" "}
                    <label
                      htmlFor="email"
                      className="ff_Roboto fw-medium fs_sm lh_18 text_Main "
                    >
                      Email
                    </label>
                    <div className="inputPlace  ">
                      <input
                        type="mail"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Park@458@Gmail.com"
                        className="ff_Roboto fw-normal fs_xsm lh_20 inputM  "
                      />
                    </div>
                    {formErrors.email && (
                      <p className="error-message">{formErrors.email}</p>
                    )}
                  </div>
                </div>
                <div className="d-flex gap-4 align-items-center pt-3">
                  <input type="checkbox" />
                  <p className="ff_Roboto fw-normal fs_sm lh_18 text_Main mb-0">
                    By sending this form I confirm that I have read and accept
                    the Privacy Policy
                  </p>
                </div>
                <button className="Nav_btn InputBtnPadding  mt-4">
                  Subscribe
                </button>
              </form>
              {showSuccessPopup && (
                <div className="success-popup">
                  <p>Form submitted successfully!</p>
                  <button onClick={handlePopupClose}>Close</button>
                </div>
              )}
            </div>
          </div>
          <div data-aos="zoom-in-down" className="col-lg-5 col-12 pt-4 pt-lg-0">
            <h3 className="ff_Roboto fw-normal fs_lg lh_28 text_Main">
              Stay updated
            </h3>
            <p className="ff_Roboto fw-normal fs_sm lh_24 text_gray">
              At 248 Labs, our constant pursuit is to build engaging games that
              spared joy. Don’t hesitate to reach out to us with your thoughts
              and messages - we are all ears!
            </p>
            <h3 className="ff_Roboto fw-normal fs_lg lh_28 text_Main">
              Address
            </h3>
            <a
              href="https://maps.app.goo.gl/7pka2vLvmguW9CMS6"
              target="blank"
              className="ff_Roboto fw-normal fs_sm lh_24 text_gray"
            >
              390 Orchard Road, 03-07, Palais Renaissance.
            </a>
          </div>
        </div>
      </div>
      <div className="footerLayer footerBottomLayer"></div>
      <div className="footerLayer footerTopLayer"></div>
      <div className="LayerImg"></div>
    </div>
  );
};

export default FormSection;
