import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';

export const articleInfo = [
  {
    tag: 'Projects',
    title: 'New project announcement',
    description: 'We announce that our new project will be a free to play desktop video game that will be available on all operating systems and platforms',
    authors: [{ name: 'Michael Schenk, Developer', avatar: '/static/images/avatar/1.jpg' }],
  },
  {
    tag: 'Website',
    title: 'New website',
    description: 'We announce that our website is finally live and public',
    authors: [{ name: 'Michael Schenk, Developer', avatar: '/static/images/avatar/1.jpg' }],
  },
  {
    tag: 'Projects',
    title: 'TouchSlider is live',
    description: 'We announce that that our mobile video game "TouchSlider" is avaible for IOS And Android to download for free',
    authors: [{ name: 'Michael Schenk, Developer', avatar: '/static/images/avatar/1.jpg' }],
  },
  {
    tag: 'Company',
    title: 'Cultivating a culture of innovation',
    description: 'Innovation is at the heart of our company culture. Learn about the initiatives we have in place to foster creativity and drive groundbreaking solutions.',
    authors: [{ name: 'Michael Schenk, Developer', avatar: '/static/images/avatar/1.jpg' }],
  },
  {
    tag: 'Engineering',
    title: 'Advancing cybersecurity with next-gen solutions',
    description: 'Our next-generation cybersecurity solutions are setting new standards in the industry. Discover how we protect our clients from evolving cyber threats.',
    authors: [{ name: 'Michael Schenk, Developer', avatar: '/static/images/avatar/1.jpg' }],
  },
  {
    tag: 'Product',
    title: 'Enhancing customer experience through innovation',
    description: 'Our innovative approaches are enhancing customer experience. Learn about the new features and improvements that are delighting our users.',
    authors: [{ name: 'Michael Schenk, Developer', avatar: '/static/images/avatar/1.jpg' }],
  }
];

export const StyledTypography = styled(Typography)({
  display: '-webkit-box',
  WebkitBoxOrient: 'vertical',
  WebkitLineClamp: 2,
  overflow: 'hidden',
  textOverflow: 'ellipsis',
});

export const TitleTypography = styled(Typography)(({ theme }) => ({
  position: 'relative',
  textDecoration: 'none',
  '&:hover': { cursor: 'pointer' },
  '& .arrow': {
    visibility: 'hidden',
    position: 'absolute',
    right: 0,
    top: '50%',
    transform: 'translateY(-50%)',
  },
  '&:hover .arrow': {
    visibility: 'visible',
    opacity: 0.7,
  },
  '&:focus-visible': {
    outline: '3px solid',
    outlineColor: 'hsla(210, 98%, 48%, 0.5)',
    outlineOffset: '3px',
    borderRadius: '8px',
  },
  '&::before': {
    content: '""',
    position: 'absolute',
    width: 0,
    height: '1px',
    bottom: 0,
    left: 0,
    backgroundColor: (theme.vars || theme).palette.text.primary,
    opacity: 0.3,
    transition: 'width 0.3s ease, opacity 0.3s ease',
  },
  '&:hover::before': {
    width: '100%',
  },
}));