import Link from "next/link";
import { BookOpen } from "lucide-react";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-background border-b">
      <div className="px-6 h-16 mx-auto flex items-center justify-between md:max-w-3xl lg:max-w-5xl xl:max-w-7xl">
        <Link href="/" className="flex items-center font-semibold">
          <BookOpen className="size-5 mr-2" />
          LMS
        </Link>
      </div>
    </header>
  );
};

export default Header;
