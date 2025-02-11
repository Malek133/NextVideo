

import AuthBtn from "./AuthBtn";

export const Navbar: React.FC = () => {
  return (
    <nav className="w-full bg-white shadow-md p-4 flex justify-between items-center">
      <div className="text-xl font-bold">NextVideo</div>
      <div className="flex items-center space-x-4">
      <AuthBtn />
      </div>
    </nav>
  );
};

