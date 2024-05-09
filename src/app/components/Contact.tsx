import { useEffect, useState } from "react";

export default function Contact({headerDivHeight}) {
  const [contactPosition, setContactPosition] = useState();
  useEffect(() => {
    setContactPosition(window.innerHeight)
  }, [headerDivHeight]);

  return (
    // get contact card to stick to header
    <>
      <div className={`top-[${headerDivHeight}] flex flex-initial flex-col justify-center items-center bg-tertiary min-w-[30vw] h-fit p-10 gap-5 rounded-bl-md`}>
        <div className="bg-primary w-[10vw] h-[10vw]" />
        <div className="text-accent text-xl -mt-3">
          Mrs. LaRue
        </div>
        <button type='button' className="bg-secondary px-3 py-2 w-32 rounded-md">
          Email me!
        </button>
        <button type='button' className="bg-secondary px-3 py-2 w-32 rounded-md">
          Year Syllabus
        </button>
      </div>
    </>
  );
}