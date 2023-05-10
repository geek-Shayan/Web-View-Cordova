import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.sadi.webViewC',
  appName: 'web-view-c',
  webDir: 'www',
  server: {
    androidScheme: 'https'
  }
};

export default config;
