import Trangchu from "../pages/trangchu";
const Banner = () => {
  return (
    <div className="dau">
      <nav className="navbar navbar-expand-md navbar-fixed-top" />
      <a
        href="#"
        className="navbar-brand mx-4 col"
        style={{
          width: "660px",
          height: "50px",
          paddingTop: "0",
          float: "left",
        }}
      >
        <a href="trangchu">
          <ion-icon
            className="bathanh"
            name="menu"
            style={{
              color: "white",
              width: "35px",
              height: "35px",
            }}
          ></ion-icon>
        </a>
      </a>
      <p
        className="text-white col"
        style={{
          width: "230px",
          height: "26px",
          float: "right",
          fontSize: "12px",
        }}
      >
        Bạn chưa đăng nhập. (
        <u>
          <a href="dangnhap.html" className="card-link text-white">
            Đăng nhập
          </a>
        </u>
        )
      </p>
    </div>
  );
};
export default Banner;
