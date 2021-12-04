const About = () => {
  return (
    <div className="w-10/12 mx-auto flex flex-col justify-start items-center">
      <h1 className="font-bold text-3xl md:text-5xl lg:text-7xl my-12">
        Welcome to{" "}
        <strong className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
          Casey
        </strong>
      </h1>
      <p className="text-center">
        Created by{" "}
        <strong className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
          Babu Mohammed Izhan
        </strong>{" "}
        using Next.js and Tailwind CSS using Stripe for backend
      </p>
      <div className="w-full max-w-2xl grid grid-cols-1 lg:grid-cols-2 gap-4 my-8 lg:px-4 lg:mx-0">
        <a
          href="https://github.com/Babu-Mohammed-Izhan"
          target="_blank"
          className="p-5 border rounded border-gray-200 hover:border-purple-400"
          rel="noreferrer"
        >
          <h3>Github →</h3>
        </a>
        <a
          href="https://www.linkedin.com/in/babu-mohammed-izhan-3a327720b/"
          target="_blank"
          className="p-5 border rounded border-gray-200 hover:border-purple-400"
          rel="noreferrer"
        >
          <h3>LinkedIn →</h3>
        </a>
        <a
          href="https://babumohammedizhan.netlify.app/"
          target="_blank"
          className="p-5 border rounded border-gray-200 hover:border-purple-400"
          rel="noreferrer"
        >
          <h3>Portfolio →</h3>
        </a>
        <a
          href="https://twitter.com/babu_izhan"
          target="_blank"
          className="p-5 border rounded border-gray-200 hover:border-purple-400"
          rel="noreferrer"
        >
          <h3>Twitter →</h3>
        </a>
      </div>
    </div>
  );
};

export default About;
