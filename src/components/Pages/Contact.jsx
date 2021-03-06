import React, { Fragment } from "react";
import Banner from "./shared/Banner.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faMapMarker,
  faEnvelopeOpen,
} from "@fortawesome/free-solid-svg-icons";



class Contact extends React.Component {
  render() {
    return (
      <Fragment>
        <Banner title="contact" class="bg-1"></Banner>
        <section className="contact-2 page-section-ptb white-bg">
          <div className="container">
            <div className="row">
              <div className="col-md-12 justify-content-center">
                <div className="section-title">
                  <span>We’d Love to Hear From You</span>
                  <h2>LET'S GET IN TOUCH!</h2>
                  <div className="separator"></div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-8 col-sm-12 mb-lg-0 mb-1">
                <div className="gray-form row">
                  <div className="col-md-12">
                    <div id="formmessage">Success/Error Message Goes Here</div>
                    <form
                      className="form-horizontal"
                      id="contactform"
                      method="post"
                      action="http://themes.ANIL LUXURY CARS/html/cardealer/php/contact-form.php"
                    >
                      <p>
                        It would be great to hear from you! If you got any
                        questions, please do not hesitate to send us a message.
                        We are looking forward to hearing from you! We reply
                        within 24 hours !
                      </p>
                      <div className="contact-form">
                        <div className="form-group">
                          <input
                            id="name"
                            type="text"
                            placeholder="Name*"
                            className="form-control placeholder"
                            name="name"
                          />
                        </div>
                        <div className="form-group">
                          <input
                            type="email"
                            placeholder="Email*"
                            className="form-control placeholder"
                            name="email"
                          />
                        </div>
                        <div className="form-group">
                          <input
                            type="text"
                            placeholder="Phone*"
                            className="form-control placeholder"
                            name="phone"
                          />
                        </div>
                        <div className="form-group">
                          <textarea
                            className="form-control input-message placeholder"
                            placeholder="Comment*"
                            rows="7"
                            name="message"
                          ></textarea>
                        </div>
                        <input type="hidden" name="action" value="sendEmail" />
                        <button
                          id="submit"
                          name="submit"
                          type="submit"
                          value="Send"
                          className="button red"
                        >
                          Send your message
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-12">
                <div className="feature-box-3">
                  <div className="icon">
                    <FontAwesomeIcon icon={faMapMarker} />
                  </div>
                  <div className="content">
                    <h5>Address </h5>
                    <p>
                      NIT FARIDABAD
                    </p>
                  </div>
                </div>
                <div className="feature-box-3">
                  <div className="icon">
                    <FontAwesomeIcon icon={faPhone} />
                  </div>
                  <div className="content">
                    <h5>Phone </h5>
                    <p>(+91) 7678615374, (+91) 7827801353 </p>
                  </div>
                </div>
                <div className="feature-box-3">
                  <div className="icon">
                    <FontAwesomeIcon icon={faEnvelopeOpen} />
                  </div>
                  <div className="content">
                    <h5>Email </h5>
                    <p> vivekattrish766@gmail.com </p>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>

        <section className="contact-map">
          <div className="container-fluid" style={{ position: "relative" }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d877.3764815961943!2d77.31061382918035!3d28.40398717856347!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cddb53e5c557d%3A0xcb4cc62cafe322e!2sRAHUL%20MOTORS!5e0!3m2!1sen!2sin!4v1608668385846!5m2!1sen!2sin"



              allowfullscreen=""
              title="Location MAP"
            >

            </iframe>

          </div>
        </section>
      </Fragment>
    );
  }
}

export default Contact;
