const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-full aspect-video pt-[20%] px-6 md:px-24 absolute text-white bg-gradient-to-r from from-black">
      <h1 className="text-6xl font-bold">{title}</h1>
      <p className="hidden lg:inline-block py-6 text-lg w-1/2">{overview}</p>
      <div className="flex">
        <button className="bg-white flex p-4 px-12  text-x; text-black  rounded-md hover:bg-opacity-80">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z"
            />
          </svg>
          Play
        </button>
        <button className="bg-gray-500 mx-2 p-4 px-12 text-x; bg-opacity-50 rounded-md flex">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
            />
          </svg>
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
