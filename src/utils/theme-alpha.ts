import { alpha, Theme } from '@mui/material/styles';

/** Background paper with opacity that follows CSS color-scheme vars (MUI v6+). */
export function paperBg(theme: Theme, opacity: number) {
  const channel = theme.vars?.palette?.background?.paperChannel;
  if (channel) return `rgba(${channel} / ${opacity})`;
  return alpha(theme.palette.background.paper, opacity);
}

/** Background default with opacity that follows CSS color-scheme vars. */
export function defaultBg(theme: Theme, opacity: number) {
  const channel = theme.vars?.palette?.background?.defaultChannel;
  if (channel) return `rgba(${channel} / ${opacity})`;
  return alpha(theme.palette.background.default, opacity);
}
