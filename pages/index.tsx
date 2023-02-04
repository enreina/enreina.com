import type { NextPage } from "next";
import Head from "next/head";

const menuItems = [
  ["Home", "#"],
  ["Projects", "#"],
  ["Blog", "#"],
  ["Piano Covers", "#"],
];
const DarkModeToggle = () => {
  return (
    <button className="p-1 bg-purple-700 rounded-md">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="white"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
        />
      </svg>
    </button>
  );
};

const Home: NextPage = () => {
  return (
    <div className="flex w-full min-h-screen flex-col items-center justify-center">
      <Head>
        <title>Enreina</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="flex flex-row justify-center w-full bg-sky-100/70 backdrop-blur-sm sticky top-0 border-b">
        <nav className="w-full max-w-2xl p-4 flex flex-row justify-between space-x-3">
          <div>
            <a className="text-xl font-bold text-gray-900" href="#">
              Enreina
            </a>
          </div>
          <div className="grow flex flex-row space-x-3">
            {menuItems.map(([name, link]) => (
              <a
                key={name}
                className="text-lg text-gray-800 hover:font-semibold"
                href={link}
              >
                {name}
              </a>
            ))}
          </div>
          <DarkModeToggle />
        </nav>
      </header>

      <main className="flex w-full max-w-2xl px-4 py-8 flex-1 flex-col text-xl space-y-8 leading-8">
        <h1 className="text-5xl font-bold">Hey There! 👋</h1>
        <p>My name is Enreina.</p>
        <p>
          I am a<strong> language learner</strong> interested in East Asian
          languages – currently{" "}
          <a
            className="text-blue-500 hover:text-blue-600 underline"
            href="https://enreina.com/tag/learning-japanese/"
          >
            studying Japanese
          </a>
          .
        </p>
        <p>
          I am an <strong>aspiring piano arranger</strong>. I make{" "}
          <a
            className="text-blue-500 hover:text-blue-600 underline"
            href="https://www.youtube.com/channel/UCIJtHGMH_M_uBbSCy3euYcg"
          >
            piano covers and arrangement videos
          </a>
          . I also transcribe my arrangements as{" "}
          <a
            className="text-blue-500 hover:text-blue-600 underline"
            href="https://musescore.com/user/53154402"
          >
            sheet music
          </a>
          .
        </p>
        <p>
          I had been <strong>a software engineer</strong> for quite some years
          but had taken a{" "}
          <a
            className="text-blue-500 hover:text-blue-600 underline"
            href="https://enreina.com/blog/blog-reboot-what-am-i-if-i-am-not-a-software-engineer/"
          >
            professional break
          </a>{" "}
          from coding for some time now. Just recently, I've been{" "}
          <a
            className="text-blue-500 hover:text-blue-600 underline"
            href="https://github.com/enreina"
          >
            slowly getting back into coding
          </a>
          . For more about my work experience as a software engineer, please
          refer to my{" "}
          <a
            className="text-blue-500 hover:text-blue-600 underline"
            href="https://docs.google.com/document/d/1ibvXccAYN7uayEQFxquL02dUy4cZIJy59DH8rdOs3_Y/edit?usp=sharing"
          >
            resume
          </a>
          .
        </p>
        <p>
          I{" "}
          <a
            className="text-blue-500 hover:text-blue-600 underline"
            href="https://enreina.com/blog/"
          >
            blog
          </a>{" "}
          occasionally on anything I feel worth writing whenever I feel like it.
        </p>
      </main>

      <footer className="text-sm h-12 text-slate-400 font-light flex w-full items-center justify-center">
        <p>
          Enreina @ 2023. Built with <a href="https://nextjs.org/">Next.js</a>,{" "}
          <a href="https://tailwindcss.com/">Tailwind CSS</a>, and{" "}
          <a href="https://ghost.org/">Ghost</a>.
        </p>
      </footer>
    </div>
  );
};

export default Home;
