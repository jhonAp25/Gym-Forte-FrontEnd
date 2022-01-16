import {BrowserRouter as Router, Switch,Route} from "react-router-dom";
import './App.css';
import './react-big-calendar.css';
import Navbar from "./components/Navbar";
import Notificacion from "./components/Notificacion";
import { DisciplinaProvider } from "./context/DisciplinaContext";
import { TrainerProvider } from "./context/TrainerContext";
import ClasesPage from "./pages/ClasesPage";
import ClientePage from "./pages/ClientePage";
import DashboardAdmin from './pages/DashboardAdmin';
import DisciplinaPage from "./pages/DisciplinaPage";
import TrainerPage from "./pages/TrainerPage";
import { ClaseProvider } from "./context/ClaseContext";
import { SalonProvider } from "./context/SalonContext";
import Login from "./components/Login";
import { LoginProvider } from "./context/LoginContext";
import PlanPago from "./pages/PlanPago";
import { ClienteProvider } from "./context/ClienteContext";
import { PlanPagoProvider } from "./context/PlanPagoContext";

function App() {
  return (
    <div className="App">
      <Router>
      <LoginProvider>
<ClaseProvider>
<DisciplinaProvider>
<TrainerProvider>
  <ClienteProvider>
<SalonProvider>
  <PlanPagoProvider>
     
      <Switch>
      <Route exact path="/" component={Login} />

      <div className='flex w-full'> 
         <Navbar/> 
         
         <Notificacion/>
         <div style={{width: '80%'}} >
            <Route exact path="/inicio" component={DashboardAdmin} />
            
            <Route exact path="/cliente" component={ClientePage}  />
            <Route exact path="/clase" component={ClasesPage} />
            <Route exact path="/plan_pago" component={PlanPago}  />
            <Route exact path="/trainer" component={TrainerPage} />
            <Route exact path="/disciplina" component={DisciplinaPage} />
           
         </div>
        

      </div>

      </Switch>

      </PlanPagoProvider>
      </SalonProvider>
      </ClienteProvider>
      </TrainerProvider>
      </DisciplinaProvider>
      </ClaseProvider>
      </LoginProvider>
    </Router>

    </div>
  );
}

export default App;
