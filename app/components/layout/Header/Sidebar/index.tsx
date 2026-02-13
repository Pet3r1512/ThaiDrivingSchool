import { Menu } from "lucide-react";
import {
  Drawer,
  DrawerContent,
  DrawerTrigger,
  DrawerTitle,
  DrawerHeader,
  DrawerDescription,
  DrawerFooter,
} from "~/components/ui/drawer";
import { navLinks } from "../Navbar";
import BookNowBtn from "../BookNowBtn";
import { useLocation } from "react-router";
import Logo from "../../Logo";

export default function Sidebar() {
  const location = useLocation();

  const isActive = (path: string) => {
    if (path === "/" && location.pathname !== "/") return false;
    return location.pathname === path;
  };

  return (
    <Drawer direction="right">
      <DrawerTrigger>
        <Menu />
      </DrawerTrigger>
      <DrawerContent className="rounded-l-2xl">
        <DrawerHeader className="hidden">
          <DrawerTitle>Title</DrawerTitle>
          <DrawerDescription>Description</DrawerDescription>
        </DrawerHeader>
        <div className="container mx-auto px-4 py-8 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.path}
              className={`text-lg font-medium text-left py-2 ${isActive(link.path) ? "text-amber-500" : "text-slate-600"}`}
            >
              {link.name}
            </a>
          ))}
          <BookNowBtn />
        </div>
        <DrawerFooter>
          <Logo className="h-6! ml-auto" />
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
