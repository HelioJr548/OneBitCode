// TypeScript tem uma sintaxe específica para digitar arrays.
let crewOnlyString: string[]; // Array de strings
crewOnlyString.push('Helio', 21); // Avisa sobre erro, por receber valor de tipo diferente

// Uma tupla é um array com um comprimento e tipos predefinidos para cada índice.
// Tupla tem tamanhos e tipos especificos, caso não seja respeitado mostra erros
let crewTuple: [string, string, string] = ['','', ''];
crewTuple[0] = 'Helio';
crewTuple[1] = 'Joe';
crewTuple[2] = 'John';
crewTuple[3] = 'Maria'; // Da erro por ultrapassar tamanho da tupla definido (3)

let example: [number, number, string, boolean];
example = [4, 5]; // da erro por não receber todos os elementos

// Exemplo de utilização de tuplas: Pontos cartesianos
let point: [number, number];
point = [2, 5];
let [x, y] = point;
