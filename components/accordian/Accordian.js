import { Disclosure } from "@headlessui/react";
let questions = [
  {
    question: "Can any student take any subject course free ?",
    answer:
      "Yes, but student will have to pay only 1000rs for technical support",
  },
  {
    question: "Can student take technical support ?",
    answer: "Yes our technical team supports only on video course . ",
  },
  {
    question: "How student can take courses ?",
    answer:
      "Fill lead form our team contact him/her  or student can contact us on our contact number- 8368118716",
  },
  {
    question: "Why should pick Personal mentor ?",

    answer:
      "We are the only ones in the world to provide a free course and we don't take a single rupee. If a student improves their learning with the help of our course and gets 80% or more than 80% marks in his exam, he will have to pay 10,000 rupees",
  },
];
export default function Accordion() {
  return (
    <div className="w-full px-4 pt-16">
      <h2 className="text-xl md:text-2xl lg:text-6xl  text-center py-4">
        FAQs
      </h2>
      <div className=" w-full items-center pt-[19px] pb-[29px] justify-center flex">
        <div className="border-b border-black w-[70%]"></div>
      </div>
      <div className="w-full max-w-[44rem] p-2 mx-auto bg-white rounded-2xl">
        {questions.map((question, index) => (
          <Disclosure key={index} as="div" className="mt-2">
            {({ open }) => (
              <>
                <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-purple-900 bg-purple-100 rounded-lg hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                  <span className="md:text-xl ">{question.question}</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className={`${
                      open ? "rotate-180 transform" : ""
                    } h-5 w-5 text-purple-500`}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </Disclosure.Button>
                <Disclosure.Panel className=" md:text-xl px-4 pt-4 pb-2 text-sm text-gray-500">
                  {question.answer}
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        ))}
      </div>
    </div>
  );
}
