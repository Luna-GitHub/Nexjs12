import Head from "next/head";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { compose } from "redux";
import { useEffect } from "react";
import { getCourses } from "../redux/actions/Home";
import Image from 'next/image';
import Link from 'next/link';
import Course from "../components/course";
import Banner from "../components/banner";
import Than from "../components/than";
import Wrapper from "../components/wrapper";
import Footer from "../components/footer";
const Home = ({ courses, error, isLoading, actionGetCourses }) => {
    useEffect(() => {
        actionGetCourses();
    }, []);

    return (
        
<div>
        <div className="container">
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
                
            </Head>
        </div>
        
<div className="tong">
            <Banner/>
            <Than/>
            <Wrapper/>
        <div id="GIUA">
        <h2>Đánh giá năng lực học sinh</h2>
        <p>Đánh giá năng lực học sinh</p>
        <a href="#">Read More >></a>
    </div>
    <div className="grids">
        <h2 className="ph2">Các khoá học hiện tại</h2>
        <div className="container">
            <div className="row">
            { courses?.length>0 && courses.map(course=>{
                return (
                <Course name={course?.name} link={course?.name_image}/>
                );
            })}
            </div>
        </div> <br/>
        <Footer/>
        <div className="duoi">
            <p>Copyright © 2021 - danhgiananglucthpt.edu.vn</p>
        </div>
        <div className="duoin">
            <a href="#">Data retention summary</a>
        </div>
    </div>
    
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js" integrity="sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js" integrity="sha384-cVKIPhGWiC2Al4u+LWgxfKTRIcfu0JTxR+EQDz/bgldoEyl4H0zUF0QKbrJ0EcQF" crossorigin="anonymous"></script>
    <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"> </script>
    <script nomodule src="https: // unkg .com / ionicons @ 5.5.2 / dist / ionicons / ionicons.js "></script>
</div>
</div>
    );
};

Home.defaultProps = {
    courses: null,
    isLoading: true,
    error: null,
};

Home.propTypes = {
    courses: PropTypes.array,
    error: PropTypes.object,
    isLoading: PropTypes.bool,
    actionGetCourses: PropTypes.func,
};

const mapStateToProps = (state) => ({
    courses: state.homeReducer.courses,
    error: state.homeReducer.error,
    isLoading: state.homeReducer.isLoading,
});

export function mapDispatchToProps(dispatch) {
    return {
        actionGetCourses: (payload) => dispatch(getCourses(payload)),
    };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect)(Home);