"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { gsap } from "gsap";
import {
  PieChart,
  ArrowUpDown,
  BarChart3,
  FileText,
  Wallet,
  Undo2,
  Users,
  Lock,
  MessageSquare,
} from "lucide-react";
import DropdownMenu from "./DropdownMenu";
import HamburgerIcon from "./HambergerIcon";
import Image from "next/image";

interface NavItem {
  href: string;
  label: string;
}

interface DropdownItem {
  icon: React.ReactNode;
  title: string;
  href: string;
  subItems?: DropdownItem[];
}

const navItems: NavItem[] = [
  { href: "/", label: "Home" },
  { href: "/company", label: "Company" },
  { href: "/products", label: "Products" },
  { href: "/contact", label: "Contact" },
];

const analyticsItems: DropdownItem[] = [
  {
    icon: <PieChart className="w-4 h-4" />,
    title: "Overview",
    href: "/analytics/overview",
  },
  {
    icon: <ArrowUpDown className="w-4 h-4" />,
    title: "Transactions",
    href: "/analytics/transactions",
  },
  {
    icon: <BarChart3 className="w-4 h-4" />,
    title: "Reports",
    href: "/analytics/reports",
    subItems: [
      {
        icon: <FileText className="w-4 h-4" />,
        title: "Documents",
        href: "/analytics/reports/documents",
      },
      {
        icon: <Wallet className="w-4 h-4" />,
        title: "Payments",
        href: "/analytics/reports/payments",
      },
      {
        icon: <Undo2 className="w-4 h-4" />,
        title: "Refunds",
        href: "/analytics/reports/refunds",
      },
    ],
  },
];

const userItems: DropdownItem[] = [
  {
    icon: <Users className="w-4 h-4" />,
    title: "Profiles",
    href: "/users/profiles",
  },
  {
    icon: <Lock className="w-4 h-4" />,
    title: "Accounts",
    href: "/users/accounts",
  },
  {
    icon: <MessageSquare className="w-4 h-4" />,
    title: "Messages",
    href: "/users/messages",
  },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(navRef.current, {
        y: -100,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });

      gsap.utils.toArray<HTMLElement>(".nav-item").forEach((item, i) => {
        gsap.from(item, {
          opacity: 0,
          y: -20,
          delay: 0.2 * i,
          duration: 0.8,
          ease: "power3.out",
        });
      });
    });

    return () => ctx.revert();
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      gsap.to(menuRef.current, {
        height: "auto",
        opacity: 1,
        duration: 0.5,
        ease: "power3.out",
      });
    } else {
      gsap.to(menuRef.current, {
        height: 0,
        opacity: 0,
        duration: 0.5,
        ease: "power3.out",
      });
    }
  };

  return (
    <nav
      ref={navRef}
      className="fixed top-0 left-0 w-full bg-white text-gray-800 shadow-md z-50"
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-2">
            {/* <Planet className="w-8 h-8 text-blue-600" /> */}
            <span className="text-xl font-bold text-blue-600">
              <Image
                alt="novanectar"
                src="/logo.png"
                style={{ width: "60%", height: "auto" }}
                width={200}
                height={100} // Placeholder values, won't affect the final rendering
              />
            </span>
          </Link>
          <div className="hidden md:flex space-x-4">
            {navItems.map((item) => (
              <NavLink key={item.href} href={item.href} className="nav-item">
                {item.label}
              </NavLink>
            ))}
            <DropdownMenu
              title="Analytics"
              items={analyticsItems}
              className="nav-item"
            />
            <DropdownMenu
              title="Users"
              items={userItems}
              className="nav-item"
            />
          </div>
          <div className="md:hidden">
            <HamburgerIcon isOpen={isOpen} toggleMenu={toggleMenu} />
          </div>
        </div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={menuRef}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="md:hidden overflow-hidden bg-white"
          >
            <div className="px-4 py-2 space-y-2">
              {navItems.map((item) => (
                <NavLink key={item.href} href={item.href} onClick={toggleMenu}>
                  {item.label}
                </NavLink>
              ))}
              <DropdownMenu
                title="Analytics"
                items={analyticsItems}
                mobile
                onClick={toggleMenu}
              />
              <DropdownMenu
                title="Users"
                items={userItems}
                mobile
                onClick={toggleMenu}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

const NavLink: React.FC<NavLinkProps> = ({
  href,
  children,
  onClick,
  className,
}) => {
  const linkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const link = linkRef.current;
    if (link) {
      const timeline = gsap.timeline({ paused: true });
      timeline.to(link, {
        color: "#2563EB",
        duration: 0.3,
        ease: "power2.out",
      });
      timeline.to(link, { y: -2, duration: 0.2, ease: "power2.out" }, 0);

      link.addEventListener("mouseenter", () => timeline.play());
      link.addEventListener("mouseleave", () => timeline.reverse());

      return () => {
        link.removeEventListener("mouseenter", () => timeline.play());
        link.removeEventListener("mouseleave", () => timeline.reverse());
      };
    }
  }, []);

  return (
    <Link
      href={href}
      ref={linkRef}
      className={`block py-2 text-gray-800 hover:text-blue-600 transition-colors duration-200 ${className}`}
      onClick={onClick}
    >
      {children}
    </Link>
  );
};

export default Navbar;
