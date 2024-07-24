import { useEffect, useState } from 'react'
import { socket } from "./socket.js";

function App() {

  const [newMessage, setNewMessgae] = useState("");

  const handleNewMessage = (e) => {
    e.preventDefault();
    if(newMessage){
      socket.emit('chat message', newMessage);
      setNewMessgae("");
    }
  }
  
  useEffect(() => {
    socket.on('chat message', (msg) => {
      console.log(msg);
    });
  },[]);

  return (
    <>
      <div className='bg-slate-300 h-screen w-[80%] mx-auto p-8'>
        <div className='w-full p-2 text-center h-[10%] mb-8'>
          <h1 className='text-5xl font-bold'>Chat App</h1>
        </div>
        <div className='h-[80%] bg-white rounded-lg relative'>
          <div className='message-list overflow-y-scroll'>

          </div>
          <div className='message-input flex justify-between w-full h-12 absolute bottom-0 rounded-lg border-2 p-1'>
            <input className='outline-none p-2 w-[90%]' type="text" placeholder='Message'
              value={newMessage}
              onChange={(e) => setNewMessgae(e.target.value)}
            />
            <button className='bg-green-400 ml-2 px-4 py-2 rounded-lg' onClick={(e) => handleNewMessage(e)}>Send</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
