// * Nuestra informacion se encuentra aislada
const m = {
  es: {
    dataText: 'mi primer mvc',
    dataHead: 'Buen trabajo!!',
    dataBoton: 'Mostrar Alerta'
  },
  en: {
    dataText: 'my first mvc',
    dataHead: 'Good job!!',
    dataBoton: 'Show Alert'
  },
  leerEnLocalStorage: function () {
    const idioma = localStorage.getItem('idioma');
    if (idioma) {
      return idioma;
    }
    else {
      return 'en';
    }
  },
  guardarEnLocalStorage: function (idioma) {
    localStorage.setItem('idioma', idioma);

  },
}

// * nuestra vista se encarga de mostrar en panalla lo que requerimos
// * tambien se va a encargar de las interacciones desde el cliente
const v = {
  renderAlert: function(data){
    swal(data.dataHead, data.dataText, "success");
  },
  renderBody: function(data){
    const newContentText = document.getElementById('textContent');
    const boton = document.getElementById('alertCta');
    newContentText.innerHTML= ` <h1 class="title">${data.dataHead}</h1><h2 class="subtitle">
    ${data.dataText}</h2> `;
    
    boton.innerText= data.dataBoton;
  },
  clickBoton: function (dataUsuario) {
    const repitoFuncion = this.renderAlert;
    
    document.getElementById('alertCta').addEventListener("click", function (event) {
      repitoFuncion(dataUsuario);
    }, false);
  },
  clickIdioma: function (funcionIdioma) {
    document.getElementById('español').addEventListener("click", function (event) {
      funcionIdioma('es');
      c.dataOnLoad();
    },false);
    document.getElementById('ingles').addEventListener("click", function (event) {
      funcionIdioma('en');
      c.dataOnLoad();
    },false);
  }

 }

// * El controlador se ecncarga de las acciones y respuestas.
const c = {
  mostrarAlert: true,
  dataOnLoad: function(){
    const idioma = m.leerEnLocalStorage();
    v.clickIdioma(m.guardarEnLocalStorage);
    v.clickBoton(m[idioma]);
    v.renderBody(m[idioma]);
    if (c.mostrarAlert) {
      v.renderAlert(m[idioma]);
      c.mostrarAlert = false;
    }
  },
  
};


window.onload = c.dataOnLoad;