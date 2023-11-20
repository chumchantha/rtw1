const logo = "https://shorturl.at/aDRY8";
const pf = "https://shorturl.at/aeiJK";

const NavBar = () => {
  return (
    <header className="bg-transparent px-10 fixed left-0 top-0 right-0">
      <nav className="flex flex-row items-center justify-between h-20">
        <img className="w-40" src={logo} />
        <ul className="flex flex-row text-lg items-center gap-4 whitespace-nowrap text-white">
          <li>TV Shows</li>
          <li>Movies</li>
          <li>Population</li>
          <li>My List</li>
        </ul>
        <img className="w-12 rounded-sm" src={pf} alt="pf" />
      </nav>
    </header>
  );
};

export default NavBar;
