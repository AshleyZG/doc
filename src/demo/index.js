import React from "react";
import { Link, Route, Switch } from "react-router-dom/cjs/react-router-dom.min";
// import React from 'react'
// import CollaborativeNotebook from "./interview-doc/collaborative-notebook";
import CollaborativeNotebookDemo from "./collaborative-notebook";
function DemoList ()  {
    return (
        <div >
            {/* ??? */}
            {/* {CollaborativeNotebook} */}
            {/* <CollaborativeNotebook/> */}
            <Link to={`/demo/collaborative-notebook`}  >Collaborative notebook</Link>
            {/* <Route path='/interview-doc/collaborative-notebook' component={CollaborativeNotebook}></Route> */}
        </div>
    );
};

export default DemoList;