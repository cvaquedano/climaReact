import React, { Fragment, useState, useEffect } from 'react';
import Header from './components/Header'
import Formulario from './components/Formulario'

function App() {

  const [busqueda, setBusqueda] = useState({
    ciudad:'',
    pais:''
});

const [consultar, setConsultar] = useState(false);

const {ciudad, pais} = busqueda;

useEffect(() => {

  const consultarAPI = async () => {
    const apikey='e40231c41a25ae56392b44252cf9eb10';
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${apikey}`;

    const respuesta = await fetch(url);
    const resultado = await respuesta.json();
    console.log(resultado)

  };
  if (consultar){
    consultarAPI();
    setConsultar(false);
  }
}, [ciudad, consultar, pais])

  return (
   <Fragment>
     <Header
      titulo="Clima React"
     />
     <div className="contenedor-form">
       <div className="container">
         <div className="row">
           <div className="col m6 s12">
             <Formulario
              busqueda={busqueda}
              setBusqueda={setBusqueda}
              setConsultar={setConsultar}
             />
           </div>
           <div className="col m6 s12">
             2
           </div>
         </div>
       </div>
     </div>
   </Fragment>
  );
}

export default App;
