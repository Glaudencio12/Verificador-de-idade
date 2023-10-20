function verificar() {
    
    var data = new Date()
    var ano = data.getFullYear()
    var formAno = document.getElementById("txtano")
    var res = document.getElementById("res")
    var img = document.createElement("img")
    var formSex = document.getElementsByName("radioSex")
    var genero = ""
    img.setAttribute("id","foto")

    if (formAno.value == 0 || Number(formAno.value) > ano ) {
        window.alert("Erro, verifique os dados e tente novamente")
    }else{
       var idade = ano - Number(formAno.value)
       if (formSex[0].checked) {
           genero = "Homem"

           if (idade >= 0 && idade < 10) {
                img.setAttribute("src", "imagens/criança homem.jpg")
           }else if (idade < 21) {
                img.setAttribute("src", "imagens/jovem homem.jpg")
           }else if (idade < 50) {
                img.setAttribute("src", "imagens/adulto homem.jpg")
           }else{
                img.setAttribute("src", "imagens/idoso homem.jpg")
           }

       }else if (formSex[1].checked) {
           genero = "Mulher"
           if (idade >= 0 && idade < 10) {
                img.setAttribute("src", "imagens/criança mulher.jpg")
           }else if (idade < 21) {
                img.setAttribute("src", "imagens/jovem mulher.jpg")
           }else if (idade < 50) {
                img.setAttribute("src", " imagens/mulher adulta.jpg")
           }else{
                img.setAttribute("src", "imagens/idoso mulher.jpg")
           }
       }

       res.innerHTML = `Detectamos ${genero} com ${idade} ano(s) de idade`
       res.appendChild(img)
    }
}