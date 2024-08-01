import Image from "next/image";
import Link from "next/link";
import Logo from "../../public/2025.png";
import { Button } from "../ui/button";
import {
  NavigationMenu,
  NavigationMenuLink,
  NavigationMenuList,
} from "../ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import RegisterButton from "components/RegisterButton";
import DropdownButton from "components/ui/dropdown";
import { AnchorHTMLAttributes, useState } from "react";

export default function Navbar() {
  const links = [
    {
      title: "About Us",
      url: "/about",
    },
    // {
    //   title: "Agenda",
    //   url: "/AI_Days_Agenda.pdf",
    //   download: true,
    // },
    // {
    //   title: "Agenda",
    //   url: "/agenda",
    // },
    // {
    //   title: "Speakers",
    //   url: "/speakers",
    // },
    {
      title: "Venue",
      url: "/venue",
    },
    // {
    //   title: "Workshops",
    //   url: "/workshops",
    // },
    // {
    //   title: "Hackathon",
    //   url: "/hackathon",
    // },
    // {
    //   title: "MasterClass",
    //   url: "/masterclass",
    // },
    // {
    //   title: "Supporters",
    //   url: "/supporters",
    // },
    {
      title: "Newsroom",
      url: "/newsroom",
    },
  ];

  return (
    <nav className="px-4 py-6">
      <div className="flex justify-between xl:hidden">
        <Link href="/">
          <Image src={Logo} alt="" width={150} height={150} />
          {/* <span className="text-xl font-bold">ai days</span> */}
        </Link>
        <Sheet>
          <SheetContent side="right">
            <div className="grid gap-2 py-6">
              {links.map((link, index) => (
                <Link
                  className="flex w-full items-center py-2 text-lg font-semibold"
                  href={link.url}
                  key={index}
                >
                  {link.title}
                </Link>
              ))}
            </div>
            <AnchorButton href="https://aidays2024.vercel.app/" target="_blank">AI DAYS 2024 Website</AnchorButton>
            </SheetContent>
          <SheetTrigger
            asChild
            className="background-animate
            rounded
            bg-gradient-to-r
            from-blue-500
            via-blue-400
            to-blue-600
          "
          >
            <Button size="icon" variant="outline">
              <MenuIcon className="size-6" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
        </Sheet>
      </div>

      {/* Desktop bar */}

      <div className="mx-auto hidden items-center justify-between md:max-w-7xl xl:flex">
        <Link className="mr-4 hidden min-w-[150px] lg:flex" href="/">
          <Image src={Logo} alt="" width={150} height={150} />
        </Link>

        <div className="space-x-4">
          <NavigationMenu>
            <NavigationMenuList>
              {links.map((link, index) => (
                <NavigationMenuLink asChild key={index}>
                  {
                    <Link
                      className="group inline-flex h-9 w-max items-center justify-center rounded-md  px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
                      href={link.url}
                    >
                      {link.title}
                    </Link>
                  }
                </NavigationMenuLink>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className="space-x-4">
          <AnchorButton href="https://aidays2024.vercel.app/" target="_blank">AI DAYS 2024 Website</AnchorButton>
        </div>
      </div>
    </nav>
  );
}

function AnchorButton(props: AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <a
      {...props}
      className="inline-flex h-9 items-center justify-center whitespace-nowrap rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
    />
  );
}

function Dropdown() {
  return <DropdownButton />;
}

function CTA() {
  return <RegisterButton />;
}

function MenuIcon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}
