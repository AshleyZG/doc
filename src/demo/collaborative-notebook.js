import React from 'react'
import {IRBTitle, IRBSubTitle, IRBContent} from '../components/IRBElements';
import { Divider } from '@material-ui/core';

const introduction = "This is a demo for Jupyter Notebook branching. It supports real time collaboration, modularization, and branching in JupyterLab."
const howToUseIt = ""

function CollaborativeNotebookDemo (){
    return (
        <div>
            <IRBTitle text="Introduction"></IRBTitle>
            <IRBContent text={introduction}></IRBContent>
            <Divider/>
            <IRBTitle text="How to use it"></IRBTitle>
            <p className="irb-content">
                Real time collaboration: <br/>
                <a href="http://3.22.120.178:8822">http://3.22.120.178:8822</a>
            </p>
            <p className="irb-content">
                Extensions: <br/>
                <a href="http://3.22.120.178:8823">http://3.22.120.178:8823</a>
            </p>
            <IRBContent text={howToUseIt}></IRBContent>
            <IRBTitle text="Get it work locally"></IRBTitle>
        </div>
    )
};

export default CollaborativeNotebookDemo;