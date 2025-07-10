import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  registrationSchema,
  type RegistrationFormData,
} from "../schemas/registration";

interface RegistrationFormProps {
  onSubmit: (data: RegistrationFormData) => Promise<void>;
  onClose: () => void;
}

const RegistrationForm: React.FC<RegistrationFormProps> = ({
  onSubmit,
  onClose,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RegistrationFormData>({
    resolver: zodResolver(registrationSchema),

    // defaultValues: {
    //   telegramNickname: "@username",
    //   discordNickname: "username#1234",
    //   fullName: "Іван Петренко",
    //   email: "example@email.com",
    // },
  });

  const handleFormSubmit = async (data: RegistrationFormData) => {
    try {
      console.log("Registration data:", data);

      await onSubmit(data);

      onClose();
    } catch (error) {
      console.error("Form submission error:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-6">
      <div className="space-y-4">
        {/* Telegram Nickname */}
        <div>
          <label
            htmlFor="telegramNickname"
            className="block text-sm montserrat-700 text-white mb-2"
          >
            Telegram нікнейм
          </label>
          <input
            id="telegramNickname"
            type="text"
            placeholder="@username"
            {...register("telegramNickname")}
            className="w-full px-4 py-3 rounded-lg bg-[#2A2A2A] border border-[#404040] text-white placeholder-gray-400 focus:outline-none focus:border-[#70A9FF] focus:ring-1 focus:ring-[#70A9FF] transition-colors"
          />
          {errors.telegramNickname && (
            <p className="mt-1 text-sm text-red-400">
              {errors.telegramNickname.message}
            </p>
          )}
        </div>

        {/* Discord Nickname */}
        <div>
          <label
            htmlFor="discordNickname"
            className="block text-sm montserrat-700 text-white mb-2"
          >
            Discord нікнейм
          </label>
          <input
            id="discordNickname"
            type="text"
            placeholder="username#1234"
            {...register("discordNickname")}
            className="w-full px-4 py-3 rounded-lg bg-[#2A2A2A] border border-[#404040] text-white placeholder-gray-400 focus:outline-none focus:border-[#70A9FF] focus:ring-1 focus:ring-[#70A9FF] transition-colors"
          />
          {errors.discordNickname && (
            <p className="mt-1 text-sm text-red-400">
              {errors.discordNickname.message}
            </p>
          )}
        </div>

        {/* Full Name */}
        <div>
          <label
            htmlFor="fullName"
            className="block text-sm montserrat-700 text-white mb-2"
          >
            Ім'я та Прізвище
          </label>
          <input
            id="fullName"
            type="text"
            placeholder="Іван Петренко"
            {...register("fullName")}
            className="w-full px-4 py-3 rounded-lg bg-[#2A2A2A] border border-[#404040] text-white placeholder-gray-400 focus:outline-none focus:border-[#70A9FF] focus:ring-1 focus:ring-[#70A9FF] transition-colors"
          />
          {errors.fullName && (
            <p className="mt-1 text-sm text-red-400">
              {errors.fullName.message}
            </p>
          )}
        </div>

        {/* Email */}
        <div>
          <label
            htmlFor="email"
            className="block text-sm montserrat-700 text-white mb-2"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="example@email.com"
            {...register("email")}
            className="w-full px-4 py-3 rounded-lg bg-[#2A2A2A] border border-[#404040] text-white placeholder-gray-400 focus:outline-none focus:border-[#70A9FF] focus:ring-1 focus:ring-[#70A9FF] transition-colors"
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-400">{errors.email.message}</p>
          )}
        </div>
      </div>

      {/* Submit Button */}
      <div className="flex gap-3 pt-4">
        <button
          type="button"
          onClick={onClose}
          className="flex-1 px-6 py-3 rounded-lg border border-[#404040] text-white montserrat-700 hover:bg-[#2A2A2A] transition-colors"
        >
          Скасувати
        </button>
        <button
          type="submit"
          disabled={isSubmitting}
          className="flex-1 px-6 py-3 rounded-lg bg-gradient-to-r from-[#70A9FF] to-[#5BC8FF] text-white montserrat-700 hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? "Реєстрація..." : "Зареєструватися"}
        </button>
      </div>
    </form>
  );
};

export default RegistrationForm;
