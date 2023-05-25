import React, { useState } from "react";

export default function App() {
  const [imgUri, setImgUri] = useState("/avatars/01.png");
  const [activeAvatar, setActiveAvatar] = useState(0);
  
  let avatarsUrl = ["01.png", "02.png", "03.png", "04.png", "05.png", "06.png"];
  const changeImg = (uri, index) => {
    setImgUri("/avatars/" + uri);
    setActiveAvatar(index);
  };
  return (
    <>
      <div className="flex flex-col gap-4 items-center justify-center">
        <div className="font-semibold text-xl">Select An Avatar</div>
        <img src={imgUri} className={`h-16  w-16 rounded-full`} />
        <div className="flex justify-center">
          <div className="grid gap-4 grid-cols-3 lg:grid-cols-6">
            {avatarsUrl.map((uri, index) => (
              <button
                className={`${
                  activeAvatar == index ? "bg-gray-700" : ""
                } p-1 rounded-[0.2rem] transition duration-300 ease-in-out`}
                key={index}
                onClick={() => changeImg(uri, index)}
              >
                <img
                  src={"/avatars/" + uri}
                  className="h-[36px] w-[36px] rounded-full"
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
