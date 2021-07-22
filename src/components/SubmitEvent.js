import React, {useState } from 'react';
// import ProgressBar from './ProgressBar';
import useInput from '../hooks/useInput';
// import useStorage from '../hooks/useStorage';
import { projectFirestore, projectStorage } from '../firebase/config';
import '../css/Forms.css';

export default function SubmitEvent() {
    const { value:collection, bind:bindCollection, reset:resetCollection } = useInput(null);
    const { value:title, bind:bindTitle, reset:resetTitle } = useInput('');
    const { value:startDT, bind:bindStartDT, reset:resetStartDT } = useInput('');
    const { value:endDT, bind:bindEndDT, reset:resetEndDT } = useInput('');
    const { value:location, bind:bindLocation, reset:resetLocation } = useInput('');
    const { value:price, bind:bindPrice, reset:resetPrice } = useInput(0);
    const { value:link, bind:bindLink, reset:resetLink } = useInput('');

    const [ inviteOnly, setInviteOnly] = useState(false);
    const [ fileName, setFileName ] = useState('');
    const [ file, setFile ] = useState(null);

    // const offsetsUTC = {
    //     'miami': '-04:00',
    //     'paris': '+02:00',
    //     'berlin': '+02:00'
    // }

    // const toTimestamp = (dt) => {
    //     const d = new Date(dt + offsetsUTC[collection])
    //     const ts = new firebase.firestore.Timestamp.fromDate(d);
    //     console.log("original: ", dt);
    //     console.log("date: ", d);
    //     console.log("timestamp: ", ts);
    //     return ts;
    // };

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
                    verified: false,
                    // startTimestamp: toTimestamp(startDT)
                }).then(()=> resetState());

                fieldset.disabled = false;
            }
        );

    };

    const resetState = () => {
        console.log("resetting state");
        resetCollection();
        resetTitle();
        
        resetStartDT();
        resetEndDT();
        resetLocation();
        resetPrice();
        resetLink();

        setInviteOnly(false);
        setFileName("");
        setFile(null);
    }

    return (
        <div className="event-form form-container">

            <h2 className="title"> Submit an Event </h2>
            <p className="subtitle"> Once submitted, your event will be reviewed and verified by out team before posted. </p>

            <form className="" onSubmit={onSubmit} >
                <fieldset id="fieldset">
                <div {...bindCollection} className="form-control collection">
                    
                    <h2 className="label">City</h2>

                    <div className="options"> 
                        <div className="option">
                            <input class="radio" type="radio" id="miami" name="collection" value="miami" checked={collection === 'miami'}/>
                            <label for="miami">Miami</label>
                        </div>

                        <div className="option">
                            <input class="radio" type="radio" id="paris" name="collection" value="paris" checked={collection === 'paris'}/>
                            <label for="paris">Paris</label>
                        </div>

                        <div className="option">
                            <input class="radio" type="radio" id="berlin" name="collection" value="berlin" checked={collection === 'berlin'}/>
                            <label for="berlin">Berlin</label>
                        </div>
                    </div>
                </div>

                <div className="form-control">
                    <label className="label">Event Title</label>
                    <input {...bindTitle} type="text" name="title" id="title" placeholder="Event Title" required></input>
                </div>

                <div className="form-control">
                    <label className="label">Start Date & Time</label>
                    <input 
                        {...bindStartDT}
                        className="datetime" type="datetime-local" name="startDT" id="startDT" required
                    ></input>
                </div>

                <div className="form-control">
                    <label className="label">End Date & Time</label>
                    <input {...bindEndDT} 
                        className="datetime" type="datetime-local" name="endDT" id="endDT" required
                    ></input>
                </div>

                <div className="form-control">
                    <label className="label">Location</label>
                    <input {...bindLocation} type="textbox" name="location" id="location" placeholder="Location" required></input>
                </div>

                <div className="form-control">
                    <label className="label">Event Price</label>
                    <input {...bindPrice} type="number" min="0" name="price" id="price" placeholder="Price" required></input>
                </div>

                <div className="form-control">
                    <label className="label">Link to Event Details</label>
                    <input {...bindLink} type="url" name="link" id="link" placeholder="Event Link" ></input>
                </div>

                <div className="form-control">
                    <label className="label">Event Thumbnail</label>
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

                <div className="final-row">
                    <div className="form-control" id="invite">
                        <input type="checkbox" id="inviteOnly" name="inviteOnly"
                            onChange={() => setInviteOnly(!inviteOnly)}
                            checked={inviteOnly}
                        />
                        <label className="label" for="inviteOnly">Invite Only</label>
                    </div>

                    <input type="submit" value="Submit" className="b-btn"></input>
                </div>
                
                
                </fieldset>
            </form>

        </div>
    );
}

