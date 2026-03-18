"use client";

import React, { useEffect, useMemo, useState } from "react";
import type { Highlighter } from "shiki";
import { transformerNotationDiff, transformerNotationHighlight, transformerNotationWordHighlight } from "@shikijs/transformers";

function classNames(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(" ");
}

function CopyButton({ value, className }: { value: string; className?: string }) {
  async function onCopy() {
    try {
      await navigator.clipboard.writeText(value);
    } catch {}
  }
  return (
    <button onClick={onCopy} className={classNames("text-xs", className)} aria-label="Copy code">
      Copy
    </button>
  );
}

export function CodeExample({
  example,
  filename,
  className = "",
  copyable = false,
}: {
  example: { lang: string; code: string };
  filename?: string;
  className?: string;
  copyable?: boolean;
}) {
  return (
    <CodeExampleWrapper className={className}>
      <div className="relative">
        {filename ? <CodeExampleFilename filename={filename} /> : null}
        {copyable && (
          <CopyButton
            className={classNames(
              "absolute z-10 transition duration-150",
              filename ? "-top-1 right-0 text-white/50 hover:text-white/75" : "top-2 right-2 text-white/75 hover:text-white",
            )}
            value={example.code}
          />
        )}
      </div>
      <HighlightedCode example={example} />
    </CodeExampleWrapper>
  );
}

export function CodeExampleWrapper({ className, children }: { className?: string; children: React.ReactNode }) {
  return (
    <div className="rounded-xl bg-gray-950">
      <div className={classNames("rounded-xl p-1 text-sm scheme-dark bg-white/5", className)}>{children}</div>
    </div>
  );
}

export function CodeExampleStack({ children }: { children: React.ReactNode }) {
  return (
    <div data-stack>
      <div className="not-prose rounded-xl">{children}</div>
    </div>
  );
}

export function CodeExampleGroup({
  filenames,
  children,
  className = "",
}: {
  filenames: string[];
  children: React.ReactNode;
  className?: string;
}) {
  const [index, setIndex] = useState(0);
  const tabs = React.Children.toArray(children);

  return (
    <div className="not-prose">
      <div className="rounded-xl bg-gray-950">
        <div className={classNames("rounded-xl p-1 text-sm scheme-dark bg-white/5", className)}>
          <div className="flex gap-2 px-2 py-1">
            {filenames.map((name, i) => (
              <button
                key={name}
                onClick={() => setIndex(i)}
                className={classNames(
                  "px-2 py-1 text-xs rounded",
                  i === index ? "bg-white/10 text-white" : "text-white/70 hover:text-white"
                )}
              >
                {name}
              </button>
            ))}
          </div>
          <div>{tabs[index]}</div>
        </div>
      </div>
    </div>
  );
}

export function CodeBlock({ example }: { example: { lang: string; code: string } }) {
  return <HighlightedCode example={example} />;
}

export function HighlightedCode({
  example,
  className,
}: {
  example: { lang: string; code: string };
  className?: string;
}) {
  const [html, setHtml] = useState<string>("");

  useEffect(() => {
    let cancelled = false;
    async function run() {
      const content = example.code ?? "";
      const lang = example.lang || "txt";
      try {
        const hl = await getHighlighter();
        if (cancelled) return;
        const out = hl
          .codeToHtml(content, {
            lang,
            theme: "github-dark",
            transformers: [
              transformerNotationHighlight({
                classActiveLine: "-mx-5 pl-[calc(var(--spacing)*5-2px)] border-l-2 pr-5 border-sky-400 bg-sky-300/15",
              }),
              transformerNotationDiff({
                classLineAdd:
                  "relative -mx-5 border-l-4 border-teal-400 bg-teal-300/15 pr-5 pl-8 before:absolute before:left-4 before:text-teal-400 before:content-['+']",
                classLineRemove:
                  "relative -mx-5 border-l-4 border-red-400 bg-red-300/15 pr-5 pl-8 before:absolute before:left-4 before:text-red-400 before:content-['-']",
                classActivePre: "[:where(&_.line)]:pl-4",
              }),
              transformerNotationWordHighlight({
                classActiveWord:
                  "highlighted-word relative before:absolute before:-inset-x-0.5 before:-inset-y-0.25 before:-z-10 before:block before:rounded-sm before:bg-[lab(19.93_-1.66_-9.7)] [.highlighted-word_+_&]:before:rounded-l-none",
              }),
            ],
          });
        setHtml(out);
      } catch (e) {
        // Fallback: plain escaped content if highlighting fails
        const esc = (s: string) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
        const lines = esc(content).split("\n");
        const rendered = lines
          .map((line) => `<div class=\"line\">${line === "" ? "&nbsp;" : line}</div>`)
          .join("");
        setHtml(`<pre class=\"code-block\"><code class=\"language-${lang}\">${rendered}</code></pre>`);
      }
    }
    run();
    return () => {
      cancelled = true;
    };
  }, [example.code, example.lang]);

  return <div className={className} dangerouslySetInnerHTML={{ __html: html }} />;
}

function CodeExampleFilename({ filename }: { filename: string }) {
  return <div className="px-3 pt-0.5 pb-1.5 text-xs/5 text-gray-400">{filename}</div>;
}

let highlighterInstance: Highlighter | null = null;
let highlighterPromise: Promise<Highlighter> | null = null;
async function getHighlighter(): Promise<Highlighter> {
  if (highlighterInstance) return highlighterInstance;
  if (!highlighterPromise) {
    highlighterPromise = import("shiki").then(({ createHighlighter }) =>
      createHighlighter({
        themes: ["github-dark"],
        langs: [
          "css",
          "html",
          "js",
          "json",
          "jsx",
          "mdx",
          "sh",
          "svelte",
          "ts",
          "tsx",
          "vue",
          "md",
          "erb",
          "rb",
        ],
      })
    ).then((h) => {
      highlighterInstance = h;
      return h;
    });
  }
  return highlighterPromise;
}
