import listIcons from "./list/iconsList";

const DownloadApp = () => {
  return (
    <div className="defaultpadding_download">
      <div className="flex flex-col-reverse gap-8 md:flex-row md:gap-2">
        {/* Image */}
        <div className="">
          <img src="./assets/dashboard.png" alt="" />
        </div>

        {/* Text Block */}
        <div className="flex flex-col items-start justify-center gap-5">
          {/* Text */}
          <div className="flex flex-col gap-3">
            <h2 className="font-medium text-3xl md:text-4xl">
              <span className="text-red-500">Download</span> Chaajao on Android{" "}
              <span className="text-red-500">and</span> iOS!
            </h2>

            <p className="text-sm md:text-base">
              Install our application rightr now and start learning! Get your
              most reliable study partner in your pocket 24/7. Learn anytime and
              anywhere!
            </p>
          </div>

          {/* Icons */}
          <div className="grid grid-cols-2 place-items-center w-full gap-3 md:grid-cols-3 md:place-items-stretch md:gap-0">
            {listIcons.map((img, index) => (
              <img key={index} className="w-36 md:w-44" src={img} alt="" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DownloadApp;
