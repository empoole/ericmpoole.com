import Nav from "./Nav";

const Header = () => {
  return (
    <header className="mx-auto max-w-screen-lg px-3 py-6">
      <div className="flex flex-col gap-y-3 sm:flex-row sm:items-center sm:justify-between">
        <a href="/">
          <div className="flex items-center bg-gradient-to-br from-sky-500 to-cyan-400 bg-clip-text text-xl font-bold text-transparent">
            <svg
              className="mr-1 h-8 w-8 stroke-cyan-600"
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
              <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
              <line x1="6" y1="6" x2="6.01" y2="6"></line>
              <line x1="6" y1="18" x2="6.01" y2="18"></line>
            </svg>
            Eric M Poole
          </div>
        </a>
        <Nav />
      </div>
    </header>
  );
};

export default Header;
