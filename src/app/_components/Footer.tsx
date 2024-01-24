import Slogan from "./Slogan";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mx-auto max-w-screen-lg px-3 py-6">
      <div>
        <div className="border-t border-gray-600 pt-5">
          <div className="text-sm text-gray-200">
            © Copyright {currentYear} Eric M Poole.
          </div>
        </div>
      </div>
      <Slogan />
    </footer>
  );
};

export default Footer;
