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
            // console.log("email pushed on: ", docRef);
        }
    };

    return (
        <div class="subscription-form">
            <h2 class="l-txt sm">Subscribe</h2>
            <form class="flex" onSubmit={onFormSubmit}>
                <div class="form-control">
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
                <button type="submit" class="btn m-1"><i class="fas fa-arrow-right"></i></button>
            </form>
        </div>
    );
}

// https://reactjs.org/warnings/invalid-hook-call-warning.html
