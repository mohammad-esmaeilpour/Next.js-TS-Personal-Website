import React, { Ref } from "react";
import FloatButtonNav from "./buttons/FloatButtonNav";

interface BottomNavProps {
  refs: any; // Array of refs
}

const FloatNav = React.forwardRef<HTMLDivElement, BottomNavProps>(
  ({ refs }) => {
    return (
      <div className="z-10 p-[4px] rounded-[12px] fixed bottom-[5%] left-[50%] translate-x-[50%] backdrop-blur-sm">
        <div className="container py-2 rounded-[8px] items-center">
          <FloatButtonNav refs={refs} />
        </div>
      </div>
    );
  }
);

FloatNav.displayName = "FloatNav";

export default FloatNav;
