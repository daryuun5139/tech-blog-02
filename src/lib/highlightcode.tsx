import parse, { Element, HTMLReactParserOptions, Text } from "html-react-parser";
import { AutoHighlightResult } from "highlight.js";
import "highlight.js/styles/atom-one-dark.css";
import hljs from "highlight.js/lib/core"; //修正部分
import javascript from "highlight.js/lib/languages/javascript";
import typescript from "highlight.js/lib/languages/typescript";
import css from "highlight.js/lib/languages/css";

hljs.registerLanguage("javascript", javascript);
hljs.registerLanguage("typescript", typescript);
hljs.registerLanguage("css", css);

const parseOptions: HTMLReactParserOptions = {
  replace: (domNode) => {
    // if (!(domNode instanceof Element && domNode?.attribs)) {
    //   return undefined
    // }
    const typedDomNode = domNode as Element;
    if (typedDomNode.attribs && typedDomNode.name === "code") {
      const result: AutoHighlightResult = hljs.highlightAuto(
        (typedDomNode.children[0] as Text).data
      );
      const dom = parse(result.value);

      return <code className="hljs">{dom}</code>;
    }
    return false;
  },
};

export default function HighlightCode(content: string) {
  const contentReact = parse(content, parseOptions);
  return <div>{contentReact}</div>;
}
