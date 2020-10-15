import React, { Component } from "react";
import "../custom.css";
export class about extends Component {
  render() {
    return (
      <div id="about">
        <div className="custom-container">
          <div className="row">
            <div className="col-xs-12 col-md-6">
              {" "}
              <img src="img/about.jpg" className="img-responsive" alt="" />{" "}
            </div>
            <div className="col-xs-12 col-md-6">
              <div className="about-text">
                <h2>Hakkımızda</h2>
                <p>
                  Mobil uygulamalar, web uygulamaları, yazılım desteği ve
                  yazılım geliştirme sağlayan bir freelance yazılım geliştirme
                  şirketiyiz.
                  {<br />}
                  Yaklaşık 2-3 yıldır bu sektörlerde profesyonel olarak iş
                  tecrübesine sahip ekibimizle uygulama (mobil uygulama, web
                  sitesi, web uygulaması) ve yazılım geliştirmeye açığız.
                  {<br />}
                  İhtiyaçlarınıza göre web sitesi veya uygulama geliştirmekten
                  mutluluk duyarız.
                </p>
                <h3>Neden Biz Peki?</h3>
                <div className="list-style">
                  <div className="col-lg-12 col-sm-12 col-xs-12">
                    <ul>
                      Mobil Uygulama Geliştirme, Web Uygulaması Geliştirme,
                      Yazılım Geliştirme, Hybrid Yazılım Geliştirme alanlarında
                      çeşitli deneyimlere sahip olan, genç kitleden oluşan,
                      işini tutku ile yapan mühendis kadromuzla belirtilen
                      alanlarda ihtiyaçlarınıza yönelik projeler geliştiriyoruz.{" "}
                      {<br />}Örnek olarak aşağıdaki benzer projeleri
                      geliştirmekteyiz;
                      <div className="paddingForLi"></div>
                      <li>Restaurant Sipariş Uygulamaları</li>
                      <li>Mobil Uygulamalar</li>
                      <li>Web Siteleri/Uygulamaları</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default about;
