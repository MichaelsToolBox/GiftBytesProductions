import { StyledTypography, TitleTypography } from '../utils/styles/latest-styles';
import NavigateNextRoundedIcon from '@mui/icons-material/NavigateNextRounded';
import { articleInfo } from '../utils/strings/article-info';
import AvatarGroup from '@mui/material/AvatarGroup';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import * as React from 'react';

function Author({ authors }: { authors: { name: string; avatar: string }[] }) {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'row', gap: 2, alignItems: 'center', justifyContent: 'space-between'}}>
      <Box sx={{ display: 'flex', flexDirection: 'row', gap: 1, alignItems: 'center' }}>
        <AvatarGroup max={3}>
          {authors.map((author, index) => (
            <Avatar
              key={index}
              alt={author.name}
              src={author.avatar}
              sx={{ width: 24, height: 24 }}
            />
          ))}
        </AvatarGroup>
        <Typography variant="caption">
          {authors.map((author) => author.name).join(', ')}
        </Typography>
      </Box>
      <Typography variant="caption">July 14, 2021</Typography>
    </Box>
  );
}

export default function Latest() {
  // useState
  const [focusedCardIndex, setFocusedCardIndex] = React.useState<number | null>(null);

  // Various handles

  const handleFocus = (index: number) => {
    setFocusedCardIndex(index);
  };

  const handleBlur = () => {
    setFocusedCardIndex(null);
  };

  return (
    <Container maxWidth="lg" component="main" sx={{ display: 'flex', flexDirection: 'column', my: 16, gap: 4 }}>
      <Typography variant="h2" gutterBottom>
        Latest
      </Typography>
      <Grid container spacing={8} columns={12} sx={{ my: 4 }}>
        {articleInfo.map((article, index) => (
          <Grid key={index} size={{ xs: 12, sm: 6 }}>
            <Box sx={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: 1, height: '100%'}}>
              <Typography gutterBottom variant="caption" component="div">
                {article.tag}
              </Typography>
              <TitleTypography
                gutterBottom
                variant="h6"
                onFocus={() => handleFocus(index)}
                onBlur={handleBlur}
                tabIndex={0}
                className={focusedCardIndex === index ? 'Mui-focused' : ''}
              >
                {article.title}
                <NavigateNextRoundedIcon className="arrow" sx={{ fontSize: '1rem' }}/>
              </TitleTypography>
              <StyledTypography variant="body2" color="text.secondary" gutterBottom>
                {article.description}
              </StyledTypography>

              <Author authors={article.authors} />
            </Box>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
