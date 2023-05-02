import React, { useState, useEffect } from "react";
import Buttons from "./StoryPage/AudienceButtons";
import StoryBox from "./StoryPage/StoryBox";
import { useRecoilValue } from "recoil";
import { AudienceButtonCurrentState } from "../atoms/StoryPageAtom";
let audiences = {
  Students: [
    {
      imgUri: "/storyPage/students/girl.avif",
      description:
        "This person is an accomplished entrepreneur who has founded several successful startups. They are known for their innovative approach to business and their ability to identify and capitalize on emerging trends. They are also active in philanthropy and have made significant contributions to various charitable causes",
      name: "John Smith",
      occupation: "Winner of Pradhan Mantri Rashtriya Bal Puraskar",
    },
    {
      imgUri: "/storyPage/students/girl2.avif",
      description:
        "This person is a professional athlete who is recognized for their impressive track record in their sport. They have won multiple championships and set several records throughout their career. They are also known for their dedication to fitness and their commitment to promoting a healthy lifestyle",
      name: "Sarah Johnson",
      occupation: "Winner of Pradhan Mantri Rashtriya Bal Puraskar",
    },
    {
      imgUri: "/storyPage/students/girl3.avif",
      description:
        "This person is a respected academic who has made significant contributions to their field of study. They are known for their groundbreaking research and their ability to inspire and mentor students. They have published numerous articles and books, and have received several awards for their work.",
      name: " Dr. Anthony Nguyen",
      occupation: "Winner of Pradhan Mantri Rashtriya Bal Puraskar",
    },
  ],
  Parents: [
    {
      imgUri: "/storyPage/parents/parent1.avif",
      description:
        "This person is an accomplished entrepreneur who has founded several successful startups. They are known for their innovative approach to business and their ability to identify and capitalize on emerging trends. They are also active in philanthropy and have made significant contributions to various charitable causes",
      name: "John Smith",
      occupation: "Winner of Pradhan Mantri Rashtriya Bal Puraskar",
    },
    {
      imgUri: "/storyPage/parents/parent2.avif",
      description:
        "This person is a professional athlete who is recognized for their impressive track record in their sport. They have won multiple championships and set several records throughout their career. They are also known for their dedication to fitness and their commitment to promoting a healthy lifestyle",
      name: "Sarah Johnson",
      occupation: "Winner of Pradhan Mantri Rashtriya Bal Puraskar",
    },
    {
      imgUri: "/storyPage/parents/parent3.avif",
      description:
        "This person is a respected academic who has made significant contributions to their field of study. They are known for their groundbreaking research and their ability to inspire and mentor students. They have published numerous articles and books, and have received several awards for their work.",
      name: " Dr. Anthony Nguyen",
      occupation: "Winner of Pradhan Mantri Rashtriya Bal Puraskar",
    },
  ],
  Teachers: [
    {
      imgUri: "/storyPage/teachers/teacher1.avif",
      description:
        "This person is an accomplished entrepreneur who has founded several successful startups. They are known for their innovative approach to business and their ability to identify and capitalize on emerging trends. They are also active in philanthropy and have made significant contributions to various charitable causes",
      name: "John Smith",
      occupation: "Winner of Pradhan Mantri Rashtriya Bal Puraskar",
    },
    {
      imgUri: "/storyPage/teachers/teacher2.avif",
      description:
        "This person is a professional athlete who is recognized for their impressive track record in their sport. They have won multiple championships and set several records throughout their career. They are also known for their dedication to fitness and their commitment to promoting a healthy lifestyle",
      name: "Sarah Johnson",
      occupation: "Winner of Pradhan Mantri Rashtriya Bal Puraskar",
    },
    {
      imgUri: "/storyPage/teachers/teacher3.avif",
      description:
        "This person is a respected academic who has made significant contributions to their field of study. They are known for their groundbreaking research and their ability to inspire and mentor students. They have published numerous articles and books, and have received several awards for their work.",
      name: " Dr. Anthony Nguyen",
      occupation: "Winner of Pradhan Mantri Rashtriya Bal Puraskar",
    },
  ],
};
export default function App() {
  const audience = useRecoilValue(AudienceButtonCurrentState);
  const [outputAudience, setOutputAudience] = useState([{}]);
  useEffect(() => {
    console.log("audience is : ");
    console.log(audiences[audience]);
    setOutputAudience(audiences[audience]);
  }, [audience]);

  return (
    <div className="bg-[#fcf4e4] pt-10">
      <Buttons />
      <div className="flex  py-10 items-center justify-center flex-col lg:flex-row gap-[32px]">
        {outputAudience.map((parent, key) => (
          <StoryBox
            bgColor={"green"}
            key={key}
            imgUri={parent.imgUri}
            name={parent.name}
            description={parent.description}
            occupation={parent.occupation}
          />
        ))}
      </div>
    </div>
  );
}
