import React from "react";

interface IVideo {
  vidRef: React.RefObject<HTMLIFrameElement>;
  src: string;
}

export default async function VideoComponent({ vidRef, src }: IVideo) {
  // src={`https://www.youtube.com/embed/${src}?enablejsapi=1`}

  return (
    <iframe
      ref={vidRef}
      className="w-full aspect-video self-stretch min-h-[400px]"
      src={src}
      frameBorder="0"
      title="Overview Video"
      aria-hidden="true"
      allowFullScreen
    />
  );
}
