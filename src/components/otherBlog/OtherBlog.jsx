import React from "react";
import {BsPerson} from "react-icons/bs"
import {TfiCommentAlt} from "react-icons/tfi"
function OtherBlog() {
  return (
    <>
      <div className="relative card w-[410px] h-[353px]">
        <div className="absolute rounded top-1 left-2 w-[76px] h-[65px]">
          8 فروردین
        </div>
        <img
          src={require("../../assets/images/back.png")}
          style={{ width: "410px", height: "240px" }}
        />
        <div className="botto-card relative w-[396px] h-[130px]">
          <p className="bg-green-400 p-1 rounded absolute top-[-10px] left-2 ">
            تغذیه، میوه،ویتامین
          </p>
        </div>
        <div className="w-[389px] h-[60px] mt-[-100px]">
          <p className="font-medium text-lg text-right text-[#6b6b6b]">
            {" "}
            آنچه باید درباره میوه های قرمز و چگونه مصرف کردن آنها، بدانیم!
          </p>
          <div className="flex justify-between items-center mt-1">
            <div className="flex">
              <BsPerson />
              <p className="font-medium text-sm text-right text-[#6b6b6b]">
                علی نوری
              </p>
            </div>
            <div className="flex">
              <TfiCommentAlt/>
              <p className="font-medium text-sm text-right text-[#6b6b6b]">
                {" "}
                16 نظر
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default OtherBlog;
