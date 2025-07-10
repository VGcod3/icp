import React from "react";
import RegistrationDialog from "./RegistrationDialog";

const RegisterButton: React.FC = () => {
  return (
    <RegistrationDialog>
      <button
        className="bg-white text-[#1F4D6B] hover:opacity-80 hover:cursor-pointer px-4 py-2 rounded-lg transition-all md:w-44 w-36 h-12 unbounded-700"
        aria-label="Register for WCHL 2025"
      >
        REGISTER
      </button>
    </RegistrationDialog>
  );
};

export default RegisterButton;
