import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "List",
  description: "Embedded list view",
};

export default function NotionListPage() {
  return (
    <div className="w-full h-screen">
      <iframe
        title="Notion List"
        src="https://bow-exception-c92.notion.site/ebd/29a393351d4a803caed6fa04c2fe349c"
        className="w-full h-full border-0"
        frameBorder={0}
        allowFullScreen
      />
    </div>
  );
}

