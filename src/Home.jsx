import React from "react";
import DownloadButton from "./DownloadButton";

function Home() {
  return (
    <div className="flex-col-reverse p-8 sm:p-16 md:flex-row flex" id="home">
      <div>
        <h1 className="flex flex-col text-3xl font-bold mt-10 drop-shadow-2xl">
          Hi,I am Adarsh <span>Creative</span>{" "}
          <span className="text-red-500">FrontEnd</span>Web Developer
        </h1>

        <p className="font-semibold text-xl text-gray-600 mt-6">
          I am a positive, enthusiastic and competent Web Developer who has
          built up a diverse range of skills, qualities and attributes that
          guarantee I will perform highly in this role.
        </p>

        <DownloadButton
          href="/Resume/AdarshResume.pdf"
          download={true}
          className="mt-28"
        >
          Download Resume
        </DownloadButton>
      </div>

      <div>
        <img
          className="rounded-full w-full"
          src="https://cdn.discordapp.com/attachments/1004315020668186637/1057988470737481748/IMG_20221229_171806.jpg"
        />
      </div>
    </div>
  );
}
export default Home;
