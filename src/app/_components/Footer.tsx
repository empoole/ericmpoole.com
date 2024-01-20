const Footer = () => {
  const currentYear = new Date().getFullYear();
  const slogans = [
    "Gabba Gabba Hey",
    "Vulkan lives",
    "It wouldn't be the same without them",
    "One amoung the Fence",
    "West of Arkham...",
    "Have fun, dont't die",
    "What doesn't grow dies",
    "Bright blue his jacket is, and his boots are yellow",
    "There was a hole here, it's gone now",
    "Look, up in the sky",
  ];

  const slogan = slogans[Math.floor(Math.random() * slogans.length)];

  return (
    <footer className="mx-auto max-w-screen-lg px-3 py-6">
      <div>
        <div className="border-t border-gray-600 pt-5">
          <div className="text-sm text-gray-200">
            © Copyright {currentYear} Eric M Poole. Design by{" "}
            <a
              className="text-cyan-400 hover:underline"
              href="https://creativedesignsguru.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              CreativeDesignsGuru
            </a>
            .
          </div>
        </div>
      </div>
      <div>
        <span className="text-sm text-slate-700">{slogan}</span>
      </div>
    </footer>
  );
};

export default Footer;
