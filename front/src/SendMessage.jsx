import React, { useState } from "react";
import axios from "../node_modules/axios/index";
import { useNavigate, useParams } from "../node_modules/react-router-dom/dist/index";

export const SendMessage = (props) => {
    //to navigate 
    const navigate = useNavigate();

    const [data, setData] = useState([{ mail: "" }])
    const { id } = useParams();


    const handleClick = () => {
        setData([...data, { mail: "" }])
    }


    const handleChange = (e, i) => {
        const { name, value } = e.target
        const onchangeVal = [...data]
        onchangeVal[i][name] = value
        setData(onchangeVal)
    }

    const handleDelete = (i) => {
        const deleteVal = [...data]
        deleteVal.splice(i, 1)
        setData(deleteVal)
    }
    const handleSubmit = async (e) => {
        e.preventDefault();


        var x = [];
        for (const item of data) {
            x.push(item.mail);
        }

        await axios.post('http://localhost:5000/api/Mail/send', {
            "MailID": id,
            "persons": x
        })
            .then(function (response) {
                console.log(response);
                console.log(response.data)
            }).catch(function (error) {
                console.log(error);
            });

        navigate("/");

    }

    return (
        <div className="auth-form-container">
            <h2>Send Email</h2>
            <form className="send-form" onSubmit={handleSubmit}>


                {
                    data.map((val, i) =>
                        <div className="add">
                            <label htmlFor="email">Email</label>
                            <input value={val.mail} name="mail" id="mail" placeholder="mail" onChange={(e) => handleChange(e, i)} />
                        </div>
                    )
                }
                <br />
                <button type="submit">Send</button>
            </form>
            <br />
            <button onClick={handleClick}>Add Receiver</button>
            <br />
            <button onClick={handleDelete}>Delete Receiver</button>
        </div>
    )
}
