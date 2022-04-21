import Link from "next/link";
import AIlearn from '../pages/ailearn'
const Course = ({ name, link }) => {
  return (
    <div className="col-sm-3">
      <div className="place-list">
        <div className="place-body">
          <img
            src={`${process.env.PROXY_TARGET_URL}/${link}`}
            width="300"
            height="165"
            className="place-img"
          />
          <a href="#" className="text">
            {name}
          </a>
          <br />
          <Link href="ailearn"><a
            className="read-more text-white"
          >
            ReadMore >>
          </a></Link>
          
        </div>
      </div>
    </div>
  );
};
export default Course;
