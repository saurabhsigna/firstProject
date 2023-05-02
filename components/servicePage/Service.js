import React from "react";
import ServicesSubject from "./ServiceSubject";
export default function App() {
  return (
    <div className="bg-white py-10 flex flex-col max-w-screen h-auto items-center">
      <h1 className=" text-xl pb-[12px] font-semibold md:text-2xl lg:text-4xl">
        {" "}
        Our Services
      </h1>
      <div className=" w-full items-center justify-center flex">
        <div className="border-b border-black w-[70%]"></div>
      </div>
      <div className="grid py-14 w-[85%] grid-cols-2 md:grid-cols-3 gap-4 lg:grid-cols-4">
        <ServicesSubject
          imgUri={`/service/english.webp`}
          subjectName="english"
          subjectPage={"english"}
        />
        <ServicesSubject
          imgUri={`/service/math.webp`}
          subjectName="Mathematics"
          subjectPage={"mathematics"}
        />
        <ServicesSubject
          imgUri={`/service/physics.webp`}
          subjectName="Physics"
          subjectPage={"physics"}
        />
        <ServicesSubject
          imgUri={`/service/computer.webp`}
          subjectName="Computer"
          subjectPage={"computer"}
        />
      </div>
    </div>
  );
}
