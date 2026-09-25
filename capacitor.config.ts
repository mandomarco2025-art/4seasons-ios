import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.fourseasons.realestate',
  appName: '4Seasons Real Estate',
  webDir: 'out',
  server: {
    url: 'https://4seasons-realestate.com',
    cleartext: false
  },
  android: {
    allowMixedContent: true
  }
};

export default config;
