import React from "react";
import contents from "../../../../content";

const CourseSection = () => {
  return (
    <section className="bg-courses-gradient pt-16 pb-20">
      <ul className="wrapper grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[60px] md:gap-x-6 md:gap-y-[84px]">
        <li className="bg-gradient-pink p-8 md:pt-[64px] rounded-2xl shadow-2xl">
          <h2 className="text-white text-fs-3">
            Check out our most popular courses!
          </h2>
        </li>
        {contents.map((content) => (
          <li
            key={content.id}
            className="relative bg-white flex flex-col rounded-2xl drop-shadow-2xl"
          >
            <img
              src={content.Icon}
              height="56"
              width="56"
              alt=""
              className="absolute -top-12 left-8 translate-y-1/2"
            />
            <div className="pt-[4rem] px-8 pb-[2.5rem] flex flex-col gap-6 flex-1">
              <div className="flex flex-col gap-6">
                <h3 className="font-extrabold text-fs-4">{content.title}</h3>
                <p className="text-fs-5">{content.content}</p>
              </div>
              <a href="#" className="mt-auto text-pink-600 text-fs-7 font-bold">
                {content.link}
              </a>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default CourseSection;
