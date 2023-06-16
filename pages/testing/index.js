import { useEffect, useRef } from "react";

export default function Example() {
  const bigDivRef = useRef(null);
  const fixedDivRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const bigDivHeight = bigDivRef.current.offsetHeight;
      const fixedDiv = fixedDivRef.current;
      const scrollY = window.scrollY;

      if (scrollY > bigDivHeight - 300) {
        fixedDiv.style.position = "relative";
        fixedDiv.style.top = `${bigDivHeight - 100}px`;
        console.log("we change");
      } else {
        fixedDiv.style.position = "fixed";
        fixedDiv.style.top = "200px"; // Adjust the top position as needed
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <div ref={bigDivRef} className="bg-gray-200 h-[150vh]">
        {/* Content of the big div */}

        <div
          ref={fixedDivRef}
          className="bg-red-300 w-[100px] h-[100px] top-[200px] left-[85%]"
        >
          {/* Content of the fixed div */}
        </div>
      </div>
      {/* <div className="h-[30vh]"></div> */}
    </div>
  );
}
