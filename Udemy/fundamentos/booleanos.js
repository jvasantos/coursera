let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1
console.log(!!isAtivo)
isAtivo = 0
console.log(!!isAtivo)

console.log('os verdadeiros...')
console.log(!!3, !!-1, !!'texto', !!' ', !![], !!Infinity)

console.log('os falsos...')
console.log(!!0, !!null, !!NaN, !!undefined)

let nome = ''
console.log(nome || 'Desconhecido')