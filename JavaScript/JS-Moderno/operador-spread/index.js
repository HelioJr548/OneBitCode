const towns = ['Prontera', 'Izlude', 'Payon', 'Alberta', 'Geffen', 'Morroc']

console.log(towns)
console.log(...towns)
console.log(...towns[0])

// Ambas as variáveis towns e townsCopy apontam para a mesma referência de array na memória.
const townsCopy = towns
// Portanto, ao modificar townsCopy, você também está modificando o array original towns.
townsCopy.pop()
townsCopy.pop()
townsCopy.push('Juno')

console.log({ towns, townsCopy })

// O operador Spread (...) é utilizado aqui para criar uma cópia independente do array original, permitindo alterações apenas na cópia e preservando o estado original do array.
const townsClone = [...towns]

townsClone.push('Aldebaran')

console.log({ towns, townsCopy, townsClone })

const townsObj = { ...towns }
const townsObjClone = { ...townsObj }

townsObjClone.test = 'Test'

console.log({ townsObj, townsObjClone })