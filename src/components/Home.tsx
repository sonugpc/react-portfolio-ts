import { AppConfig, Translations } from "../../config";

function Home() {
  return (
    <div className="section-hero bg-[#f6f8ff] relative">
      <div className="flex flex-wrap justify-between items-center mx-auto mx-auto 2xl:max-w-[1320px] xl:max-w-[1140px] lg:max-w-[960px] md:max-w-[720px] sm:max-w-[540px] py-[80px] px-4">
        <div
          className="w-full 2xl:h-[90vh] lg:h-[80vh] h-[70vh] max-[320px]:h-[50vh] flex items-center px-2 2xl:max-w-lg xl:max-w-lg lg:max-w-lg lg:w-1/2 lg:mx-0 md:max-w-lg md:w-1/2 md:mx-0 2xl:w-1/2 xl:w-1/2 sm:items-center aos-init aos-animate"
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          <div className="text-center 2xl:text-left xl:text-left lg:text-left md:text-left h-72">
            <span className="text-[#7963e0] text-[18px] font-bold">
              Hello, My name is
            </span>
            <h1 className="text-dark-800 2xl:text-[60px] xl:text-[55px] lg:text-[50px] md:text-[45px] text-[40px] font-bold">
              {AppConfig.FULL_NAME}
            </h1>
            <h2 className="py-4 text-dark-800 text-[20px] font-bold">
              I am A {AppConfig.POSITION}
            </h2>
            <p className="pt-2 text-gray-500 text-base">
              {AppConfig.INTRO_SECTION}
            </p>
            <button
              type="button"
              onClick={() => window.open(AppConfig.RESUME_URL, "_blank")}
              className="text-white mt-8 bg-[#7963e0] hover:bg-opacity-80 no-underline font-medium rounded-full text-sm px-8 py-2.5 mr-2 dark:bg-blue-600 dark:hover:bg-blue-700"
            >
              {Translations.DOWNLOAD_CV}
            </button>
          </div>
        </div>
        <div className="w-1/2 hidden px-2 2xl:block xl:block lg:block md:block z-10">
          <img
            src="https://maraviyainfotech.com/projects/borox-tailwind/borox-tailwind/assets/img/home/girl.png"
            alt="profile picture"
            className="max-h-full"
          />
        </div>
      </div>
      <div className="relative">
        <img
          src="https://maraviyainfotech.com/projects/borox-tailwind/borox-tailwind/assets/img/shape/hero-shape.png"
          alt="hero-shape"
          className="absolute bottom-0 left-0 right-0 w-full z-10 bg-center bg-cover"
        />
      </div>
    </div>
  );
}

export default Home;
