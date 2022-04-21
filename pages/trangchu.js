import Head from "next/head";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { compose } from "redux";
import { useEffect } from "react";
import Image from 'next/image';
import Link from 'next/link';
const Trangchu =() => {
    return(
        <div>
            <div className="body">
                <div className="adau">
                    <button className="btrai">Trang trước</button>
                <div className="bphai">
                    <a href="">Trang chủ</a>
                    <a href="">Khoá học</a>
                    <a href="">Admin</a>
                    <a href="">Đăng nhập</a>
                </div>
                </div>
            </div>
        </div>
       )
}
export default Trangchu;