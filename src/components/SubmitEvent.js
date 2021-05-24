import React, {useState } from 'react';
// import ProgressBar from './ProgressBar';
import useInput from '../hooks/useInput';
// import useStorage from '../hooks/useStorage';
import { projectFirestore, projectStorage } from '../firebase/config';

export default function SubmitEvent() {
    const { value:collection, bind:bindCollection, reset:resetCollection } = useInput(null);
    const { value:title, bind:bindTitle, reset:resetTitle } = useInput('');
    const { value:startDT, bind:bindStartDT, reset:resetStartDT } = useInput('');
    const { value:endDT, bind:bindEndDT, reset:resetEndDT } = useInput('');
    const { value:location, bind:bindLocation, reset:resetLocation } = useInput('');
    const { value:price, bind:bindPrice, reset:resetPrice } = useInput(0);
    const { value:link, bind:bindLink, reset:resetLink } = useInput('');
    // const { value:file, bind:bindFile, reset:resetFile } = useInput(null);

    const [ fileName, setFileName ] = useState("");
    const [ file, setFile ] = useState(null);
    const [ fileUrl, setFileUrl ] = useState('');

    const onSubmit = (event) => {
        event.preventDefault();
        console.log(
            collection,
            title, 
            startDT, 
            endDT, 
            location, 
            price, 
            link, 
            file,
        );

        // var uploadTask = projectStorage.ref()
        //                         .child('images/' + file.name)
        //                         .put(file);
        
        // uploadTask.on('state_changed',
        //     (snapshot) => {
        //         var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        //         console.log('Upload is ' + progress + '% done');
        //     }, 
        //     (error) => {
        //         console.log(error)
        //     }, 
        //     () => {
        //         uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
        //             setFileUrl(downloadURL)
        //             const collectionRef = projectFirestore.collection(collection);
        //             collectionRef.add({
        //                 title, 
        //                 startDT, 
        //                 endDT, 
        //                 location, 
        //                 price, 
        //                 link, 
        //                 fileUrl,
        //                 verified: false
        //             })
        //         });
        //     }
        // )

        resetCollection();
        resetTitle();
        resetStartDT();
        resetEndDT();
        resetLocation();
        resetPrice();
        resetLink();
        // resetFile();
        setFileName("");
        setFile(null);
        
        setFileUrl('');

    };

    return (
        <div class="event-form container p-5">

            <h2 class="lg"> Submit an Event </h2>
            <p> Once submitted, your event will be reviewed and verified by out team before posted. </p>
            <br/>

            <form class="" onSubmit={onSubmit}>
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
                    <input {...bindStartDT} type="datetime-local" name="startDT" id="startDT" required></input>
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

                <div class="form-contol">
                    <label class="">Link to Event Details</label>
                    <input {...bindLink} type="url" name="link" id="link" placeholder="Event Link" required></input>
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

            </form>

            {/* { file && <ProgressBar file={file} setFileUrl={setFileUrl} /> } */}

        </div>
    );
}