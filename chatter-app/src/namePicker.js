import React from "react";
import "./App.css";
import {useState} from "react";
import { FiEdit } from 'react-icons/fi'


// a 5: a new component that enables users to set a username
function NamePicker(props) {
        const [editName, setEditName] = useState(false)
        const [name, setName] = useState('')

    function edit() {
        props.edit(name)
        setEditName(false)
    }

    
    // edit user name button selected
    // enter key to edit function
    // code referenced ^ https://stackoverflow.com/questions/31272207/to-call-onchange-event-after-pressing-enter-key
    if (editName) {
    return (
        <div className="username">
            <input 
                className="username-input" 
                value={name} 
                onChange={(e) => setName(e.target.value)} 
                onKeyPress={(e) => {
                    if(e.key==="Enter") edit()
                }}
            />
            <button className="username" onClick={edit}>
                OK
            </button>
        </div>
        );
    }

    // "ok" button selected after inputting username
    // displays inputted name
    return (
        <div className="username">
            <span className="editUser">{name || "Set Username:"} </span>
            <FiEdit size="24" onClick={() => setEditName(true)}/>
        </div>
        )
    }

export default NamePicker