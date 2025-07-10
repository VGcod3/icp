import { z } from "zod";

export const registrationSchema = z.object({
  telegramNickname: z
    .string()
    .min(1, "Telegram нікнейм є обов'язковим")
    .min(3, "Telegram нікнейм повинен містити принаймні 3 символи")
    .refine((check) => check.startsWith("@"), {
      message: "Telegram нікнейм повинен починатися з '@'",
    })
    .regex(
      /^@[a-zA-Z0-9_]+$/,
      "Telegram нікнейм може містити лише літери, цифри та підкреслення"
    ),

  discordNickname: z
    .string()
    .min(1, "Discord нікнейм є обов'язковим")
    .min(2, "Discord нікнейм повинен містити принаймні 2 символи"),

  fullName: z
    .string()
    .min(1, "Ім'я та прізвище є обов'язковими")
    .min(2, "Ім'я та прізвище повинні містити принаймні 2 символи")
    .regex(
      /^[a-zA-Zа-яА-ЯёЁіІїЇєЄ\s]+$/,
      "Ім'я та прізвище можуть містити лише літери та пробіли"
    ),

  email: z.email({
    message: "Будь ласка, введіть коректну електронну адресу",
  }),
});

export type RegistrationFormData = z.infer<typeof registrationSchema>;
