"use client";

import parse, {
  Element,
  HTMLReactParserOptions,
  attributesToProps,
  domToReact,
} from "html-react-parser";
import "highlight.js/styles/atom-one-dark.css";

const shortenOptions: HTMLReactParserOptions = {
  replace: (domNode) => {
    const typedDomNode = domNode as Element;
    if (typedDomNode.attribs && typedDomNode.name === "p") {
      return (
        <p
          {...attributesToProps(typedDomNode.attribs)}
          className="txt-limit leading-8 text-black dark:text-[#773B01]"
        >
          {typedDomNode.children && domToReact(typedDomNode.children, shortenOptions)}
        </p>
      );
    }

    return false;
  },
};

const convertBlackOptions: HTMLReactParserOptions = {
  replace: (domNode) => {
    const typedDomNode = domNode as Element;
    if (typedDomNode.attribs && typedDomNode.name === "p") {
      return (
        <p {...attributesToProps(typedDomNode.attribs)} className="text-black dark:text-[#773B01] ">
          {typedDomNode.children && domToReact(typedDomNode.children, convertBlackOptions)}
        </p>
      );
    }

    return false;
  },
};

export const ShortenText = (html: string) => {
  return <>{parse(html, shortenOptions)}</>;
};

export const BlackText = (html: string) => {
  return <>{parse(html, convertBlackOptions)}</>;
};

// const limit = document.querySelector(".txt-limit");
// const str = limit.textContent;
// const len = 50; // 半角50字（全角約25字）
// if (str.length > len) {
//   limit.textContent = str.substring(0, len) + "…";
// }
