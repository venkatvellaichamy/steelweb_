var isProduction,
	webpackConfigPath = "../webpack/webpack.",
	devConfig = webpackConfigPath + "dev.conf.js",
	prodConfig = webpackConfigPath + "prod.conf.js",
	exportConfig;

if (process.env.NODE_ENV != undefined) {
	switch(process.env.NODE_ENV) {
		case "prod":
		case "production":
			isProduction = true;
			break;

		case "dev":
		case "development":
		default:
			isProduction = false;
			break;
	} 
}


if (isProduction == undefined) {
	exportConfig = {
		"dev": require(devConfig),
		"prod": require(prodConfig)
	}
} else {
	exportConfig = isProduction ? require(prodConfig) : require(devConfig);
}

module.exports = exportConfig;