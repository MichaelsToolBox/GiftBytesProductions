import Select, { SelectProps } from '@mui/material/Select';
import { useColorScheme } from '@mui/material/styles';
import { useTranslation } from 'react-i18next';
import MenuItem from '@mui/material/MenuItem';

export default function ColorModeSelect(props: SelectProps) {
  // i18n Translations
  const { t } = useTranslation()

  const { mode, setMode } = useColorScheme();

  if (!mode) {
    return null;
  }
  return (
    <Select
      value={mode}
      onChange={(event) => setMode(event.target.value as 'system' | 'light' | 'dark')}
      SelectDisplayProps={{
        // @ts-ignore
        'data-screenshot': 'toggle-mode',
      }}
      {...props}
    >
      <MenuItem value="system">{t("mode.system")}</MenuItem>
      <MenuItem value="light">{t("mode.light")}</MenuItem>
      <MenuItem value="dark">{t("mode.dark")}</MenuItem>
    </Select>
  );
}
