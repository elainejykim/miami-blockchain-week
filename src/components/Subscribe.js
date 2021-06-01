import React, {useState} from 'react';
import { projectFirestore } from '../firebase/config';

export default function Subscribe() {

    const [email, setEmail] = useState("");
    const collectionRef = projectFirestore.collection('emails');

    const onFormSubmit = (event) => {
        event.preventDefault();
        if (email != null) {
            collectionRef.add({email});
            setEmail("");
        }
    };

    return (
        <div className="subscription-form">
            <h2 className="l-txt sm">Subscribe</h2>
            <form className="flex" onSubmit={onFormSubmit}>
                <div className="form-control">
                    <input 
                        type="email" 
                        name="email" 
                        id="email"
                        placeholder="satoshi@gmail.com" 
                        value = {email}
                        onChange ={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" className="btn m-1"><i className="fas fa-arrow-right"></i></button>
            </form>
        </div>
    );
}

// https://reactjs.org/warnings/invalid-hook-call-warning.html
