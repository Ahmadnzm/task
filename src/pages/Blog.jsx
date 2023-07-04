import React from "react";
import OtherBlog from "../components/otherBlog/OtherBlog";
import Comments from "../components/comments/Comments";
import TopSection from "../components/topSection/TopSection";
import MainText from "../components/MainText";
import {BiTimeFive} from "react-icons/bi"
import Sidebar from "../components/sidebar/Sidebar";

function Blog() {
  return (
    <section className="ml-16 mr-2">
      <div className="h-60"></div>
      <div className="flex mb-3 justify-between items-center h-14">
        <TopSection />
      </div>
      <div className="flex gap-16">
        <div className="main-content w-[1185px]">
          <div className="relative h-[776px]">
            <img
              src={require("../assets/images/logo192.png")}
              className="w-[1185px] h-[678.84px]"
            />
            <div className="absolute left-0 right-0 top-0 text-center">
              <p className="h-[110px] font-medium text-2xl text-[#0f0f0f] opacity-40 bg-[#ffffff]">
                عنوان مطلب
              </p>
            </div>
            <div className="mt-3 bottom-top-content flex justify-between">
              <div className="w-[162px] h-[24px] flex items-center">
                <span><BiTimeFive/></span>
                <p className="mr-2 font-normal text-sm text-[#878787]">
                  
                  زمان مطالعه : 3 دقیقه{" "}
                </p>
              </div>
              <div
                className="flex flex-col w-[110px] h-[151px] items-center justify-center"
                style={{ marginTop: "-75px" }}
              >
                <img
                  src={require("../assets/images/profile.png")}
                  style={{
                    width: "110px",
                    height: "110px",
                    borderRadius: "40px",
                    border: "2px solid #ebebeb",
                  }}
                  alt=""
                />
                <p className="font-medium text-base text-[#6b6b6b] w-[75px] h-6">
                  نام نویسنده
                </p>
              </div>
              <div className="w-[208px] h-[24px]">
                <span></span>
                <p className="font-normal text-right text-sm text-[#878787]">
                  آخرین ویرایش: 24 فروردین 1402{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="text-content h-[1014px] py-8 px-6 gap-10">
            <MainText />
          </div>
          <div className="other-blog h-[473px] border-b-[1px] border-[#6b6b6b] mt-20 py-0 px-8 gap-10">
            <div className=" h-[473px] px-0 pt-0 pb-8">
              <div className="w-[156px] h-[56px] py-4 px-0 gap-4">
                <p className="font-normal text-2xl">مطالب مرتبط</p>
              </div>
              <div className="h-[353px] gap-12 flex ">
                <OtherBlog />
                <OtherBlog />
              </div>
              <div className="mt-20">
                <Comments />
              </div>
            </div>
          </div>
        </div>
        <div className="sidebar w-[537px]">
          <Sidebar />
        </div>
      </div>
    </section>
  );
}

export default Blog;
