import React from "react";
export default class Botones extends React.Component {
  // constructor(props){
    //    super(props);
   // }
    render () {
        const {alerts}= this.props;
        const {m1,m2} = alerts;
              return (
        <div>
            <button id = "Módulo 1" onClick={()=> alert(m1)}>Módulo 1</button>
            <button id = "Módulo 2" onClick={()=> alert(m2)}>Módulo 2</button>
        </div>)
    }
}

