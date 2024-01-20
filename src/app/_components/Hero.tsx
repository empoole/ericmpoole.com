const Hero = () => {
  return (
    <div className="mx-auto max-w-screen-lg px-3 py-6">
      <div className="flex flex-col items-center md:flex-row md:justify-between md:gap-x-24">
        <div>
          <h1 className="text-3xl font-bold">
            <span className="bg-gradient-to-br from-sky-500 to-cyan-400 bg-clip-text text-transparent">
              {"{ "}
            </span>
            Full Stack Software Engineer
            <span className="bg-gradient-to-br from-sky-500 to-cyan-400 bg-clip-text text-transparent">
              {" }"}
            </span>
          </h1>
          <p className="mt-6 text-xl leading-9">
            I&rsquo;m Eric. I&rsquo;ve been a professional software engineer for
            9 years now. I love exploring new technologies and programming
            languages. I&rsquo;m proficient in JavaScript and TypeScript, but
            I&rsquo;m also comfortable with PHP, Java, Ruby, Python, Go and
            whatever else you&rsquo;re using.
          </p>
          <p className="mt-6 text-xl leading-9">
            When I&rsquo;m not coding I like music, gaming and hanging out with
            my son. Not strictly in that order.
          </p>
        </div>
        <div className="shrink-0">
          <img
            className="h-100 w-100 rounded-full"
            src="assets/images/eric_m_poole.jpg"
            alt="A photo of a software engineer."
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
