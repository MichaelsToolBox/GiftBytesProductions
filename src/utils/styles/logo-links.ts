import { SiUnity, SiUnrealengine, SiAndroid, SiAppstore, SiSteam, SiYoutube} from '@icons-pack/react-simple-icons';
import * as simpleIcons from 'simple-icons';

export const brandLogoComponents = [
  { component: SiUnity, name: 'Unity', hex: simpleIcons.siUnity.hex },
  { component: SiUnrealengine, name: 'Unreal Engine', hex: simpleIcons.siUnrealengine.hex },
  { component: SiAndroid, name: 'Android', hex: simpleIcons.siAndroid.hex },
  { component: SiAppstore, name: 'App Store', hex: simpleIcons.siAppstore.hex },
  { component: SiSteam, name: 'Steam', hex: simpleIcons.siSteam.hex },
  { component: SiYoutube, name: 'YouTube', hex: simpleIcons.siYoutube.hex },
];

export const logoContainerBaseStyle = {
  width: "150px",
  height: '90px',
  margin: '0px 48px',
  opacity: 0.5,
};