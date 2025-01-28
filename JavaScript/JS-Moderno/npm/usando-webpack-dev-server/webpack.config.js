const path = require("path");

module.exports = {
	devServer: {
		static: {
			directory: path.resolve(__dirname, "dist"),
		},
		compress: true, // opcional
		port: 8000, // opcional
	},
	entry: {
		index: "./src/index.js",
	},
	mode: "production",
	module: {
		rules: [
			{
				test: /\.css$/,
				use: ["style-loader", "css-loader"],
			},
			{
				test: /\.js$/,
				use: ["babel-loader"],
			},
		],
	},
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "[name].min.js",
	},
};
