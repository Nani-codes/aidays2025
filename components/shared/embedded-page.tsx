import React from "react";

export default function ExpandedEmbeddedPage({ url, title }) {
  return (
    <div className="h-screen w-full">
      <iframe src={url} className="size-full" frameBorder="0" title={title}>
        Loading...
      </iframe>
    </div>
  );
}
