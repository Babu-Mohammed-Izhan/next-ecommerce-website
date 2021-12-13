import Link from "next/link";
const Footer = () => {
  const arr = [
    {
      title: "CATEGORIES",
      links: [
        { name: "Anime", link: "/" },
        { name: "SuperHeroes", link: "/" },
        { name: "Abstract", link: "/" },
        { name: "Shades", link: "/" },
      ],
    },
    {
      title: "QUERIES",
      links: [
        { name: "Customer Support", link: "#" },
        { name: "About", link: "#" },
        { name: "Members", link: "#" },
        { name: "Career", link: "#" },
      ],
    },
    {
      title: "TOOLS USED",
      links: [
        { name: "Nextjs", link: "#" },
        { name: "Tailwind", link: "#" },
        { name: "Shopify", link: "#" },
        { name: "Stripe", link: "#" },
      ],
    },
    {
      title: "SOCIALS",
      links: [
        { name: "Twitter", link: "#" },
        { name: "GitHub", link: "#" },
        { name: "LinkedIn", link: "#" },
        { name: "Instagram", link: "#" },
      ],
    },
  ];

  return (
    <footer className="text-gray-600 body-font">
      <div
        className="
      container
      px-5
      py-24
      mx-auto
      flex
      md:items-center
      lg:items-start
      md:flex-row md:flex-nowrap
      flex-wrap flex-col
    "
      >
        <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
          <Link href="/" passHref>
            <span
              className=" bg-clip-text text-transparent
                 bg-gradient-to-r 
                 from-blue-500 
                 to-purple-500
                  text-3xl
                 cursor-pointer
                 font-semibold
                 "
            >
              Casey
            </span>
          </Link>
          <p className="mt-2 text-sm text-gray-500">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi,
            quam?
          </p>
        </div>
        <div
          className="
        flex-grow flex flex-wrap
        md:pl-20
        -mb-10
        md:mt-0
        mt-10
        md:text-left
        text-center
      "
        >
          {arr.map((a) => {
            return (
              <div key={a.title} className="lg:w-1/4 md:w-1/2 w-full px-4">
                <h2
                  className="
            title-font
            font-medium
            text-gray-900
            tracking-widest
            text-sm
            mb-3
          "
                >
                  {a.title}
                </h2>
                <nav className="list-none mb-10">
                  {a &&
                    a.links.map((l) => {
                      return (
                        <Link href={l.link} key={l.name} passHref>
                          <li>
                            <a className="text-gray-600 hover:text-gray-800 cursor-pointer">
                              {l.name}
                            </a>
                          </li>
                        </Link>
                      );
                    })}
                </nav>
              </div>
            );
          })}
        </div>
      </div>
      <div className="bg-gray-100">
        <div
          className="
        container
        mx-auto
        py-4
        px-5
        flex flex-wrap flex-col
        sm:flex-row
      "
        >
          <p className="text-gray-500 text-sm text-center sm:text-left">
            Made By
            <a
              href="https://babumohammedizhan.netlify.app/"
              className="text-purple-500 ml-1 font-bold"
              target="_blank"
              rel="noreferrer"
            >
              Babu Mohammed Izhan
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
