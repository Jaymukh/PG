// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//       </header>
//     </div>
//   );
// }

// export default App;

// External libraries
import React from "react";
import { BrowserRouter } from 'react-router-dom';
import Router from './Router';

// CSS
import './styles/main.css';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
				<Router />
			</BrowserRouter>      
    </div>
  );
}

export default App;
