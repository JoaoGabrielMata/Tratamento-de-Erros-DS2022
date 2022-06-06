const FileButton = document.getElementById("inputFileButton")
inputFileButton.addEventListener("click", clickFileButton)

const NumberButton = document.getElementById("inputNumberButton")
inputNumberButton.addEventListener("click", clickNumberButton)

function clickFileButton(){
}

function clickNumberButton(){
number = document.getElementById("inputNumber").value
try{
   if(number == "") throw 'Informe um valor'
   if(number <5 || number>10) throw 'Informe um valor entre 5 e 10'
   document.getElementById("outputNumber"). innerHTML = "o número escolhido é " +number
}
catch (erro){
  document.getElementById("outputNumber").innerHTML = erro
}
finally{
  document.getElementById("outputFinal").innerHTML = "Continue o Cadastro corretamente!"
}
}
