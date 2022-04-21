import Head from "next/head";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { compose } from "redux";
import { useEffect } from "react";
import Image from 'next/image';
import Link from 'next/link';
const AIlearn = () => {
    
        return (
          <div>
            <div className="body">
              <div className="top">
                <a href="#">
                  <img className="logo" src="https://ailearning.edu.vn/content/img/logo/logo.png"/>
                </a>
                <div className="thanhngang">
                  <a href="#">Trang chủ</a>
                  <a href="#">Khoá học</a>
                  <a href="#">Liên hệ</a>
                  <a href="#">Admin</a>
                  <a href="#">Đăng nhập</a>
                </div>
              </div>
              <div className="phong">
                <img src="https://ailearning.edu.vn/content/img/home/breadcumb.png" style={{width:"100%", height:"300px"}}/>
                <div className="thanhdoc">
                  <li>
                    <a href="#">TRANG CHỦ</a>
                  </li>
                  <li>
                    <a href="#"> KHOÁ HỌC</a>
                  </li>
                  <li> CHI TIẾT KHOÁ HỌC</li>
                </div>
              </div>
              <div className="tcenter container">
                <div className="row">
                    <div className="bentrai col-sm-8">
                        <div className="hinhhat">
                            <img src="https://testingdn.com//public/upload/image/3oPI_images%20(2).jpg" />
                        </div>
                        <div className="sach">
                            <a href="#">
                                <ion-icon name="book-outline"></ion-icon> Bài học
                            </a>
                        </div>
                        <div className="tt">
                            <p>Không có bài tập nào trong khoá học !</p>
                        </div>
                    </div>
                    <div className="benphai col-sm-4">
                      <div className="boc">
                        <div className="tren">
                            <p>Bài học </p> 
                            <p>0 bài</p>
                        </div>
                        </div>
                        <div className="duoih">
                            <h>Mục tiêu</h>
                            <p>
                            (LOAN)Computer Graphics (Kỹ thuật đồ hoạ máy tính) là một lĩnh vực của Công nghệ thông tin mà ở đó nghiên cứu, xây dựng và tập hợp các công cụ (mô hình lý thuyết và phần mềm) khác nhau để: kiến tạo, xây dựng, lưu trữ, xử lý Các mô hình (model) và hình ảnh (image) của đối tượng.
                            </p>
                        </div>
                    </div>
                </div>
              </div>
              <div className="cuoi">
                <div className="cuoi1"><h1>ML Course</h1></div>
                <div className="cuoi2"><p>ML Course mang lại những kiến thức căn bản nhất.Học tập thật dễ dàng cùng ML Course</p></div>
                <div className="cuoi3"><a href="http://www.facebook.com" target="blank" className="social-margin">
                                    <div className="social-icon facebook">
                                        <ion-icon name="logo-facebook"></ion-icon>
                                    </div>
                                </a>
                </div>
              </div>
              <div className="cuoicung">
                  <img className="logo" src="https://ailearning.edu.vn/content/img/logo/logo.png" width="100px"/>
                  <p>Cung cấp bởi ML Course © 2021.</p>
              </div>
              <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
              <script nomodule src="https://unkg.com / ionicons @ 5.5.2 / dist / ionicons /ionicons.js "></script>
            </div>
            </div>
        );
}

export default AIlearn;