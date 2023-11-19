import Main from "./pages/Main";
import Header from "./components/Header/Header";
import {useTheme} from "./context/theme/ThemeContext";

function App() {
  const { isDark } = useTheme();
  return (
    <div className={`app ${isDark ? "dark" : "light"}`}>
      <Header />
      <div className="container">
        <Main />
      </div>
    </div>
  );
}

export default App;
