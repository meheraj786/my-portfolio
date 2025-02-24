import React from "react";
import bannerShape from "../assets/Group 31.png";
import "../css/home.css";

function Home() {
  return (
    <>
      {/* banner start  */}
      <div className="banner">
        <div className="container pt-[113px] pb-[98px]">
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-12 lg:col-span-5">
              <p className="text-[#C9F31D] text-[32px] font-medium">
                Hello I’m
              </p>
              <h1
                id="name"
                className="w-[402px] text-[98px] font-bold mt-[27px] mb-[12px]"
              >
                Meheraj Hosen
              </h1>
              <p className="text-[32px] font-medium">
                I’m a{" "}
                <span className="text-[#C9F31D]">MERN Stack Developer</span>
              </p>
              <p className="w-[450px] mt-[27px] mb-[63px]">
                A passionate web developer based from Bangladesh.With a keen eye
                for detail and a passion for web design, I specialize in
                creating visually captivating and highlyfunctional websites
              </p>
              <button id="button" className="flex items-center text-[20px]">
                Download CV{" "}
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
            <div className="col-span-12 lg:col-span-7 flex items-center justify-end">
              <img src={bannerShape} />
            </div>
          </div>
        </div>
        <div className="shapePurple"></div>
        <div className="shapeBlue"></div>
      </div>
      {/* banner end  */}
      {/* marquee start */}
      <div className="marquee flex items-center">
        <marquee behavior="" direction="" scrollmount="200">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="77"
              height="77"
              viewBox="0 0 16 16"
            >
              <path
                fill="currentColor"
                d="M8.5.75a.75.75 0 0 0-1.5 0v5.19L4.391 3.33a.75.75 0 1 0-1.06 1.061L5.939 7H.75a.75.75 0 0 0 0 1.5h5.19l-2.61 2.609a.75.75 0 1 0 1.061 1.06L7 9.561v5.189a.75.75 0 0 0 1.5 0V9.56l2.609 2.61a.75.75 0 1 0 1.06-1.061L9.561 8.5h5.189a.75.75 0 0 0 0-1.5H9.56l2.61-2.609a.75.75 0 0 0-1.061-1.06L8.5 5.939z"
              />
            </svg>
          </span>
          <h2>Web Developer</h2>
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="77"
              height="77"
              viewBox="0 0 16 16"
            >
              <path
                fill="currentColor"
                d="M8.5.75a.75.75 0 0 0-1.5 0v5.19L4.391 3.33a.75.75 0 1 0-1.06 1.061L5.939 7H.75a.75.75 0 0 0 0 1.5h5.19l-2.61 2.609a.75.75 0 1 0 1.061 1.06L7 9.561v5.189a.75.75 0 0 0 1.5 0V9.56l2.609 2.61a.75.75 0 1 0 1.06-1.061L9.561 8.5h5.189a.75.75 0 0 0 0-1.5H9.56l2.61-2.609a.75.75 0 0 0-1.061-1.06L8.5 5.939z"
              />
            </svg>
          </span>
          <h3>Designer</h3>
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="77"
              height="77"
              viewBox="0 0 16 16"
            >
              <path
                fill="currentColor"
                d="M8.5.75a.75.75 0 0 0-1.5 0v5.19L4.391 3.33a.75.75 0 1 0-1.06 1.061L5.939 7H.75a.75.75 0 0 0 0 1.5h5.19l-2.61 2.609a.75.75 0 1 0 1.061 1.06L7 9.561v5.189a.75.75 0 0 0 1.5 0V9.56l2.609 2.61a.75.75 0 1 0 1.06-1.061L9.561 8.5h5.189a.75.75 0 0 0 0-1.5H9.56l2.61-2.609a.75.75 0 0 0-1.061-1.06L8.5 5.939z"
              />
            </svg>
          </span>
          <h4>MERN Stack</h4>
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="77"
              height="77"
              viewBox="0 0 16 16"
            >
              <path
                fill="currentColor"
                d="M8.5.75a.75.75 0 0 0-1.5 0v5.19L4.391 3.33a.75.75 0 1 0-1.06 1.061L5.939 7H.75a.75.75 0 0 0 0 1.5h5.19l-2.61 2.609a.75.75 0 1 0 1.061 1.06L7 9.561v5.189a.75.75 0 0 0 1.5 0V9.56l2.609 2.61a.75.75 0 1 0 1.06-1.061L9.561 8.5h5.189a.75.75 0 0 0 0-1.5H9.56l2.61-2.609a.75.75 0 0 0-1.061-1.06L8.5 5.939z"
              />
            </svg>
          </span>
          <h2>Web Developer</h2>
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="77"
              height="77"
              viewBox="0 0 16 16"
            >
              <path
                fill="currentColor"
                d="M8.5.75a.75.75 0 0 0-1.5 0v5.19L4.391 3.33a.75.75 0 1 0-1.06 1.061L5.939 7H.75a.75.75 0 0 0 0 1.5h5.19l-2.61 2.609a.75.75 0 1 0 1.061 1.06L7 9.561v5.189a.75.75 0 0 0 1.5 0V9.56l2.609 2.61a.75.75 0 1 0 1.06-1.061L9.561 8.5h5.189a.75.75 0 0 0 0-1.5H9.56l2.61-2.609a.75.75 0 0 0-1.061-1.06L8.5 5.939z"
              />
            </svg>
          </span>
          <h3>Designer</h3>
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="77"
              height="77"
              viewBox="0 0 16 16"
            >
              <path
                fill="currentColor"
                d="M8.5.75a.75.75 0 0 0-1.5 0v5.19L4.391 3.33a.75.75 0 1 0-1.06 1.061L5.939 7H.75a.75.75 0 0 0 0 1.5h5.19l-2.61 2.609a.75.75 0 1 0 1.061 1.06L7 9.561v5.189a.75.75 0 0 0 1.5 0V9.56l2.609 2.61a.75.75 0 1 0 1.06-1.061L9.561 8.5h5.189a.75.75 0 0 0 0-1.5H9.56l2.61-2.609a.75.75 0 0 0-1.061-1.06L8.5 5.939z"
              />
            </svg>
          </span>
          <h4>MERN Stack</h4>
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="77"
              height="77"
              viewBox="0 0 16 16"
            >
              <path
                fill="currentColor"
                d="M8.5.75a.75.75 0 0 0-1.5 0v5.19L4.391 3.33a.75.75 0 1 0-1.06 1.061L5.939 7H.75a.75.75 0 0 0 0 1.5h5.19l-2.61 2.609a.75.75 0 1 0 1.061 1.06L7 9.561v5.189a.75.75 0 0 0 1.5 0V9.56l2.609 2.61a.75.75 0 1 0 1.06-1.061L9.561 8.5h5.189a.75.75 0 0 0 0-1.5H9.56l2.61-2.609a.75.75 0 0 0-1.061-1.06L8.5 5.939z"
              />
            </svg>
          </span>
          <h2>Web Developer</h2>
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="77"
              height="77"
              viewBox="0 0 16 16"
            >
              <path
                fill="currentColor"
                d="M8.5.75a.75.75 0 0 0-1.5 0v5.19L4.391 3.33a.75.75 0 1 0-1.06 1.061L5.939 7H.75a.75.75 0 0 0 0 1.5h5.19l-2.61 2.609a.75.75 0 1 0 1.061 1.06L7 9.561v5.189a.75.75 0 0 0 1.5 0V9.56l2.609 2.61a.75.75 0 1 0 1.06-1.061L9.561 8.5h5.189a.75.75 0 0 0 0-1.5H9.56l2.61-2.609a.75.75 0 0 0-1.061-1.06L8.5 5.939z"
              />
            </svg>
          </span>
          <h3>Designer</h3>
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="77"
              height="77"
              viewBox="0 0 16 16"
            >
              <path
                fill="currentColor"
                d="M8.5.75a.75.75 0 0 0-1.5 0v5.19L4.391 3.33a.75.75 0 1 0-1.06 1.061L5.939 7H.75a.75.75 0 0 0 0 1.5h5.19l-2.61 2.609a.75.75 0 1 0 1.061 1.06L7 9.561v5.189a.75.75 0 0 0 1.5 0V9.56l2.609 2.61a.75.75 0 1 0 1.06-1.061L9.561 8.5h5.189a.75.75 0 0 0 0-1.5H9.56l2.61-2.609a.75.75 0 0 0-1.061-1.06L8.5 5.939z"
              />
            </svg>
          </span>
          <h4>MERN Stack</h4>
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="77"
              height="77"
              viewBox="0 0 16 16"
            >
              <path
                fill="currentColor"
                d="M8.5.75a.75.75 0 0 0-1.5 0v5.19L4.391 3.33a.75.75 0 1 0-1.06 1.061L5.939 7H.75a.75.75 0 0 0 0 1.5h5.19l-2.61 2.609a.75.75 0 1 0 1.061 1.06L7 9.561v5.189a.75.75 0 0 0 1.5 0V9.56l2.609 2.61a.75.75 0 1 0 1.06-1.061L9.561 8.5h5.189a.75.75 0 0 0 0-1.5H9.56l2.61-2.609a.75.75 0 0 0-1.061-1.06L8.5 5.939z"
              />
            </svg>
          </span>
          <h2>Web Developer</h2>
          <h3>Designer</h3>
          <h4>MERN Stack</h4>
        </marquee>
      </div>
      {/* marquee start */}
      {/* about start  */}
      <div className="about">
        <div className="container py-[148px]">
          <div className="grid grid-cols-12 bg-black px-[71px] py-[91px] rounded-[10px]">
            <div className="lg:col-span-6">
              <p>About Me</p>
              <h2 className="w-[515px] text-[32px] font-bold">
                Professional 
                <span className="text-[#C9F31D] inline-block">
                  Problem Solutions
                </span>
                For Digital Products
              </h2>
              <p className="w-[350px] mt-[16px] mb-[35px]">
                Sed ut perspiciatis unde omnis iste natus to voluptatem
                accusantium doloremque laudantium, totam rem aperiamc
              </p>
              <div className="grid grid-cols-12">
                <div className="col-span-6">
                  <p className="flex items-center">
                    <span className="p-[12px] bg-[#C9F31D] rounded-full mr-[13px]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="25"
                        height="25"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fill="black"
                          d="M8.5.75a.75.75 0 0 0-1.5 0v5.19L4.391 3.33a.75.75 0 1 0-1.06 1.061L5.939 7H.75a.75.75 0 0 0 0 1.5h5.19l-2.61 2.609a.75.75 0 1 0 1.061 1.06L7 9.561v5.189a.75.75 0 0 0 1.5 0V9.56l2.609 2.61a.75.75 0 1 0 1.06-1.061L9.561 8.5h5.189a.75.75 0 0 0 0-1.5H9.56l2.61-2.609a.75.75 0 0 0-1.061-1.06L8.5 5.939z"
                        />
                      </svg>
                    </span>
                    Front-end Web Design
                  </p>
                </div>
                <div className="col-span-6">
                  <p className="flex items-center mb-[25px]">
                    <span className="p-[12px] bg-[#C9F31D] rounded-full mr-[13px]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="25"
                        height="25"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fill="black"
                          d="M8.5.75a.75.75 0 0 0-1.5 0v5.19L4.391 3.33a.75.75 0 1 0-1.06 1.061L5.939 7H.75a.75.75 0 0 0 0 1.5h5.19l-2.61 2.609a.75.75 0 1 0 1.061 1.06L7 9.561v5.189a.75.75 0 0 0 1.5 0V9.56l2.609 2.61a.75.75 0 1 0 1.06-1.061L9.561 8.5h5.189a.75.75 0 0 0 0-1.5H9.56l2.61-2.609a.75.75 0 0 0-1.061-1.06L8.5 5.939z"
                        />
                      </svg>
                    </span>
                    Back-end Web Dev
                  </p>
                </div>
                <div className="col-span-6">
                  <p className="flex items-center">
                    <span className="p-[12px] bg-[#C9F31D] rounded-full mr-[13px]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="25"
                        height="25"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fill="black"
                          d="M8.5.75a.75.75 0 0 0-1.5 0v5.19L4.391 3.33a.75.75 0 1 0-1.06 1.061L5.939 7H.75a.75.75 0 0 0 0 1.5h5.19l-2.61 2.609a.75.75 0 1 0 1.061 1.06L7 9.561v5.189a.75.75 0 0 0 1.5 0V9.56l2.609 2.61a.75.75 0 1 0 1.06-1.061L9.561 8.5h5.189a.75.75 0 0 0 0-1.5H9.56l2.61-2.609a.75.75 0 0 0-1.061-1.06L8.5 5.939z"
                        />
                      </svg>
                    </span>
                    Front-end Web Design
                  </p>
                </div>
                <div className="col-span-6">
                  <p className="flex items-center">
                    <span className="p-[12px] bg-[#C9F31D] rounded-full mr-[13px]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="25"
                        height="25"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fill="black"
                          d="M8.5.75a.75.75 0 0 0-1.5 0v5.19L4.391 3.33a.75.75 0 1 0-1.06 1.061L5.939 7H.75a.75.75 0 0 0 0 1.5h5.19l-2.61 2.609a.75.75 0 1 0 1.061 1.06L7 9.561v5.189a.75.75 0 0 0 1.5 0V9.56l2.609 2.61a.75.75 0 1 0 1.06-1.061L9.561 8.5h5.189a.75.75 0 0 0 0-1.5H9.56l2.61-2.609a.75.75 0 0 0-1.061-1.06L8.5 5.939z"
                        />
                      </svg>
                    </span>
                    Back-end Web Dev
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:col-span-6 ">
              <div className="w-[346px] h-[363px] aboutImg bg-amber-50 mx-auto rounded-[10px]">
                <span className="aboutShape">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="77"
                    height="77"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill="#C9F31D"
                      d="M8.5.75a.75.75 0 0 0-1.5 0v5.19L4.391 3.33a.75.75 0 1 0-1.06 1.061L5.939 7H.75a.75.75 0 0 0 0 1.5h5.19l-2.61 2.609a.75.75 0 1 0 1.061 1.06L7 9.561v5.189a.75.75 0 0 0 1.5 0V9.56l2.609 2.61a.75.75 0 1 0 1.06-1.061L9.561 8.5h5.189a.75.75 0 0 0 0-1.5H9.56l2.61-2.609a.75.75 0 0 0-1.061-1.06L8.5 5.939z"
                    />
                  </svg>
                </span>
                <p className="py-[13px] p1 rounded-[20px] px-[15px] bg-white">
                  MERN Stack Developer
                </p>
                <p className="py-[13px] p2 rounded-[20px] px-[44px] bg-white">
                  Meheraj Hosen
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* about end  */}
      {/* service start  */}
      <div className="service pt-[109px] pb-[139px]">
        <span className="seriveShape">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="77"
            height="77"
            viewBox="0 0 16 16"
          >
            <path
              fill="#C9F31D"
              d="M8.5.75a.75.75 0 0 0-1.5 0v5.19L4.391 3.33a.75.75 0 1 0-1.06 1.061L5.939 7H.75a.75.75 0 0 0 0 1.5h5.19l-2.61 2.609a.75.75 0 1 0 1.061 1.06L7 9.561v5.189a.75.75 0 0 0 1.5 0V9.56l2.609 2.61a.75.75 0 1 0 1.06-1.061L9.561 8.5h5.189a.75.75 0 0 0 0-1.5H9.56l2.61-2.609a.75.75 0 0 0-1.061-1.06L8.5 5.939z"
            />
          </svg>
        </span>
        <div className="container">
          <div className="serviceTitle mb-[40px] text-center">
            <p>Popular Services</p>
            <h2 className="w-[600px] mx-auto font-bold text-[42px] text-center">
              My <span className="text-[#C9F31D]">Special Service</span> For
              your Business Development
            </h2>
          </div>
          <div className="grid grid-cols-12">
            <div className="col-span-6 ">
              <div className="box flex items-center justify-between w-[576px] h-[140px] bg-[#1F1F1F] rounded-[20px] px-[20px] py-[35px]">
                <div className="text">
                  <h3 className="text-[32px] text-bold text-white">
                    Responsive Web Design
                  </h3>
                  <p className="text-[16px]">
                    Responsive web design for any device
                  </p>
                </div>
                <div className="icon p-[12px] bg-[#000] rounded-full">
                  <span className="">
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
                </div>
              </div>
            </div>
            <div className="col-span-6 ml-auto">
              <div className="box mb-[98px] flex items-center justify-between w-[576px] h-[140px] bg-[#1F1F1F] rounded-[20px] px-[20px] py-[35px]">
                <div className="text">
                  <h3 className="text-[32px] text-bold text-white">
                    Responsive Web Design
                  </h3>
                  <p className="text-[16px]">
                    Responsive web design for any device
                  </p>
                </div>
                <div className="icon p-[12px] bg-[#000] rounded-full">
                  <span className="">
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
                </div>
              </div>
            </div>
            <div className="col-span-6">
              <div className="box flex items-center justify-between w-[576px] h-[140px] bg-[#1F1F1F] rounded-[20px] px-[20px] py-[35px]">
                <div className="text">
                  <h3 className="text-[32px] text-bold text-white">
                    Responsive Web Design
                  </h3>
                  <p className="text-[16px]">
                    Responsive web design for any device
                  </p>
                </div>
                <div className="icon p-[12px] bg-[#000] rounded-full">
                  <span className="">
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
                </div>
              </div>
            </div>
            <div className="col-span-6 ml-auto">
              <div className="box flex items-center justify-between w-[576px] h-[140px] bg-[#1F1F1F] rounded-[20px] px-[20px] py-[35px]">
                <div className="text">
                  <h3 className="text-[32px] text-bold text-white">
                    Responsive Web Design
                  </h3>
                  <p className="text-[16px]">
                    Responsive web design for any device
                  </p>
                </div>
                <div className="icon p-[12px] bg-[#000] rounded-full">
                  <span className="">
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* service end  */}
      {/* skill start  */}
      <div className="skill  py-[107px]">
        <div className="container bg-[#131313] rounded-[20px]">
          <div className="grid grid-cols-12">
            <div className="lg:col-span-4 flex flex-col justify-center">
              <p>My Skill</p>
              <h2 className="text-[32px] font-bold">
                Let’s Explore Popular{" "}
                <span className="text-[#C9F31D] inline-block">
                  Skills & Experience
                </span>
              </h2>
              <p className="w-[350px] mt-[16px] mb-[67px] ">
                Sed ut perspiciatis unde omnis iste natus to voluptatem
                accusantium doloremque laudantium, totam rem aperiamc
              </p>
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
            <div className="lg:col-span-7 flex flex-wrap">
              <div className="box mb-[43px] w-[161px] h-[197px] rounded-[20px] flex flex-col justify-center items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="60"
                  height="60"
                  viewBox="0 0 128 128"
                >
                  <path
                    fill="#0acf83"
                    d="M45.5 129c11.9 0 21.5-9.6 21.5-21.5V86H45.5C33.6 86 24 95.6 24 107.5S33.6 129 45.5 129m0 0"
                  />
                  <path
                    fill="#a259ff"
                    d="M24 64.5C24 52.6 33.6 43 45.5 43H67v43H45.5C33.6 86 24 76.4 24 64.5m0 0"
                  />
                  <path
                    fill="#f24e1e"
                    d="M24 21.5C24 9.6 33.6 0 45.5 0H67v43H45.5C33.6 43 24 33.4 24 21.5m0 0"
                  />
                  <path
                    fill="#ff7262"
                    d="M67 0h21.5C100.4 0 110 9.6 110 21.5S100.4 43 88.5 43H67zm0 0"
                  />
                  <path
                    fill="#1abcfe"
                    d="M110 64.5c0 11.9-9.6 21.5-21.5 21.5S67 76.4 67 64.5S76.6 43 88.5 43S110 52.6 110 64.5m0 0"
                  />
                </svg>
                <h3>Figma</h3>
                <div className="percent">50%</div>
              </div>
              <div className="box w-[161px] h-[197px] rounded-[20px] flex flex-col justify-center items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="60"
                  height="60"
                  viewBox="0 0 128 128"
                >
                  <path
                    fill="#0acf83"
                    d="M45.5 129c11.9 0 21.5-9.6 21.5-21.5V86H45.5C33.6 86 24 95.6 24 107.5S33.6 129 45.5 129m0 0"
                  />
                  <path
                    fill="#a259ff"
                    d="M24 64.5C24 52.6 33.6 43 45.5 43H67v43H45.5C33.6 86 24 76.4 24 64.5m0 0"
                  />
                  <path
                    fill="#f24e1e"
                    d="M24 21.5C24 9.6 33.6 0 45.5 0H67v43H45.5C33.6 43 24 33.4 24 21.5m0 0"
                  />
                  <path
                    fill="#ff7262"
                    d="M67 0h21.5C100.4 0 110 9.6 110 21.5S100.4 43 88.5 43H67zm0 0"
                  />
                  <path
                    fill="#1abcfe"
                    d="M110 64.5c0 11.9-9.6 21.5-21.5 21.5S67 76.4 67 64.5S76.6 43 88.5 43S110 52.6 110 64.5m0 0"
                  />
                </svg>
                <h3>Figma</h3>
                <div className="percent">50%</div>
              </div><div className="box w-[161px] h-[197px] rounded-[20px] flex flex-col justify-center items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="60"
                  height="60"
                  viewBox="0 0 128 128"
                >
                  <path
                    fill="#0acf83"
                    d="M45.5 129c11.9 0 21.5-9.6 21.5-21.5V86H45.5C33.6 86 24 95.6 24 107.5S33.6 129 45.5 129m0 0"
                  />
                  <path
                    fill="#a259ff"
                    d="M24 64.5C24 52.6 33.6 43 45.5 43H67v43H45.5C33.6 86 24 76.4 24 64.5m0 0"
                  />
                  <path
                    fill="#f24e1e"
                    d="M24 21.5C24 9.6 33.6 0 45.5 0H67v43H45.5C33.6 43 24 33.4 24 21.5m0 0"
                  />
                  <path
                    fill="#ff7262"
                    d="M67 0h21.5C100.4 0 110 9.6 110 21.5S100.4 43 88.5 43H67zm0 0"
                  />
                  <path
                    fill="#1abcfe"
                    d="M110 64.5c0 11.9-9.6 21.5-21.5 21.5S67 76.4 67 64.5S76.6 43 88.5 43S110 52.6 110 64.5m0 0"
                  />
                </svg>
                <h3>Figma</h3>
                <div className="percent">50%</div>
              </div><div className="box w-[161px] h-[197px] rounded-[20px] flex flex-col justify-center items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="60"
                  height="60"
                  viewBox="0 0 128 128"
                >
                  <path
                    fill="#0acf83"
                    d="M45.5 129c11.9 0 21.5-9.6 21.5-21.5V86H45.5C33.6 86 24 95.6 24 107.5S33.6 129 45.5 129m0 0"
                  />
                  <path
                    fill="#a259ff"
                    d="M24 64.5C24 52.6 33.6 43 45.5 43H67v43H45.5C33.6 86 24 76.4 24 64.5m0 0"
                  />
                  <path
                    fill="#f24e1e"
                    d="M24 21.5C24 9.6 33.6 0 45.5 0H67v43H45.5C33.6 43 24 33.4 24 21.5m0 0"
                  />
                  <path
                    fill="#ff7262"
                    d="M67 0h21.5C100.4 0 110 9.6 110 21.5S100.4 43 88.5 43H67zm0 0"
                  />
                  <path
                    fill="#1abcfe"
                    d="M110 64.5c0 11.9-9.6 21.5-21.5 21.5S67 76.4 67 64.5S76.6 43 88.5 43S110 52.6 110 64.5m0 0"
                  />
                </svg>
                <h3>Figma</h3>
                <div className="percent">50%</div>
              </div><div className="box w-[161px] h-[197px] rounded-[20px] flex flex-col justify-center items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="60"
                  height="60"
                  viewBox="0 0 128 128"
                >
                  <path
                    fill="#0acf83"
                    d="M45.5 129c11.9 0 21.5-9.6 21.5-21.5V86H45.5C33.6 86 24 95.6 24 107.5S33.6 129 45.5 129m0 0"
                  />
                  <path
                    fill="#a259ff"
                    d="M24 64.5C24 52.6 33.6 43 45.5 43H67v43H45.5C33.6 86 24 76.4 24 64.5m0 0"
                  />
                  <path
                    fill="#f24e1e"
                    d="M24 21.5C24 9.6 33.6 0 45.5 0H67v43H45.5C33.6 43 24 33.4 24 21.5m0 0"
                  />
                  <path
                    fill="#ff7262"
                    d="M67 0h21.5C100.4 0 110 9.6 110 21.5S100.4 43 88.5 43H67zm0 0"
                  />
                  <path
                    fill="#1abcfe"
                    d="M110 64.5c0 11.9-9.6 21.5-21.5 21.5S67 76.4 67 64.5S76.6 43 88.5 43S110 52.6 110 64.5m0 0"
                  />
                </svg>
                <h3>Figma</h3>
                <div className="percent">50%</div>
              </div><div className="box w-[161px] h-[197px] rounded-[20px] flex flex-col justify-center items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="60"
                  height="60"
                  viewBox="0 0 128 128"
                >
                  <path
                    fill="#0acf83"
                    d="M45.5 129c11.9 0 21.5-9.6 21.5-21.5V86H45.5C33.6 86 24 95.6 24 107.5S33.6 129 45.5 129m0 0"
                  />
                  <path
                    fill="#a259ff"
                    d="M24 64.5C24 52.6 33.6 43 45.5 43H67v43H45.5C33.6 86 24 76.4 24 64.5m0 0"
                  />
                  <path
                    fill="#f24e1e"
                    d="M24 21.5C24 9.6 33.6 0 45.5 0H67v43H45.5C33.6 43 24 33.4 24 21.5m0 0"
                  />
                  <path
                    fill="#ff7262"
                    d="M67 0h21.5C100.4 0 110 9.6 110 21.5S100.4 43 88.5 43H67zm0 0"
                  />
                  <path
                    fill="#1abcfe"
                    d="M110 64.5c0 11.9-9.6 21.5-21.5 21.5S67 76.4 67 64.5S76.6 43 88.5 43S110 52.6 110 64.5m0 0"
                  />
                </svg>
                <h3>Figma</h3>
                <div className="percent">50%</div>
              </div>
              <div className="box w-[161px] h-[197px] rounded-[20px] flex flex-col justify-center items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="60"
                  height="60"
                  viewBox="0 0 128 128"
                >
                  <path
                    fill="#0acf83"
                    d="M45.5 129c11.9 0 21.5-9.6 21.5-21.5V86H45.5C33.6 86 24 95.6 24 107.5S33.6 129 45.5 129m0 0"
                  />
                  <path
                    fill="#a259ff"
                    d="M24 64.5C24 52.6 33.6 43 45.5 43H67v43H45.5C33.6 86 24 76.4 24 64.5m0 0"
                  />
                  <path
                    fill="#f24e1e"
                    d="M24 21.5C24 9.6 33.6 0 45.5 0H67v43H45.5C33.6 43 24 33.4 24 21.5m0 0"
                  />
                  <path
                    fill="#ff7262"
                    d="M67 0h21.5C100.4 0 110 9.6 110 21.5S100.4 43 88.5 43H67zm0 0"
                  />
                  <path
                    fill="#1abcfe"
                    d="M110 64.5c0 11.9-9.6 21.5-21.5 21.5S67 76.4 67 64.5S76.6 43 88.5 43S110 52.6 110 64.5m0 0"
                  />
                </svg>
                <h3>Figma</h3>
                <div className="percent">50%</div>
              </div>
              <div className="box w-[161px] h-[197px] rounded-[20px] flex flex-col justify-center items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="60"
                  height="60"
                  viewBox="0 0 128 128"
                >
                  <path
                    fill="#0acf83"
                    d="M45.5 129c11.9 0 21.5-9.6 21.5-21.5V86H45.5C33.6 86 24 95.6 24 107.5S33.6 129 45.5 129m0 0"
                  />
                  <path
                    fill="#a259ff"
                    d="M24 64.5C24 52.6 33.6 43 45.5 43H67v43H45.5C33.6 86 24 76.4 24 64.5m0 0"
                  />
                  <path
                    fill="#f24e1e"
                    d="M24 21.5C24 9.6 33.6 0 45.5 0H67v43H45.5C33.6 43 24 33.4 24 21.5m0 0"
                  />
                  <path
                    fill="#ff7262"
                    d="M67 0h21.5C100.4 0 110 9.6 110 21.5S100.4 43 88.5 43H67zm0 0"
                  />
                  <path
                    fill="#1abcfe"
                    d="M110 64.5c0 11.9-9.6 21.5-21.5 21.5S67 76.4 67 64.5S76.6 43 88.5 43S110 52.6 110 64.5m0 0"
                  />
                </svg>
                <h3>Figma</h3>
                <div className="percent">50%</div>
              </div>
              
            </div>
          </div>
        </div>
      </div>
      {/* skill end  */}
      {/* projects start  */}
      <div id="projects"></div>
      {/* projects end  */}
      {/* blog start  */}
      <div id="blog"></div>
      {/* blog end  */}
      {/* contact start  */}
      <div id="contact"></div>
      {/* contact end  */}
      {/* footer start  */}
      <div id="footer"></div>
      {/* footer end  */}
    </>
  );
}

export default Home;
