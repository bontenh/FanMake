import React, { useRef } from 'react';
import axios from 'axios';
import { useEffect,useState } from 'react';
import { Header } from '../components/Header';

export let Chat = () => {
    let url = "http://127.0.0.1:8000/api/chat";
    const [messages, setMessages] = useState([]);
    let messageRef = useRef(null);
    let handleClick = () => {
        let message = messageRef.current.value;
        if(message){
            axios.post("http://localhost:8000/api/chat", {message: message}).then((e) => {
                messageRef.current.value = "";
            }).catch((e) => {
                console.log(e);
            })
        }
    }
    /**
        * Listen for events on the channel-chat channel
    */
    window.Echo.channel('channel-chat').listen('ChatEvent', (e) => {
        let newMessage =  e.message.message;
        let newId = e.message.id
        setMessages([...messages, {id: newId, message: newMessage}]);
    });
    useEffect(()=>{
        (async () => {
            try {
                let res = await axios.get(url);
                setMessages(res.data.messages);
                return;
            } catch (e) {
                return e;
            }
          })()
    },[]);
    return (
        <div>
            <Header />
            <div>
                <input type="text" ref={messageRef} name="message" />
                <button onClick={handleClick}>送信</button>
            </div>
            {messages.map((message)=> {
                return (
                    <div key={message.id}>
                        <p>{message.id}</p>
                        <p>{message.message}</p>
                    </div>
                );
            })}
        </div>
    );
};