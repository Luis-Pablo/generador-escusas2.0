const prepararEscusa = function() {
    //write your code here
      let who = ["Mi perro", "Mi abuela", "Su tortuga", "Mi pajaro"];
      let what = ["comidó", "pisadó", "aplastadó", "rotó"];
      let when = ["antes de clase","justo ahora","cuando terminaba","durante el almuerzo", "cuando oraba"];
  
      let aleatorio = `${who[Math.floor(Math.random()* who.length)]} ha ${what[Math.floor(Math.random()* what.length)]} mi tarea ${when[Math.floor(Math.random()* when.length)]}`
      return aleatorio
  };
  
  prepararEscusa();
  
  
  
  
  const b = document.querySelector('button');
  
  
  const borrar = ( () => {
    let parrafo = document.querySelector('.escusa-generada .parrafo');
    parrafo == "" ? parrafo.remove() : null
  
  });
  borrar();
  
  const generarParrafo = ( () =>  {
    
    let div = document.querySelector('.escusa-generada');
    div.classList.add('container');
    div.classList.add('my-4');
    let p = document.createElement('p')
    p.classList.add('fw-bolder')
    p.classList.add('parrafo')
    p.textContent = prepararEscusa();
    div.appendChild(p);
  });
  generarParrafo();
  
  const revisar = ( () => {
    generarParrafo ? borrar : null
  });
  revisar();
  
  const clickBoton = ( (e)  => {
    generarParrafo ? revisar : generarParrafo()
    
  });
  clickBoton();
  
  b.addEventListener('click', clickBoton);
  console.log(clickBoton());
