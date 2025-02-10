import {proxy} from 'valtio';

const state = proxy({
  intro: true,
  color: '#f59e0b',
  isLogoTexture: true,
  isFullTexture: false,
  logoDecal: './tayla-white.svg',
  fullDecal: './circuit.png',
});

export default state;