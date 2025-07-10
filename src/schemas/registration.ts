import { z } from "zod";

export const registrationSchema = z.object({
  telegramNickname: z
    .string()
    .min(1, "ТГ нікнейм є обов'язковим")
    .min(3, "ТГ нікнейм повинен містити принаймні 3 символи")
    .regex(
      /^[a-zA-Z0-9_]+$/,
      "ТГ нікнейм може містити лише літери, цифри та підкреслення"
    ),

  discordNickname: z
    .string()
    .min(1, "Діскорд нікнейм є обов'язковим")
    .min(2, "Діскорд нікнейм повинен містити принаймні 2 символи"),

  fullName: z
    .string()
    .min(1, "Ім'я та прізвище є обов'язковими")
    .min(2, "Ім'я та прізвище повинні містити принаймні 2 символи")
    .regex(
      /^[a-zA-Zа-яА-ЯёЁіІїЇєЄ\s]+$/,
      "Ім'я та прізвище можуть містити лише літери та пробіли"
    ),

  email: z
    .string()
    .min(1, "Пошта є обов'язковою")
    .email("Введіть коректну адресу електронної пошти"),
});

export type RegistrationFormData = z.infer<typeof registrationSchema>;
