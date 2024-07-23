let input: any;

input = 'test'; // `input` pode receber uma string
input = 20; // `input` pode receber um número
input = []; // `input` pode receber um array

let text: string;

text = input; // `text` pode receber um valor do tipo `any` sem erro

input = text; // `input` pode receber um valor do tipo `string`

/**
 * Tipo `any` em TypeScript:
 * - O tipo `any` permite que uma variável receba valores de qualquer tipo.
 * - Quando uma variável é do tipo `any`, o TypeScript desativa a verificação de tipos para essa variável.
 * - Isso significa que você pode atribuir valores de qualquer tipo a uma variável do tipo `any`, e também pode atribuir uma variável do tipo `any` a uma variável de qualquer outro tipo.
 * - No exemplo acima, `input` pode ser uma string, um número, ou um array sem gerar erros de tipo.
 * - A atribuição `text = input` não gera erro, pois `input` é do tipo `any` e pode ser atribuído a qualquer outro tipo, incluindo `string`.
 * - O tipo `any` deve ser usado com cautela, pois pode reduzir a segurança do tipo e a clareza do código.
 */
