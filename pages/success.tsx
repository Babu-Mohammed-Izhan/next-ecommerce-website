import Link from "next/link";

const Success = () => {
  return (
    <div className="w-10/12 mx-auto flex flex-col justify-start items-center md:py-20">
      <h1 className="font-bold text-2xl md:text-5xl lg:text-7xl my-12 text-center ">
        Thank you for shopping at{" "}
        <strong className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
          Casity
        </strong>
      </h1>
      <p className="text-center">
        <strong className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
          Casity
        </strong>{" "}
        is created by{" "}
        <strong className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
          Babu Mohammed Izhan
        </strong>{" "}
        using Next.js and Tailwind CSS using Stripe for backend
      </p>
      <div className="w-full max-w-2xl grid grid-cols-1  gap-4 my-8 lg:px-4 lg:mx-0">
        <Link href="/" passHref>
          <a className="text-center p-5 border rounded border-gray-200 hover:border-purple-400">
            Return to Home Screen{" "}
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Success;
