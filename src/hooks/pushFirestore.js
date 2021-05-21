import { projectFirestore } from '../firebase/config';
import { useState } from 'react';

const PushFirestore = (collectionName, data) => {
    const [docRef, setDocRef] = useState(null);
    const [error, setError] = useState(null);

    const collectionRef = projectFirestore.collection(collectionName);

    collectionRef.add(data)
        .then((docRef) => {
            setDocRef(docRef);
        }).catch((error) => {
            setError(error);
        });

    return {docRef, error}
}

export default PushFirestore;