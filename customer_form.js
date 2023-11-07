import React from "react";
import { useState } from "react";

function Form() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [team, setTeam] = useState('');
    const [sub, setSub] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSub(true);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Name</label>
                <input type="text" value={name} onChange={(e) => { setName(e.target.value) }} />
                <label>Business Email</label>
                <input type="email" value={email} onChange={(e) => { setEmail(e.target.value) }} />
                <label>Team Size You Are Looking For</label>
                <select value={team} onChange={(e) => { setTeam(e.target.value) }}>
                    <option value="">Please select</option>
                    <option value="3-10 People">3-10 People</option>
                    <option value="10-20 People">10-20 People</option>
                </select>
                <button>Send</button>
            </form>
            {sub && (
                <div>
                    <h2>Details</h2>
                    <p>Name: {name}</p>
                    <p>Email: {email}</p>
                    <p>Team Size: {team}</p>
                </div>
            )}
        </div>
    );
}

export default Form;
