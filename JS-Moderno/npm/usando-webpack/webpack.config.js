const path = require("path");

module.exports = {
	entry: {
        //  A chave será o nome do arquivo gerado, podem ser qualquer nome
		main: "./src/index.js", 
        hello: "./src/hello.js"
	},
	mode: "development", //  Muda o modo de webpack
	output: {
		path: path.resolve(__dirname, "public"), // diretorio onde o arquivo ficara, "public" será a pasta
		filename: "[name].bundle.min.js", // Altera nome do arquivo final
	},
};
