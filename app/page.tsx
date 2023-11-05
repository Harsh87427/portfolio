import { transform } from "next/dist/build/swc";
import Image from "next/image";
import {
  AiOutlineGithub,
  AiOutlineInstagram,
  AiOutlineLinkedin,
  AiOutlineMail,
} from "react-icons/ai";
import { FiMap } from "react-icons/fi";

export default function Home() {
  return (
    <body>
      <div id="root">
        <nav className="bg-white items-center flex text-xl h-auto justify-between py-6 pr-10 pl-12 w-full z-50 shadow-sm fixed">
          <h3 className="text-left cursor-pointer text-textcolor text-xl font-extrabold">
            <a href="#">Harsh.dev</a>
          </h3>
          <ul className="flex gap-4 text-xl list-none font-semibold text-textcolor">
            <li className="hover:text-[#147efb] transition-colors">
              <a href="#home">Home</a>
            </li>
            <li className="hover:text-[#147efb] transition-colors">
              <a href="#about">About</a>
            </li>
            <li className="hover:text-[#147efb] transition-colors">
              <a href="#projects">Projects</a>
            </li>
            <li className="hover:text-[#147efb] transition-colors">
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>

        <div>
          <section
            id="home"
            className="flex flex-col relative h-screen w-full bg-hero px-40 py-24"
          >
            <div className="items-center flex gap-40 h-260 justify-center relative ">
              <div className="text-center flex gap-40 justify-center relative">
                <div className="flex flex-col max-w-3xl relative">
                  <h1 className="text-textcolor text-6xl font-bold mt-20 mb-8 text-left leading-tight ">
                    Web Developer
                    <img
                      src="/media/wavingHand.png"
                      alt="Waving Hand"
                      className="absolute -right-8 top-24 w-16 h- 16"
                    />
                  </h1>

                  <p className="text-pcolor font-sans text-xl font-medium text-left">
                    Hi, I'm Harsh Khandelwal. A passionate web Developer based
                    in Bhubaneswar, Odisha. \ud83d\udccd
                  </p>
                  <span className="cursor-pointer flex gap-5 m-9">
                    <a
                      aria-label="linkedin"
                      rel="noreferrer"
                      target="_blank"
                      href="https://www.linkedin.com/in/harsh-khandelwal-142a59242"
                    >
                      <img
                        src="/media/linkedin.png"
                        alt="LinkedIn"
                        className="h-8"
                      />
                    </a>

                    <a
                      aria-label="github"
                      rel="noreferrer"
                      target="_blank"
                      href="https://github.com/Harsh87427"
                    >
                      <img
                        src="/media/github.png"
                        alt="Github"
                        className="h-8"
                      />
                    </a>
                  </span>
                </div>
                <div className="hero-img mt-12 mr-28"></div>
              </div>

              <div className="items-center -bottom-20 flex text-xl left-0 absolute">
                <p className="border-r-black mr-8 pr-8 ">Tech Stack:</p>
                <div className="logo">
                  <ul className="flex flex-wrap gap-8 list-none">
                    <li className="cursor-pointer">
                      <img
                        src="https://skillicons.dev/icons?i=html,css"
                        alt="skill-icon"
                      />
                    </li>
                    <li>
                      <img
                        src="https://skillicons.dev/icons?i=js,ts"
                        alt="skill-icon"
                      />
                    </li>
                    <li>
                      <img
                        src="https://skillicons.dev/icons?i=react,next"
                        alt="skill-icon"
                      />
                    </li>
                    <li>
                      <img
                        src="https://skillicons.dev/icons?i=tailwind,scss"
                        alt="skill-icon"
                      />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
          <section
            id="about"
            className="flex flex-col relative h-screen w-full bg-white px-40 py-40"
          >
            <div className="grid grid-cols-2 gap-4 h-screen ">
              <div className="items-center justify-center ">
                <div className="relative ">
                  <Image
                    src="/media/working-emoji.png"
                    alt="emoji"
                    width={410}
                    height={350}
                    className="emoji"
                  />
                  <Image
                    src="/media/about-img.webp"
                    alt="mee"
                    width={410}
                    height={350}
                    className="h-80 absolute rounded-2xl  z-10"
                  />
                  <span className="rounded-full absolute left-72 top-44 z-20">
                    <Image
                      src="/media/text2.svg"
                      alt="text"
                      width={220}
                      height={220}
                      className="wheel"
                    />
                  </span>
                </div>
              </div>
              <div className="items-center justify-center">
                <div>
                  <h3 className="text-[#147efb] font-extrabold uppercase mb-4">
                    ABOUT ME
                  </h3>
                  <h2 className="text-2xl text-[#2d2e32] font-extrabold leading-tight">
                    A dedicated web Developer <br /> based in Bhubaneswar,
                    ODISHA 📍
                  </h2>
                  <p>
                    I'm a passionate learner and web Developer who loves
                    exploring the world of Development and tech . I have
                    experience with Node.js, React, Express.js, MongoDB, and
                    Tailwind CSS, and am always looking to add new skills to my
                    toolkit. I'm excited to explore new technologies like
                    blockchain, Web 3, and cryptocurrency in the future..
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section id="projects" className="bg-hero px-40 py-28">
            <div className="mx-8">
              <h3 className="text-[#147efb] font-extrabold uppercase mb-4">
                Portfolio
              </h3>
              <h4 className="text-2xl text-[#2d2e32] font-extrabold leading-tight mb-6">
                Each project is a unique piece of development
              </h4>
            </div>
            <div className="w-full h-auto grid grid-cols-1">
              <div className="grid grid-cols-2 h-96 p-4 bg-white rounded-2xl gap-8 shadow-stack m-6">
                <div className="relative w-full overflow-hidden rounded-3xl shadow-stack bg-">
                  <a href="">
                    <Image
                      src="/media/project1.png"
                      alt="Project 1 https://www.welldesigned.gr/"
                      height={300}
                      width={300}
                      className="w-full h-auto scrollingEffect"
                    />
                  </a>
                </div>
                <div className="relative justify-center text-center flex flex-col h-auto">
                  <h3 className="font-bold text-lg text-[rgb(52,52,52)] uppercase relative bottom-7">
                    project title
                    <span className="text-sm text-[rgb(60,60,60)]">
                      (month year)
                    </span>
                  </h3>
                  <p className="text-textcolor font-medium m-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quod tempora ex itaque repellat est, nihil architecto.
                    Impedit odit corrupti libero ipsum quasi aspernatur dolorem
                    iusto a ipsa quas, recusandae omnis!
                  </p>
                  <div className="flex gap-4 justify-center mt-4">
                    <p className="bg-white shadow-stack font-semibold px-4 py-2 rounded-sm h-12 w-auto text-[rgb(52,52,52)] text-lg ">
                      stack1
                    </p>
                    <p className="bg-white shadow-stack font-semibold px-4 py-2 rounded-sm h-12 w-auto text-[rgb(52,52,52)] text-lg ">
                      stack2
                    </p>
                  </div>
                  <div className="flex justify-evenly mt-12 gap-8 items-center">
                    <a
                      href=""
                      className="flex hover:text-blue-400 font-semibold text-[rgb(60,60,60)] gap-1 items-center"
                    >
                      Code
                      <Image
                        src={"/../github.png"}
                        alt="icon"
                        height={30}
                        width={30}
                        className=""
                      />
                    </a>

                    <a
                      href=""
                      className="flex hover:text-blue-400 font-semibold text-[rgb(60,60,60)] gap-1 items-center"
                    >
                      Live Demo
                      <Image
                        src={"/media/liveDemo.png"}
                        alt="icon"
                        height={10}
                        width={20}
                        className=""
                      />
                    </a>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 h-96 p-4 bg-white rounded-2xl gap-8 shadow-stack m-6">
                <div className="relative justify-center text-center flex flex-col h-auto">
                  <h3 className="font-bold text-lg text-[rgb(52,52,52)] uppercase relative bottom-7">
                    project title
                    <span className="text-sm text-[rgb(60,60,60)]">
                      (month year)
                    </span>
                  </h3>
                  <p className="text-textcolor font-medium m-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quod tempora ex itaque repellat est, nihil architecto.
                    Impedit odit corrupti libero ipsum quasi aspernatur dolorem
                    iusto a ipsa quas, recusandae omnis!
                  </p>
                  <div className="flex gap-4 justify-center mt-4">
                    <p className="bg-white shadow-stack font-semibold px-4 py-2 rounded-sm h-12 w-auto text-[rgb(52,52,52)] text-lg ">
                      stack1
                    </p>
                    <p className="bg-white shadow-stack font-semibold px-4 py-2 rounded-sm h-12 w-auto text-[rgb(52,52,52)] text-lg ">
                      stack2
                    </p>
                  </div>
                  <div className="flex justify-evenly mt-12 gap-8 items-center">
                    <a
                      href=""
                      className="flex hover:text-blue-400 font-semibold text-[rgb(60,60,60)] gap-1 items-center"
                    >
                      Code
                      <Image
                        src={"/../github.png"}
                        alt="icon"
                        height={30}
                        width={30}
                        className=""
                      />
                    </a>

                    <a
                      href=""
                      className="flex hover:text-blue-400 font-semibold text-[rgb(60,60,60)] gap-1 items-center"
                    >
                      Live Demo
                      <Image
                        src={"/media/liveDemo.png"}
                        alt="icon"
                        height={10}
                        width={20}
                        className=""
                      />
                    </a>
                  </div>
                </div>

                <div className="relative w-full overflow-hidden rounded-3xl shadow-stack bg-">
                  <a href="">
                    <Image
                      src="/media/project1.png"
                      alt="Project 1 https://www.welldesigned.gr/"
                      height={300}
                      width={300}
                      className="w-full h-auto scrollingEffect"
                    />
                  </a>
                </div>
              </div>

              <div className="grid grid-cols-2 h-96 p-4 bg-white rounded-2xl gap-8 shadow-stack m-6">
                <div className="relative w-full overflow-hidden rounded-3xl shadow-stack bg-">
                  <a href="">
                    <Image
                      src="/media/project1.png"
                      alt="Project 1 https://www.welldesigned.gr/"
                      height={300}
                      width={300}
                      className="w-full h-auto scrollingEffect"
                    />
                  </a>
                </div>
                <div className="relative justify-center text-center flex flex-col h-auto">
                  <h3 className="font-bold text-lg text-[rgb(52,52,52)] uppercase relative bottom-7">
                    project title
                    <span className="text-sm text-[rgb(60,60,60)]">
                      (month year)
                    </span>
                  </h3>
                  <p className="text-textcolor font-medium m-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quod tempora ex itaque repellat est, nihil architecto.
                    Impedit odit corrupti libero ipsum quasi aspernatur dolorem
                    iusto a ipsa quas, recusandae omnis!
                  </p>
                  <div className="flex gap-4 justify-center mt-4">
                    <p className="bg-white shadow-stack font-semibold px-4 py-2 rounded-sm h-12 w-auto text-[rgb(52,52,52)] text-lg ">
                      stack1
                    </p>
                    <p className="bg-white shadow-stack font-semibold px-4 py-2 rounded-sm h-12 w-auto text-[rgb(52,52,52)] text-lg ">
                      stack2
                    </p>
                  </div>
                  <div className="flex justify-evenly mt-12 gap-8 items-center">
                    <a
                      href=""
                      className="flex hover:text-blue-400 font-semibold text-[rgb(60,60,60)] gap-1 items-center"
                    >
                      Code
                      <Image
                        src={"/../github.png"}
                        alt="icon"
                        height={30}
                        width={30}
                        className=""
                      />
                    </a>

                    <a
                      href=""
                      className="flex hover:text-blue-400 font-semibold text-[rgb(60,60,60)] gap-1 items-center"
                    >
                      Live Demo
                      <Image
                        src={"/media/liveDemo.png"}
                        alt="icon"
                        height={10}
                        width={20}
                        className=""
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="contact" className="bg-white px-48 py-24 w-full h-96">
            <div>
              <div className="mb-16">
                <h3 className="text-[#147efb] font-extrabold uppercase mb-4">
                  contact
                </h3>
                <h4 className="text-2xl text-[#2d2e32] font-extrabold leading-tight mb-6">
                  Don't be shy! Hit me up!👇
                </h4>
              </div>
              <div className="flex gap-24">
                <div className="flex gap-4">
                  <span className="justify-center items-center relative top-2">
                    <FiMap className="icon mapIcon" />
                  </span>

                  <div>
                    <h3 className="font-bold text-[#2d2e32]">Location</h3>

                    <p className="hover:text-[#147efb] transition-colors">
                      Bhubaneswar, Odisha
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <span className="justify-center items-center relative top-2">
                    <AiOutlineMail className="icon mailIcon" />
                  </span>

                  <div>
                    <h3 className="font-bold text-[#2d2e32]">Mail</h3>
                    <a
                      href="mailto:Hey.sohail.01@gmail.com"
                      className="hover:text-[#147efb] transition-colors"
                    >
                      harsh975201@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <footer className="bg-[#2d2e32] w-full h-32">
            <div className="flex items-center justify-between py-20 px-48">
              <h3 className="text-nav font-semibold ">
                Copyright © 2023. All rights are reserved
              </h3>

              <div className="items-center flex gap-8 justify-center mt-4">
                <a
                  href="https://www.linkedin.com/in/harsh-khandelwal-142a59242"
                  className="text-nav"
                >
                  <AiOutlineLinkedin className="footerIcon" />
                </a>

                <a href="https://github.com/Harsh87427" className="text-nav">
                  <AiOutlineGithub className="footerIcon" />
                </a>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </body>
  );
}
