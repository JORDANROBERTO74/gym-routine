import React from "react";

interface PropsType {
  children?: React.ReactNode;
}

const Main = ({ children }: PropsType) => {
  return (
    <div className="min-h-screen flex flex-col bg-transparent text-foreground">
      <main className="w-full flex-1">{children}</main>
    </div>
  );
};

export default Main;
