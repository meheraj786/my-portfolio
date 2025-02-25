import React from "react";
import bannerShape from "../assets/Group 31.png";
import "../css/home.css";
import projectImg from "../assets/Digital Agency.png"

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
        <div className="line"></div>
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
            <div className="lg:col-span-8 flex flex-wrap">
              <div className="box mb-[43px] w-[161px] h-[197px] mr-[10px] rounded-[20px] flex flex-col justify-center items-center">
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
              <div className="box w-[161px] h-[197px] rounded-[20px] flex flex-col justify-center mr-[10px] items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="256"
                  height="361"
                  viewBox="0 0 256 361"
                >
                  <path
                    fill="#e44d26"
                    d="m255.555 70.766l-23.241 260.36l-104.47 28.962l-104.182-28.922L.445 70.766z"
                  />
                  <path
                    fill="#f16529"
                    d="m128 337.95l84.417-23.403l19.86-222.49H128z"
                  />
                  <path
                    fill="#ebebeb"
                    d="M82.82 155.932H128v-31.937H47.917l.764 8.568l7.85 88.01H128v-31.937H85.739zm7.198 80.61h-32.06l4.474 50.146l65.421 18.16l.147-.04V271.58l-.14.037l-35.568-9.604z"
                  />
                  <path d="M24.18 0h16.23v16.035h14.847V0h16.231v48.558h-16.23v-16.26H40.411v16.26h-16.23V0M92.83 16.103H78.544V0h44.814v16.103h-14.295v32.455h-16.23V16.103zM130.47 0h16.923l10.41 17.062L168.203 0h16.93v48.558h-16.164V24.49l-11.166 17.265h-.28L146.35 24.49v24.068h-15.88zm62.74 0h16.235v32.508h22.824v16.05h-39.06z" />
                  <path
                    fill="#fff"
                    d="M127.89 220.573h39.327l-3.708 41.42l-35.62 9.614v33.226l65.473-18.145l.48-5.396l7.506-84.08l.779-8.576H127.89zm0-64.719v.078h77.143l.64-7.178l1.456-16.191l.763-8.568H127.89z"
                  />
                </svg>
                <h3>HTML</h3>
                <div className="percent">50%</div>
              </div>
              <div className="box w-[161px] h-[197px] rounded-[20px] flex flex-col justify-center mr-[10px] items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="256"
                  height="361"
                  viewBox="0 0 256 361"
                >
                  <path
                    fill="#264de4"
                    d="M127.844 360.088L23.662 331.166L.445 70.766h255.11l-23.241 260.36z"
                  />
                  <path
                    fill="#2965f1"
                    d="m212.417 314.547l19.86-222.49H128V337.95z"
                  />
                  <path
                    fill="#ebebeb"
                    d="m53.669 188.636l2.862 31.937H128v-31.937zm-5.752-64.641l2.903 31.937H128v-31.937zM128 271.58l-.14.037l-35.568-9.604l-2.274-25.471h-32.06l4.474 50.146l65.421 18.16l.147-.04z"
                  />
                  <path d="M60.484 0h38.68v16.176H76.66v16.176h22.506v16.175H60.484zm46.417 0h38.681v14.066h-22.505v2.813h22.505v32.352h-38.68V34.46h22.505v-2.813H106.9zm46.418 0H192v14.066h-22.505v2.813H192v32.352h-38.681V34.46h22.505v-2.813H153.32z" />
                  <path
                    fill="#fff"
                    d="m202.127 188.636l5.765-64.641H127.89v31.937h45.002l-2.906 32.704H127.89v31.937h39.327l-3.708 41.42l-35.62 9.614v33.226l65.473-18.145l.48-5.396l7.506-84.08z"
                  />
                </svg>
                <h3>CSS</h3>
                <div className="percent">50%</div>
              </div>
              <div className="box w-[161px] h-[197px] rounded-[20px] flex flex-col justify-center mr-[10px] items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                >
                  <path fill="#f5de19" d="M2 2h28v28H2z" />
                  <path d="M20.809 23.875a2.87 2.87 0 0 0 2.6 1.6c1.09 0 1.787-.545 1.787-1.3c0-.9-.716-1.222-1.916-1.747l-.658-.282c-1.9-.809-3.16-1.822-3.16-3.964c0-1.973 1.5-3.476 3.853-3.476a3.89 3.89 0 0 1 3.742 2.107L25 18.128A1.79 1.79 0 0 0 23.311 17a1.145 1.145 0 0 0-1.259 1.128c0 .789.489 1.109 1.618 1.6l.658.282c2.236.959 3.5 1.936 3.5 4.133c0 2.369-1.861 3.667-4.36 3.667a5.06 5.06 0 0 1-4.795-2.691Zm-9.295.228c.413.733.789 1.353 1.693 1.353c.864 0 1.41-.338 1.41-1.653v-8.947h2.631v8.982c0 2.724-1.6 3.964-3.929 3.964a4.085 4.085 0 0 1-3.947-2.4Z" />
                </svg>
                <h3>JS</h3>
                <div className="percent">50%</div>
              </div>
              <div className="box w-[161px] h-[197px] rounded-[20px] mr-[10px] flex flex-col justify-center items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="256"
                  height="256"
                  viewBox="0 0 256 256"
                >
                  <g fill="none">
                    <rect width="256" height="256" fill="#023430" rx="60" />
                    <path
                      fill="#10aa50"
                      d="M171.173 107.591c-10.537-46.481-32.497-58.855-38.099-67.602A99 99 0 0 1 126.949 28c-.296 4.13-.84 6.73-4.35 9.862c-7.047 6.283-36.977 30.673-39.496 83.486c-2.347 49.242 36.2 79.605 41.292 82.744c3.916 1.927 8.685.041 11.012-1.728c18.581-12.752 43.969-46.75 35.786-94.773"
                    />
                    <path
                      fill="#b8c4c2"
                      d="M128.545 177.871c-.97 12.188-1.665 19.27-4.129 26.235c0 0 1.617 11.603 2.753 23.894h4.019a224 224 0 0 1 4.384-25.732c-5.203-2.56-6.827-13.702-7.027-24.397"
                    />
                    <path
                      fill="#12924f"
                      d="M135.565 202.275c-5.258-2.429-6.779-13.806-7.013-24.404a500 500 0 0 0 1.136-52.545c-.276-9.194.13-85.158-2.265-96.28a92 92 0 0 0 5.651 10.936c5.602 8.754 27.569 21.128 38.099 67.609c8.203 47.941-17.047 81.849-35.608 94.684"
                    />
                  </g>
                </svg>
                <h3>MongoDB</h3>
                <div className="percent">50%</div>
              </div>
              <div className="box w-[161px] h-[197px] rounded-[20px] mr-[10px] flex flex-col justify-center items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M24 18.588a1.53 1.53 0 0 1-1.895-.72l-3.45-4.771l-.5-.667l-4.003 5.444a1.466 1.466 0 0 1-1.802.708l5.158-6.92l-4.798-6.251a1.595 1.595 0 0 1 1.9.666l3.576 4.83l3.596-4.81a1.435 1.435 0 0 1 1.788-.668L21.708 7.9l-2.522 3.283a.666.666 0 0 0 0 .994l4.804 6.412zM.002 11.576l.42-2.075c1.154-4.103 5.858-5.81 9.094-3.27c1.895 1.489 2.368 3.597 2.275 5.973H1.116C.943 16.447 4.005 19.009 7.92 17.7a4.08 4.08 0 0 0 2.582-2.876c.207-.666.548-.78 1.174-.588a5.42 5.42 0 0 1-2.589 3.957a6.27 6.27 0 0 1-7.306-.933a6.58 6.58 0 0 1-1.64-3.858c0-.235-.08-.455-.134-.666A88 88 0 0 1 0 11.577zm1.127-.286h9.654c-.06-3.076-2.001-5.258-4.59-5.278c-2.882-.04-4.944 2.094-5.071 5.264z"
                  />
                </svg>
                <h3>Express</h3>
                <div className="percent">50%</div>
              </div>
              <div className="box w-[161px] h-[197px] rounded-[20px] mr-[10px] flex flex-col justify-center items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="128"
                  height="128"
                  viewBox="0 0 128 128"
                >
                  <g fill="#61dafb">
                    <circle cx="64" cy="64" r="11.4" />
                    <path d="M107.3 45.2c-2.2-.8-4.5-1.6-6.9-2.3c.6-2.4 1.1-4.8 1.5-7.1c2.1-13.2-.2-22.5-6.6-26.1c-1.9-1.1-4-1.6-6.4-1.6c-7 0-15.9 5.2-24.9 13.9c-9-8.7-17.9-13.9-24.9-13.9c-2.4 0-4.5.5-6.4 1.6c-6.4 3.7-8.7 13-6.6 26.1c.4 2.3.9 4.7 1.5 7.1c-2.4.7-4.7 1.4-6.9 2.3C8.2 50 1.4 56.6 1.4 64s6.9 14 19.3 18.8c2.2.8 4.5 1.6 6.9 2.3c-.6 2.4-1.1 4.8-1.5 7.1c-2.1 13.2.2 22.5 6.6 26.1c1.9 1.1 4 1.6 6.4 1.6c7.1 0 16-5.2 24.9-13.9c9 8.7 17.9 13.9 24.9 13.9c2.4 0 4.5-.5 6.4-1.6c6.4-3.7 8.7-13 6.6-26.1c-.4-2.3-.9-4.7-1.5-7.1c2.4-.7 4.7-1.4 6.9-2.3c12.5-4.8 19.3-11.4 19.3-18.8s-6.8-14-19.3-18.8M92.5 14.7c4.1 2.4 5.5 9.8 3.8 20.3c-.3 2.1-.8 4.3-1.4 6.6c-5.2-1.2-10.7-2-16.5-2.5c-3.4-4.8-6.9-9.1-10.4-13c7.4-7.3 14.9-12.3 21-12.3c1.3 0 2.5.3 3.5.9M81.3 74c-1.8 3.2-3.9 6.4-6.1 9.6c-3.7.3-7.4.4-11.2.4c-3.9 0-7.6-.1-11.2-.4q-3.3-4.8-6-9.6c-1.9-3.3-3.7-6.7-5.3-10c1.6-3.3 3.4-6.7 5.3-10c1.8-3.2 3.9-6.4 6.1-9.6c3.7-.3 7.4-.4 11.2-.4c3.9 0 7.6.1 11.2.4q3.3 4.8 6 9.6c1.9 3.3 3.7 6.7 5.3 10c-1.7 3.3-3.4 6.6-5.3 10m8.3-3.3c1.5 3.5 2.7 6.9 3.8 10.3c-3.4.8-7 1.4-10.8 1.9c1.2-1.9 2.5-3.9 3.6-6c1.2-2.1 2.3-4.2 3.4-6.2M64 97.8c-2.4-2.6-4.7-5.4-6.9-8.3c2.3.1 4.6.2 6.9.2s4.6-.1 6.9-.2c-2.2 2.9-4.5 5.7-6.9 8.3m-18.6-15c-3.8-.5-7.4-1.1-10.8-1.9c1.1-3.3 2.3-6.8 3.8-10.3c1.1 2 2.2 4.1 3.4 6.1c1.2 2.2 2.4 4.1 3.6 6.1m-7-25.5c-1.5-3.5-2.7-6.9-3.8-10.3c3.4-.8 7-1.4 10.8-1.9c-1.2 1.9-2.5 3.9-3.6 6c-1.2 2.1-2.3 4.2-3.4 6.2M64 30.2c2.4 2.6 4.7 5.4 6.9 8.3c-2.3-.1-4.6-.2-6.9-.2s-4.6.1-6.9.2c2.2-2.9 4.5-5.7 6.9-8.3m22.2 21l-3.6-6c3.8.5 7.4 1.1 10.8 1.9c-1.1 3.3-2.3 6.8-3.8 10.3c-1.1-2.1-2.2-4.2-3.4-6.2M31.7 35c-1.7-10.5-.3-17.9 3.8-20.3c1-.6 2.2-.9 3.5-.9c6 0 13.5 4.9 21 12.3c-3.5 3.8-7 8.2-10.4 13c-5.8.5-11.3 1.4-16.5 2.5c-.6-2.3-1-4.5-1.4-6.6M7 64c0-4.7 5.7-9.7 15.7-13.4c2-.8 4.2-1.5 6.4-2.1c1.6 5 3.6 10.3 6 15.6c-2.4 5.3-4.5 10.5-6 15.5C15.3 75.6 7 69.6 7 64m28.5 49.3c-4.1-2.4-5.5-9.8-3.8-20.3c.3-2.1.8-4.3 1.4-6.6c5.2 1.2 10.7 2 16.5 2.5c3.4 4.8 6.9 9.1 10.4 13c-7.4 7.3-14.9 12.3-21 12.3c-1.3 0-2.5-.3-3.5-.9M96.3 93c1.7 10.5.3 17.9-3.8 20.3c-1 .6-2.2.9-3.5.9c-6 0-13.5-4.9-21-12.3c3.5-3.8 7-8.2 10.4-13c5.8-.5 11.3-1.4 16.5-2.5c.6 2.3 1 4.5 1.4 6.6m9-15.6c-2 .8-4.2 1.5-6.4 2.1c-1.6-5-3.6-10.3-6-15.6c2.4-5.3 4.5-10.5 6-15.5c13.8 4 22.1 10 22.1 15.6c0 4.7-5.8 9.7-15.7 13.4" />
                  </g>
                </svg>
                <h3>React</h3>
                <div className="percent">50%</div>
              </div>
              <div className="box w-[161px] h-[197px] rounded-[20px] mr-[10px] flex flex-col justify-center items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                >
                  <path
                    fill="#83cd29"
                    d="M16 30a2.15 2.15 0 0 1-1.076-.288L11.5 27.685c-.511-.286-.262-.387-.093-.446a6.8 6.8 0 0 0 1.549-.7a.26.26 0 0 1 .255.019l2.631 1.563a.34.34 0 0 0 .318 0l10.26-5.922a.32.32 0 0 0 .157-.278V10.075a.33.33 0 0 0-.159-.283l-10.26-5.917a.32.32 0 0 0-.317 0L5.587 9.794a.33.33 0 0 0-.162.281v11.841a.32.32 0 0 0 .161.274L8.4 23.814c1.525.762 2.459-.136 2.459-1.038V11.085a.3.3 0 0 1 .3-.3h1.3a.3.3 0 0 1 .3.3v11.692c0 2.035-1.108 3.2-3.038 3.2a4.4 4.4 0 0 1-2.363-.642l-2.697-1.547a2.17 2.17 0 0 1-1.076-1.872V10.075A2.16 2.16 0 0 1 4.661 8.2l10.261-5.924a2.25 2.25 0 0 1 2.156 0L27.338 8.2a2.17 2.17 0 0 1 1.077 1.87v11.846a2.17 2.17 0 0 1-1.077 1.872l-10.26 5.924A2.15 2.15 0 0 1 16 30"
                  />
                  <path
                    fill="#83cd29"
                    d="M14.054 17.953a.3.3 0 0 1 .3-.3h1.327a.3.3 0 0 1 .295.251c.2 1.351.8 2.032 3.513 2.032c2.161 0 3.082-.489 3.082-1.636c0-.661-.261-1.152-3.62-1.481c-2.808-.278-4.544-.9-4.544-3.144c0-2.07 1.745-3.305 4.67-3.305c3.287 0 4.914 1.141 5.12 3.589a.3.3 0 0 1-.295.323h-1.336a.3.3 0 0 1-.288-.232c-.319-1.421-1.1-1.875-3.2-1.875c-2.36 0-2.634.822-2.634 1.438c0 .746.324.964 3.51 1.385c3.153.417 4.651 1.007 4.651 3.223c0 2.236-1.864 3.516-5.115 3.516c-4.495.006-5.436-2.055-5.436-3.784"
                  />
                </svg>
                <h3>Nodejs</h3>
                <div className="percent">50%</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* skill end  */}
      {/* projects start  */}
      <div className="projects py-[99px]">
        <div className="container">
          <div className="projects-title text-center">
            <p>Latest Works</p>
            <h2 className="text-[42px] mt-[22px] mb-[63px] text-bold">
              Explore My Popular{" "}
              <span className="text-[#C9F31D]">Projects</span>
            </h2>
          </div>
          <div className="project mb-[60px] flex justify-between items-center">
            <div className="img">
              <img src={projectImg} alt="" />
            </div>
            <div className="description">
              <p className='text-[#C9F31D]' >Website Design</p>
              <h3 className=" ">A Simple Website Design with Figma</h3>{" "}
              <p className="w-[392px] mb-[55px]">
                Sed ut perspiciatis unde omnin natus totam remaperiam eaque
                inventore veritatis...
              </p>
              <button>
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
              </button>
            </div>
          </div>
          <div className="project flex-row-reverse flex justify-between items-center">
            <div className="img">
            <img src={projectImg} alt="" />
            </div>
            <div className="description">
              <p className='text-[#C9F31D]' >Website Design</p>
              <h3 className=" ">A Simple Website Design with Figma</h3>{" "}
              <p className="w-[392px] mb-[55px]">
                Sed ut perspiciatis unde omnin natus totam remaperiam eaque
                inventore veritatis...
              </p>
              <button>
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
              </button>
            </div>
          </div>
          <div className="project mt-[60px] flex justify-between items-center">
            <div className="img">
            <img src={projectImg} alt="" />
            </div>
            <div className="description">
              <p className='text-[#C9F31D]' >Website Design</p>
              <h3 className=" ">A Simple Website Design with Figma</h3>{" "}
              <p className="w-[392px] mb-[55px]">
                Sed ut perspiciatis unde omnin natus totam remaperiam eaque
                inventore veritatis...
              </p>
              <button>
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
              </button>
            </div>
          </div>
          <h5 className="view-more">View More <span>              <svg
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
                  </svg></span></h5>
        </div>
        <div className="glow-line"></div>
      </div>
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
