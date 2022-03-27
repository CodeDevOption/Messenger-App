import { Button,  FormControl,  Input } from '@material-ui/core';
import React,{ useEffect, useState } from 'react';
import SendIcon from '@material-ui/icons/Send';
import Message from './Messege';
import { collection, onSnapshot, addDoc,orderBy, query, serverTimestamp} from "firebase/firestore";
import db from './firebase';
import FlipMove from 'react-flip-move';



import './App.css';

function App() {
  
  const[input,setInput] = useState('');
  const[messege,setMessege] = useState([]);
  const[username, setUsername] = useState('');

  useEffect( () =>{
    const collectioRef = collection(db,"message");
    setUsername(prompt('Eneter Username'));
    const q = query(collectioRef,orderBy('timestamp','desc'));
    onSnapshot(q,(snapshot) =>{
      setMessege(snapshot.docs.map(doc => ({ id:doc.id,messege:doc.data() })))
    });

  },[]);
 

  //Click Event 
  const ClickEvent = (e)=>{
    const collectioRef = collection(db,"message");
    e.preventDefault();
    const values = {username : username , messege: input,timestamp: serverTimestamp()};
   
    addDoc(collectioRef,values);
    setMessege([...messege,{username : username , messege: input}]);// this Code Here input state values send useState Array 
    setInput('');
     
  }
  
  return (
    <div className="App">
       <h1 >Messenger</h1>
      <img  width="100" height="100" src="https://www.pngall.com/wp-content/uploads/5/Facebook-Messenger-Logo-PNG-High-Quality-Image.png" alt="Messenger_icon" />
      
       <h2>Welcome {username}</h2>
       <form  className='app__form'>
         <FormControl className='form_controle'>
        <Input className='Forme__input' placeholder="Enter Messege Here" inputProps={{ 'aria-label': 'description' }} value={input} onChange={(e) =>{setInput(e.target.value)}} type="text" />
        <Button disabled={!input}  className='Forme__button' type='submit' onClick={ClickEvent}
        
        
      
      >
        <SendIcon />
      </Button>
      </FormControl>
       </form>

    {/* This Code Here userState Array values get map Fuction */}
    <FlipMove>

        { messege.map(({id,messege}) =>(
            <Message key= { id }  username= {username} text={messege} />  
        )) }
    </FlipMove>
    </div>
  );
}

export default App;
