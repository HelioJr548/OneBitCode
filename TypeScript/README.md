# Configuração Inicial do TypeScript

Exemplo básico de como configurar e usar TypeScript em um ambiente de desenvolvimento.

## O que é TypeScript?

TypeScript é uma linguagem de programação open-source desenvolvida pela Microsoft. É um superconjunto de JavaScript que adiciona tipagem estática opcional e outros recursos avançados, proporcionando uma melhor experiência de desenvolvimento.

## Por que usar TypeScript?

- **Tipagem Estática:** Ajuda a encontrar erros durante a compilação em vez de em tempo de execução.
- **Melhor Integração com IDEs:** Fornece autocompletar, navegação de código e refatoração.
- **Orientação a Objetos:** Suporte a classes, interfaces e outros conceitos de OOP.
- **Desenvolvimento Escalável:** Facilita a manutenção de projetos maiores.
- **Compatibilidade:** Todo código JavaScript é código TypeScript válido.

## Principais Funcionalidades

- **Tipos:** Permite declarar tipos para variáveis, parâmetros e retornos de funções.
- **Interfaces:** Define contratos para objetos.
- **Classes:** Suporte completo a classes e herança.
- **Enums:** Permite definir conjuntos de constantes nomeadas.
- **Modulos:** Suporte a importação e exportação de módulos.

## Configuração Inicial

### Pré-requisitos

- Node.js instalado
- NPM (Node Package Manager) ou Yarn instalado

### Passos para Configuração

1. **Inicialize um novo projeto Node.js (se ainda não tiver):**

   ```bash
   npm init -y
   ```

   ou

   ```bash
   yarn init -y
   ```
2. **Adicione TypeScript como dependência de desenvolvimento:**

   Com NPM:

   ```bash
   npm install typescript --save-dev
   ```

   Com Yarn:

   ```bash
   yarn add typescript --dev
   ```
3. **Crie um arquivo de configuração `tsconfig.json`:**

   ```bash
   npx tsc --init
   ```
4. **Configure o `tsconfig.json`:**

   ```json
   {
     "compilerOptions": {
       "target": "es6",                          // Define o alvo de compilação do JavaScript.
       "module": "commonjs",                     // Define o sistema de módulos.
       "strict": true,                           // Ativa todas as verificações de tipo estritas.
       "esModuleInterop": true,                  // Habilita a interoperabilidade com módulos ES.
       "skipLibCheck": true,                     // Ignora a verificação de tipos de arquivos de declaração.
       "outDir": "./dist",                       // Diretório de saída para os arquivos compilados.
       "rootDir": "./src"                        // Diretório raiz dos arquivos de entrada.
     },
     "include": [
       "src/**/*"                                // Inclui todos os arquivos TypeScript no diretório `src`.
     ],
     "exclude": [
       "node_modules"                            // Exclui o diretório `node_modules`.
     ]
   }
   ```
5. **Crie a estrutura de pastas:**

   ```bash
   mkdir src
   ```
6. **Escreva um arquivo TypeScript de exemplo:**

   Crie um arquivo `src/index.ts`:

   ```typescript
   const greet = (name: string): string => {
     return `Hello, ${name}!`;
   };

   console.log(greet("World"));
   ```
7. **Adicione um script de build no `package.json`:**

   ```json
   "scripts": {
     "build": "tsc",
     "start": "node dist/index.js",
     "build:start": "npm run build && npm run start"
   }
   ```

   ou, se estiver usando Yarn:

   ```json
   "scripts": {
     "build": "tsc",
     "start": "node dist/index.js",
     "build:start": "yarn build && yarn start"
   }
   ```
8. **Compile e execute o projeto:**

   Com NPM:

   ```bash
   npm run build:start
   ```

   Com Yarn:

   ```bash
   yarn build:start
   ```

## Conclusão

Com esses passos, você configurou com sucesso um projeto básico em TypeScript. TypeScript melhora a qualidade do código, ajuda na prevenção de bugs e proporciona uma melhor experiência de desenvolvimento com recursos avançados de tipagem e suporte a ferramentas de desenvolvimento.

## Referências

- [Documentação Oficial do TypeScript](https://www.typescriptlang.org/docs/)
