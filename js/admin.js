const btnCerrar=document.querySelector(".cerrarSesion")

function validar(clave){
    if(clave !== true){
        window.location.href="../index.html"
    }else {
        window.alert("Bienvenido Administrador")
    }
}

validar(elementDelLs("UserAdmin"))

btnCerrar.onclick= ()=>{
    localStorage.removeItem("UserAdmin")
    window.location.href="../index.html"
}

////////////////////////////////////////////////

const tableAdmin = document.querySelector("table")

const nextEvolution = (array) => {
    let acc = ""
    array.forEach( (elemento) => {
        acc += `${elemento.name} `
    })
    return acc
}
function pasarTable ( array ) {
    const arrRed = array.reduce( ( acc, elemento ) => {
        return  acc + `
        <tbody>
            <tr>
                <td>
                    ${elemento.name}
                </td>
                <td>
                    ${elemento.type[0]}
                </td>
                <td>
                    ${elemento.height}
                </td>
                <td>
                    ${elemento.weight}
                </td>
                <td>
                    ${ elemento["next_evolution"] && typeof elemento["next_evolution"] === "object" ? nextEvolution(elemento["next_evolution"]) : "No tiene" }
                </td>
            </tr>
        </tbody>       
        `
    },`
    <thead>
    <tr>
        <th>
            Nombre
        </th>
        <th>
            Tipo
        </th>
        <th>
            Altura
        </th>
        <th>
            Peso
        </th>
        <th>
            Evolución
        </th>
        <tr>
    </thead>
    `)
    tableAdmin.innerHTML = arrRed
}

pasarTable(pokemon)
