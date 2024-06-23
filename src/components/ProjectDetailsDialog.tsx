import { IProjects } from "../../config";
import { useEffect, useState } from "react";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/16/solid";

export interface IDialogData {
  isOpen: boolean;
  onClose: () => void;
  data: IProjects | null | undefined;
}

function ProjectDetailsDialog(props: IDialogData) {
  console.log(props);
  const [images, setImages] = useState<
    { src?: string; width?: number; height?: number }[]
  >([]);
  useEffect(() => {
    setImages([]);
    if (props?.isOpen && props.data?.supporting_images) {
      props.data.supporting_images!.forEach((element) => {
        const payload = {
          src: element,
        };

        setImages((prev) => [...prev, payload]);
      });
    }
  }, [props]);

  if (!props?.isOpen || !props.data) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-white rounded-3xl p-8 max-h-[80vh] flex flex-col  min-h-[500px] shadow-lg w-3/4 ">
        <div className="flex ">
          <h2 className="text-2xl mb-4 font-semibold">{props.data.name}</h2>{" "}
          <div className="flex-1"></div>
          <div className="flex">
            {props.data.repoUrl && (
              <a
                className="relative  inline-flex items-center text-sm font-medium text-[#7963e0] hover:text-indigo-300 focus-visible:text-indigo-300"
                href={props.data.repoUrl}
                target="_blank"
                title="Open on Github"
                rel="noreferrer noopener"
                aria-label="Open on Github"
              >
                <svg
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  className="size-6 fill-current"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12 2C6.477 2 2 6.463 2 11.97c0 4.404 2.865 8.14 6.839 9.458.5.092.682-.216.682-.48 0-.236-.008-.864-.013-1.695-2.782.602-3.369-1.337-3.369-1.337-.454-1.151-1.11-1.458-1.11-1.458-.908-.618.069-.606.069-.606 1.003.07 1.531 1.027 1.531 1.027.892 1.524 2.341 1.084 2.91.828.092-.643.35-1.083.636-1.332-2.22-.251-4.555-1.107-4.555-4.927 0-1.088.39-1.979 1.029-2.675-.103-.252-.446-1.266.098-2.638 0 0 .84-.268 2.75 1.022A9.607 9.607 0 0 1 12 6.82c.85.004 1.705.114 2.504.336 1.909-1.29 2.747-1.022 2.747-1.022.546 1.372.202 2.386.1 2.638.64.696 1.028 1.587 1.028 2.675 0 3.83-2.339 4.673-4.566 4.92.359.307.678.915.678 1.846 0 1.332-.012 2.407-.012 2.734 0 .267.18.577.688.48 3.97-1.32 6.833-5.054 6.833-9.458C22 6.463 17.522 2 12 2Z"
                  ></path>
                </svg>
              </a>
            )}
            {props.data.url && (
              <a
                target="_blank"
                rel="noreferrer noopener"
                aria-label="Open URL"
                title="Open URL in New Tab"
                className="relative ml-3  inline-flex items-center text-sm font-medium text-[#7963e0] hover:text-indigo-300 focus-visible:text-indigo-300"
                href={props.data.url}
              >
                <ArrowTopRightOnSquareIcon className="text-primary w-6 h-6" />
              </a>
            )}
          </div>
        </div>
        <div className="grid grid-cols-2 gap-1 overflow-auto">
          <div className="r-g-bary grid grid-cols-2 gap-0">
            {images.map((image, index) => (
              <img
                src={image.src}
                key={index}
                alt="product image"
                className=""
              />
            ))}
          </div>

          <div className="content-group h-full overflow-auto">
            <div>
              <h2 className=" mt-[5px] 2xl:text-[22px] xl:text-[20px] lg:text-[18px] md:text-[16px] sm:text-[14px] text-[18px] font-bold">
                <span className="text-[#7963e0]">Project Details</span>
              </h2>
              <p className="pl-2 text-gray-500">{props.data.details}</p>
            </div>
            <div>
              <h2 className="mt-[5px] 2xl:text-[22px] xl:text-[20px] lg:text-[18px] md:text-[16px] sm:text-[14px] text-[18px] font-bold">
                <span className="text-[#7963e0]">Technologies</span>
              </h2>
              <ul
                className="mt-2 flex flex-wrap"
                aria-label="Technologies used:"
              >
                {props.data.tech.map((technology) => (
                  <li key={technology} className="mr-1.5 mt-2">
                    <div className="flex items-center rounded-full bg-primary-400/10 px-3 py-1 text-xs font-medium leading-5 text-primary-300">
                      {technology}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="mt-[5px] 2xl:text-[22px] xl:text-[20px] lg:text-[18px] md:text-[16px] sm:text-[14px] text-[18px] font-bold">
                <span className="text-[#7963e0]">Achievements</span>
              </h2>
              <ul className="pl-2 max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400">
                {props.data.achievements?.map((el) => (
                  <li>{el}</li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="mt-[5px] 2xl:text-[22px] xl:text-[20px] lg:text-[18px] md:text-[16px] sm:text-[14px] text-[18px] font-bold">
                <span className="text-[#7963e0]">Features</span>
              </h2>
              <ul className="max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400 pl-2">
                {props.data.key_features?.map((el) => (
                  <li>{el}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="flex justify-end">
          <button
            onClick={props.onClose}
            className="mt-4 bg-primary-600 text-white px-4 py-2 rounded-full hover:bg-primary-700"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProjectDetailsDialog;
