const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
	entry: {
		//  A chave será o nome do arquivo gerado, podem ser qualquer nome
		index: "./src/index.js",
	},
	mode: "development", //  Muda o modo de webpack
	module: {
		rules: [
			{
				test: /\.css$/, //expressao regular, pesquisa todos arquivos que terminam com .css
				use: [MiniCssExtractPlugin.loader, "css-loader"], // loaders que serão utilizados
			},
		],
	},
	plugins: [
		new MiniCssExtractPlugin()
	],
};
