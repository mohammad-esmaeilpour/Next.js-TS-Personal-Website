import Image from "next/image";
import React from "react";
import GithubIcon from "../icons/GithubIcon";
import ExternalLinkIcon from "../icons/ExternalLinkIcon";
import { TProjectsInfo } from "@/app/types/projects";

type Props = {
  data: TProjectsInfo;
  modalRef: any;
};

const Modal = ({ data, modalRef }: Props) => {
  return (
    <dialog ref={modalRef} className="modal w-full">
      <div className="modal-box w-10/12 max-w-7xl pt-10">
        <div className="grid grid-cols-12 gap-10">
          <div className="col-span-5 flex flex-col justify-between pe-10 sticky top-0 custome-heigh">
            <div>
              <h3 className="text-5xl text-gradient">{data.title}</h3>
              <p className="text-sm font-light mt-10">{data.description}</p>
              <div className="mt-7">
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
            </div>

            <div className="mt-10 flex gap-3">
              <div className="btn btn-neutral flex-1 justify-between">
                Live Preview
                <ExternalLinkIcon color="white" size={18} />
              </div>
              <div className="btn flex-1 justify-between">
                Github
                <GithubIcon size={18} />
              </div>
            </div>
          </div>
          <div className="col-span-7">
            <Image
              src={data.img}
              alt="3d room"
              className="rounded-xl h-96 object-cover shadow-xl"
            />

            <h4 className="text-gradient text-2xl mt-10 mb-3">Overview</h4>
            <p>{data.overview}</p>
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
              <ul className="space-y-3">
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
        <div className="modal-action">
          <form method="dialog">
            <button className="btn">Close</button>
          </form>
        </div>
      </div>
    </dialog>
  );
};

export default Modal;
