import Project from "./Project";

const ProjectList = () => {
  return (
    <section className="mx-auto max-w-screen-lg px-3 py-6">
      <h2 className="mb-6 text-2xl font-bold">Selected Projects</h2>
      <div className="flex flex-col gap-6">
        <Project
          name="Portfolio Website"
          description="This very website."
          link="/"
          image={{
            src: "/assets/images/project-web-design.png",
            alt: "Portfolio website screenshot",
          }}
          tags={["TypeScript", "NextJS", "Tailwind"]}
        />
        <Project
          name="Go Chat"
          description="Go chat is a chat app written in Go. Simple as that."
          link="/"
          image={{
            src: "/assets/images/project-fire.png",
            alt: "Go chat screenshot",
          }}
          tags={["TypeScript", "Vue", "Tailwind", "Go", "MongoDB"]}
        />
        <Project
          name="CourseForge (WIP)"
          description="CorseForge is an education platform written in Go and Typescript. It allows educators to create digital assessments (tests, quizzes, worksheets) and provides tools to organize them, track student progress and monitor trends in performance."
          link="https://github.com/empoole/course-forge-ui"
          image={{
            src: "/assets/images/project-maps.png",
            alt: "CourseForge screenshot",
          }}
          tags={["JavaScript", "React", "Tailwind", "Go", "Postgres"]}
        />
      </div>
    </section>
  );
};

export default ProjectList;
