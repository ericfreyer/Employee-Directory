import "./App.css";
import Header from "./components/Header/header";
import EmployeeCard from './components/EmployeeCard/employeecard';
import API from './utils/API';

function App() {
  return (
    <div className="App">
        <Header />
        <EmployeeCard />
    </div>
  );
}

export default App;
