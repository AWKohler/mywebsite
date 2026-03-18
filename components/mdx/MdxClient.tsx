"use client";

import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { mdxComponents } from "@/components/mdx/componentsMap";

export default function MdxClient({ source }: { source: MDXRemoteSerializeResult }) {
  return <MDXRemote {...source} components={mdxComponents as any} />;
}
