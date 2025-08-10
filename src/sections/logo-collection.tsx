import { brandLogoComponents, logoContainerBaseStyle } from '../utils/styles/logo-links';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';


export default function LogoCollection() {
  const iconSize = 64;

  return (
    <Box id="logoCollection" sx={{ py: 2 }}>
      <Grid container sx={{ justifyContent: "flex-start", mt: 0, flexWrap: 'nowrap', overflowX: 'auto', overflow: 'auto' }}>
        {brandLogoComponents.map((logo, index) => (
          <Grid
            key={index}
            component="div"
            sx={{...logoContainerBaseStyle}}
          >
            <logo.component
              size={iconSize}
              color={`#${logo.hex}`}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
