var numero = 1
{
    let numero = 2
    console.log('dentro = ', numero)
}
console.log('fora = ', numero)

function testeVar() {
    var numero = 3
    console.log('func = ', numero)
}
testeVar()
console.log('dfora = ', numero)