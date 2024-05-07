// External libraries
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
