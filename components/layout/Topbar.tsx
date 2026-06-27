"use client";
import { usePathname } from "next/navigation";
import { Search, Menu } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
type TopbarProps = {
  setSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
};
export default function Topbar({
  setSidebarOpen,
}: TopbarProps) {
  const pathname = usePathname();

  const pageTitles: Record<string, string> = {
    "/": "Dashboard",
    "/about": "About",
    "/opportunities": "Opportunities",
    "/applications": "Applications",
    "/contact": "Contact",
  };

  const title = pageTitles[pathname] || "NoorPath";

  return (
    <header className="h-20 bg-white border-b flex items-center justify-between px-6 text-[#6da48a] dark:bg-[#1A3636] dark:text-[#eae6e6]">
  
      <div className="flex items-center gap-4">
        <button
          onClick={() => setSidebarOpen(true)}
          className="md:hidden"
        >
          <Menu size={24} />
        </button>

        <h2 className="text-2xl font-bold">
          {title}
        </h2>
      </div>

      <div className="hidden md:flex items-center bg-gray-100 rounded-full px-4 py-2 w-[350px]">
        <Search size={18} className="text-gray-500" />

        <input
          type="text"
          placeholder="Search jobs..."
          className="bg-transparent outline-none px-3 w-full dark:placeholder:text-[#414141]"
        />
      </div>


      <div className="flex items-center gap-5">
       <ThemeToggle/>
       
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gray-300"></div>

          <div className="hidden sm:block">
            <p className="font-medium">
              Bahar
            </p>

            <p className="text-xs text-gray-500">
              Job Seeker
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}