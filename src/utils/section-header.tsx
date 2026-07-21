import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { sectionHeaderMb } from './section-rhythm';

type SectionHeaderProps = {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  invert?: boolean;
};

/** Consistent section title block used across the site. */
export default function SectionHeader({
  title,
  subtitle,
  align = 'center',
  invert = false,
}: SectionHeaderProps) {
  const isCenter = align === 'center';

  return (
    <Box
      sx={{
        width: { xs: '100%', md: isCenter ? '64%' : '100%' },
        textAlign: { xs: isCenter ? 'center' : 'left', md: align },
        mx: isCenter ? 'auto' : 0,
        mb: sectionHeaderMb,
        px: { xs: 0.5, sm: 0 },
      }}
    >
      <Box
        aria-hidden
        sx={{
          width: 32,
          height: 3,
          borderRadius: 999,
          bgcolor: 'primary.main',
          mb: { xs: 1.5, sm: 1.75 },
          mx: isCenter ? 'auto' : 0,
          opacity: 0.85,
        }}
      />
      <Typography
        component="h2"
        variant="h3"
        sx={{
          color: invert ? 'common.white' : 'text.primary',
          letterSpacing: '-0.035em',
          fontSize: { xs: '1.75rem', sm: undefined },
          mb: subtitle ? { xs: 1, sm: 1.25 } : 0,
        }}
      >
        {title}
      </Typography>
      {subtitle && (
        <Typography
          variant="body1"
          sx={{
            color: invert ? 'grey.400' : 'text.secondary',
            fontSize: { xs: '0.98rem', sm: '1.06rem' },
            lineHeight: 1.65,
            maxWidth: 560,
            mx: isCenter ? 'auto' : 0,
          }}
        >
          {subtitle}
        </Typography>
      )}
    </Box>
  );
}
