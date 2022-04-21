const Than = () => {
  return (
    <div className="dau1">
      <div className="navbar navbar-expand-md mt-1">
        <img
          src="New Project.png"
          className=" rounded float-start mx-5"
          width={300}
          height={150}
        />
        <div className="dropdown">
          <button className="dropbtn">
            VIETNAMESE(VI)<ion-icon name="caret-down-outline"></ion-icon>
          </button>
          <div className="dropdown-content">
            <a href="indexE.html">English(en)</a>
            <a href="#">Vietnamese(vn)</a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Than;
