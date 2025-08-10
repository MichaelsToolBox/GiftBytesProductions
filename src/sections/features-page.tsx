import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import MuiChip from '@mui/material/Chip';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Fade from '@mui/material/Fade';
import { useTranslation } from 'react-i18next';
import { keyframes, styled } from '@mui/material/styles';

// --- ICONS ---
import PriceCheckRoundedIcon from '@mui/icons-material/PriceCheckRounded';
import DevicesRoundedIcon from '@mui/icons-material/DevicesRounded';
import SupportAgentRoundedIcon from '@mui/icons-material/SupportAgentRounded';
import AutoAwesomeRoundedIcon from '@mui/icons-material/AutoAwesomeRounded';
import PhoneIphoneRoundedIcon from '@mui/icons-material/PhoneIphoneRounded';
import TabletMacRoundedIcon from '@mui/icons-material/TabletMacRounded';
import DesktopWindowsRoundedIcon from '@mui/icons-material/DesktopWindowsRounded';
import ForumRoundedIcon from '@mui/icons-material/ForumRounded';

// Styled Chip for mobile view
interface ChipProps {
  selected?: boolean;
}
const Chip = styled(MuiChip)<ChipProps>(({ theme }) => ({
  variants: [
    {
      props: ({ selected }) => !!selected,
      style: {
        background: 'linear-gradient(to bottom right, hsl(210, 98%, 48%), hsl(210, 98%, 35%))',
        color: 'hsl(0, 0%, 100%)',
        borderColor: (theme.vars || theme).palette.primary.light,
        '& .MuiChip-label': { color: 'hsl(0, 0%, 100%)' },
        ...theme.applyStyles('dark', {
          borderColor: (theme.vars || theme).palette.primary.dark,
        }),
      },
    },
  ],
}));

// --- DYNAMIC ANIMATION KEYFRAMES ---

// --- DYNAMIC & INTENSE ANIMATION KEYFRAMES ---

const shake = keyframes`
  0%, 100% { transform: rotate(0deg); }
  25% { transform: rotate(5deg); }
  50% { transform: rotate(-5deg); }
  75% { transform: rotate(5deg); }
`;

const intenseGlow = keyframes`
  0% { box-shadow: 0 0 10px 0px hsla(210, 100%, 50%, 0.5); }
  50% { box-shadow: 0 0 40px 15px hsla(210, 100%, 50%, 0.8); }
  100% { box-shadow: 0 0 10px 0px hsla(210, 100%, 50%, 0.5); }
`;

const orbit = keyframes`
  0% { transform: translate(0, 0) scale(1); }
  25% { transform: translate(-200px, -25px) scale(1.1); }
  50% { transform: translate(0, 160px) scale(0.9); }
  75% { transform: translate(200px, -100px) scale(1.1); }
  100% { transform: translate(0, 0) scale(1); }
`;

const shockwave = keyframes`
  0% { transform: scale(0.5); opacity: 0.7; }
  100% { transform: scale(4); opacity: 0; }
`;

// --- CUSTOM VISUAL COMPONENTS ---

// --- UPDATED & INTENSE VISUAL COMPONENTS ---

const CostVisual = () => (
  <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', flexDirection: 'column', p: 3, position: 'relative' }}>
    <Box
      sx={{
        borderRadius: '100%',
        p: 2,
        bgcolor: (theme) => `hsla(${theme.palette.primary} / 0.1)`,
        animation: `${intenseGlow} 2s ease-in-out infinite`,
      }}
    >
      <PriceCheckRoundedIcon color="primary" sx={{ fontSize: '5rem', animation: `${shake} 0.75s linear infinite` }}/>
    </Box>
  </Box>
);

