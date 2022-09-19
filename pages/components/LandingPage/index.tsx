import type { NextPage } from "next";
import Image from "next/image";

const LandingPage: NextPage = () => {
  return (
    <div className="h-96 bg-gray-200">
      <div className="h-11 bg-neutral-300 flex">
        <div className="ml-12 mt-1.5">
          <Image src="/logo-black.png" width="28px" height="28px" />
        </div>

        <p className="ml-2 mt-2 text-black font-semibold">Emily May Rose</p>
      </div>

      <div className = "mt-16">
        <div className="text-black px-12">
          <p className="text-sm">Lorem ipsum dolor sit amet</p>
          <p className="font-medium text-5xl mt-4">Introducing Emily</p>
          <p className="w-96 mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
          </p>
        </div>

        {/* Image?? */}
        <div></div>
      </div>
    </div>
  );
};

export default LandingPage;
