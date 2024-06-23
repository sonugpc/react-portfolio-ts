import { ArrowTopRightOnSquareIcon } from "@heroicons/react/16/solid";
import { IProjects } from "../../config";

const ProjectCard = ({ project }: { project: IProjects }) => {
  return (
    <div className="group hover:background-slate-800 border-2 rounded-2xl border-slate-200 relative grid gap-4 p-5 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
      <div className="absolute  z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
      <div className="z-10 cursor-pointer sm:order-2 sm:col-span-6">
        <h3>
          <a
            className="inline-flex items-baseline font-medium leading-tight text-[#7963e0] hover:text-[#677cff] group/link text-base"
            href={project.url}
            target="_blank"
            rel="noreferrer noopener"
          >
            <span className="rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
            <span>{project.name}</span>
          </a>
        </h3>
        <p className="mt-2 text-sm leading-normal">{project.description}</p>
        <a
          className="relative mt-2 inline-flex items-center text-sm font-medium text-[#7963e0] hover:text-indigo-300 focus-visible:text-indigo-300"
          href={project.repoUrl}
          target="_blank"
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
        {project.url && (
          <a
            target="_blank"
            rel="noreferrer noopener"
            aria-label="Open URL"
            title="Open URL in New Tab"
            className="relative ml-3  inline-flex items-center text-sm font-medium text-[#7963e0] hover:text-indigo-300 focus-visible:text-indigo-300"
            href={project.url}
          >
            <ArrowTopRightOnSquareIcon className="text-primary w-6 h-6" />
          </a>
        )}
        <ul className="mt-2 flex flex-wrap" aria-label="Technologies used:">
          {project.tech.map((technology) => (
            <li key={technology} className="mr-1.5 mt-2">
              <div className="flex items-center rounded-full bg-primary-400/10 px-3 py-1 text-xs font-medium leading-5 text-primary-300">
                {technology}
              </div>
            </li>
          ))}
        </ul>
      </div>
      <img
        alt={project.name}
        loading="lazy"
        width="200"
        height="48"
        decoding="async"
        className="rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1"
        src={project.thumb}
        style={{ color: "transparent" }}
      />
    </div>
  );
};

export default ProjectCard;
