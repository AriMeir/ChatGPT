
import './App.css';
import './normal.css'
function App() {
  return (
    <div className="App">
      <aside className='sidemenu'>
        <div className='side-menu-button'>
          <span>+</span>
          New chat
        </div>
      </aside>
      <section className='chatbox'>
        <div className='chat-log'>
          <div className='chat-message'>
            <div className='avatar'>
             
            </div>
            <div className='message'>
              Hello world
            </div>
          </div>

        </div>
        <div className='chat-input-holder'>
          <textarea rows={1}
            className="chat-input-textarea">
          </textarea>
          
        </div>

        <p className='bottom-text'>chatGPT can make mistakes. check important info.</p>
      </section>
      
      
    </div>
  );
}

export default App;
