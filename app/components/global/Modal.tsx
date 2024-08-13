import Image from "next/image";
import React from "react";
import GithubIcon from "../icons/GithubIcon";
import ExternalLinkIcon from "../icons/ExternalLinkIcon";
import { TProjectsInfo } from "@/app/types/projects";
import CloseIcon from "../icons/CloseIcon";
import Link from "next/link";
import ArrowOutwardIcon from "../icons/solid/ArrowOutwardIcon";

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
              <h3 className="text-4xl text-gradient">{data.title}</h3>
              <p className="text-sm font-light mt-4 xl:mt-10">
                {data.overview}
              </p>
            </div>
            <div>
              {data.introductionList.map((item) => (
                <div
                  key={item.key}
                  className="flex justify-between border-b pb-2 mb-3 text-sm"
                >
                  <span>{item.key}</span>
                  <span>{item.value}</span>
                </div>
              ))}
            </div>

            <div className="mt-1 flex flex-col sm:flex-row gap-3">
              <Link
                target="_blank"
                href={data.link}
                className="btn btn-primary min-w-[170px] justify-between"
              >
                Live Preview
                <ArrowOutwardIcon color="white" size={20} />
              </Link>
              {data.repository && (
                <Link
                  target="_blank"
                  href={data.repository}
                  className="btn btn-secondary min-w-[170px] justify-between"
                >
                  <span className="flex items-center gap-2">
                    <GithubIcon size={20} />
                    Github
                  </span>
                  <ArrowOutwardIcon size={20} />
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

            <div>
              <h4 className="text-gradient text-2xl mb-3 mt-8">Features</h4>
              <ul className="space-y-3">
                {data.features?.map((item: string) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-gradient text-2xl mt-10 mb-3">
                Technologies Used
              </h4>
              <ul className="list-disc list-inside space-y-3">
                {data.technologies.map((item: string) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            {data.packages && (
              <div>
                <h4 className="text-gradient text-2xl mt-10 mb-3">
                  Package Used
                </h4>
                {data?.packages?.map((item: string) => (
                  <li key={item}>{item}</li>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </dialog>
  );
};

export default Modal;
