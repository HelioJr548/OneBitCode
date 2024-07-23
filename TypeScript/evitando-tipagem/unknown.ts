let input: unknown;

input = 'test'; // `input` pode receber uma string
input = 20; // `input` pode receber um número
input = []; // `input` pode receber um array

let text: string;

text = input; // Erro: o tipo 'unknown' não pode ser atribuído ao tipo 'string'

input = text; // `input` pode receber um valor do tipo `string`

/**
 * Tipo `unknown` em TypeScript:
 * - O tipo `unknown` é semelhante ao tipo `any`, mas é mais seguro.
 * - Uma variável do tipo `unknown` pode receber valores de qualquer tipo.
 * - Ao contrário do tipo `any`, você não pode atribuir diretamente uma variável de tipo `unknown` a outras variáveis de tipos específicos sem uma verificação de tipo.
 * - Isso força o desenvolvedor a realizar uma verificação de tipo ou uma conversão explícita antes de usar o valor.
 * - No exemplo acima, a atribuição `text = input` gera um erro porque `input` é do tipo `unknown` e não pode ser atribuído diretamente a uma variável do tipo `string`.
 * - A atribuição `input = text` é permitida porque `input` é do tipo `unknown` e pode receber valores de qualquer tipo.
 */
