import React, { useEffect, useState } from "react";
import axios from "../node_modules/axios/index";

export const AddMessage = (props) => {

  //pass params
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const [posts, setPosts] = useState([]);

    //load message on first loading to the page
    useEffect(() => {
        getMessage();
      }, [])

    //handel send Mails 
    const handleSubmit = async (e) =>  {
        e.preventDefault();
        await axios.post('http://localhost:5000/api/Mail/add', {
                "subject": subject,
                "message": message,
              })
              .then(function (response) {
                console.log(response);
                console.log(response.data);                
            })
              .catch(function (error) {
                console.log(error);
              });

          //clear text fields    
            setMessage('');  
            setSubject('');
              getMessage();
        }

        //call api to get Messages
        function getMessage(){
            console.log("inside");
            fetch('http://localhost:5000/api/Mail/retrieve')
               .then((res) => res.json())
               .then((data) => {
                  console.log(data);
                  setPosts(data);
               })
               .catch((err) => {
                  console.log(err.message);
               });
        }
    
    return (
        <div className="auth-form-container">
            <form className="add-form" onSubmit={handleSubmit}>
                 <h2>Add Message</h2>
                <label htmlFor="subject">Subject</label>
                <input value={subject} onChange={(e) => setSubject(e.target.value)}type="text" placeholder="subject" id="subject" name="subject" />
                <label htmlFor="message">Message</label>
                <textarea value={message} onChange={(e) => setMessage(e.target.value)}  placeholder="message" id="message" name="message" rows={4} cols={50}></textarea>
                <br/>
                <button type="submit">Add</button>
            </form>
            <br/>
            <h1>Masseges</h1>
            <br/>
            {posts.map(post=> 
                <a href={'/Send/'+post.id}>
                    <div className="message" >
                        <p>{post.subject}</p>
                        <p>{post.message}</p>
                    </div>
                </a>
            )}

        </div>
    )
}