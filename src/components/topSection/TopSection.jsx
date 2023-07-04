import React from "react";
import {CiSearch} from "react-icons/ci"
function TopSection() {
  return (
    <>
      <div className="flex w-[341px] h-14">
        <p className="ml-2 font-medium text-xl text-[#6b6b6b]">بلاگ</p>
        <span className="ml-2 font-medium text-xl text-[#6b6b6b]">
          {"\n >"}
        </span>
        <p className="ml-2 font-medium text-xl text-[#6b6b6b]">گیاهخواری</p>
        <span className="ml-2 font-medium text-xl text-[#6b6b6b]">
          {"\n >"}
        </span>
        <p className="ml-2 font-medium text-xl text-[#6b6b6b]">
          {" "}
          انواع گیاهخواری
        </p>
      </div>
      <div className="serch flex justify-end items-center w-[537px] h-12 py-1 pr-3 border-1 rounded" style={{direction:"ltr"}}>
        <input className="bg-[#f9f9f9] py-2 px-5" style={{direction:"rtl"}} type="text" placeholder="جستجوی بلاگ" />
        <CiSearch className="font-medium text-base text-[#878787]" style={{marginLeft:"-20px"}}/>
      </div>
    </>
  );
}

export default TopSection;
