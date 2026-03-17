import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
	appId: 'com.legalpath.app',
	appName: 'LegalPath',
	webDir: 'build',
	server: {
		androidScheme: 'https'
	},
	plugins: {
		SplashScreen: {
			launchAutoHide: false
		}
	}
};

export default config;
