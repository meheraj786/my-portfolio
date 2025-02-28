import React from 'react'

function Contact() {
  return (
    <div className="contact py-[122px]">
        <div className="container">
          <div className="grid text-center grid-cols-12">
            <div className="lg:col-span-4 col-span-12 flex flex-col items-center lg:text-left lg:items-start justify-center">
              <p>Get in Touch</p>
              <h3>
                Let’s Talk For your
                <span className="text-[#C9F31D] block ">Next Projects</span>
              </h3>
              <p className="lg:w-[349px] w-[100%] px-2 lg:px-0">
              If you have any questions, feel free to reach out to us. Fill out the form below and we will get back to you as soon as possible.

              </p>
              <ul>
                <li className="flex items-center">
                  <span className="mr-[13px] p-[12px] bg-[#C9F31D] rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="25"
                      height="25"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill="currentColor"
                        d="M8.5.75a.75.75 0 0 0-1.5 0v5.19L4.391 3.33a.75.75 0 1 0-1.06 1.061L5.939 7H.75a.75.75 0 0 0 0 1.5h5.19l-2.61 2.609a.75.75 0 1 0 1.061 1.06L7 9.561v5.189a.75.75 0 0 0 1.5 0V9.56l2.609 2.61a.75.75 0 1 0 1.06-1.061L9.561 8.5h5.189a.75.75 0 0 0 0-1.5H9.56l2.61-2.609a.75.75 0 0 0-1.061-1.06L8.5 5.939z"
                      />
                    </svg>
                  </span>
                  2+ Years Experience
                </li>
                <li className="flex items-center">
                  <span className="mr-[13px] p-[12px] bg-[#C9F31D] rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="25"
                      height="25"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill="currentColor"
                        d="M8.5.75a.75.75 0 0 0-1.5 0v5.19L4.391 3.33a.75.75 0 1 0-1.06 1.061L5.939 7H.75a.75.75 0 0 0 0 1.5h5.19l-2.61 2.609a.75.75 0 1 0 1.061 1.06L7 9.561v5.189a.75.75 0 0 0 1.5 0V9.56l2.609 2.61a.75.75 0 1 0 1.06-1.061L9.561 8.5h5.189a.75.75 0 0 0 0-1.5H9.56l2.61-2.609a.75.75 0 0 0-1.061-1.06L8.5 5.939z"
                      />
                    </svg>
                  </span>
                  Responsive and stylish Web Desgin
                </li>
                <li className="flex items-center">
                  <span className="mr-[13px] p-[12px] bg-[#C9F31D] rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="25"
                      height="25"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill="currentColor"
                        d="M8.5.75a.75.75 0 0 0-1.5 0v5.19L4.391 3.33a.75.75 0 1 0-1.06 1.061L5.939 7H.75a.75.75 0 0 0 0 1.5h5.19l-2.61 2.609a.75.75 0 1 0 1.061 1.06L7 9.561v5.189a.75.75 0 0 0 1.5 0V9.56l2.609 2.61a.75.75 0 1 0 1.06-1.061L9.561 8.5h5.189a.75.75 0 0 0 0-1.5H9.56l2.61-2.609a.75.75 0 0 0-1.061-1.06L8.5 5.939z"
                      />
                    </svg>
                  </span>
                  Modern web frameworks
                </li>
                <li className="flex items-center">
                  <span className="mr-[13px] p-[12px] bg-[#C9F31D] rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="25"
                      height="25"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill="currentColor"
                        d="M8.5.75a.75.75 0 0 0-1.5 0v5.19L4.391 3.33a.75.75 0 1 0-1.06 1.061L5.939 7H.75a.75.75 0 0 0 0 1.5h5.19l-2.61 2.609a.75.75 0 1 0 1.061 1.06L7 9.561v5.189a.75.75 0 0 0 1.5 0V9.56l2.609 2.61a.75.75 0 1 0 1.06-1.061L9.561 8.5h5.189a.75.75 0 0 0 0-1.5H9.56l2.61-2.609a.75.75 0 0 0-1.061-1.06L8.5 5.939z"
                      />
                    </svg>
                  </span>
                  Scalable database
                </li>
              </ul>
            </div>
            <div className="lg:col-span-7 mt-10 lg:mt-0 col-span-12 lg:ml-auto">
              <div className="grid grid-cols-12">
                <div className="lg:col-span-6 col-span-12 lg:mr-[38px] flex flex-col lg:text-left lg:ml-auto">
                  <label htmlFor="name">Full Name</label>
                  <input
                    className="p-[22px] lg:w-[350px] h-[68px] rounded-[20px] bg-black mb-[30px] mt-[11px]"
                    placeholder="Enter Your Name"
                    type="text"
                  />
                </div>
                <div className="lg:col-span-6 lg:text-left col-span-12 flex flex-col lg:ml-auto">
                  <label htmlFor="email" type="email">
                    Email Address
                  </label>
                  <input
                    className="p-[22px] lg:w-[350px] h-[68px] rounded-[20px] bg-black mb-[30px] mt-[11px]"
                    placeholder="Enter Your e-mail"
                    type="text"
                  />
                </div>
                <div className="lg:col-span-6 lg:text-left col-span-12 lg:mr-[38px] flex flex-col lg:ml-auto">
                  <label htmlFor="phonenumber">Phone Number</label>
                  <input
                    className="p-[22px] lg:w-[350px] h-[68px] rounded-[20px] bg-black mb-[30px] mt-[11px]"
                    placeholder="Enter Your Phone Number"
                    type="phone"
                  />
                </div>
                <div className="lg:col-span-6 lg:text-left col-span-12 flex flex-col lg:ml-auto">
                  <label htmlFor="name">Subject</label>
                  <input
                    className="p-[22px] lg:w-[350px] h-[68px] rounded-[20px] bg-black mb-[30px] mt-[11px]"
                    placeholder="Enter the subject"
                    type="text"
                  />
                </div>
                <div className="col-span-12 lg:text-left flex flex-col lg:ml-auto">
                  <label htmlFor="name">Text Area</label>
                  <input
                    type="text"
                    className="textArea mb-[30px] mt-[11px] rounded-[20px] bg-black pt-[22px] lg:pr-[540px] pb-[145px] pl-[25px]"
                    placeholder="Type Your Message Here"
                  />
                </div>
              </div>
              <div className="button flex flex-center">
                <button className=" flex items-center mt-[68px] bg-[#C9F31D] rounded-[20px] p-[20px] text-[#131313]">
                  Send Message{" "}
                  <span className="ml-[10px]">
                    <svg
                      className="rotate-45"
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="30"
                      viewBox="0 0 15 15"
                    >
                      <path
                        fill="currentColor"
                        d="M8.293 2.293a1 1 0 0 1 1.414 0l4.5 4.5a1 1 0 0 1 0 1.414l-4.5 4.5a1 1 0 0 1-1.414-1.414L11 8.5H1.5a1 1 0 0 1 0-2H11L8.293 3.707a1 1 0 0 1 0-1.414"
                      />
                    </svg>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="glowShape"></div>
      </div>
  )
}

export default Contact