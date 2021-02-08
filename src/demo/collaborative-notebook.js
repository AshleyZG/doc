import React from 'react'
import {IRBTitle, IRBSubTitle, IRBContent} from '../components/IRBElements';
import { Divider } from '@material-ui/core';


function CollaborativeNotebookDemo (){
    return (
        <div>
            <IRBTitle text="Introduction"></IRBTitle>
            {/* <p>hi</p> */}
            <IRBTitle text="How to use it"></IRBTitle>
            <IRBTitle text="Get started"></IRBTitle>
        </div>
    )
};

export default CollaborativeNotebookDemo;