"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  User,
  Briefcase,
  FileText,
  Mail,
  Settings,
} from "lucide-react";

const menuItems = [
  {
    name: "Dashboard",
    href: "/",
    icon: LayoutDashboard,
  },
  {
    name: "About",
    href: "/about",
    icon: User,
  },
  {
    name: "Opportunities",
    href: "/opportunities",
    icon: Briefcase,
  },
  {
    name: "Applications",
    href: "/applications",
    icon: FileText,
  },
  {
    name: "Contact",
    href: "/contact",
    icon: Mail,
  },
];
type SidebarProps = {
  sidebarOpen: boolean;
  setSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
};
export default function Sidebar({
  sidebarOpen,
  setSidebarOpen,
}: SidebarProps) {

  const pathname = usePathname();

  return (
    <>
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/40 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <aside
        className={`fixed left-0 top-0 z-50 flex h-screen w-64 flex-col overflow-y-auto bg-[#659287] text-white transition-transform duration-300 md:sticky md:top-0 md:translate-x-0 dark:bg-[#2B5748] dark:text-[#eae6e6] ${sidebarOpen ? "translate-x-0" : "-translate-x-full"
          }`}
      >
        <button
          onClick={() => setSidebarOpen(false)}
          className="absolute right-4 top-4 md:hidden"
        >
          ✕
        </button>
        <div className="h-20 flex items-center px-8 border-b border-white/10">
          <h1 className="text-2xl font-bold">NoorPath</h1>
        </div>

        <nav className="flex-1 p-4 space-y-3">
          {menuItems.map((item) => {
            const Icon = item.icon;

            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);

            return (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setSidebarOpen(false)}
                className={`flex items-center gap-3 px-4 py-3 rounded-2xl transition-all ${active
                  ? "bg-white text-[#659e83] shadow-md"
                  : "hover:bg-white/10"
                  }`}
              >
                <Icon size={20} />
                <span>{item.name}</span>
              </Link>
            );
          })}
        </nav>

        <div className="p-4 border-t border-white/10">
          <button className="flex items-center gap-3 w-full px-4 py-3 rounded-2xl hover:bg-white/10">
            <Settings size={20} />
            Settings
          </button>
        </div>
      </aside>
    </>
  );
}