import blogList from "./blogList";

const Blogs = () => {
  return (
    <div className="defaultpadding_blogs">
      <div className="overflow-x-scroll sm:overflow-x-auto">
        {/* List of Blog */}
        <div className="flex px-2 sm:grid sm:grid-cols-2 md:flex">
          {blogList.map(({ img, title }, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-4 w-full cursor-pointer p-2"
            >
              <img className="w-24 sm:w-64 md:w-28" src={img} alt="" />
              <h3 className="text-sm text-center font-semibold w-32 h-full sm:w-full">
                {title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
