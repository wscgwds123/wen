import logo from './logo.svg';
import './App.css';
import React,{Component} from 'react'

import Top from './component/Top'
import Content from './component/Content'

function App() {
  return (
    <div style={{width:'100%',height:'100%'}}>
      <Top/>
      <Content/>
    </div>
  );
}

export default App;
