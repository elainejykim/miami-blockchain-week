import React, {useState } from 'react';
// import ProgressBar from './ProgressBar';
import useInput from '../hooks/useInput';
// import useStorage from '../hooks/useStorage';
import { projectFirestore, projectStorage } from '../firebase/config';
import firebase from 'firebase/app';


export default function SubmitEvent() {
    const { value:collection, bind:bindCollection, reset:resetCollection } = useInput(null);
    const { value:title, bind:bindTitle, reset:resetTitle } = useInput('');

    const [ startDT, setStartDT ] = useState(null);

    // const { value:startDT, bind:bindStartDT, reset:resetStartDT } = useInput('');
    const { value:endDT, bind:bindEndDT, reset:resetEndDT } = useInput('');
    const { value:location, bind:bindLocation, reset:resetLocation } = useInput('');
    const { value:price, bind:bindPrice, reset:resetPrice } = useInput(0);
    const { value:link, bind:bindLink, reset:resetLink } = useInput('');

    const [ inviteOnly, setInviteOnly] = useState(false);
    const [ fileName, setFileName ] = useState('');
    const [ file, setFile ] = useState(null);


    const toTimestamp = (dt) => {
        const ts = new firebase.firestore.Timestamp(dt);
        console.log(ts);
    };

    const onSubmit = (event) => {
        event.preventDefault();
        console.log("SUBMITTING")
        
        const { fieldset } = event.target.elements;
        fieldset.disabled = true;

        var uploadTask = projectStorage.ref()
                                .child('images/' + file.name)
                                .put(file);
        
        uploadTask.on('state_changed', (snapshot) => {
                var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log('Upload is ' + progress + '% done');
            }, (error) => {
                console.log(error)
            }, async () => {
                const url = await uploadTask.snapshot.ref.getDownloadURL();
                console.log("URL: ", url);

                const collectionRef = projectFirestore.collection(collection);
                collectionRef.add({
                    title, 
                    startDT, 
                    endDT, 
                    location, 
                    price, 
                    link, 
                    inviteOnly,
                    url,
                    verified: false
                }).then(()=> resetState());

                fieldset.disabled = false;
                console.log("end of function reached and url rn is ", url);
            }
        );

    };

    const resetState = () => {
        console.log("resetting state");
        resetCollection();
        resetTitle();
        // resetStartDT();
        setStartDT(null);
        resetEndDT();
        resetLocation();
        resetPrice();
        resetLink();

        setInviteOnly(false);
        setFileName("");
        setFile(null);
    }

    return (
        <div class="event-form container p-5">

            <h2 class="lg"> Submit an Event </h2>
            <p> Once submitted, your event will be reviewed and verified by out team before posted. </p>
            <br/>

            <form class="" onSubmit={onSubmit} >
                <fieldset id="fieldset">
                <div {...bindCollection} class="form-control collection">
                    <h2>City</h2>
                    <div class="">
                        <input type="radio" id="miami" name="collection" value="miami" checked={collection === 'miami'}/>
                        <label for="miami">Miami</label>
                    </div>

                    <div class="">
                        <input type="radio" id="paris" name="collection" value="paris" checked={collection === 'paris'}/>
                        <label for="paris">Paris</label>
                    </div>

                    <div>
                        <input type="radio" id="berlin" name="collection" value="berlin" checked={collection === 'berlin'}/>
                        <label for="berlin">Berlin</label>
                    </div>
                </div>

                <div class="form-control">
                    <label class="">Event Title</label>
                    <input {...bindTitle} type="text" name="title" id="title" placeholder="Event Title" required></input>
                </div>

                <div class="form-control">
                    <label class="">Start Date & Time</label>
                    <input onChange={(e) => {
                        console.log(e.target.value);
                        setStartDT(toTimestamp(e.target.value));
                        console.log(startDT);
                        }} type="datetime-local" name="startDT" id="startDT" required></input>
                </div>

                <div class="form-control">
                    <label class="">End Date & Time</label>
                    <input {...bindEndDT} type="datetime-local" name="endDT" id="endDT" required></input>
                </div>

                <div class="form-control">
                    <label class="">Location</label>
                    <input {...bindLocation} type="textbox" name="location" id="location" placeholder="Location" required></input>
                </div>

                <div class="form-control">
                    <label class="">Event Price</label>
                    <input {...bindPrice} type="number" min="0" name="price" id="price" placeholder="Price" required></input>
                </div>

                <div class="form-control">
                    <label class="">Link to Event Details</label>
                    <input {...bindLink} type="url" name="link" id="link" placeholder="Event Link" ></input>
                </div>

                <div class="form-control">
                    <label for="inviteOnly">Invite Only</label>
                    <input type="checkbox" id="inviteOnly" name="inviteOnly"
                        onChange={() => setInviteOnly(!inviteOnly)}
                        checked={inviteOnly}
                    />
                </div>

                <div class="form-control">
                    <label class="">Event Thumbnail</label>
                    <input 
                        onChange={ (e) => {
                            setFile(e.target.files[0]);
                            setFileName(e.target.value);
                        }}
                        type="file" name="img" id="img" accept=".jpg, .jpeg, .png" 
                        placeholder="Event Thumbnail" 
                        value={fileName}
                        required
                    ></input>
                </div>

                <input type="submit" value="Submit" class="btn"></input>
                </fieldset>
            </form>

        </div>
    );
}