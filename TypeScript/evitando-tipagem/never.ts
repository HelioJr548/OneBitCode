function error(message: string): never {
	throw new Error(message);
}

function infiniteLoop(): never {
	while (true) {}
}

/**
 * Tipo `never` em TypeScript:
 * - O tipo `never` representa o tipo de valor que nunca ocorre.
 * - É usado para funções que nunca retornam um valor.
 * - Uma função que lança uma exceção ou entra em um loop infinito tem um tipo de retorno `never`.
 * - No exemplo acima, a função `error` lança uma exceção e, portanto, nunca retorna um valor.
 * - A função `infiniteLoop` entra em um loop infinito e, portanto, nunca retorna um valor.
 * - O tipo `never` é útil para indicar que o fluxo de controle da função nunca chega ao fim de maneira normal.
 */

function verification(test) {
	if (test) {
		// Lógica se `test` for verdadeiro
	} else {
		let _check: never;

		let text = _check; // Erro: `text` não pode ser atribuído a `never`
		text = ''; // Erro: `text` não pode ser atribuído a `never`

		return _check; // `verification` nunca retorna um valor válido
	}
}

/**
 * - No exemplo acima, `_check` é declarado com o tipo `never`.
 * - Qualquer tentativa de atribuir um valor a uma variável do tipo `never` resulta em um erro de compilação.
 * - A variável `_check` não pode ser usada de forma válida, pois não pode conter nenhum valor.
 * - O tipo `never` é usado para indicar que um bloco de código nunca será executado de forma válida.
 * - No caso da função `verification`, `_check` é usado para sinalizar que o bloco `else` não deve ter um valor válido.
 */
