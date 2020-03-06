import React from 'react';
import './App.css';
import add from './plus.svg'

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
                    aria-label="Type your reminders here"
                />

                <img 
                    id="add-button"
                    alt="add button"
                    src={add}
                    onClick={props.onClick}
                />
            </div>

            {props.array.map(item => 
              <div id="item-container">
                  <li key={item.id}>
                      <span id="bullet-point">.</span>
                      <span id="list-text">{item.value}</span>
                  </li>
                  <img 
                        id="remove-button"
                        alt="remove button"
                        src={add} 
                        onClick={() => props.deleteItem(item.id)} 
                  />
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