const DevicesVisual = () => (
  <Box sx={{ position: 'relative', height: '100%', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
    <Box
      sx={{
        width: '80px',
        height: '80px',
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        animation: `${intenseGlow} 2s ease-in-out infinite`,
      }}
    >
      <AutoAwesomeRoundedIcon color="primary" sx={{ fontSize: '3rem', zIndex: 1 }}/>
    </Box>
    <DesktopWindowsRoundedIcon sx={{ position: 'absolute', fontSize: '5rem', color: 'text.secondary', opacity: 0.7, animation: `${orbit} 10s linear infinite`, animationDelay: '0s' }} />
    <TabletMacRoundedIcon sx={{ position: 'absolute', fontSize: '4rem', color: 'text.secondary', opacity: 0.7, animation: `${orbit} 8s linear infinite reverse`, animationDelay: '1s' }} />
    <PhoneIphoneRoundedIcon sx={{ position: 'absolute', fontSize: '3rem', color: 'text.secondary', opacity: 0.7, animation: `${orbit} 9s linear infinite`, animationDelay: '2s' }} />
  </Box>
);

const CommunityVisual = () => (
  <Box sx={{ position: 'relative', height: '100%', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
    <Box sx={{
      position: 'absolute',
      width: '80px',
      height: '80px',
      borderRadius: '100%',
      border: '3px solid',
      borderColor: 'primary.main',
      animation: `${shockwave} 2s ease-out infinite`,
    }} />
    <SupportAgentRoundedIcon color="primary" sx={{ fontSize: '4rem', zIndex: 1 }} />
  </Box>
);

// --- MOBILE LAYOUT ---
interface MobileLayoutProps {
  selectedItemIndex: number;
  handleItemClick: (index: number) => void;
  items: Array<{ title: string; description: string; visual: React.ReactNode }>;
}

export function MobileLayout({ selectedItemIndex, handleItemClick, items }: MobileLayoutProps) {
  if (!items || items.length === 0) {
    return null;
  }
  return (
    <Box sx={{ display: { xs: 'flex', sm: 'none' }, flexDirection: 'column', gap: 2 }}>
      <Box sx={{ display: 'flex', gap: 2, overflow: 'auto', pb: 1.5 }}>
        {items.map(({ title }, index) => (
          <Chip
            size="medium"
            key={index}
            label={title}
            onClick={() => handleItemClick(index)}
            selected={selectedItemIndex === index}
          />
        ))}
      </Box>
      <Card variant="outlined">
        <Box sx={{ minHeight: 280, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Fade in key={selectedItemIndex}>
            <Box sx={{ height: 200, width: '100%' }}>{items[selectedItemIndex].visual}</Box>
          </Fade>
        </Box>
        <Box sx={{ px: 2, pb: 2 }}>
          <Typography gutterBottom sx={{ color: 'text.primary', fontWeight: 'medium' }}>
            {items[selectedItemIndex].title}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary', mb: 1.5 }}>
            {items[selectedItemIndex].description}
          </Typography>
        </Box>
      </Card>
    </Box>
  );
}

// --- MAIN FEATURES COMPONENT ---
export default function Features() {
  const { t } = useTranslation();
  const [selectedItemIndex, setSelectedItemIndex] = React.useState(0);

  const items = [
    {
      icon: <DevicesRoundedIcon />,
      title: t("feature-page.items.0.title"),
      description: t("feature-page.items.0.description"),
      visual: <DevicesVisual />,
    },
    {
      icon: <PriceCheckRoundedIcon />,
      title: t("feature-page.items.1.title"),
      description: t("feature-page.items.1.description"),
      visual: <CostVisual />,
    },
    {
      icon: <SupportAgentRoundedIcon />,
      title: t("feature-page.items.2.title"),
      description: t("feature-page.items.2.description"),
      visual: <CommunityVisual />,
    },
  ];

  const handleItemClick = (index: number) => {
    setSelectedItemIndex(index);
  };

  return (
    <Container id="features" sx={{ py: { xs: 8, sm: 16 } }}>
      <Box sx={{ width: { sm: '100%', md: '60%' } }}>
        <Typography
          component="h2"
          variant="h4"
          gutterBottom
          sx={{ color: 'text.primary' }}
        >
          {t("feature-page.title")}
        </Typography>
        <Typography
          variant="body1"
          sx={{ color: 'text.secondary', mb: { xs: 2, sm: 4 } }}
        >
          {t("feature-page.subheader")}
        </Typography>
      </Box>
      <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 4 }}>
        <Card
          variant="outlined"
          sx={{
            display: { xs: 'none', sm: 'flex' }, width: { xs: '100%', md: '70%' }, height: { sm: 420, md: 'auto' }, p: 2}}>
          <Fade in key={selectedItemIndex} timeout={500}>
            <Box sx={{ width: '100%', height: '100%' }}>
              {items[selectedItemIndex].visual}
            </Box>
          </Fade>
        </Card>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, flexShrink: 0, width: { xs: '100%', md: '40%'} }}>
          <Box sx={{ display: { xs: 'none', sm: 'flex' }, flexDirection: 'column', gap: 2, height: '100%' }}>
            {items.map(({ icon, title, description }, index) => (
              <Box
                key={index}
                component={Button}
                onClick={() => handleItemClick(index)}
                sx={[
                  (theme) => ({
                    p: 2.5,
                    height: '100%',
                    width: '100%',
                    border: '1px solid',
                    borderColor: 'grey.200',
                    borderRadius: '12px',
                    '&:hover': {
                      backgroundColor: 'action.hover',
                    },
                    ...theme.applyStyles('dark', {
                      borderColor: 'grey.800',
                    }),
                  }),
                  selectedItemIndex === index && {
                    backgroundColor: 'action.selected',
                    borderColor: 'primary.main',
                  },
                ]}
              >
                <Box
                  sx={[
                    {
                      width: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'left',
                      gap: 1,
                      textAlign: 'left',
                      textTransform: 'none',
                      color: 'text.secondary',
                    },
                    selectedItemIndex === index && {
                      color: 'text.primary',
                    },
                  ]}
                >
                  {React.cloneElement(icon, { sx: { mb: 1 } })}
                  <Typography variant="h6">{title}</Typography>
                  <Typography variant="body2">{description}</Typography>
                </Box>
              </Box>
            ))}
          </Box>
          <MobileLayout
            selectedItemIndex={selectedItemIndex}
            handleItemClick={handleItemClick}
            items={items}
          />
        </Box>
      </Box>
    </Container>
  );
}