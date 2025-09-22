// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

/*Tareas por hacer
Array de lista de nombres
Funcion para agregar amigos
Mostrar actualizaciones
sortear amigos */

let amigos = [];






function agregarAmigo(){
    let elementoAmigo = document.getElementById('amigo').value
    
    console.log(elementoAmigo);
    if(elementoAmigo === ''){
        alert('Agrega un nombre de amigo válido');
    }else{
        amigos.push(elementoAmigo);
        let nuevoElemento = document.createElement('li');
        let texto = document.createTextNode(elementoAmigo);
        nuevoElemento.appendChild(texto);

        nuevoElemento.setAttribute("nombreAmigo", elementoAmigo);

        document.getElementById('listaAmigos').appendChild(nuevoElemento);
        //console.log(amigos);
        //console.log(elementoAmigo);
        
        document.getElementById('amigo').value = '';

        var span = document.createElement("SPAN");
        var txt = document.createTextNode("\u00D7");
        span.className = "close";
        span.appendChild(txt);
        nuevoElemento.appendChild(span);

        span.onclick = function() {
            let li = this.parentElement;
            let nombre = li.getAttribute("nombreAmigo");
            let nuevoArray = [];
            for (let i = 0; i < amigos.length; i++) {
                if (amigos[i] !== nombre) {
                    nuevoArray.push(amigos[i]);
                }
            }
            amigos = nuevoArray;
            li.remove();

            console.log("Lista actualizada:", amigos);
        }

    }
}

function sortearAmigo(){
    if (amigos.length <= 1){
        alert(`${amigos.length==0?'No hay ningun amigo añadido':'Añade un amigo más'}`);
    }
    
    else{
        randomizar()
    }

}

function randomizar(){
    let ranMax = amigos.length - 1;
    let amigoRandom = parseInt(Math.random()*(ranMax + 1));
    console.log(amigos[amigoRandom]);
    resultado = document.getElementById('resultado');
    resultado.innerHTML = `El amigo seleccionado es: ${amigos[amigoRandom]} `;
    document.querySelector("#botonSorteo span").innerText = "Volver a sortear";

    document.getElementById("botonReiniciar").style.display = "inline-block";
}

function reiniciarLista(){
    // Vaciar array
    amigos = [];
    document.getElementById("listaAmigos").innerHTML = "";
    document.getElementById("resultado").innerHTML = "";

    document.querySelector("#botonSorteo span").innerText = "Sortear amigo";
    document.getElementById("botonReiniciar").style.display = "none";
}