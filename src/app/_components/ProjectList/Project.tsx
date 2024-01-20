type Props = {
  name: string;
  description: string;
  image: { src: string; alt: string };
  link: string;
  tags: string[];
};

const Project = ({ name, description, image, link, tags }: Props) => {
  return (
    <div className="flex flex-col items-center gap-x-8 rounded-md bg-slate-800 p-3 md:flex-row">
      <div className="shrink-0">
        <a href={link}>
          {!!image.src ? (
            <svg
              className="mr-1 stroke-cyan-600"
              xmlns="http://www.w3.org/2000/svg"
              width={100}
              height={100}
              viewBox="0 0 24 24"
              fill="none"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="16 18 22 12 16 6"></polyline>
              <polyline points="8 6 2 12 8 18"></polyline>
            </svg>
          ) : (
            <img
              className="h-36 w-36 hover:translate-y-1"
              src={image.src}
              alt={image.alt}
              loading="lazy"
            />
          )}
        </a>
      </div>

      <div>
        <div className="flex flex-col items-center gap-y-2 md:flex-row">
          <a className="hover:text-cyan-400" href={link}>
            <h3 className="text-xl font-semibold">{name}</h3>
          </a>
          <div className="ml-3 flex gap-2">
            {tags.map((tag, i) => {
              return (
                <div
                  key={i}
                  className="rounded-md px-2 py-1 text-xs font-semibold bg-sky-400 text-sky-900"
                >
                  {tag}
                </div>
              );
            })}
          </div>
        </div>
        <p className="mt-3 text-gray-400">{description}</p>
      </div>
    </div>
  );
};

export default Project;
