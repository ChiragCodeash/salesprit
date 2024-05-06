import { precacheAndRoute } from "workbox-precaching";
import { clientsClaim } from "workbox-core";

import {
  pageCache,
  imageCache,
  staticResourceCache,
  googleFontsCache,
  offlineFallback,
} from 'workbox-recipes';

clientsClaim();

/* eslint-disable no-restricted-globals */
precacheAndRoute([...self.__WB_MANIFEST , "manifest.json"]);


pageCache();
googleFontsCache();
staticResourceCache();
imageCache();