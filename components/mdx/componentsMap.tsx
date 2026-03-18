"use client";

import React from "react";
import {
  CodeExample,
  CodeExampleStack,
  CodeExampleGroup,
  CodeBlock,
} from "@/components/mdx/code/CodeExample";

// Map fenced code blocks (```lang) to our CodeExample component.
function PreToCodeExample(props: any) {
  const child = Array.isArray(props.children) ? props.children[0] : props.children;
  const code = typeof child?.props?.children === "string" ? child.props.children : "";
  const className = child?.props?.className || ""; // e.g. language-ts
  const lang = className.replace(/language-/, "") || "txt";
  const meta = child?.props?.metastring || child?.props?.meta || "";
  // simple filename=foo.ts parsing if provided via triple-fence meta
  const match = /filename\s*=\s*([^\s]+)/.exec(meta);
  const filename = match ? match[1].replace(/^"|"$/g, "") : undefined;
  return <CodeExample example={{ lang, code }} className="not-prose" filename={filename} />;
}

export const mdxComponents = {
  // Fenced blocks
  pre: PreToCodeExample,

  // Expose the code components so MDX authors can use them directly if needed
  CodeExample,
  CodeExampleStack,
  CodeExampleGroup,
  CodeBlock,
};
