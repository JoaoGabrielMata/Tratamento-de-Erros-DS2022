const FileButton = document.getElementById("inputFileButton")
inputFileButton.addEventListener("click", clickFileButton)

const NumberButton = document.getElementById("inputNumberButton")
inputNumberButton.addEventListener("click", clickNumberButton)

function clickFileButton() {}

function clickNumberButton() {
  document.getElementById("outputNumber").innerHTML = " "
  number = document.getElementById("inputNumber").value 
  try {
    if (number == "") throw 'Informe um valor'
     number = Number(number)
    if (number <= 5 || number >= 10) throw 'Informe um valor entre 5 e 10'
  } catch (erro) {
    document.getElementById("outputNumber").innerHTML = erro
    console.log("Erro " +erro)
  } finally {
    alert("O número escolhido foi " +number)
  }
}