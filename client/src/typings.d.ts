declare module '*.svg';
declare module '*.png';
declare module '*.jpg';

declare module 'react-router-last-location';
declare module 'svg-sprite-loader/runtime/sprite.build';

declare module 'universal-localstorage' {
  export = storage;
  
  const storage: Storage;
}

interface Window {
  __PRELOADED_STATE__: any;
}

declare var window: Window;