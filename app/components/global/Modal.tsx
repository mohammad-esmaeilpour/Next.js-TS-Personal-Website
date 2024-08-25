import Image from "next/image";
import React from "react";
import GithubIcon from "../icons/GithubIcon";
import { TProjectsInfo } from "@/app/types/projects";
import CloseIcon from "../icons/CloseIcon";
import Link from "next/link";
import EyeIcon from "../icons/EyeIcon";
import LockIcon from "../icons/LockIcon";

type Props = {
  data: TProjectsInfo;
  modalRef: any;
};

const Modal = ({ data, modalRef }: Props) => {
  return (
    <dialog ref={modalRef} className="modal w-full">
      <div className="modal-box w-full overflow-x-hidden sm:w-11/12 xl:w-10/12 max-w-7xl p-0">
        <div className="modal-action sticky top-0 py-2 z-10 bg-white w-full m-0 flex ps-2 justify-start">
          <form method="dialog">
            <button
              title="Modal closer"
              className="btn btn-circle bg-white btn-sm"
            >
              <CloseIcon size={20} />
            </button>
          </form>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 px-6 sm:px-10">
          <div className="col-span-1 lg:col-span-5 flex flex-col justify-between xl:pe-10 lg:sticky top-16 lg:custome-heigh">
            <div>
              <h3 className="text-gradient text-3xl">{data.title}</h3>
              <p className="text-base mb-8 mt-4 md:mt-12 font-light">{data.overview}</p>
              <div className="flex flex-col gap-4">
                <div className="flex flex-col flex-wrap gap-3">
                  <div>Skills</div>
                  <div className="flex gap-2">
                    {data.techStack.map((item) => (
                      <div key={item.title} className="text-sm bg-gray-200 rounded-full px-3 py-1">
                        {item.title}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start gap-5">
              {/* <h5>Tech stack I used</h5> */}
            </div>
            <div className="mt-1 flex flex-col sm:flex-row gap-3">
              {data.previewLink ? (
                <Link
                  target="_blank"
                  href={data.previewLink}
                  className="btn btn-secondary min-w-[170px] justify-between"
                >
                  Live Preview
                  <EyeIcon size={18} />
                  {/* <ArrowOutwardIcon color="black" size={20} /> */}
                </Link>
              ) : (
                <span className="text-green-600 text-sm flex gap-2">
                  <LockIcon size={18} />
                  For internal use
                </span>
              )}
              {data.repository && (
                <Link
                  target="_blank"
                  href={data.repository}
                  className="btn btn-secondary min-w-[170px] justify-between"
                >
                  Github
                  <GithubIcon size={20} />
                  {/* <span className="flex items-center gap-2">
                    <GithubIcon size={20} />
                    Github
                  </span> */}
                  {/* <ArrowOutwardIcon size={20} /> */}
                </Link>
              )}
            </div>
          </div>
          <div className="col-span-1 lg:col-span-7 pb-10">
            <Image
              src={data.img}
              alt="3d room"
              className="rounded-xl object-cover w-full h-96 shadow-xl"
            />

            <h4 className="mt-12 mb-7 text-xl text-black font-bold">
              Features
            </h4>
            <div className="space-y-4">
              {data.features?.map((item, index) => (
                <div key={index}>
                  <div className="font-semibold">{item.title}</div>
                  <div className="mt-1 text-sm">{item.description}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </dialog>
  );
};

export default Modal;
