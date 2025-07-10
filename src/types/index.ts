export interface EventInfo {
  label: string;
  value: string;
  colSpan?: string;
}

export interface LinkInfo {
  href: string;
  target?: string;
  rel?: string;
}

export interface PrizeData {
  amount: string;
  title: string;
  description: string;
  height: string;
}

export interface RegistrationFormData {
  telegramNickname: string;
  discordNickname: string;
  fullName: string;
  email: string;
}
