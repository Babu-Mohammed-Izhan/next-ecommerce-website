const Contact = () => {
  return (
    <div className="container w-11/12 mx-auto md:mt-20">
      <div className="flex items-start justify-center flex-col">
        <h1 className="text-6xl font-bold py-6">Get in touch</h1>
        <p className="pb-3 md:pr-64 text-gray-500">
          Send in your queries using the contact form below!
        </p>
      </div>
      <div className="md:grid md:grid-cols-1 lg:grid-cols-2 mt-20 shadow-2xl rounded">
        <div className=" py-14 bg-gradient-to-br from-blue-500 to-purple-500 text-gray-100 rounded ">
          <div className="w-11/12 mx-auto">
            <h3 className="text-3xl pb-7">Contact Information</h3>
            <p className="py-2">Phone: +91 99445-45113</p>
            <p className="py-2">Email: babuizhan1234@gmail.com</p>
          </div>
        </div>
        <div className="w-11/12 mx-auto h-full md:grid py-14 px-3">
          <h1 className="text-2xl font-semibold pb-6">Send us a Message</h1>
          <form className="w-full">
            <div className="grid md:grid-cols-2 md:gap-x-6 pb-4 w-11/12 md:w-full">
              <div className="flex flex-col">
                <label
                  htmlFor="firstname"
                  className=" text-lg font-semibold pb-2"
                >
                  First Name
                </label>
                <input
                  type="text"
                  name="firstname"
                  id="firstname"
                  className="border-gray-300 border-solid border-2 rounded py-1 px-2"
                />
              </div>
              <div className="flex flex-col">
                <label
                  htmlFor="lastname"
                  className=" text-lg font-semibold pb-2"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  name="lastname"
                  id="lastname"
                  className="border-gray-300 border-solid border-2 rounded py-1 px-2"
                />
              </div>
            </div>
            <div className="flex flex-col md:grid md:grid-cols-2 md:gap-x-6 pb-4 w-11/12 md:w-full">
              <div className="flex flex-col ">
                <label htmlFor="email" className=" text-lg font-semibold pb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="border-gray-300 border-solid border-2 rounded py-1 px-2"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="phone" className="text-lg font-semibold pb-2">
                  Phone
                </label>
                <input
                  type="number"
                  name="phone"
                  id="phone"
                  className="border-gray-300 border-solid border-2 rounded  py-1 px-2"
                />
              </div>
            </div>
            <div className="flex flex-col pb-4 w-11/12 md:w-full">
              <label htmlFor="subject" className="text-lg font-semibold pb-2">
                Subject
              </label>
              <input
                type="text"
                name="subject"
                id="subject"
                className="border-gray-300 border-solid border-2 rounded  py-1 px-2"
              />
            </div>
            <div className="flex flex-col w-11/12 md:w-full ">
              <label htmlFor="message" className="text-lg font-semibold pb-2">
                Message
              </label>
              <textarea
                name="message"
                className="border-gray-300 border-solid border-2 rounded  py-1 px-2"
                cols={40}
                rows={5}
              ></textarea>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
