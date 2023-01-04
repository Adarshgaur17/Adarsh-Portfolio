import React from "react";
function DownloadButton({ className, ...props }) {
  return (
    <a
      {...props}
      className={`bg-red-400 text-white inline-block rounded-sm px-6 py-2 drop-shadow-2xl hover:drop-shadow-xl ${className}`}
    />
  );
}
export default DownloadButton;
