import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Display from './component/Display';
import ButtonContainer from './component/ButtonContainer';
import Quotes from './component/Quotes';


function App() {
  const [Input, setInput] = useState("");


  return (
    <div className='main-container'>
      <div className='div-1'>
        <Quotes />
      </div>
      <div className='div-2'>
        <div className='calci'>
          <Display Input={Input} />
          <ButtonContainer Input={Input} setInput={setInput} />
        </div>
      </div>
    </div>
  );
}

export default App;
