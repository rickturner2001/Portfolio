import { motion } from "framer-motion";
import type { Dispatch, SetStateAction } from "react";
import { Section } from "./Content";
import Tealade from "../../public/media/tealade.jpg";

import koda from "../../public/media/koda.jpg";

import koda2 from "../../public/media/koda2.jpg";
import koom from "../../public/media/koom.jpg";
import elixir from "../../public/media/elixir.jpg";
import uww from "../../public/media/uww.jpg";

const ProjectsSection = ({
  currentSection,
  setCurrentSection,
}: {
  currentSection: Section;
  setCurrentSection: Dispatch<SetStateAction<Section>>;
}) => {
  return (
    <motion.section
      initial={{ translateX: "100%" }}
      animate={
        currentSection === Section.PROJECTS
          ? { translateX: "0%" }
          : { translateX: "100%" }
      }
      transition={{ type: "tween" }}
      className=" flex flex-col p-24 absolute top-0 right-0 z-40 justify-center h-full overflow-auto items-center bg-gradient-to-br from-purple-800 to-gray-900 w-screen "
    >
      <motion.button
        initial={{ opacity: 0 }}
        onClick={() => setCurrentSection(Section.HERO)}
        animate={
          currentSection === Section.PROJECTS ? { opacity: 1 } : { opacity: 0 }
        }
        transition={{ delay: 3.5 }}
        className="absolute top-5 left-5 rounded-full text-purple-700 bg-white p-4"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
          />
        </svg>
      </motion.button>
      {/* <div className="bg-white/20 p-8  relative  flex rounded-2xl max-w-7xl mx-auto">
          <div className="absolute rounded-full py-1 px-2 bg-amber-500 -top-1 -right-6 text-white font-bold text-xs">
            in progress
          </div>
          <img src={Tealade} className="max-w-2xl object-cover rounded-md" />
          <div className="leading-loose bg-white/20  ml-12 p-8 rounded-lg ">
            <div className="flex justify-start items-center space-x-2 w-full mb-4 ">
              <button className="bg-emerald-500 rounded-lg p-2 text-white text-xs font-bold">
                eCommerce
              </button>
              <button className="bg-indigo-500 text-white rounded-md p-2 text-xs font-bold">
                Full-Stack
              </button>
              <button className="bg-black rounded-md text-white p-2 text-xs font-bold">
                Next
              </button>
              <button className="bg-blue-600 text-white rounded-md p-2 text-xs font-bold">
                TypeScript
              </button>
            </div>
            <p className="  text-white">
              Tealade is a web-based ecommerce application. It leverages APIs
              from dropshipping and social network companies to enhance its
              functionality. The website has an OAuth system that works with
              multiple providers and payments are processed using Stripe. The
              development process was made easier and more efficient thanks to
              the use of TypeScript, which added a type-safe layer on both the
              front-end and back-end. This project has provided me with valuable
              experience and knowledge in software development.
            </p>
            <button
              type="button"
              disabled
              className="text-white cursor-not-allowed  mt-6 bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 mr-2 mb-2"
            >
              <svg
                className="w-4 h-4 mr-2 -ml-1"
                aria-hidden="true"
                focusable="false"
                data-prefix="fab"
                data-icon="github"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 496 512"
              >
                <path
                  fill="currentColor"
                  d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
                ></path>
              </svg>
              Private repository
            </button>
          </div> */}
      {/* </div> */}
      <div className="flex bg-white/20   mt-12 rounded-xl">
        <div className="bg-white/20 gap-x-4 gap-y-4 rounded-lg grid grid-cols-2 p-8 ">
          <img className="w-full max-w-md rounded-lg" src={Tealade} />
          <a href="https://github.com/rickturner2001/landing-pages/tree/main/koom">
            <img className="w-full max-w-md rounded-lg" src={koom} />
          </a>
          <a href="https://github.com/rickturner2001/landing-pages/tree/main/uww">
            <img className="w-full max-w-md rounded-lg" src={uww} />
          </a>
          <a href="https://github.com/rickturner2001/landing-pages/tree/main/elixir.io">
            <img className="w-full max-w-md rounded-lg" src={elixir} />
          </a>
          <a href="https://github.com/rickturner2001/kodachrome">
            <img
              className="w-full max-w-md rounded-lg h-full object-cover"
              src={koda}
            />
          </a>

          <a href="https://github.com/rickturner2001/kodachrome">
            <img className="w-full max-w-md rounded-lg" src={koda2} />
          </a>
        </div>
      </div>
    </motion.section>
  );
};
export default ProjectsSection;
