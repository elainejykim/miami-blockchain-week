import React, {useState} from 'react';

export default function Subscribe() {

    const [email, setEmail] = useState();

    const handleInputChange = (event) => {
        console.log(event.target.value);
        setEmail(event.target.value);
    };

    const onFormSubmit = (event) => {
        if (email != null) {
            console.log("Event target = ", event.target.value);
            console.log("ENTERED = ", email);
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
                        placeholder="satoshi@gmail.com" 
                        onChange = {handleInputChange}
                        required
                    />
                </div>
                <button type="submit" class="btn m-1"><i class="fas fa-arrow-right"></i></button>
            </form>
        </div>
    );
}