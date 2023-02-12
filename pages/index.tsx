import type { NextPage } from "next";
import Head from "next/head";
import { ReactNode } from "react";
import NavBar from "../components/NavBar";
import AboutSection from "../components/sections/AboutSection";
import BlogSection from "../components/sections/BlogSection";
import HomeSection from "../components/sections/HomeSection";
import PianoSection from "../components/sections/PianoSection";
import ProjectsSection from "../components/sections/ProjectsSection";
import { motion } from "framer-motion";

type Section = {
  name: string;
  id: string;
  component: ReactNode;
};

const sections: Section[] = [
  { name: "Home", id: "home", component: <HomeSection /> },
  {
    name: "About",
    id: "about",
    component: <AboutSection />,
  },
  {
    name: "Projects",
    id: "projects",
    component: <ProjectsSection />,
  },
  {
    name: "Blog",
    id: "blog",
    component: <BlogSection />,
  },
  {
    name: "Piano Covers",
    id: "piano",
    component: <PianoSection />,
  },
];

const menuItems = [
  ...sections
    .filter(({ id }) => id !== "home")
    .map(({ name, id }) => ({ name, link: `#${id}` })),
];

const Home: NextPage = () => {
  return (
    <div className="flex w-full min-h-screen flex-col items-center justify-center">
      <Head>
        <title>Enreina</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavBar menuItems={menuItems} />

      <main className="flex w-full max-w-2xl px-8 py-8 flex-col text-base leading-6">
        {sections.map(({ id, component }) => {
          return (
            <motion.section
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              key={id}
              id={id}
              className="flex flex-col mt-20 min-h-screen space-y-4 pt-20"
            >
              {component}
            </motion.section>
          );
        })}
      </main>

      <footer className="text-sm h-12 text-slate-400 font-light flex w-full items-center justify-center">
        <p>
          Enreina @ 2023. Built with <a href="https://nextjs.org/">Next.js</a>{" "}
          and <a href="https://tailwindcss.com/">Tailwind CSS</a>.
        </p>
      </footer>
    </div>
  );
};

export default Home;
