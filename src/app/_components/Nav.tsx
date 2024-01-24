const Nav = () => {
  return (
    <nav>
      <ul className="flex gap-x-3 font-medium text-gray-200">
        <li className="hover:text-white">
          <a href="/files/Eric_M_Poole-Software_Engineer.pdf" target="_blank">
            Resume
          </a>
        </li>
        <li className="hover:text-white">
          <a href="https://github.com/empoole" target="_blank">
            Github
          </a>
        </li>
        <li className="hover:text-white">
          <a href="mailto:empoole114@gmail.com">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
