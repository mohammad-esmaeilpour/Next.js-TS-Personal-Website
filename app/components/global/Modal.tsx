import Image from "next/image";
import React from "react";
import GithubIcon from "../icons/GithubIcon";

type Props = {
  data: any;
  modalRef: any;
};

const Modal = ({ data, modalRef }: Props) => {
  return (
    <dialog ref={modalRef} className="modal w-full">
      <div className="modal-box w-10/12 max-w-7xl pt-10">
        {/* <h3 className="text-3xl">{data.title}</h3> */}
        <div className="grid grid-cols-12 items-start gap-10 px-10">
          <div className="col-span-5 pe-10 sticky top-0 left-0">
            <h3 className="text-gradient">3D Room</h3>
            <p className="text-sm font-light mt-5">{data.shortDescription}</p>
            <div className="mt-7">
              <div className="flex justify-between border-b pb-2 mb-3 text-sm">
                <span>language</span>
                <span>Next js</span>
              </div>
              <div className="flex justify-between border-b pb-3 mb-2 text-sm">
                <span>CSS</span>
                <span>Tailwind CSS</span>
              </div>
            </div>
            <div className="mt-10 flex gap-4">
              <div className="btn">Live Preview</div>
              <div className="btn btn-neutral text-white">
                Github
                <GithubIcon size={18} color="white" />
              </div>
            </div>
          </div>
          <div className="col-span-7">
            <Image
              src={data.img}
              alt="3d room"
              className="rounded-xl h-80 object-cover shadow-[0 8px 30px rgba(0,0,0,.12)]"
            />
            <p className="py-4">{data.longDescription}</p>
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
