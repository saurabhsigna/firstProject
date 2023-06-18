import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import IconAirplayvideo from "../svg/VideoIcon";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Link from "next/link";

export default function SimpleAccordion({
  courseContent,
  courseId,
  currentVideoId,
}) {
  function getChapterId(courseContent, currentVideoId) {
    for (let chapter of courseContent) {
      let content = chapter.chapterContent.find(
        (obj) => obj.id == currentVideoId
      );
      if (content) {
        return chapter.id;
      }
    }
    return "nulli"; // Return null if the contentId is not found
  }
  console.log(getChapterId(courseContent, currentVideoId));
  console.log(courseContent, currentVideoId);
  return (
    <div>
      {courseContent.map((chapterContent, index) => (
        <Accordion
          defaultExpanded={
            getChapterId(courseContent, currentVideoId) == chapterContent.id
          }
          key={index}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>
              {" "}
              {chapterContent.ChapterNumber}. {chapterContent.ChapterName}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            {chapterContent?.chapterContent.map((videos, index) => (
              <div
                className={`${
                  currentVideoId == videos?.id ? "bg-green-300 p-[10px]" : ""
                }`}
                key={index}
              >
                {videos?.isFree ? (
                  <Link href={`/course/${courseId}/learn/${videos?.id}`}>
                    <div className="text-blue-500 cursor-pointer hover:underline py-2 flex items-center justify-between text-[17px] lg:text-lg">
                      <span> {videos.title}</span>
                      <span className="flex items-center gap-2">
                        <span className="hover:underline cursor pointer">
                          {" "}
                          Preview
                        </span>
                        <IconAirplayvideo height={15} width={15} />
                      </span>
                    </div>
                  </Link>
                ) : (
                  <div className=" text-[17px] cursor-not-allowed py-2 lg:text-lg">
                    {videos?.title}
                  </div>
                )}
              </div>
            ))}
            {/* <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography> */}
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}
