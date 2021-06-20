import { BrowserRouter as Router, Route } from "react-router-dom"
import YaziListesi from './components/YaziListesi';
import YaziDetayi from "./components/YaziDetayi";
function App() {

  return (
    <Router>
      <div >
        <nav className="navbar navbar-dark bg-primary">
          <div className="container-fluid justify-content-center align-items-center">
            <a className="navbar-brand " href="/">Home</a>
          </div>
        </nav>
        <div className="ui raised very padded text container segment mt-5">
          <Route path="/" exact component={YaziListesi} />
          <Route path="/posts/:id" component={YaziDetayi} />

        </div>
      </div>
    </Router>
  );
}

export default App;
