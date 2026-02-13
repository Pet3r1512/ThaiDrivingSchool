import BookNowBtn from "./BookNowBtn";

export default function Navbar() {
  const navLinks = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Services",
      path: "/services",
    },
    {
      name: "Pricing",
      path: "/pricing",
    },
    {
      name: "Gallery",
      path: "/gallery",
    },
    {
      name: "Contact",
      path: "/contact",
    },
  ];

  return (
    <nav className="flex items-center gap-x-8 ml-auto">
      {navLinks.map((link, index) => {
        return (
          <a
            key={index}
            href={link.path}
            className="text-sm font-medium lg:hover:text-amber-500 transition-all duration-150 ease-linear"
          >
            {link.name}
          </a>
        );
      })}
      <BookNowBtn />
    </nav>
  );
}
