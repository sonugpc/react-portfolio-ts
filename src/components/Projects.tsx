import { useState } from "react";
import { AppProjects, IProjects } from "../../config";
import ProjectCard from "./ProjectCard";
import ProjectDetailsDialog from "./ProjectDetailsDialog";

function Projects() {
  const [isOpen, setIsOpen] = useState(false);
  const [dialogData, setDialogData] = useState<IProjects | null>();

  const openDialogBox = (project: IProjects | null) => {
    setDialogData(project);
    setIsOpen(true);
  };
  const closeDialog = () => {
    setIsOpen(false);
    setDialogData(null);
  };

  return (
    <>
      <section
        id="service"
        className="2xl:py-[80px] py-[70px] bg-white relative"
      >
        <div
          data-aos="fade-up"
          data-aos-duration="2000"
          data-aos-delay="300"
          className="aos-init aos-animate"
        >
          <img
            src="https://maraviyainfotech.com/projects/borox-tailwind/borox-tailwind/assets/img/shape/shape-6.png"
            alt="shape"
            className="absolute w-12 h-12 top-28 right-40"
          />
        </div>
        <div
          className="banner text-center mb-[30px] px-6 aos-init aos-animate"
          data-aos="fade-up"
          data-aos-duration="2000"
          data-aos-delay="300"
        >
          <span className="text-[14px] text-[#777]">Projects</span>
          <h2 className="text-center mt-[5px] 2xl:text-[35px] xl:text-[33px] lg:text-[30px] md:text-[26px] sm:text-[24px] text-[22px] font-bold">
            <span className="text-[#7963e0]">Projects</span>
          </h2>
          <div className="projects grid grid-cols-3 gap-4  w-full">
            {AppProjects.map((project) => (
              <div
                onClick={() => openDialogBox(project)}
                className=""
                key={project.id}
              >
                <ProjectCard project={project} />
              </div>
            ))}
          </div>
        </div>

        <div
          className="2xl:border-b 2xl:pt-24 lg:border-b lg:pt-12 pt-0 flex flex-wrap justify-between items-center mx-auto 2xl:max-w-[1320px] xl:max-w-[1140px] lg:max-w-[960px] md:max-w-[720px] sm:max-w-[540px] px-6 aos-init aos-animate"
          data-aos="fade-up"
          data-aos-duration="2000"
          data-aos-delay="300"
        ></div>
      </section>

      <ProjectDetailsDialog
        isOpen={isOpen}
        onClose={closeDialog}
        data={dialogData}
      />
    </>
  );
}

export default Projects;
