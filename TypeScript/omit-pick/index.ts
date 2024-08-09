// Suponha que temos uma interface representando um usuário
interface User {
    id: number;
    name: string;
    email: string;
    password: string;
    age: number;
    address: string;
}

// O utilitário `Pick` permite que você crie um novo tipo baseado em uma interface existente,
// mas selecionando apenas as propriedades que você deseja manter.
// Por exemplo, se quisermos um tipo que inclua apenas o `id`, `name` e `email` do usuário:

type UserPublicProfile = Pick<User, 'id' | 'name' | 'email'>;

// Agora podemos usar esse tipo `UserPublicProfile` para, por exemplo, retornar um perfil público do usuário:
const publicProfile: UserPublicProfile = {
    id: 1,
    name: "John Doe",
    email: "john.doe@example.com"
    // Note que `password`, `age`, e `address` não fazem parte deste tipo, então não podem ser adicionados aqui.
};

// O utilitário `Omit` funciona de forma oposta ao `Pick`. 
// Ele cria um novo tipo baseado em uma interface existente, mas excluindo as propriedades especificadas.
// Por exemplo, se quisermos um tipo que exclua as propriedades `password` e `address`:

type UserWithoutSensitiveInfo = Omit<User, 'password' | 'address'>;

// Podemos usar esse tipo `UserWithoutSensitiveInfo` para, por exemplo, processar dados de usuário sem as informações sensíveis:
const safeUserData: UserWithoutSensitiveInfo = {
    id: 1,
    name: "John Doe",
    email: "john.doe@example.com",
    age: 30
    // Note que `password` e `address` foram omitidos e não podem ser adicionados aqui.
};

/* 
Quando usar `Pick`:
- Use `Pick` quando você precisa criar um tipo que contenha apenas um subconjunto específico das propriedades de uma interface. 
- Isso é útil, por exemplo, quando você deseja garantir que um objeto só tenha as propriedades que você escolheu e nada mais.

Quando usar `Omit`:
- Use `Omit` quando você precisa criar um tipo que exclua certas propriedades de uma interface.
- Isso é útil quando você deseja remover propriedades sensíveis, temporárias ou desnecessárias de um objeto, garantindo que elas não sejam usadas acidentalmente.
*/
