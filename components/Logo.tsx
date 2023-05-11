import { LightBulbIcon } from "@heroicons/react/20/solid";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/">
      <h1 className="flex items-center my-2 space-x-1 text-indigo-500">
        <LightBulbIcon className="flex-shrink-0 w-8 h-8 mr-3" />
        <span className="font-sans text-3xl font-bold tracking-tight whitespace-nowrap">
          DEMASK
        </span>
      </h1>
    </Link>
  );
};

export default Logo;
