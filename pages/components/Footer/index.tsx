import type { NextPage } from "next";
import Link from "next/link";
import Image from "next/image";

const Footer: NextPage = () => {
  return (
    <footer className="bg-neutral-800 h-72 md:h-44 md:flex justify-center">
      {/* Logo */}
      <div className="my-auto flex justify-center pt-8 md:pt-0">
        {/* Logo Image */}
        <Image src="/logo-white.png" width="60px" height="60px"/>
        <div className="my-auto ml-4">
          <p className="font-bold text-lg">EMILY MAY ROSE</p>
          <p>D2D Pest Control Industry</p>
        </div>
      </div>

      {/* Social */}
      <div className="my-auto md:ml-12 lg:ml-24 pt-6 md:pt-0">
        <p className="font-semibold text-center md:text-left">Social</p>
        <div className="flex font-thin justify-center">
          <div className="mr-8">
            <Link href ="/">Instagram</Link><br/>
            <Link href ="/">Facebook</Link>
          </div>

          <div className="mr-8">
            <Link href ="/">TikTok</Link><br/>
            <Link href ="/">Twitter</Link>
          </div>

          <div>
            <Link href ="/">Linkedin</Link>
          </div>
        </div>
      </div>

      {/* Blog */}
      <div className="text-center my-auto md:ml-12 lg:ml-24 pt-6 md:pt-0">
        <button className="bg-stone-300 hover:bg-stone-400 text-neutral-800 py-1.5 px-4 text-sm font-bold">
          {" "}
          My Blog
        </button>
      </div>
    </footer>
  );
};

export default Footer;
