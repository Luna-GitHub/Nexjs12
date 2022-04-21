const Footer = () => {
  return (
    <div className="footer bg-white">
      <div className="container">
        <div className="row">
          <div className="col">
            <h5 className="in">INFO</h5>
            <a href="https://sgddt.quangbinh.gov.vn/3cms/" className="ina">
              Sở giáo dục và đào tạo tỉnh Quảng Bình
            </a>
          </div>
          <div className="col">
            <h5 className="in">CONTACT US</h5>
            <p>187 Hữu Nghị - TP Đồng Hới - Quảng Bình</p>
            <p>
              <ion-icon name="call"></ion-icon> Phone : 0232.3822190
            </p>
            <p>
              <ion-icon name="mail"></ion-icon> E-mail :{" "}
              <a href="#" style={{ color: "black" }}>
                webmaster@sgddt-quangbinh.gov.vn
              </a>
            </p>
          </div>
          <div className="col">
            <h5 className="in">GET SOCIAL</h5>
            <div className="icon">
              <div className="social-buttons">
                <a
                  href="http://www.facebook.com"
                  target="blank"
                  className="social-margin"
                >
                  <div className="social-icon facebook">
                    <ion-icon name="logo-facebook"></ion-icon>
                  </div>
                </a>

                <a
                  href="https://in.pinterest.com/yourpinterestname/"
                  target="blank"
                  className="social-margin"
                >
                  <div className="social-icon pinterest">
                    <ion-icon name="logo-pinterest"></ion-icon>
                  </div>
                </a>

                <a
                  href="http://twitter.com/"
                  target="blank"
                  className="social-margin"
                >
                  <div className="social-icon twitter">
                    <ion-icon name="logo-twitter"></ion-icon>
                  </div>
                </a>

                <a
                  href="https://www.google.com/+yourgoogleplusid"
                  target="blank"
                  className="social-margin"
                >
                  <div className="social-icon google-plus">
                    <ion-icon name="logo-google"></ion-icon>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
