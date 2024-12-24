import { FaFacebookF } from "react-icons/fa6";
import { BsInstagram } from "react-icons/bs";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";
import useIntersectionObserver  from "./Components/useIntersectionObserver"
import heroImage from "./Components/hero-3.svg"
import { RiMenuFill } from "react-icons/ri";
import { useState } from "react";
document.addEventListener("DOMContentLoaded", function() {
  let animateElements = document.querySelectorAll('.animate');

  let observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target); // Stop observing once visible
      }
    });
  }, { threshold: 0.2 }); // Trigger when 20% of the element is visible

  animateElements.forEach(element => {
    observer.observe(element);
  });
});
function App() {
  

  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.3 });
  const [showMenuButton, setShowMenuButton] = useState(false)

  const handleScroll = (targetId) => {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const navbarHeight = 60; // Fixed navbar height
      const elementPosition =
        targetElement.getBoundingClientRect().top + window.scrollY;

      window.scrollTo({
        top: elementPosition - navbarHeight,
        behavior: "smooth",
      });
    }
  };

  const handleMenuButton = ()=>{
    setShowMenuButton(!showMenuButton)
  }


  return (
    <div className="relative">

      {/* Navbar  */}
      <div className='h-[60px]  w-screen bg-[#3B1E54] text-white flex items-center justify-between lg:px-12 px-4 fixed inset-0'>
        
            <div>
                <p className='lg:font-semibold lg:text-3xl text-2xl lg:-ml-4'>Satynarayan Maurya</p>
            </div>

            <div className="block_hide_element">
              <p onClick={()=>handleMenuButton()} className="text-3xl font-semibold  "><RiMenuFill/></p>
            </div>
            {
              <>
                {
                  showMenuButton && 
                  <div className="absolute top-12 right-0 bg-[#3B1E54] px-3 py-3 rounded-lg">
                 
                    <div  className='flex flex-col gap-2 justify-between   text-lg font-semibold'>
                      <button  onClick={() => handleScroll("home")} class="px-4 py-1 bg-white text-black rounded-lg font-bold">Home</button>
                      <button onClick={() => handleScroll("about")}  className='px-4 py-1 hover:bg-white hover:text-black rounded-lg '>About</button>
                      <button onClick={() => handleScroll("skills")}  className='px-4 py-1 hover:bg-white hover:text-black rounded-lg '>Skills</button>
                      <button onClick={() => handleScroll("education")}  className='px-4 py-1 hover:bg-white hover:text-black rounded-lg '>Education</button>
                      <button onClick={() => handleScroll("project")}  className='px-4 py-1 hover:bg-white hover:text-black rounded-lg '>Projects</button>
                      <button onClick={() => handleScroll("contact")}  className='px-4 py-1 hover:bg-white hover:text-black rounded-lg '>Contact</button>
                    </div>
                </div>
                }
              </>
            }

            <div className='hide_flex_element flex justify-between   w-[48%] text-lg font-semibold'>
                <button  onClick={() => handleScroll("home")} class="px-4 py-1 bg-white text-black rounded-lg font-bold">Home</button>
                <button onClick={() => handleScroll("about")}  className='px-4 py-1 hover:bg-white hover:text-black rounded-lg '>About</button>
                <button onClick={() => handleScroll("skills")}  className='px-4 py-1 hover:bg-white hover:text-black rounded-lg '>Skills</button>
                <button onClick={() => handleScroll("education")}  className='px-4 py-1 hover:bg-white hover:text-black rounded-lg '>Education</button>
                <button onClick={() => handleScroll("project")}  className='px-4 py-1 hover:bg-white hover:text-black rounded-lg '>Projects</button>
                <button onClick={() => handleScroll("contact")}  className='px-4 py-1 hover:bg-white hover:text-black rounded-lg '>Contact</button>
            </div>
    </div>


      {/*Section  */}

      <div className="mt-[60px]  mb-12" >

          {/* Hero section  */}
          <div id="home" className='bg-gradient-to-br  from-[#4e3a6e] to-[#836ab6] lg:h-[700px] h-[370px] lg:pb-0 pb-10 text-white flex items-center justify-center '>
              
              <div className="flex lg:flex-row flex-col lg:justify-between items-center lg:w-[85%]">

                <div className='lg:w-[50%] lg:px-0 px-4 lg:text-lg text-center flex flex-col lg:gap-4  text-white '>
                  
                    <svg className="animateWelcome" xmlns="http://www.w3.org/2000/svg" id="welcome" class="max-sm:w-full" max-width="6.30667in" height="1.27333in" viewBox="0 0 1892 382" fill="white">
                      <path id="welcome_path" d="M 673.00,52.00
                    C 673.00,52.00 686.00,52.00 686.00,52.00
                      686.00,52.00 686.00,338.00 686.00,338.00
                      686.00,338.00 673.00,338.00 673.00,338.00
                      673.00,338.00 673.00,52.00 673.00,52.00 Z
                    M 21.00,68.00
                    C 21.00,68.00 36.00,68.00 36.00,68.00
                      36.00,68.00 47.67,103.00 47.67,103.00
                      47.67,103.00 73.33,179.00 73.33,179.00
                      73.33,179.00 104.66,271.00 104.66,271.00
                      104.66,271.00 121.00,319.00 121.00,319.00
                      122.18,311.33 126.08,302.43 128.66,295.00
                      128.66,295.00 143.31,253.00 143.31,253.00
                      143.31,253.00 187.67,126.00 187.67,126.00
                      187.67,126.00 203.42,81.00 203.42,81.00
                      207.19,70.92 206.64,68.26 213.02,68.02
                      223.04,67.63 221.63,69.41 226.34,83.00
                      226.34,83.00 241.67,127.00 241.67,127.00
                      241.67,127.00 282.66,244.00 282.66,244.00
                      282.66,244.00 309.00,319.00 309.00,319.00
                      310.13,311.68 317.11,292.77 319.95,285.00
                      319.95,285.00 333.95,244.00 333.95,244.00
                      333.95,244.00 344.69,212.00 344.69,212.00
                      344.69,212.00 374.67,125.00 374.67,125.00
                      374.67,125.00 389.33,82.00 389.33,82.00
                      393.62,69.14 392.88,68.12 400.00,68.00
                      400.00,68.00 408.00,68.00 408.00,68.00
                      408.00,68.00 394.31,108.00 394.31,108.00
                      394.31,108.00 355.66,221.00 355.66,221.00
                      355.66,221.00 328.33,301.00 328.33,301.00
                      328.33,301.00 316.00,338.00 316.00,338.00
                      316.00,338.00 309.00,338.00 309.00,338.00
                      300.86,337.95 301.60,337.76 296.67,323.00
                      296.67,323.00 281.33,279.00 281.33,279.00
                      281.33,279.00 241.34,165.00 241.34,165.00
                      241.34,165.00 214.00,87.00 214.00,87.00
                      212.82,94.63 209.48,101.73 207.00,109.00
                      207.00,109.00 192.00,152.00 192.00,152.00
                      192.00,152.00 161.69,239.00 161.69,239.00
                      161.69,239.00 146.42,283.00 146.42,283.00
                      146.42,283.00 133.67,320.00 133.67,320.00
                      132.62,323.14 129.04,334.50 127.16,336.40
                      125.21,338.38 117.80,338.47 115.22,337.71
                      111.23,336.53 108.64,324.91 107.33,321.00
                      107.33,321.00 90.67,272.00 90.67,272.00
                      90.67,272.00 21.00,68.00 21.00,68.00 Z
                    M 591.00,298.00
                    C 593.38,300.41 598.16,304.17 596.83,308.00
                      595.84,310.86 590.40,315.08 588.00,317.13
                      579.99,323.99 569.02,330.32 559.00,333.67
                      527.01,344.34 488.31,339.85 461.00,319.52
                      443.42,306.44 430.55,286.34 425.50,265.00
                      422.48,252.23 422.85,240.97 423.00,228.00
                      423.31,201.98 437.43,174.05 457.00,157.30
                      486.18,132.32 534.82,130.08 567.00,150.54
                      582.48,160.39 592.23,172.74 600.24,189.00
                      609.02,206.81 610.00,220.68 610.00,240.00
                      610.00,240.00 493.00,240.00 493.00,240.00
                      493.00,240.00 457.00,240.00 457.00,240.00
                      457.00,240.00 435.00,241.00 435.00,241.00
                      435.00,241.00 438.50,263.00 438.50,263.00
                      440.61,271.93 444.53,280.29 449.44,288.00
                      471.54,322.72 519.01,336.39 557.00,321.54
                      577.65,313.46 579.50,306.23 591.00,298.00 Z
                    M 911.00,297.00
                    C 923.51,302.34 921.73,307.47 912.91,315.57
                      904.73,323.09 896.26,328.24 886.00,332.40
                      858.61,343.49 822.82,340.87 797.00,326.69
                      740.30,295.54 732.24,210.28 776.04,165.00
                      792.99,147.48 817.62,137.04 842.00,137.00
                      842.00,137.00 855.00,137.00 855.00,137.00
                      872.15,137.20 893.68,144.29 907.00,155.09
                      910.48,157.91 920.82,166.12 920.10,170.96
                      919.79,173.06 917.56,174.92 915.98,176.15
                      914.19,177.54 913.02,178.09 911.00,179.00
                      894.88,156.48 869.51,148.69 843.00,149.00
                      829.54,149.16 811.22,155.35 800.00,162.70
                      751.73,194.28 748.65,269.07 791.00,306.83
                      823.26,335.59 885.69,334.66 911.00,297.00 Z
                    M 1041.00,137.42
                    C 1072.95,133.52 1106.11,143.67 1127.83,168.00
                      1142.05,183.93 1151.97,208.56 1152.00,230.00
                      1152.00,230.00 1152.00,247.00 1152.00,247.00
                      1151.68,273.84 1135.65,304.76 1114.00,320.41
                      1092.50,335.95 1072.77,339.30 1047.00,339.00
                      1039.13,338.90 1028.50,336.48 1021.00,334.00
                      989.27,323.51 966.80,298.38 958.90,266.00
                      955.77,253.19 955.85,243.94 956.00,231.00
                      956.18,216.02 961.27,198.07 968.51,185.00
                      981.12,162.25 1001.92,146.39 1027.00,139.75
                      1027.00,139.75 1041.00,137.42 1041.00,137.42 Z
                    M 1229.00,184.00
                    C 1231.81,172.06 1242.43,160.56 1252.00,153.37
                      1272.75,137.79 1290.22,136.71 1315.00,137.00
                      1325.93,137.13 1340.57,141.26 1350.00,146.75
                      1361.55,153.46 1371.12,163.74 1376.56,176.00
                      1376.56,176.00 1382.00,190.00 1382.00,190.00
                      1385.84,173.67 1399.18,158.86 1413.00,150.05
                      1433.33,137.10 1449.95,136.73 1473.00,137.00
                      1494.62,137.26 1515.69,148.59 1528.22,166.00
                      1543.15,186.75 1542.00,209.98 1542.00,234.00
                      1542.00,234.00 1542.00,338.00 1542.00,338.00
                      1542.00,338.00 1529.00,338.00 1529.00,338.00
                      1529.00,338.00 1529.00,215.00 1529.00,215.00
                      1528.97,196.13 1520.86,174.54 1506.00,162.47
                      1484.15,144.71 1446.94,145.25 1423.00,158.51
                      1415.45,162.70 1408.97,168.41 1403.44,175.00
                      1384.12,198.02 1385.00,222.97 1385.00,251.00
                      1385.00,251.00 1385.00,338.00 1385.00,338.00
                      1385.00,338.00 1372.00,338.00 1372.00,338.00
                      1372.00,338.00 1372.00,221.00 1372.00,221.00
                      1371.97,203.16 1367.08,181.57 1354.68,168.17
                      1335.17,147.08 1299.65,144.09 1274.00,154.45
                      1262.61,159.05 1252.80,166.47 1245.09,176.00
                      1227.00,198.38 1228.00,222.16 1228.00,249.00
                      1228.00,249.00 1228.00,338.00 1228.00,338.00
                      1228.00,338.00 1215.00,338.00 1215.00,338.00
                      1215.00,338.00 1215.00,138.00 1215.00,138.00
                      1215.00,138.00 1228.00,138.00 1228.00,138.00
                      1228.00,138.00 1228.00,167.00 1228.00,167.00
                      1228.00,167.00 1229.00,184.00 1229.00,184.00 Z
                    M 1771.00,298.00
                    C 1773.39,300.42 1778.16,304.17 1776.83,308.00
                      1775.92,310.65 1770.27,315.66 1768.00,317.56
                      1759.03,325.09 1749.01,330.32 1738.00,334.14
                      1707.11,344.86 1667.19,338.77 1641.00,319.24
                      1592.11,282.79 1589.72,197.93 1636.00,158.30
                      1650.53,145.86 1671.76,137.09 1691.00,137.00
                      1691.00,137.00 1704.00,137.00 1704.00,137.00
                      1712.96,137.11 1721.63,139.32 1730.00,142.31
                      1753.27,150.62 1770.35,166.49 1780.69,189.00
                      1788.43,205.84 1791.00,221.60 1791.00,240.00
                      1791.00,240.00 1616.00,240.00 1616.00,240.00
                      1616.03,274.99 1636.14,307.24 1669.00,320.55
                      1682.99,326.22 1694.24,327.02 1709.00,327.00
                      1724.51,326.98 1742.42,321.33 1755.00,312.22
                      1755.00,312.22 1771.00,298.00 1771.00,298.00 Z
                    M 1778.00,229.00
                    C 1777.76,202.42 1761.90,173.38 1739.00,159.76
                      1714.06,144.91 1679.94,144.91 1655.00,159.76
                      1636.77,170.61 1624.02,189.58 1618.89,210.00
                      1618.89,210.00 1616.00,229.00 1616.00,229.00
                      1616.00,229.00 1778.00,229.00 1778.00,229.00 Z
                    M 598.00,229.00
                    C 595.73,200.98 582.75,174.21 558.00,159.45
                      528.43,141.81 485.89,145.92 461.04,170.09
                      445.67,185.03 436.47,207.63 436.00,229.00
                      436.00,229.00 598.00,229.00 598.00,229.00 Z
                    M 1043.00,149.30
                    C 1010.96,155.25 988.13,169.71 975.45,201.00
                      971.39,211.03 969.05,225.18 969.00,236.00
                      968.82,275.89 987.04,310.60 1027.00,322.98
                      1032.76,324.76 1042.05,326.93 1048.00,327.00
                      1066.01,327.21 1080.87,325.37 1097.00,316.49
                      1146.02,289.48 1152.84,213.53 1115.71,174.09
                      1096.95,154.16 1069.69,146.65 1043.00,149.30 Z
                    M 1842.00,314.85
                    C 1846.74,313.55 1851.69,313.46 1855.67,316.80
                      1862.85,322.81 1860.81,334.88 1852.00,338.26
                      1837.37,343.87 1826.37,323.44 1842.00,314.85 Z"></path>
                    </svg>

                    <p className='lg:mt-4 animate-fadeIn text-shadow-glow'>Hi, I'm Satynarayan Maurya, a dedicated B.Tech student with a solid foundation in software development, full-stack web development, and database management.</p>
                    <p className="animate-fadeIn lg:mt-0 mt-3">I'm a full-stack web developer skilled in the MERN stack, creating dynamic and responsive applications. I'm passionate about developing efficient, user-centered solutions that solve real-world challenges.</p>
                   
                </div>

                  {/* image  */}
                <div className="hide_block_element">
                  <img src={heroImage} alt=""  className="lg:w-[600px]"/>
                </div>
              </div>
          </div>

          {/* About  */}
          <div id="about" ref={ref} className="w-full mt-6">
            <div className="w-[97%] mx-auto shadow-xl border-t-[1px] bg-[#F5EFFF] rounded-lg ">

              <div className="lg:w-[80%]  lg:px-0 px-3 mx-auto pb-12">

                <h1 className="text-center font-semibold lg:text-5xl text-4xl lg:pt-12 pt-6 tracking-widest">ABOUT ME</h1>

                <div className="lg:mt-10 mt-6 flex flex-col lg:gap-6 gap-3 text-center  lg:text-[1.2em]">
                  <p className={`tracking-wide ${isVisible ? "animate-fadeIn" : "opacity-0 translate-y-10"}`} >Hey, I'm <span className="font-semibold">Satynarayan Maurya</span>, I am a B.Tech student and a passionate full-stack web developer with a focus on the MERN stack—MongoDB, Express.js, React.js, and Node.js. Through my projects, I've developed a deep understanding of building dynamic, responsive web applications that offer seamless user experiences.</p>
                  <p className={`tracking-wide hide_block_element ${isVisible ? "animate-fadeIn" : "opacity-0 translate-y-10"}`} >I enjoy working across both the front end and back end, from creating interactive UIs in React to designing robust server-side logic and APIs with Node.js and Express. MongoDB enables me to manage data efficiently, allowing for scalable and flexible applications. I’m continually exploring new tools and techniques to build impactful, user-centered solutions and am excited to contribute to meaningful projects that make a difference.</p>
                  <p className={`tracking-wide ${isVisible ? "animate-fadeIn" : "opacity-0 translate-y-10"}`} >My goal is to develop applications that not only meet user needs but also deliver exceptional user experiences. I value creativity and functionality in my work, aiming to make a positive difference through technology.</p>
                  <p className={`tracking-wide hide_block_element ${isVisible ? "animate-fadeIn" : "opacity-0 translate-y-10"}`} >Outside of academics, I love to read, listen to music, and spend quality time with my family and friends. I believe in maintaining a balanced lifestyle, embracing every moment with enthusiasm!</p>
                </div>

                <div className="text-center lg:mt-16 mt-8 lg:text-4xl text-3xl flex lg:gap-12 gap-10 justify-center">
                  <a href="https://www.facebook.com/profile.php?id=100073050586479&mibextid=JRoKGi" target="_blannk" className="hover:scale-125 transition-all duration-200 "><FaFacebookF/></a>

                  <a href="https://www.facebook.com/profile.php?id=100073050586479&mibextid=JRoKGi" target="_blannk" className="hover:scale-125 transition-all duration-200 "><BsInstagram/></a>

                  <a href="https://github.com/SatynarayanMaurya" target="_blannk" className="hover:scale-125 transition-all duration-200 "><FaGithub/></a>

                  <a href="https://www.linkedin.com/in/satynarayan-maurya-114335246/" target="_blannk" className="hover:scale-125 transition-all duration-200 "><FaLinkedinIn/></a>

                </div>
              </div>

            </div>
          </div>

          {/* Skills  */}
          <div id="skills" className="w-full mt-6">
            <div className="w-[97%] mx-auto shadow-xl border-t-[1px] bg-[#F5EFFF] rounded-lg">

              <div className="w-[80%] mx-auto pb-12">

                <h1 className="text-center font-bold lg:text-5xl text-4xl lg:pt-12 pt-6 ">MY SKILLS</h1>
                <div className="lg:mt-12 mt-6 flex justify-between flex-wrap lg:gap-12 gap-6">
              
                  {/* HTML & CSS 2  */}
                  <div className={`hover:shadow-xl hover:scale-105 transition-all duration-200 hover:bg-gradient-to-tr from-[#C0EBA6] to-[#FCCd2A]  w-[300px] h-[200px] bg-[#FFFBE6] rounded-3xl border border-black flex flex-col items-center px-1 py-5 ${isVisible ? "animate-fadeIn" : "opacity-0 translate-y-10"}`}>
                      <h1 className="lg:text-3xl text-2xl font-bold">HTML & CSS</h1>
                      <p className="w-[85%] text-[1em] text-[#555] leading-relaxed text-center mt-4">Experienced in HTML5 and CSS3, building responsive layouts and ensuring cross-browser compatibility.</p>
                  </div>
                  
                  {/* Tailwind 2  */}
                  <div className={`hover:shadow-xl hover:scale-105 transition-all duration-200 hover:bg-gradient-to-tr from-[#C0EBA6] to-[#FCCd2A]  w-[300px] h-[200px] bg-[#FFFBE6] rounded-3xl border border-black flex flex-col items-center px-1 py-5 ${isVisible ? "animate-fadeIn" : "opacity-0 translate-y-10"}`}>
                      <h1 className="lg:text-3xl text-2xl  font-bold">TAILWIND</h1>
                      <p className="w-[85%] text-[1em] text-[#555] leading-relaxed text-center mt-4">Tailwind CSS is a utility-first CSS framework that provides low-level utility classes for building custom designs directly in HTML.</p>
                  </div>

                  {/* Java script 3  */}
                  <div className={`${isVisible ? "animate-fadeIn" : "opacity-0 translate-y-10"} hover:shadow-xl hover:scale-105 transition-all duration-200 hover:bg-gradient-to-tr from-[#C0EBA6] to-[#FCCd2A]  w-[300px] h-[200px] bg-[#FFFBE6] rounded-3xl border border-black flex flex-col items-center px-1 py-5 `}>
                      <h1 className="lg:text-3xl text-2xl  font-bold">JAVA SCRIPT</h1>
                      <p className="w-[85%] text-[1em] text-[#555] leading-relaxed text-center mt-4">Knowledgeable in JavaScript, including ES6+, DOM manipulation, and creating interactive web applications.</p>
                  </div>

                  {/* React js 4  */}
                  <div className={`hover:shadow-xl hover:scale-105 transition-all duration-200 hover:bg-gradient-to-tr from-[#C0EBA6] to-[#FCCd2A]  w-[300px] h-[200px] bg-[#FFFBE6] rounded-3xl border border-black flex flex-col items-center px-1 py-5 ${isVisible ? "animate-fadeIn" : "opacity-0 translate-y-10"}`}>
                      <h1 className="lg:text-3xl text-2xl  font-bold">REACT JS</h1>
                      <p className="w-[85%] text-[1em] text-[#555] leading-relaxed text-center mt-4">React.js is a popular JavaScript library for building user interfaces, particularly single-page applications.</p>
                  </div>

                  {/* Node js  5  */}
                  <div className={`hover:shadow-xl hover:scale-105 transition-all duration-200 hover:bg-gradient-to-tr from-[#C0EBA6] to-[#FCCd2A]  w-[300px] h-[200px] bg-[#FFFBE6] rounded-3xl border border-black flex flex-col items-center px-1 py-5 ${isVisible ? "animate-fadeIn" : "opacity-0 translate-y-10"}`}>
                      <h1 className="lg:text-3xl text-2xl  font-bold">NODE JS</h1>
                      <p className="w-[85%] text-[1em] text-[#555] leading-relaxed text-center mt-4">Node.js is a JavaScript runtime built on Chrome's V8 engine that allows developers to execute JavaScript on the server side.</p>
                  </div>

                  {/* Node js  5  */}
                  <div className={`hover:shadow-xl hover:scale-105 transition-all duration-200 hover:bg-gradient-to-tr from-[#C0EBA6] to-[#FCCd2A]  w-[300px] h-[200px] bg-[#FFFBE6] rounded-3xl border border-black flex flex-col items-center px-1 py-5 ${isVisible ? "animate-fadeIn" : "opacity-0 translate-y-10"}`}>
                      <h1 className="lg:text-3xl text-2xl  font-bold">EXPRESS JS</h1>
                      <p className="w-[85%] text-[1em] text-[#555] leading-relaxed text-center mt-4">This is a minimal and flexible web application framework for Node.js that simplifies the process of building server-side applications.</p>
                  </div>

                  {/* Node js  5  */}
                  <div className={`hover:shadow-xl hover:scale-105 transition-all duration-200 hover:bg-gradient-to-tr from-[#C0EBA6] to-[#FCCd2A]  w-[300px] h-[200px] bg-[#FFFBE6] rounded-3xl border border-black flex flex-col items-center px-1 py-5 ${isVisible ? "animate-fadeIn" : "opacity-0 translate-y-10"}`}>
                      <h1 className="lg:text-3xl text-2xl  font-bold">MONGO DB</h1>
                      <p className="w-[85%] text-[1em] text-[#555] leading-relaxed text-center mt-4">MongoDB is a NoSQL database that uses a flexible, document-oriented data model to store data in JSON-like format (BSON).</p>
                  </div>

                    {/* C/C++ 1  */}
                    <div className={`hover:shadow-xl hover:scale-105 transition-all duration-200 hover:bg-gradient-to-tr from-[#C0EBA6] to-[#FCCd2A]  w-[300px] h-[200px] bg-[#FFFBE6] rounded-3xl border border-black flex flex-col items-center px-1 py-5 ${isVisible ? "animate-fadeIn" : "opacity-0 translate-y-10"}`}>
                      <h1 className="lg:text-3xl text-2xl font-bold">C/C++</h1>
                      <p className="w-[85%] text-[1em] text-[#555] leading-relaxed text-center mt-4">Proficient in C and C++, with a strong understanding of data structures, algorithms, and system-level programming.</p>
                  </div>

                    {/* Pyhton 1  */}
                    <div className={`hover:shadow-xl hover:scale-105 transition-all duration-200 hover:bg-gradient-to-tr from-[#C0EBA6] to-[#FCCd2A]  w-[300px] h-[200px] bg-[#FFFBE6] rounded-3xl border border-black flex flex-col items-center px-1 py-5 ${isVisible ? "animate-fadeIn" : "opacity-0 translate-y-10"}`}>
                      <h1 className="lg:text-3xl text-2xl font-bold">PYTHON</h1>
                      <p className="w-[85%] text-[1em] text-[#555] leading-relaxed text-center mt-4">Solid foundation in Python, with experience in data analysis, scripting, and web development.</p>
                  </div>
                  
                </div>
              </div>

            </div>
          </div>

          {/* Education  */}
          <div id="education" className="w-full mt-6">
            <div className="w-[97%] mx-auto shadow-xl border-t-[1px] bg-[#F5EFFF] rounded-lg">

              <div className="lg:w-[80%] w-[95%] mx-auto pb-12">

                <h1 className="text-center font-bold lg:text-5xl text-4xl lg:pt-12 pt-6  ">MY EDUCATION</h1>
                <div className="mt-8 flex flex-col lg:gap-10 gap-4 lg:pl-[550px]">

                  {/* Graduation  */}
                  <div className="hover:bg-[#fbeb3f] transition-all duration-200 bg-[#FFE5B4] lg;w-[420px] lg:h-[160px] rounded-2xl  px-5 py-4 flex flex-col gap-1">
                      <h1 className="text-2xl font-bold">Graduation ( B.Tech )</h1>
                      <h3 className="font-semibold textt-xl">Dr. Ram Manohar Lohia Avadh University, Ayodhya</h3>
                      <p className="text-[0.8em]">2021-25</p>
                      <p className="text-[0.8em]">Pursuing B.Tech in Computer Science and Engineering, committed to continuous learning and growth in the tech field.</p>
                  </div>

                  {/* Intermediate  */}
                  <div className="bg-[#FFE5B4] transition-all duration-200 hover:bg-[#fc96f7]  lg;w-[420px] lg:h-[160px]  rounded-2xl lg:-ml-52  px-5 py-4 flex flex-col gap-1">
                      <h1 className="text-2xl font-bold">Higher Secondary Education</h1>
                      <h3 className="font-semibold textt-xl">Almighty Public Intermediate College</h3>
                      <p className="text-[0.8em]">2019-20</p>
                      <p className="text-[0.8em]">Completed intermediate education with a focus on academic excellence, scoring 76%.</p>
                  </div>

                  
                  {/* High school */}
                  <div className="bg-[#FFE5B4] hover:bg-[#bcfb3f] transition-all duration-200  lg;w-[420px] lg:h-[160px]  rounded-2xl px-5 py-4 flex flex-col gap-1">
                      <h1 className="text-2xl font-bold">Secondary Education</h1>
                      <h3 className="font-semibold textt-xl">Shri Ram Paramhash Balika Inter College</h3>
                      <p className="text-[0.8em]">2017-18</p>
                      <p className="text-[0.8em]">Completed high school with a 87% score, demonstrating consistent academic effort.</p>
                  </div>

                  
                </div>

              </div>

            </div>
          </div>

          {/* Projects  */}
          <div id="project" className="w-full mt-6">
            <div className="w-[97%] mx-auto shadow-xl border-t-[1px] bg-[#F5EFFF] rounded-lg">

              <div className="lg:w-[80%] w-[95%] mx-auto pb-12">

                <h1 className="text-center font-bold  lg:text-5xl text-4xl lg:pt-10 pt-6 ">MY PROJECTS</h1>
                <div className="lg:mt-12 mt-8 flex gap-10 justify-between flex-wrap ">

                  {/* Study Notion  */}
                  <div className="w-[520px]  hover:bg-gradient-to-tr hover:from-[#b0fafb] hover:to-[#FCCd2A]   lg:h-[500px] bg-gradient-to-tr from-[#C0EBA6] to-[#FFEBB6] px-4 py-4 flex flex-col gap-3 rounded-xl hover:scale-105 transition-all duration-200">
                        <h1 className="text-3xl font-bold">Study Notion: E-Learning Platform</h1>
                        <p>Study Notion is a comprehensive e-learning platform designed to connect instructors and students seamlessly. The platform provides a user-friendly interface for students to enroll in courses and for instructors to create and manage their courses. Engage with video lectures, quizzes, assignments to reinforce your knowledge.</p>

                        <div className="flex flex-col gap-2">
                          <h3 className="text-lg font-semibold">Key features:-</h3>
                          <ul className="ml-8 list-disc flex flex-col gap-1">
                            <li> <span className="font-semibold">Student Features:</span> Purchase course via Razorpay and access chapter wise content in an enrolled section.</li>
                            <li> <span className="font-semibold">Instructor Features:</span> Create and manage courses, sections, and subsections, and track enrollments.</li>
                            <li> <span className="font-semibold">Authentication:</span> Secure email OTP based login and logout functionality. </li>
                            <li> <span className="font-semibold">Tech Stacks:</span> React.js, Node.js, Express.js, MongoDB.</li>
                          </ul>
                        </div>

                        <div className="flex justify-between mt-3 mx-2">
                          <a href="https://study-notion-frontend-satynarayan-mauryas-projects.vercel.app/" target="_blank"  rel="noopener noreferrer" className="bg-white text-black font-semibold px-4 py-1 rounded-lg">View Project</a>
                          <a href="https://github.com/SatynarayanMaurya/Study-Notion"  rel="noopener noreferrer" target="_blank" className="bg-white text-black font-semibold px-4 py-1 rounded-lg">View Github</a>
                        </div>
                  </div>

                  {/* E-Commerce  */}
                  <div className="w-[520px]   hover:bg-gradient-to-tr hover:from-[#b0fafb] hover:to-[#FCCd2A]   lg:h-[500px]  bg-gradient-to-tr from-[#C0EBA6] to-[#FFEBB6] px-4 py-4 flex flex-col gap-3 rounded-xl hover:scale-105 transition-all duration-200">
                        <h1 className="text-3xl font-bold">Shop Next: E-Commerce Platform</h1>
                        <p>ShopNext is a modern e-commerce platform designed to provide a seamless shopping experience for users. On ShopNext, users can browse a wide variety of products across different categories, all available for viewing without needing to sign up.</p>

                        <div className="flex flex-col gap-2">
                          <h3 className="text-lg font-semibold">Key features:-</h3>
                          <ul className="ml-8 list-disc flex flex-col gap-1">
                            <li> <span className="font-semibold">Normal User: </span> Browse products without login, add items to the cart, and place orders after logging in. Manage orders in the ”My Orders” section.</li>
                            <li> <span className="font-semibold">Admin Features:</span> Add, update, or delete products and track user orders.</li>
                            <li> <span className="font-semibold">Authentication:</span> Secure email-based login and logout functionality.</li>
                            <li> <span className="font-semibold">Tech Stacks:</span> React.js, Node.js, Express.js, MongoDB.</li>
                          </ul>
                        </div>

                        <div className="flex justify-between mt-3 mx-2">
                          <a href="https://e-commerce-frontend-green-ten.vercel.app/" target="_blank"  rel="noopener noreferrer" className="bg-white text-black font-semibold px-4 py-1 rounded-lg">View Project</a>
                          <a href="https://github.com/SatynarayanMaurya/E-commerce" target="_blank" rel="noopener noreferrer" className="bg-white text-black font-semibold px-4 py-1 rounded-lg">View Github</a>
                        </div>
                  </div>

                  {/* Social Media  */}
                  <div className="w-[520px]  hover:bg-gradient-to-tr hover:from-[#b0fafb] hover:to-[#FCCd2A]   lg:h-[500px]  bg-gradient-to-tr from-[#C0EBA6] to-[#FFEBB6] px-4 py-4 flex flex-col gap-3 rounded-xl hover:scale-105 transition-all duration-200">
                        <h1 className="text-2xl font-bold">Frame Hub: Social Media Platform</h1>
                        <p>FrameHub is a dynamic social media platform inspired by Instagram, designed to provide users with an engaging and visually-rich experience. FrameHub allows users to share, discover, and interact with captivating images and videos, all in one place. </p>

                        <div className="flex flex-col gap-2">
                          <h3 className="text-lg font-semibold">Key features:-</h3>
                          <ul className="ml-8 list-disc flex flex-col gap-1">
                            <li> <span className="font-semibold">FrameHub: </span> A social media platform for sharing posts and reels with interactive features.</li>
                            <li className="font-semibold">User Authentication: </li>
                            <li className="ml-10">Sign up, log in, and explore content from other users</li>
                            <li className="ml-10">Like, comment, and follow other profiles.</li>
                            <li className="ml-10">View and edit own profile, post and share reels/photos.</li>
                            <li className="ml-10">Scroll through an engaging feed of posts and reels.</li>
                            <li> <span className="font-semibold">Explore Section: </span> Browse all posts and visit user profiles.</li>
                          </ul>
                        </div>

                        <div className="flex justify-between mt-3">
                          <a href="https://instagram-umber-psi.vercel.app/" target="_blank" rel="noopener noreferrer" className="bg-white text-black font-semibold px-4 py-1 rounded-lg">View Project</a>
                          <a href="https://github.com/SatynarayanMaurya/instagram" target="_blank" rel="noopener noreferrer" className="bg-white text-black font-semibold px-4 py-1 rounded-lg">View Github</a>
                        </div>
                  </div>

                  {/* Todo app  */}
                  <div className="w-[520px]   hover:bg-gradient-to-tr hover:from-[#b0fafb] hover:to-[#FCCd2A]   lg:h-[500px]  bg-gradient-to-tr from-[#C0EBA6] to-[#FFEBB6] px-4 py-4 flex flex-col gap-3 rounded-xl hover:scale-105 transition-all duration-200">
                        <h1 className="text-2xl font-bold">TODO Lists:</h1>
                        <p>This Todo List application is a full-stack MERN project designed to provide users with a seamless, intuitive platform for managing their tasks. With a focus on user authentication and data persistence</p>

                        <div className="flex flex-col gap-2">
                          <h3 className="text-lg font-semibold">Key features:-</h3>
                          <ul className="ml-8 list-disc flex flex-col gap-1">
                            <li> <span className="font-semibold">User Authentication:</span> Users must sign up or log in before they can create, edit, delete, or mark tasks.</li>
                            <li> <span className="font-semibold">Task Management:</span> Users can easily create, update, delete, and mark tasks as completed within the app.</li>
                            <li> <span className="font-semibold">Persistent Data:</span> All tasks are securely stored in the database, ensuring that users can access their to-dos even after logging out and returning later.</li>
                            <li> <span className="font-semibold">Real-Time Updates:</span> Any changes made to the tasks are immediately reflected in the database.</li>
                          </ul>
                        </div>

                        <div className="flex justify-between mt-3">
                          <a href="https://to-do-list-frontend-zjhn.onrender.com/" target="_blank" rel="noopener noreferrer" className="bg-white text-black font-semibold px-4 py-1 rounded-lg">View Project</a>
                          <a href="https://github.com/SatynarayanMaurya/TO-DO-List" target="_blank" rel="noopener noreferrer" className="bg-white text-black font-semibold px-4 py-1 rounded-lg">View Github</a>
                          {/* <button>View Github</button> */}
                        </div>
                  </div>

                  
                </div>

              </div>

            </div>
          </div>

          
          {/* Contact  */}
          <div id="contact" className="w-full mt-6">
            <div className="w-[97%] mx-auto shadow-xl border-t-[1px] bg-[#F5EFFF] rounded-lg">

              <div className="lg:w-[80%] w-[95%] mx-auto pb-12">

                <h1 className="text-center font-bold lg:text-5xl text-4xl lg:pt-12 pt-6 ">CONTACT ME</h1>

                <div className="lg:mt-12 mt-8 flex lg:flex-row flex-col justify-between gap-10">

                  {/* left side  */}
                  <div className="bg-[#E4E0E1] py-5 px-8 rounded-xl text-center max-w-[500px] max-h-[450px]">
                    <h1 className="text-xl font-bold">Get in Touch</h1>
                    <p className="my-5">If you have any questions or comments, feel free to reach out!</p>

                    <div className="flex flex-col gap-3">
                        <h1 className="text-xl font-bold">Contact Information</h1>

                        <div className="flex flex-col gap-4">
                          <div className="flex items-center justify-center gap-1">
                            <div className="flex items-center font-semibold hide_block_element">
                              <p className="text-2xl"><MdEmail/></p>
                              <p className="text-lg">Email :</p>
                            </div>
                            <a href="mailto:satynarayanmaurya989@gmail.com"  className="hover:text-[#d470ff] transition-all duration-200 text-lg">satynarayanmaurya989@gmail.com</a>
                          </div>

                          <div className="flex items-center justify-center gap-1  font-semibold ">
                            <div className="flex items-center gap-1">
                              <p className="text-xl"><BsFillTelephoneFill/></p>
                              <p className="text-lg">Phone :</p>
                            </div>
                            <a href="tel:+1234567890" className="hover:text-[#d470ff] transition-all duration-200 text-lg">+91 89615-26015</a>
                          </div>

                          <div className="flex items-center justify-center gap-1  font-semibold ">
                            <div className="flex items-center gap-1">
                              <p className="text-xl"><FaLinkedinIn/></p>
                              <p className="text-lg">:</p>
                            </div>
                            <a href="https://www.linkedin.com/in/satynarayan-maurya-114335246/" target="_blank"  rel="noopener noreferrer" className="hover:text-[#d470ff] transition-all duration-200 text-lg">/satynarayan-maurya</a>
                          </div>

                          <div className="flex items-center justify-center gap-1  font-semibold ">
                            <div className="flex items-center gap-1">
                              <p className="text-xl"><FaGithub/></p>
                              <p className="text-lg">:</p>
                            </div>
                            <a href="https://github.com/SatynarayanMaurya" target="_blank" rel="noopener noreferrer" className="hover:text-[#d470ff] transition-all duration-200 text-lg">@Satynarayan-Maurya</a>
                          </div>
                        </div>

                    </div>
                  </div>                    

                  {/* Right side  */}
                  <div className="bg-[#9B7EBD] py-5 pb-10 px-8 rounded-xl text-center max-w-[500px] max-h-[450px]">
                    <h1 className="text-xl font-bold text-[#2E073F]">Contact Form </h1>

                    <form action="" className="flex flex-col gap-4 mt-6 w-full">
                      <div>
                        <input type="text" name="" id="" placeholder="Your Name..." className="w-full px-4 py-3 rounded-lg outline-none" />
                      </div>
                      <div>
                        <input type="text" name="" id="" placeholder="Your Email..." className="w-full px-4 py-3 rounded-lg outline-none" />
                      </div>

                      <div>
                        <textarea name="" id="" rows={4} placeholder="Your Message..." className="w-full px-4 py-2 rounded-lg outline-none"></textarea>
                      </div>

                      <button className="rounded-lg py-3 bg-white hover:bg-[#2E073F] hover:text-white transition-all duration-200 text-black font-semibold text-lg">Send Message</button>
                    </form>
                  </div>                    

                  
                </div>

              </div>

            </div>
          </div>



      </div>

    </div>
  );
}

export default App;
