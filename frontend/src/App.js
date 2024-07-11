import './App.css';
import Main from './Components/main/Main';
import { AuthContextProvider } from './context/AuthContext';
function App() {
  return (
    <div className="app">
      <AuthContextProvider>
        <Main />
      </AuthContextProvider> 
    </div>
  );
}

export default App;
