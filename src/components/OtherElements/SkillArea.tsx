import Image from "next/image";
import "src/styles/otherElements.css";

const SkillArea = () => {
  return (
    <div className="w-full py-20">
      <h1 className="title-deco py-4">
        <span>Skills</span>
      </h1>
      <div className="flex flex-wrap justify-between px-6">
        <div className="skill-card">
          <Image
            src="/skill-icon/html.svg"
            width="0"
            height="0"
            className="h-[55%] w-[55%]"
            alt="html"
          />
        </div>
        <div className="skill-card">
          <Image
            src="/skill-icon/css.svg"
            width="0"
            height="0"
            className="h-[55%] w-[55%]"
            alt="css"
          />
        </div>
        <div className="skill-card">
          <Image
            src="/skill-icon/javascript.svg"
            width="0"
            height="0"
            className="h-[55%] w-[55%]"
            alt="javascript"
          />
        </div>
        <div className="skill-card">
          <Image
            src="/skill-icon/typescript.svg"
            width="0"
            height="0"
            className="h-[55%] w-[55%]"
            alt="typescript"
          />
        </div>
        <div className="skill-card">
          <Image
            src="/skill-icon/react.svg"
            width="0"
            height="0"
            className="h-[55%] w-[55%]"
            alt="react"
          />
        </div>
        <div className="skill-card">
          <Image
            src="/skill-icon/nextjs.svg"
            width="0"
            height="0"
            className="h-[55%] w-[55%]"
            alt="nextjs"
          />
        </div>
        <div className="skill-card">
          <Image
            src="/skill-icon/tailwind.svg"
            width="0"
            height="0"
            className="h-[55%] w-[55%]"
            alt="tailwind"
          />
        </div>
        <div className="skill-card">
          <div className="pr-2">
            <Image
              src="/skill-icon/github.svg"
              width="0"
              height="0"
              className=" h-[90%] w-[90%] pb-2"
              alt="github"
            />
            <Image
              src="/skill-icon/docker.svg"
              width="0"
              height="0"
              className="ml-1 h-[90%] w-[90%]"
              alt="docker"
            />
          </div>
          <Image
            src="/skill-icon/notion.svg"
            width="0"
            height="0"
            className="h-[40%] w-[40%]"
            alt="notion"
          />
        </div>
      </div>
    </div>
  );
};

export default SkillArea;
