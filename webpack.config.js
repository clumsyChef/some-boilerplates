const path = require("path");

module.exports = {
	entry: "./working/index.ts",
	output: {
		path: path.resolve(__dirname, "final"),
		filename: "main.js",
	},

	module: {
		rules: [
			{
				test: /\.ts$/,
				exclude: /node_modules/,
				use: {
					loader: "ts-loader",
				},
			},
		],
	},

	resolve: {
		extensions: [".ts", ".js"],
	},

	target: ["web", "es5"],
};
