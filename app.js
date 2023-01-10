let div = document.querySelector('.escusa-generada');
let parrafo = document.querySelector('.escusa-generada .parrafo'); 
const b = document.querySelector('button');
let p = document.createElement('p')


const prepararEscusa = function() {
      let who = ["Mi perro", "Mi abuela", "Su tortuga", "Mi pajaro"];
      let what = ["comidó", "pisadó", "aplastadó", "rotó"];
      let when = ["antes de clase","justo ahora","cuando terminaba","durante el almuerzo", "cuando oraba"];
  
      let aleatorio = `${who[Math.floor(Math.random()* who.length)]} ha ${what[Math.floor(Math.random()* what.length)]} mi tarea ${when[Math.floor(Math.random()* when.length)]}`
      return aleatorio
  };


b.addEventListener('click', () => {

  const generarParrafo = ( (escusa) =>  {
    let div = document.querySelector('.escusa-generada');
    div.classList.add('container');
    div.classList.add('my-4');
    p.classList.add('fw-bolder')
    p.classList.add('parrafo')
    p.textContent = escusa;
    return div.appendChild(p);
  });
  




  if (parrafo !=="") {

    let nuevoParrafo = generarParrafo(prepararEscusa());
    let nuevoDiv = nuevoParrafo.parentNode;
    nuevoDiv.replaceChild(parrafo, nuevoParrafo);
    
  
  }else {
    return generarParrafo(prepararEscusa());
  }
  
  
});

/*
// <div>
//  <span id="childSpan">foo bar</span>
// </div>

// crear un nodo con un elemento vacío
// sin ID, atributos, ni contenido
var sp1 = document.createElement("span");

// darle un atributo id llamado 'newSpan'
sp1.setAttribute("id", "newSpan");

// crear algún contenido para el nuevo elemento
var sp1_content = document.createTextNode("Nuevo elemento span para reemplazo.");

// aplicar dicho contenido al nuevo elemento
sp1.appendChild(sp1_content);

// construir una referencia al nodo existente que va a ser reemplazado
var sp2 = document.getElementById("childSpan");
var parentDiv = sp2.parentNode;

// reemplazar el nodo sp2 existente con el nuevo elemento span sp1
parentDiv.replaceChild(sp1, sp2);

// resultado:
// <div>
//   <span id="newSpan">Nuevo elemento span para reemplazo.</span>
// </div>

*/