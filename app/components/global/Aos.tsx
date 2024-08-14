"use client";
import AOS from "aos";
import React, { useEffect } from "react";
const Aos = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return <></>;
};

export default Aos;
