import React, { Component } from 'react';

class App extends Component {
  render() {
  	const  fac = (Num)=>{	
  		document.getElementById("N").innerHTML=Num
  		document.getElementById("aff").innerHTML=Num*Num
  	}
    return (
      <div>
   <button  onClick={()=>fac(0)}>0</button>	
   <button  onClick={()=>fac(1)}>1</button>	
   <button  onClick={()=>fac(2)}>2</button>	
   <button  onClick={()=>fac(3)}>3</button>	
   <button  onClick={()=>fac(4)}>4</button>	
   <button  onClick={()=>fac(5)}>5</button>	
   <button  onClick={()=>fac(6)}>6</button>
   <button  onClick={()=>fac(7)}>7</button>
   <button  onClick={()=>fac(8)}>8</button>
   <button  onClick={()=>fac(9)}>9</button><br/>
    	the factorial of <span id="N"></span> is <span id="aff"></span>
      </div>
    );
  }
}
export default App;