import './App.css';
import { Link, BrowserRouter, Route, Switch  } from "react-router-dom";
import InterviewList from "./interview";
import CollaborativeNotebook from "./interview-doc/collaborative-notebook";
import DemoList from "./demo";
import CollaborativeNotebookDemo from "./demo/collaborative-notebook";

function App() {
  document.title = "My Documents";
  return (
    <div className="App">
    <BrowserRouter basename="/doc">
      <nav>
        <Link to="/">Home</Link>
        {/* <Link to="/tt">tt</Link> */}
        <Link to="/interview">Interview</Link>
        <Link to="/demo/index">Demo</Link>
        
      </nav>
      <div className="content">
        {/* <Route path="/tt" component={Contact}/> */}
        <Route path="/interview" component={InterviewList}></Route>
        <Route path='/interview-doc/collaborative-notebook' component={CollaborativeNotebook}></Route>
        <Route path="/demo/index" component={DemoList}></Route>
        <Route path="/demo/collaborative-notebook" component={CollaborativeNotebookDemo}></Route>
      </div>
    </BrowserRouter>
    </div>
  );
}

export default App;
