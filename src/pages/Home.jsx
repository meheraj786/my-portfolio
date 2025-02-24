import React from "react";
import bannerShape from "../assets/Group 31.png";

function Home() {
  return (
    <>
      {/* banner start  */}
      <div id="banner">
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
                <svg className="rotate-45" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 15 15"><path fill="currentColor" d="M8.293 2.293a1 1 0 0 1 1.414 0l4.5 4.5a1 1 0 0 1 0 1.414l-4.5 4.5a1 1 0 0 1-1.414-1.414L11 8.5H1.5a1 1 0 0 1 0-2H11L8.293 3.707a1 1 0 0 1 0-1.414"/></svg>

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
      <div id="marquee" className="flex items-center">
        <marquee behavior="" direction="" scrollmount="200">
        <span><svg xmlns="http://www.w3.org/2000/svg" width="77" height="77" viewBox="0 0 16 16"><path fill="currentColor" d="M8.5.75a.75.75 0 0 0-1.5 0v5.19L4.391 3.33a.75.75 0 1 0-1.06 1.061L5.939 7H.75a.75.75 0 0 0 0 1.5h5.19l-2.61 2.609a.75.75 0 1 0 1.061 1.06L7 9.561v5.189a.75.75 0 0 0 1.5 0V9.56l2.609 2.61a.75.75 0 1 0 1.06-1.061L9.561 8.5h5.189a.75.75 0 0 0 0-1.5H9.56l2.61-2.609a.75.75 0 0 0-1.061-1.06L8.5 5.939z"/></svg></span>
          <h2>Web Developer</h2>
          <span><svg xmlns="http://www.w3.org/2000/svg" width="77" height="77" viewBox="0 0 16 16"><path fill="currentColor" d="M8.5.75a.75.75 0 0 0-1.5 0v5.19L4.391 3.33a.75.75 0 1 0-1.06 1.061L5.939 7H.75a.75.75 0 0 0 0 1.5h5.19l-2.61 2.609a.75.75 0 1 0 1.061 1.06L7 9.561v5.189a.75.75 0 0 0 1.5 0V9.56l2.609 2.61a.75.75 0 1 0 1.06-1.061L9.561 8.5h5.189a.75.75 0 0 0 0-1.5H9.56l2.61-2.609a.75.75 0 0 0-1.061-1.06L8.5 5.939z"/></svg></span>
          <h3>Designer</h3>
          <span><svg xmlns="http://www.w3.org/2000/svg" width="77" height="77" viewBox="0 0 16 16"><path fill="currentColor" d="M8.5.75a.75.75 0 0 0-1.5 0v5.19L4.391 3.33a.75.75 0 1 0-1.06 1.061L5.939 7H.75a.75.75 0 0 0 0 1.5h5.19l-2.61 2.609a.75.75 0 1 0 1.061 1.06L7 9.561v5.189a.75.75 0 0 0 1.5 0V9.56l2.609 2.61a.75.75 0 1 0 1.06-1.061L9.561 8.5h5.189a.75.75 0 0 0 0-1.5H9.56l2.61-2.609a.75.75 0 0 0-1.061-1.06L8.5 5.939z"/></svg></span>
          <h4>MERN Stack</h4>
          <span><svg xmlns="http://www.w3.org/2000/svg" width="77" height="77" viewBox="0 0 16 16"><path fill="currentColor" d="M8.5.75a.75.75 0 0 0-1.5 0v5.19L4.391 3.33a.75.75 0 1 0-1.06 1.061L5.939 7H.75a.75.75 0 0 0 0 1.5h5.19l-2.61 2.609a.75.75 0 1 0 1.061 1.06L7 9.561v5.189a.75.75 0 0 0 1.5 0V9.56l2.609 2.61a.75.75 0 1 0 1.06-1.061L9.561 8.5h5.189a.75.75 0 0 0 0-1.5H9.56l2.61-2.609a.75.75 0 0 0-1.061-1.06L8.5 5.939z"/></svg></span>
          <h2>Web Developer</h2>
          <span><svg xmlns="http://www.w3.org/2000/svg" width="77" height="77" viewBox="0 0 16 16"><path fill="currentColor" d="M8.5.75a.75.75 0 0 0-1.5 0v5.19L4.391 3.33a.75.75 0 1 0-1.06 1.061L5.939 7H.75a.75.75 0 0 0 0 1.5h5.19l-2.61 2.609a.75.75 0 1 0 1.061 1.06L7 9.561v5.189a.75.75 0 0 0 1.5 0V9.56l2.609 2.61a.75.75 0 1 0 1.06-1.061L9.561 8.5h5.189a.75.75 0 0 0 0-1.5H9.56l2.61-2.609a.75.75 0 0 0-1.061-1.06L8.5 5.939z"/></svg></span>
          <h3>Designer</h3>
          <span><svg xmlns="http://www.w3.org/2000/svg" width="77" height="77" viewBox="0 0 16 16"><path fill="currentColor" d="M8.5.75a.75.75 0 0 0-1.5 0v5.19L4.391 3.33a.75.75 0 1 0-1.06 1.061L5.939 7H.75a.75.75 0 0 0 0 1.5h5.19l-2.61 2.609a.75.75 0 1 0 1.061 1.06L7 9.561v5.189a.75.75 0 0 0 1.5 0V9.56l2.609 2.61a.75.75 0 1 0 1.06-1.061L9.561 8.5h5.189a.75.75 0 0 0 0-1.5H9.56l2.61-2.609a.75.75 0 0 0-1.061-1.06L8.5 5.939z"/></svg></span>
          <h4>MERN Stack</h4>
          <span><svg xmlns="http://www.w3.org/2000/svg" width="77" height="77" viewBox="0 0 16 16"><path fill="currentColor" d="M8.5.75a.75.75 0 0 0-1.5 0v5.19L4.391 3.33a.75.75 0 1 0-1.06 1.061L5.939 7H.75a.75.75 0 0 0 0 1.5h5.19l-2.61 2.609a.75.75 0 1 0 1.061 1.06L7 9.561v5.189a.75.75 0 0 0 1.5 0V9.56l2.609 2.61a.75.75 0 1 0 1.06-1.061L9.561 8.5h5.189a.75.75 0 0 0 0-1.5H9.56l2.61-2.609a.75.75 0 0 0-1.061-1.06L8.5 5.939z"/></svg></span>
          <h2>Web Developer</h2>
          <span><svg xmlns="http://www.w3.org/2000/svg" width="77" height="77" viewBox="0 0 16 16"><path fill="currentColor" d="M8.5.75a.75.75 0 0 0-1.5 0v5.19L4.391 3.33a.75.75 0 1 0-1.06 1.061L5.939 7H.75a.75.75 0 0 0 0 1.5h5.19l-2.61 2.609a.75.75 0 1 0 1.061 1.06L7 9.561v5.189a.75.75 0 0 0 1.5 0V9.56l2.609 2.61a.75.75 0 1 0 1.06-1.061L9.561 8.5h5.189a.75.75 0 0 0 0-1.5H9.56l2.61-2.609a.75.75 0 0 0-1.061-1.06L8.5 5.939z"/></svg></span>
          <h3>Designer</h3>
          <span><svg xmlns="http://www.w3.org/2000/svg" width="77" height="77" viewBox="0 0 16 16"><path fill="currentColor" d="M8.5.75a.75.75 0 0 0-1.5 0v5.19L4.391 3.33a.75.75 0 1 0-1.06 1.061L5.939 7H.75a.75.75 0 0 0 0 1.5h5.19l-2.61 2.609a.75.75 0 1 0 1.061 1.06L7 9.561v5.189a.75.75 0 0 0 1.5 0V9.56l2.609 2.61a.75.75 0 1 0 1.06-1.061L9.561 8.5h5.189a.75.75 0 0 0 0-1.5H9.56l2.61-2.609a.75.75 0 0 0-1.061-1.06L8.5 5.939z"/></svg></span>
          <h4>MERN Stack</h4>
          <span><svg xmlns="http://www.w3.org/2000/svg" width="77" height="77" viewBox="0 0 16 16"><path fill="currentColor" d="M8.5.75a.75.75 0 0 0-1.5 0v5.19L4.391 3.33a.75.75 0 1 0-1.06 1.061L5.939 7H.75a.75.75 0 0 0 0 1.5h5.19l-2.61 2.609a.75.75 0 1 0 1.061 1.06L7 9.561v5.189a.75.75 0 0 0 1.5 0V9.56l2.609 2.61a.75.75 0 1 0 1.06-1.061L9.561 8.5h5.189a.75.75 0 0 0 0-1.5H9.56l2.61-2.609a.75.75 0 0 0-1.061-1.06L8.5 5.939z"/></svg></span>
          <h2>Web Developer</h2>
          <h3>Designer</h3>
          <h4>MERN Stack</h4>
        </marquee>
      </div>
      {/* marquee start */}
      {/* about start  */}
      <div id="about">
        <div className="container py-[148px]">
          <div className="grid grid-cols-12 bg-black px-[71px] py-[91px] rounded-[10px]">
          <div className='lg:col-span-6'>
          <p>About Me</p>
            <h2 className="w-[515px] text-[32px] font-bold">Professional <span className="text-[#C9F31D] inline-block">Problem Solutions</span>
            For Digital Products</h2>
            <p className="w-[350px] mt-[16px] mb-[35px]">Sed ut perspiciatis unde omnis iste natus to
voluptatem accusantium doloremque
laudantium, totam rem aperiamc</p>
<div className="grid grid-cols-12">
  <div className="col-span-6">
    <p className="flex items-center"><span className="p-[12px] bg-[#C9F31D] rounded-full mr-[13px]"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 16 16"><path fill="black" d="M8.5.75a.75.75 0 0 0-1.5 0v5.19L4.391 3.33a.75.75 0 1 0-1.06 1.061L5.939 7H.75a.75.75 0 0 0 0 1.5h5.19l-2.61 2.609a.75.75 0 1 0 1.061 1.06L7 9.561v5.189a.75.75 0 0 0 1.5 0V9.56l2.609 2.61a.75.75 0 1 0 1.06-1.061L9.561 8.5h5.189a.75.75 0 0 0 0-1.5H9.56l2.61-2.609a.75.75 0 0 0-1.061-1.06L8.5 5.939z"/></svg></span>Front-end Web Design</p>
  </div>
  <div className="col-span-6">
<p className="flex items-center mb-[25px]"><span className="p-[12px] bg-[#C9F31D] rounded-full mr-[13px]"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 16 16"><path fill="black" d="M8.5.75a.75.75 0 0 0-1.5 0v5.19L4.391 3.33a.75.75 0 1 0-1.06 1.061L5.939 7H.75a.75.75 0 0 0 0 1.5h5.19l-2.61 2.609a.75.75 0 1 0 1.061 1.06L7 9.561v5.189a.75.75 0 0 0 1.5 0V9.56l2.609 2.61a.75.75 0 1 0 1.06-1.061L9.561 8.5h5.189a.75.75 0 0 0 0-1.5H9.56l2.61-2.609a.75.75 0 0 0-1.061-1.06L8.5 5.939z"/></svg></span>Back-end Web Dev</p>
  </div>
  <div className="col-span-6">
    <p className="flex items-center"><span className="p-[12px] bg-[#C9F31D] rounded-full mr-[13px]"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 16 16"><path fill="black" d="M8.5.75a.75.75 0 0 0-1.5 0v5.19L4.391 3.33a.75.75 0 1 0-1.06 1.061L5.939 7H.75a.75.75 0 0 0 0 1.5h5.19l-2.61 2.609a.75.75 0 1 0 1.061 1.06L7 9.561v5.189a.75.75 0 0 0 1.5 0V9.56l2.609 2.61a.75.75 0 1 0 1.06-1.061L9.561 8.5h5.189a.75.75 0 0 0 0-1.5H9.56l2.61-2.609a.75.75 0 0 0-1.061-1.06L8.5 5.939z"/></svg></span>Front-end Web Design</p>
  </div>
  <div className="col-span-6">
<p className="flex items-center"><span className="p-[12px] bg-[#C9F31D] rounded-full mr-[13px]"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 16 16"><path fill="black" d="M8.5.75a.75.75 0 0 0-1.5 0v5.19L4.391 3.33a.75.75 0 1 0-1.06 1.061L5.939 7H.75a.75.75 0 0 0 0 1.5h5.19l-2.61 2.609a.75.75 0 1 0 1.061 1.06L7 9.561v5.189a.75.75 0 0 0 1.5 0V9.56l2.609 2.61a.75.75 0 1 0 1.06-1.061L9.561 8.5h5.189a.75.75 0 0 0 0-1.5H9.56l2.61-2.609a.75.75 0 0 0-1.061-1.06L8.5 5.939z"/></svg></span>Back-end Web Dev</p>
  </div>

</div>

          </div>
          <div className="lg:col-span-6 ">
            <div id="aboutImg" className="w-[346px] h-[363px] bg-amber-50 mx-auto rounded-[10px]">
            <span className="aboutShape"><svg xmlns="http://www.w3.org/2000/svg" width="77" height="77" viewBox="0 0 16 16"><path fill="#C9F31D" d="M8.5.75a.75.75 0 0 0-1.5 0v5.19L4.391 3.33a.75.75 0 1 0-1.06 1.061L5.939 7H.75a.75.75 0 0 0 0 1.5h5.19l-2.61 2.609a.75.75 0 1 0 1.061 1.06L7 9.561v5.189a.75.75 0 0 0 1.5 0V9.56l2.609 2.61a.75.75 0 1 0 1.06-1.061L9.561 8.5h5.189a.75.75 0 0 0 0-1.5H9.56l2.61-2.609a.75.75 0 0 0-1.061-1.06L8.5 5.939z"/></svg></span>
            <p className="py-[13px] p1 rounded-[20px] px-[15px] bg-white">MERN Stack Developer</p>
            <p className="py-[13px] p2 rounded-[20px] px-[44px] bg-white">Meheraj Hosen</p>
            </div>
          </div>
          </div>
        </div>
      </div>
      {/* about end  */}
      {/* service start  */}
      <div id="service"></div>
      {/* service end  */}
      {/* skill start  */}
      <div id="skill"></div>
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

export default Home