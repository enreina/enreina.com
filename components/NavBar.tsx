import Link from "next/link";
import DarkModeToggle from "./DarkModeToggle";

type MenuItem = {
  name: string;
  link: string;
};

const NavBar = ({ menuItems }: { menuItems: MenuItem[] }) => {
  return (
    <header className="flex flex-row justify-center w-full bg-sky-100/70 backdrop-blur-sm sticky top-0 border-b">
      <nav className="w-full max-w-2xl p-4 flex flex-row justify-between space-x-3">
        <div>
          <a className="text-xl font-bold text-gray-900" href="#home">
            Enreina
          </a>
        </div>
        <div className="grow flex flex-row space-x-3">
          {menuItems.map(({ name, link }) => (
            <Link
              key={name}
              className="text-lg text-gray-800 hover:font-semibold"
              href={link}
            >
              {name}
            </Link>
          ))}
        </div>
        <DarkModeToggle />
      </nav>
    </header>
  );
};

export default NavBar;
