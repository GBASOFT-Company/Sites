import React, { Component } from "react";
import "../custom.css";
export class Contact extends Component {
  render() {
    return (
      <div >
        <div id="contact">
          <div className="container">
            <div className="col-md-8">
              <div className="row">
                <div className="section-title">
                  <h2 className="contact-h2">
                    Bizimle İletişime Geçmek İçin
                  </h2>
                  <div class="row">
                    <div class="paddingForLi"></div>
                    <p>
                      <span className="address-label">
                        <i className="fa fa-map-marker"></i> Address
                      </span>
                    </p>
                      <label className="address-label">İstanbul, Eskişehir -
                    Türkiye</label>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-12">
              <div className="row">
                <div className="social">
                  <ul>
                    <li>
                      <a href="https://www.linkedin.com/in/gbasoft-company-3189321b9/">
                        <i className="fa fa-linkedin"></i>
                      </a>
                    </li>
                    <li>
                      <a href="mailto:gbasoftcom@gmail.com">
                        <i className="fa fa-envelope-o"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="footer">
          <div className="container text-center">
            <p>&copy; 2020 GBASOFT</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
