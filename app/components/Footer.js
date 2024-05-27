import React from "react";
import Link from "next/link";
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineTwitter, AiFillYoutube } from "react-icons/ai";
import { BiLogoPinterestAlt } from "react-icons/bi";

function Footer() {
  const iconsTab = [
    { icon: <FaFacebookF /> },
    { icon: <AiOutlineTwitter /> },
    { icon: <AiFillYoutube /> },
    { icon: <BiLogoPinterestAlt /> },
  ];
  return (
    <>
      <footer className="bg-amber-200">
        <div className="lg:container lg:mx-auto  lg:py-[10rem] p-8">
          {/* footer div all */}
          <div className="flex justify-between flex-col md:flex-row  lg:items-center md:items-start  md:gap-[5rem] text-left">
            {/* logo side */}
            <div className="flex flex-col w-1/2 md:p-0 py-4 gap-8">
              <img
                src={"logoo.png"}
                alt="footer_logo"
                className="w-[18rem]"
              />
              <p className="text-[15px] font-medium text-[#646464]">
              Convex Energy is a cutting-edge energy trading house with offices in Berlin, London and Amsterdam.
              </p>
              {/* socials */}
              <div className="flex gap-7 text-[18px] text-[#646464] justify-center md:justify-start">
                {iconsTab.map(({ icon }, index) => {
                  return (
                    <div
                      key={index}
                      className="text-2xl bg-[#efefef] p-2 rounded-full hover:bg-[#ff0366] hover:text-white"
                      style={{ transition: "all 0.3s" }}
                    >
                      {icon}
                    </div>
                  );
                })}
              </div>
              <p className="text-[16px] font-medium text-[#646464]">
                Design by{" "}
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://prowebcoder.com/"
                >
                  Proweb Coder
                </a>
              </p>
            </div>

            {/* middle div */}
            <div className="flex flex-col gap-8 relative">
              <Link href="/about">
              <p className="text-[16px] hover:text-[#ff0366] cursor-pointer text-[#646464] font-medium hover:font-bold">
              About Us
              </p></Link>
              <Link href="/careers">
              <p className="text-[16px] hover:text-[#ff0366] cursor-pointer text-[#646464] font-medium hover:font-bold">
              Careers
              </p></Link>
              <Link href="/campus">
              <p className="text-[16px] hover:text-[#ff0366] cursor-pointer text-[#646464] font-medium hover:font-bold">
              Campus
              </p></Link>
              <Link href="/graduates">
              <p className="text-[16px] hover:text-[#ff0366] cursor-pointer text-[#646464] font-medium hover:font-bold">
              Graduates
              </p></Link>
              <Link href="/insights">
              <p className="text-[16px] hover:text-[#ff0366] cursor-pointer text-[#646464] font-medium hover:font-bold">
              Insights
              </p></Link>
              <Link href="/contact">
              <p className="text-[16px] hover:text-[#ff0366] cursor-pointer text-[#646464] font-medium hover:font-bold">
              Contact
              </p>
              </Link>
            </div>

            {/* right div */}
            <div className="flex flex-col gap-8 relative">

              <p className="text-[16px]  text-[#646464] font-bold">
                Monday - Friday:
              </p>
              <p className="text-[16px] text-[#646464] font-medium">
                7:00am - 21:00pm
              </p>
              <p className="text-[16px] text-[#646464] font-bold">Saturday:</p>
              <p className="text-[16px] text-[#646464] font-medium">
                7:00am - 19:00pm
              </p>
              <p className="text-[16px] text-[#646464] font-bold ">
                Sunday - Closed
              </p>
            </div>

            {/* middle div */}
            <span></span>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;