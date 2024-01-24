"use client";

const Slogan = () => {
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
    <div>
      <span className="text-sm text-slate-700">{slogan}</span>
    </div>
  );
};

export default Slogan;
