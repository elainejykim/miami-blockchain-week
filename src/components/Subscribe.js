import React from 'react';

export default function Subscribe() {

    return (
        <div class="subscription-form">
            <h2 class="l-txt sm">Subscribe</h2>
            <form>
                <div class="form-control">
                    <input type="email" name="email" placeholder="satoshi@gmail.com" required/>
                </div>
            </form>
        </div>
    );
}