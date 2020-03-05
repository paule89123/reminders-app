import React from 'react';
import './App.css';

function App(props) {
    return (
        <div>
            <h1>Reminders<span class="heading-full-stop">.</span></h1>

            <div id="input-container">
                <input
                    id="text-input"
                  autocomplete="off"
                  type="text"
                  placeholder="Type a reminder..."
                  onChange={props.onChange}
                  value={props.newItem}
                />

                <button
                  id="add-button"
                  onClick={props.onClick}
                ><img src="./add.svg" /></button>
            </div>

            {props.array.map(item => 
              <div id="item-container">
                <li key={item.id}>
                    <span id="bullet-point">.</span>
                    <span id="list-text">{item.value}</span>
                </li>
                <button 
                      id="remove-button"
                      onClick={() => props.deleteItem(item.id)} 
                ><div id="remove-symbol">+</div></button>
                </div>
            )}

            {document.addEventListener("keyup", function(event) {
              // Number 13 is the "Enter" key on the keyboard
                  if (event.keyCode === 13) {
                    props.onClick();
                  }
              })
            }
        </div>
    );
}

export default App;

