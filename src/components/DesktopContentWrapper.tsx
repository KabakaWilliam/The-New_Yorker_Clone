import React from "react";
interface LayoutProps {
  children?: React.ReactNode;
}
const DesktopContentWrapper: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex h-max w-screen items-center justify-center">
      {children}
    </div>
  );
};

export default DesktopContentWrapper;
