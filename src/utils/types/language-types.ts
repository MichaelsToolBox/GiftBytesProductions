import { IconButtonOwnProps } from "@mui/material/IconButton";

export interface Language {
  code: string;
  name: string;
  icon: React.ReactNode;
}

export interface LanguageSelectorDropdownProps extends Omit<IconButtonOwnProps, 'onChange'> {
  selectedLanguage: Language;
  availableLanguages: Language[];
  onChange: (language: Language) => void;
}