import React from 'react'
import blogImg from "../assets/blogImg.jpg";

function Blog() {
  return (
    <div className="blog lg:py-[107px]">
        <div className="blogshape"></div>
        <div className="container">
          <div className="title text-center">
            <p>News & Blog</p>
            <h2 className="lg:text-[42px] text-[32px] lg:mt-[30px] lg:mb-[76px] mb-10 h2 font-bold">
              Latest News & <span className="text-[#C9F31D] ">Blog</span>
            </h2>
          </div>
          <div className="grid mb-[30px] cards lg:grid-cols-12">
            <div className="card mb-3 lg:mb-[30px] lg:col-span-6 col-span-12 mx-auto">
              <div className="img lg:mr-[10px]">
                <img className="w-full h-full" src={blogImg} alt="" />
              </div>
              <div className="description mt-5 lg:mt-0 ">
                <p>31 February 2025</p>
                <h5 className=" mt-[3px] mb-[6px] font-bold">
                  Beginner Guide of tech industry
                </h5>
                <button id="button" className="flex items-center text-[20px]">
                  Learn More{" "}
                  <span className="p-[8px] ml-[8px] rounded-full bg-[#C9F31D]">
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
            <div  className="card mb-3 lg:mb-[30px] lg:col-span-6 col-span-12 mx-auto">
              <div className="img lg:mr-[10px]">
                <img className="w-full h-full" src={blogImg} alt="" />
              </div>
              <div className="description mt-5 lg:mt-0">
                <p>31 February 2025</p>
                <h5 className=" mt-[3px] mb-[6px] font-bold">
                  Beginner Guide of tech industry
                </h5>
                <button id="button" className="flex items-center text-[20px]">
                  Learn More{" "}
                  <span className="p-[8px] ml-[8px] rounded-full bg-[#C9F31D]">
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
            <div className="card mb-3 lg:mb-[30px] lg:col-span-6 col-span-12 mx-auto">
              <div className="img lg:mr-[10px]">
                <img className="w-full h-full" src={blogImg} alt="" />
              </div>
              <div className="description mt-5 lg:mt-0">
                <p>31 February 2025</p>
                <h5 className=" mt-[3px] mb-[6px] font-bold">
                  Beginner Guide of tech industry
                </h5>
                <button id="button" className="flex items-center text-[20px]">
                  Learn More{" "}
                  <span className="p-[8px] ml-[8px] rounded-full bg-[#C9F31D]">
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
            <div className="card mb-3 lg:mb-0 lg:col-span-6 col-span-12 mx-auto">
              <div className="img lg:mr-[10px]">
                <img className="w-full h-full" src={blogImg} alt="" />
              </div>
              <div className="description mt-5 lg:mt-0">
                <p>31 February 2025</p>
                <h5 className=" mt-[3px] mb-[6px] font-bold">
                  Beginner Guide of tech industry
                </h5>
                <button id="button" className="flex items-center text-[20px]">
                  Learn More{" "}
                  <span className="p-[8px] ml-[8px] rounded-full ">
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
            <div className="card mb-3 lg:mb-[30px] lg:col-span-6 col-span-12 mx-auto">
              <div className="img lg:mr-[10px]">
                <img className="w-full h-full" src={blogImg} alt="" />
              </div>
              <div className="description mt-5 lg:mt-0 ">
                <p>31 February 2025</p>
                <h5 className=" mt-[3px] mb-[6px] font-bold">
                  Beginner Guide of tech industry
                </h5>
                <button id="button" className="flex items-center text-[20px]">
                  Learn More{" "}
                  <span className="p-[8px] ml-[8px] rounded-full bg-[#C9F31D]">
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
            <div  className="card mb-3 lg:mb-0 lg:col-span-6 col-span-12 mx-auto">
              <div className="img lg:mr-[10px]">
                <img className="w-full h-full" src={blogImg} alt="" />
              </div>
              <div className="description mt-5 lg:mt-0">
                <p>31 February 2025</p>
                <h5 className=" mt-[3px] mb-[6px] font-bold">
                  Beginner Guide of tech industry
                </h5>
                <button id="button" className="flex items-center text-[20px]">
                  Learn More{" "}
                  <span className="p-[8px] ml-[8px] rounded-full bg-[#C9F31D]">
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
            <div className="card mb-3 lg:mb-0 lg:col-span-6 col-span-12 mx-auto">
              <div className="img lg:mr-[10px]">
                <img className="w-full h-full" src={blogImg} alt="" />
              </div>
              <div className="description mt-5 lg:mt-0">
                <p>31 February 2025</p>
                <h5 className=" mt-[3px] mb-[6px] font-bold">
                  Beginner Guide of tech industry
                </h5>
                <button id="button" className="flex items-center text-[20px]">
                  Learn More{" "}
                  <span className="p-[8px] ml-[8px] rounded-full bg-[#C9F31D]">
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
            <div className="card mb-3 lg:mb-0 lg:col-span-6 col-span-12 mx-auto">
              <div className="img lg:mr-[10px]">
                <img className="w-full h-full" src={blogImg} alt="" />
              </div>
              <div className="description mt-5 lg:mt-0">
                <p>31 February 2025</p>
                <h5 className=" mt-[3px] mb-[6px] font-bold">
                  Beginner Guide of tech industry
                </h5>
                <button id="button" className="flex items-center text-[20px]">
                  Learn More{" "}
                  <span className="p-[8px] ml-[8px] rounded-full ">
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
      </div>
  )
}

export default Blog