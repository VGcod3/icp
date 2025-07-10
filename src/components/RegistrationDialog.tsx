import React, { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import RegistrationForm from "./RegistrationForm";
import { type RegistrationFormData } from "../schemas/registration";

interface RegistrationDialogProps {
  children: React.ReactNode;
}

const RegistrationDialog: React.FC<RegistrationDialogProps> = ({
  children,
}) => {
  const [open, setOpen] = useState(false);

  const handleFormSubmit = async (data: RegistrationFormData) => {
    console.log("Processing registration:", data);

    const formData = new FormData();
    formData.append("telegramNickname", data.telegramNickname);
    formData.append("discordNickname", data.discordNickname);
    formData.append("fullName", data.fullName);
    formData.append("email", data.email);
    formData.append("timestamp", new Date().toISOString());
    formData.append("source", "WCHL 2025 Registration Form");

    await fetch(
      "https://script.google.com/macros/s/AKfycbzqgRPwxzlnjEmaa8PEgUftqW4F8zNSzOLv39D9YXgDwO43buGNXhIUaEleYBayWInupg/exec",
      {
        method: "POST",
        body: formData,
      }
    );
  };

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>{children}</Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/50 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 z-50" />

        <Dialog.Content className="fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 bg-[#1E1E1E] border border-[#404040] p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] rounded-lg">
          <div className="flex flex-col space-y-2 text-center sm:text-left">
            <Dialog.Title className="text-2xl unbounded-700 text-transparent bg-clip-text bg-gradient-to-r from-[#FFFFFF] via-[#70A9FF] to-[#FFFFFF]">
              Реєстрація на WCHL 2025
            </Dialog.Title>
            <Dialog.Description className="text-sm montserrat-400 text-gray-300">
              Заповніть форму для участі у кваліфікаційному раунді
            </Dialog.Description>
          </div>

          <RegistrationForm
            onSubmit={handleFormSubmit}
            onClose={() => setOpen(false)}
          />

          <Dialog.Close className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
            <svg
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 text-gray-400"
            >
              <path
                d="m11.7816 4.03157c.0312-.03125.0312-.08219 0-.11344l-.7143-.71875c-.0312-.03125-.0821-.03125-.1134 0l-3.39062 3.39844-3.39063-3.39844c-.03125-.03125-.08218-.03125-.11343 0l-.71875.71875c-.03125.03125-.03125.08219 0 .11344l3.39844 3.39062-3.39844 3.39063c-.03125.03125-.03125.08218 0 .11343l.71875.7188c.03125.03125.08218.03125.11343 0l3.39063-3.39844 3.39062 3.39844c.03125.03125.08219.03125.1134 0l.7143-.7188c.0312-.03125.0312-.08218 0-.11343l-3.39844-3.39063z"
                fill="currentColor"
                fillRule="evenodd"
                clipRule="evenodd"
              />
            </svg>
            <span className="sr-only">Close</span>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default RegistrationDialog;
