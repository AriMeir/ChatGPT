import { useState } from 'react'
import ChatMessage from './ChatMessage'
import { MessageService } from '../services/message.service'

function Chatbox() {
  const [input, setInput] = useState('')
  const [chatLog, setChatLog] = useState([{gpt: "gpt", message: "Hello, how can I help you today?"}])

  async function handleSubmit(e) {
    e.preventDefault();
    const userMessage = { user: "me", message: `${input}` };
    setChatLog((prevChatLog) => [
      ...prevChatLog,  
      userMessage     
    ]);
    setInput('');
    const response = await MessageService.sendMessage(input);
    setChatLog((prevChatLog) => [
      ...prevChatLog, 
      { gpt: "gpt", message: `${response.message}` }  
    ]);
  }



    return (
        <section className='chatbox'>
        <div className='chat-log'>
          {chatLog.map((message, index) =>  <ChatMessage key={index} message={message}/>)}
        </div>
        <div className='chat-input-holder'>
          <form onSubmit={handleSubmit}>
          <input 
            rows={1}
            value={input}
            onChange={(e) => {setInput(e.target.value)}}
            className="chat-input-textarea">
          </input>
          </form>
        </div>

        
      </section>
    );
  }
  
  export default Chatbox;