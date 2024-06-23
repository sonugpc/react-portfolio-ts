import { EDUCATION, EXPERIENCE } from "../../config";

function Experience() {
  return (
    <section
      id="experience"
      className="section-experience bg-[#f6f8ff] relative"
    >
      <div className="relative pt-[60px]">
        <img
          src="https://maraviyainfotech.com/projects/borox-tailwind/borox-tailwind/assets/img/shape/bg-shape.png"
          alt="bg-shape"
          className="absolute top-0 left-0 right-0 w-full bg-center bg-cover"
        />
      </div>
      <div className="2xl:pb-[80px] pb-[70px] 2xl:pt-[80px] md:pt-[70px] pt-[20px]">
        <div
          className="banner text-center mb-[30px] aos-init aos-animate"
          data-aos="fade-up"
          data-aos-duration="2000"
          data-aos-delay="300"
        >
          <span className="text-[14px] text-[#777]">QUALIFICATION</span>
          <h2 className="text-center mt-[5px] 2xl:text-[35px] xl:text-[33px] lg:text-[30px] md:text-[26px] sm:text-[24px] text-[22px] font-bold">
            My <span className="text-[#7963e0]"> ACHIEVEMENTS</span>
          </h2>
        </div>
        <div className="flex flex-wrap justify-between items-center mx-auto mx-auto 2xl:max-w-[1320px] xl:max-w-[1140px] lg:max-w-[960px] md:max-w-[720px] sm:max-w-[540px] max-[320px]:px-[12px] px-6 relative">
          <img
            src="assets/img/shape/shape-8.png"
            alt="shape-8"
            className="absolute w-12 -top-10 right-10"
          />
          <div className="absolute -top-10 left-10 h-12 w-12 bg-[#f1c7a1] rounded-full"></div>
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-[30px]">
            <div className="transition-all justify-start items-start">
              <h2 className="text-[20px] font-bold leading-[24px]">
                Education
              </h2>
              <div className="border-l-2 border-gray-300 pl-6">
                {EDUCATION.map((edu, index) => (
                  <div
                    key={index}
                    className="p-[30px] bg-white rounded-3xl mt-8 relative aos-init aos-animate"
                    data-aos="fade-up"
                    data-aos-duration="2000"
                    data-aos-delay="400"
                  >
                    <div className="absolute top-0 bottom-0 -left-6 w-4">
                      <span className="w-4 h-4 border-2 border-[#7963e0] rounded-full block bg-[#f6f8ff] absolute top-28 -left-2.5"></span>
                      <span className="w-5 border border-[#7963e0] block bg-[#f6f8ff] absolute top-28 my-1.5 left-1.5"></span>
                    </div>
                    <span className="text-[#777] text-[12px] font-medium">
                      {edu.years}
                    </span>
                    <h4 className="text-[16px] leading-[22px] font-semibold mt-[15px] mb-[6px] text-[#7963e0]">
                      {edu.degree}
                      <span className="ml-[15px] text-[#999] text-[14px]">
                        - {edu.percentage}
                      </span>
                    </h4>
                    <p className="text-[13px] text-[#777] mb-0 leading-[28px]">
                      {edu.institution}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div
              className="transition-all 2xl:mt-0 lg:mt-0 xl:mt-0 mt-[15px] justify-start items-start aos-init aos-animate"
              data-aos="fade-up"
              data-aos-duration="2000"
              data-aos-delay="300"
            >
              <h2 className="text-[20px] font-bold leading-[24px]">
                Experience
              </h2>
              <div className="border-l-2 border-gray-300 pl-6">
                {EXPERIENCE.map((ex, index) => (
                  <div
                    key={index}
                    className="p-[30px] bg-white rounded-3xl mt-8 relative aos-init aos-animate"
                    data-aos="fade-up"
                    data-aos-duration="2000"
                    data-aos-delay="400"
                  >
                    <div className="absolute  right-2 w-28">
                      <img src={ex.logoUrl} />
                    </div>
                    <div className="absolute top-0 bottom-0 -left-6 w-4">
                      <span className="w-4 h-4 border-2 border-[#7963e0] rounded-full block bg-[#f6f8ff] absolute top-28 -left-2.5"></span>
                      <span className="w-5 border border-[#7963e0] block bg-[#f6f8ff] absolute top-28 my-1.5 left-1.5"></span>
                    </div>
                    <span className="text-[#777] text-[12px] font-medium">
                      {ex.years}
                    </span>
                    <h4 className="text-[16px] leading-[22px] font-semibold mt-[15px] mb-[6px] text-[#7963e0]">
                      {ex.company}
                      <span className="ml-[15px] text-[#999] text-[14px]">
                        - {ex.title}
                      </span>
                    </h4>
                    <p className="text-[13px] text-[#777] mb-0 leading-[28px]">
                      {ex.responsibilities.map((responsibility, index) => (
                        <li
                          key={index}
                          className="flex items-center space-x-3 rtl:space-x-reverse"
                        >
                          <svg
                            className="flex-shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 16 12"
                          >
                            <path
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M1 5.917 5.724 10.5 15 1.5"
                            />
                          </svg>
                          <span>{responsibility}</span>
                        </li>
                      ))}
                    </p>
                    <ul
                      className="mt-2 flex flex-wrap"
                      aria-label="Technologies used:"
                    >
                      {ex.technologies.map((technology) => (
                        <li key={technology} className="mr-1.5 mt-2">
                          <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                            {technology}
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
