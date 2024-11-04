import iconsList from "./list/iconsList";
import infoList from "./list/infoList";

const Footer = () => {
  // Horizontal Line
  const HorizontalLine = () => (
    <div className="w-full border-[1px] border-zinc-500" />
  );

  return (
    <div className="defaultpadding_footer bg-footer text-white flex flex-col gap-12">
      {/* 1st Section */}
      <div className="flex flex-col gap-3 md:gap-10">
        {/* List */}
        <div className="flex flex-col gap-10 md:flex-row md:justify-between md:gap-12">
          {/* Social Icon */}
          <div className="flex flex-col gap-5 w-full">
            <img
              className="w-36 md:w-28"
              src="./assets/footer/logo.svg"
              alt=""
            />
            <p className="font-light">
              The premium one-stop online learning platform for students all
              around the globe!
            </p>
            <div className="flex space-x-2">
              {iconsList.map((icon, index) => (
                <div key={index} className="bg-primary p-2 rounded-[4px]">
                  {icon}
                </div>
              ))}
            </div>
          </div>

          {/* Company */}
          <div className="flex flex-col gap-1 w-1/2">
            <h2 className="font-semibold text-lg">Company</h2>
            <a href="#">About Us</a>
            <a href="#">Contact Us</a>
          </div>

          {/* Courses */}
          <div className="flex flex-col gap-1 w-1/2">
            <h2 className="font-semibold text-lg">Courses</h2>
            <a href="#">SAT</a>
            <a href="#">ECAT</a>
            <a href="#">MDCAT</a>
            <a href="#">BCAT</a>
            <a href="#">IX-X</a>
            <a href="#">XI-XII</a>
          </div>

          {/* Other lInks */}
          <div className="flex flex-col gap-1 w-1/2">
            <h2 className="font-semibold text-lg">Other Links</h2>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms & Conditions</a>
          </div>

          {/* Get App */}
          <div className="flex flex-col gap-3 w-1/2">
            <h2 className="font-semibold text-lg">Get App</h2>
            <img className="w-52" src="./assets/google_play.svg" alt="" />
            <img className="w-52" src="./assets/apple_store.svg" alt="" />
          </div>
        </div>

        {/* Horizontal Line */}
        <HorizontalLine />
      </div>

      {/* 2nd Section */}
      <div className="flex flex-col gap-3 md:gap-10">
        {/* List */}
        <div className="flex flex-col gap-5 md:flex-row md:gap-52">
          {/* Call Us & Email Us */}
          {infoList.map(({ icon, text, title }) => (
            <div className="flex flex-col gap-4 md:flex-row items-center">
              <div className="p-4 bg-primary w-fit rounded-md">{icon}</div>
              <div>
                <h2 className="font-bold tracking-wide">{title}</h2>
                <p>{text}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Horizontal Line */}
        <HorizontalLine />
      </div>

      {/* 3rd Section */}
      <div>
        <p className="text-center text-sm font-medium tracking-wider">
          Copyright ©️2024 Chaajao Technologies - All Rights Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
