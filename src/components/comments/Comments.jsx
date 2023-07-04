import React from "react";
import Comment from "./Comment";

function Comments() {
  return (
    <section className="h-[988px] py-0 px-8">
      <div className="w-[156px] h-[56px] py-4 px-0 gap-4">
        <p className="font-normal text-2xl">نظرات </p>
      </div>
      <div className="comments">
        <Comment />
        <Comment />
        <Comment />
      </div>
    </section>
  );
}

export default Comments;
