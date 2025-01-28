// Promises possuem estados diferente: Pending(padrao) | Rejected | Resolved
// A promise ficará em estado pendente até que seja resolvida utilizando o primeiro parâmetro da função usada na sua construção

// Essa função é executada quando a promise é criada, porém sem bloquear a execução do código:
const a = new Promise(() => {
    console.log('A promise está sendo executada.')
    setTimeout(() => {
        console.log('Resolvendo a promise...')
    }, 3 * 1000)
})

console.log(a)

// Esse primeiro parâmetro é uma função que “resolve” a promise e passa adiante o valor do resultado
const b = new Promise((resolve, reject) => {
    console.log('A promise está sendo executada.')
    setTimeout(() => {
        console.log('Resolvendo a promise...')
        resolve('Resultado')
    }, 3 * 1000)
})

console.log(b)

setTimeout(() => {
    console.log(b)
}, 5 * 1000)

// Também podemos rejeitar a promise caso queiramos indicar que algo deu errado
// nesse caso a rejeição da promise é como um erro no código, 
// que se não for tratado adequadamente irá resultar no término da aplicação
const c = new Promise((resolve, reject) => {
    console.log('A promise está sendo executada.')
    setTimeout(() => {
        if (1 + 1 === 2) {
            reject("Algo deu errado!")
        }
        console.log('Resolvendo a promise...')
        resolve('Resultado')
    }, 3 * 1000)
})

console.log(c)

setTimeout(() => {
    console.log(c)
}, 5 * 1000)

// Por fim, a prática comum ao usar as promises é retorná-las no final de uma função, 
// assim elas serão executadas quando a função for chamada
function execute() {
    return new Promise((resolve, reject) => {
        console.log('A promise está sendo executada.')
        setTimeout(() => {
            console.log('Resolvendo a promise...')
            resolve('Resultado')
        }, 3 * 1000)
    })
}

const promise = execute()

console.log(promise)

setTimeout(() => {
    console.log(promise)
}, 5 * 1000)