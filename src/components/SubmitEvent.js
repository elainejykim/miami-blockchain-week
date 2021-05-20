import React from 'react';

export default function SubmitEvent() {

    return (
        <div class="event-form container p-5">

            <h2 class="lg"> Submit an Event </h2>
            <p> Once submitted, your event will be reviewed and verified by out team before posted. </p>
            <br/>

            <form class="">
                <div class="form-control collection">
                    <h2>City</h2>
                    <div class="">
                        <input type="radio" id="miami" name="collection" value="miami" checked/>
                        <label for="miami">Miami</label>
                    </div>

                    <div class="">
                        <input type="radio" id="paris" name="collection" value="paris"/>
                        <label for="paris">Paris</label>
                    </div>

                    <div>
                        <input type="radio" id="berlin" name="collection" value="berlin"/>
                        <label for="berlin">Berlin</label>
                    </div>

                </div>

                <div class="form-control">
                    <label class="">Event Title</label>
                    <input type="text" name="title" id="title" placeholder="Event Title" required></input>
                </div>

                <div class="form-control">
                    <label class="">Start Date & Time</label>
                    <input type="datetime-local" name="start-dt" id="start-dt" required></input>
                </div>

                <div class="form-control">
                    <label class="">End Date & Time</label>
                    <input type="datetime-local" name="end-dt" id="end-dt" required></input>
                </div>

                <div class="form-control">
                    <label class="">Location</label>
                    <input type="textbox" name="location" id="location" placeholder="Location" equired></input>
                </div>

                <div class="form-control">
                    <label class="">Event Price</label>
                    <input type="number" min="0" name="price" id="price" placeholder="Price" required></input>
                </div>

                <div class="form-contol">
                    <label class="">Link to Event Details</label>
                    <input type="url" name="link" id="link" placeholder="Event Link" required></input>
                </div>

                <div class="form-control">
                    <label class="">Event Thumbnail</label>
                    <input type="file" name="img" id="img" accept=".jpg, .jpeg, .png" placeholder="Event Thumbnail" required></input>
                </div>

                <input type="submit" value="Submit" class="btn"></input>

            </form>

        </div>
    );
}