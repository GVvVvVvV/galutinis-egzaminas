import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "./redux/actions/userActions";

import './App.css';
import Form from './components/Form.jsx';
import Table from './components/Table.jsx';






function App() {
 

return (
    <main>
    <h1>Appoint users Page</h1>
 <Form/>
<Table/>
  </main>
  );
}

export default App;
