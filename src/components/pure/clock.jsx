import React, { Component } from 'react'
//import '../../styles/clock.scss';

class Clock extends Component {
   constructor(props) {
      super(props);
      // Estado privado del component
      this.state = {
         // Se genera una fecha como estado inicial del componente
         fecha: new Date(),
         edad: 0,
         nombre: 'Javier',
         apellidos: 'Álvarez'
      };
   }
   componentDidMount(){
      this.timerID = setInterval (
         // Usa el método creado más abajo para añadir un año:
         () => this.tick(), 1000
      );
   }
   componentWillUnmount() {
      // Detiene el intervalo:
      clearInterval (this.timerID);
   }
   render() {
      return (
         <div>
            <h2>
            Hora Actual</h2>  
            <h2>{this.state.fecha.toLocaleTimeString()}</h2>
            <h1>{this.state.nombre} {this.state.apellidos}</h1>
            <h3>Edad: {this.state.edad}</h3>
         </div>
      )
   }
   tick(){
      this.setState((prevState) => {
         let edad = prevState.edad +1;
         return {
            ...prevState,
            fecha: new Date(),
            edad
         }
      });
   }
}
export default Clock;