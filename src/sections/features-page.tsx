import EdgesensorHighRoundedIcon from '@mui/icons-material/EdgesensorHighRounded';
import ViewQuiltRoundedIcon from '@mui/icons-material/ViewQuiltRounded';
import DevicesRoundedIcon from '@mui/icons-material/DevicesRounded';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { useTranslation } from 'react-i18next';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import MuiChip from '@mui/material/Chip';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import * as React from 'react';

interface ChipProps {
  selected?: boolean;
}

const Chip = styled(MuiChip)<ChipProps>(({ theme }) => ({
  variants: [
    {
      props: ({ selected }) => !!selected,
      style: {
        background:'linear-gradient(to bottom right, hsl(210, 98%, 48%), hsl(210, 98%, 35%))',
        color: 'hsl(0, 0%, 100%)',
        borderColor: (theme.vars || theme).palette.primary.light, '& .MuiChip-label': { color: 'hsl(0, 0%, 100%)'},
        ...theme.applyStyles('dark', {
          borderColor: (theme.vars || theme).palette.primary.dark,
        }),
      },
    },
  ],
}));

interface MobileLayoutProps {
  selectedItemIndex: number;
  handleItemClick: (index: number) => void;
  selectedFeature: any; // Use 'any' for simplicity with the translated object
}

export function MobileLayout({selectedItemIndex, handleItemClick, selectedFeature}: MobileLayoutProps) {
  if (!selectedFeature) {
    return null;
  }

  return (
    <Box
      sx={{
        display: { xs: 'flex', sm: 'none' },
        flexDirection: 'column',
        gap: 2,
      }}
    >
      <Box sx={{ display: 'flex', gap: 2, overflow: 'auto' }}>
        {selectedFeature.map(({ title }: {title: string}, index: number) => (
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
        <Box
          sx={(theme) => ({
            mb: 2,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            minHeight: 280,
            backgroundImage: 'var(--items-imageLight)',
            ...theme.applyStyles('dark', {
              backgroundImage: 'var(--items-imageDark)',
            }),
          })}
          style={
            selectedFeature[selectedItemIndex]
              ? ({
                  '--items-imageLight': selectedFeature[selectedItemIndex].imageLight,
                  '--items-imageDark': selectedFeature[selectedItemIndex].imageDark,
                } as any)
              : {}
          }
        />
        <Box sx={{ px: 2, pb: 2 }}>
          <Typography
            gutterBottom
            sx={{ color: 'text.primary', fontWeight: 'medium' }}
          >
            {selectedFeature[selectedItemIndex].title}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary', mb: 1.5 }}>
            {selectedFeature[selectedItemIndex].description}
          </Typography>
        </Box>
      </Card>
    </Box>
  );
}

export default function Features() {
  const { t } = useTranslation(); // Call the hook INSIDE the component
  const [selectedItemIndex, setSelectedItemIndex] = React.useState(0);

  const items = [
    {
      icon: <EdgesensorHighRoundedIcon />,
      title: t("feature-page.items.0.title"),
      description: t("feature-page.items.0.description"),
      imageLight: `url("${process.env.TEMPLATE_IMAGE_URL || 'https://mui.com'}/static/images/templates/templates-images/mobile-light.png")`,
      imageDark: `url("${process.env.TEMPLATE_IMAGE_URL || 'https://mui.com'}/static/images/templates/templates-images/mobile-dark.png")`,
    },
    {
      icon: <ViewQuiltRoundedIcon />,
      title: t("feature-page.items.1.title"),
      description: t("feature-page.items.1.description"),
      imageLight: `url("${process.env.TEMPLATE_IMAGE_URL || 'https://mui.com'}/static/images/templates/templates-images/dash-light.png")`,
      imageDark: `url("${process.env.TEMPLATE_IMAGE_URL || 'https://mui.com'}/static/images/templates/templates-images/dash-dark.png")`,
    },
    {
      icon: <DevicesRoundedIcon />,
      title: t("feature-page.items.2.title"),
      description: t("feature-page.items.2.description"),
      imageLight: `url("${process.env.TEMPLATE_IMAGE_URL || 'https://mui.com'}/static/images/templates/templates-images/devices-light.png")`,
      imageDark: `url("${process.env.TEMPLATE_IMAGE_URL || 'https://mui.com'}/static/images/templates/templates-images/devices-dark.png")`,
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
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row-reverse' },
          gap: 2,
        }}
      >
        <div>
          <Box
            sx={{
              display: { xs: 'none', sm: 'flex' },
              flexDirection: 'column',
              gap: 2,
              height: '100%',
            }}
          >
            {items.map(({ icon, title, description }, index) => (
              <Box
                key={index}
                component={Button}
                onClick={() => handleItemClick(index)}
                sx={[
                  (theme) => ({
                    p: 2,
                    height: '100%',
                    width: '100%',
                    '&:hover': {
                      backgroundColor: (theme.vars || theme).palette.action.hover,
                    },
                  }),
                  selectedItemIndex === index && {
                    backgroundColor: 'action.selected',
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
                  {icon}
                  <Typography variant="h6">{title}</Typography>
                  <Typography variant="body2">{description}</Typography>
                </Box>
              </Box>
            ))}
          </Box>
          <MobileLayout
            selectedItemIndex={selectedItemIndex}
            handleItemClick={handleItemClick}
            selectedFeature={items}
          />
        </div>
        <Box
          sx={{
            display: { xs: 'none', sm: 'flex' },
            width: { xs: '100%', md: '70%' },
            height: 'var(--items-image-height)',
          }}
        >
          <Card
            variant="outlined"
            sx={{
              height: '100%',
              width: '100%',
              display: { xs: 'none', sm: 'flex' },
              pointerEvents: 'none',
            }}
          >
            <Box
              sx={(theme) => ({
                m: 'auto',
                width: 420,
                height: 500,
                backgroundSize: 'contain',
                backgroundImage: 'var(--items-imageLight)',
                ...theme.applyStyles('dark', {
                  backgroundImage: 'var(--items-imageDark)',
                }),
              })}
              style={
                items[selectedItemIndex]
                  ? ({
                      '--items-imageLight': items[selectedItemIndex].imageLight,
                      '--items-imageDark': items[selectedItemIndex].imageDark,
                    } as any)
                  : {}
              }
            />
          </Card>
        </Box>
      </Box>
    </Container>
  );
}