import parse, { Element, HTMLReactParserOptions, Text } from "html-react-parser";
import hljs, { AutoHighlightResult } from "highlight.js";
import "highlight.js/styles/atom-one-dark.css";

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
