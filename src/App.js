import Navbar from "./components/Navbar";
import ThemeToggle from "./components/ThemeToggle";
import Todo from "./components/Todo";
import ThemeContextProvider from './contexts/ThemeContext'
import TodoContextProvider from './contexts/TodoContext'
import AuthContextProvider from './contexts/AuthContext'
function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <AuthContextProvider>
          <Navbar />
          <TodoContextProvider >
            <Todo />
          </TodoContextProvider>
        </AuthContextProvider> 
        <ThemeToggle />
      </ThemeContextProvider>
    </div>
  );
}

export default App;
