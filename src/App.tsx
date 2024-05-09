// External libraries
import { BrowserRouter } from 'react-router-dom';
import Router from './Router';

// CSS
import './styles/main.css';
import Toast from './components/ui/toast/Toast';

const App = () => {
  return (
    <div className="App">
      <Toast />
      <BrowserRouter>
				<Router />
			</BrowserRouter>      
    </div>
  );
}

export default App;
