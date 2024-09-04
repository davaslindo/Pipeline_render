const maior$ = document.getElementById("maior")
const igual$ = document.getElementById("igual")
const menor$ = document.getElementById("menor")
const reiniciar$ = document.getElementById("reiniciar")
let p$ = document.getElementById("numero")

//let numero = Math.floor(Math.random() * 100) + 1;
let numero = Math.floor(Math.random() * (70 - 30 + 1)) + 30;
let maximo = 101;
let minimo = 0;
let cont = 1;

let x = parseInt(numero)

const numeros = [x]

function mostrarArray() {
  for (i = 0; numeros.length > i; i++) {
    console.log(numeros[i])
  }
}

p$.innerHTML = x

maior$.addEventListener("click", function() {
    minimo = numero,
    numero = ((maximo - numero) / 2) + numero;
    x = parseInt(numero);
    numeros.push(x)
    p$.innerHTML = x
    cont++
    p$.style.color = 'green'
})

igual$.addEventListener("click", function() {
    p$.style.color = 'skyblue'
    alert(`acertei em ${cont} tentativas otario`)
    mostrarArray()
})

menor$.addEventListener("click", function() {
  maximo = numero,
  numero = numero - ((numero - minimo) / 2);
  x = parseInt(numero);
  numeros.push(x)
  p$.innerHTML = x
  cont++
  p$.style.color = 'red'
})

reiniciar$.addEventListener("click", function() {
  numero = Math.floor(Math.random() * (70 - 30 + 1)) + 30;
  x = parseInt(numero)
  p$.innerHTML = x
  p$.style.color = 'black'
  maximo = 101;
  minimo = 0;
  cont = 1;
})