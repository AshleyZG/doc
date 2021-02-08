import React from "react";
import { Link, Route, Switch } from "react-router-dom/cjs/react-router-dom.min";
// import React from 'react'
// import CollaborativeNotebook from "./interview-doc/collaborative-notebook";
import CollaborativeNotebookDemo from "./collaborative-notebook";
function DemoList ()  {
    return (
        <div >
            <Link to={`/demo/collaborative-notebook`}  >Collaborative notebook</Link>
        </div>
    );
};

export default DemoList;