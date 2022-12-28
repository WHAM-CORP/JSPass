const btnCerrar=document.querySelector(".cerrarSesionUser")

function validar(clave){
    if(clave !== true){
        window.location.href="../index.html"
    }else {
        window.alert("Bienvenido Usuario")
    }
}

validar(elementDelLs("UserNormal"))

btnCerrar.onclick= ()=>{
    localStorage.removeItem("UserNormal")
    window.location.href="../index.html"
}

//////////////////////////////////////////////////////////////////

function cardAHtml(array) {
    const contenedorUser = document.querySelector(".container-user")

    for (i = 0; i < array.length; i++) {
        const cardAHtml = document.createElement("div")
        cardAHtml.className = "card"
        cardAHtml.innerHTML= `
            <div class="contenedor_img">
                <img src="${array[i].img}" alt="${array[i].name}">
            </div>
            <h1>
            ${array[i].name}
            </h1>
            <input class="hi" type="submit" value="🤗">
       `
       contenedorUser.appendChild(cardAHtml)
    }

}
cardAHtml(pokemon)
////////////////////////////////////////////////////////////////////

const butonHi=document.querySelector(".hi")

butonHi.onclick=()=>{
    window.alert(`Hiciste click al pockemon`)
}

