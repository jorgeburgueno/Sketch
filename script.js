const contenedor = document.getElementById("contenedor");
const largo = 16;
crearGrid(largo);
cambioColor();
preguntar();


function crearGrid (largo) {
  for (let i = 0; i < largo; i++ ) {

    const columna = document.createElement("div");
  
    for (let j = 0; j < largo; j++) {
        const cuadros= document.createElement ("div");
        cuadros.setAttribute("class", "cuadros");
        columna.appendChild(cuadros);
    }
    columna.setAttribute("class", "columna")
    contenedor.appendChild(columna)
  }
}

function preguntar() {
    const respuesta = document.querySelectorAll(".respuesta");
    let largo = 0;
    
    respuesta.forEach(btn => {
        btn.addEventListener('click', function(){
            do {
                largo = prompt("Pon numero de cuadros");
            } while (largo > 100);
            remueve();
            crearGrid(largo);
            cambioColor();
            
        })
    })
}

function cambioColor () {
    const cuadros = document.querySelectorAll('.cuadros')
    cuadros.forEach( sq => {
        sq.addEventListener('mouseover', function(){
            sq.style.backgroundColor = "green";
        });
    });
}

function remueve(){
    while (contenedor.hasChildNodes()){
        contenedor.removeChild(contenedor.firstChild);
    }
}