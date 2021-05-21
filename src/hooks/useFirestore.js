import {useState, useEffect} from 'react';
import { projectFirestore } from '../firebase/config';

const useFirestore = (collection) => {
    const [docs, setDocs] = useState([]);

    useEffect(() => {
        const unsub = projectFirestore.collection(collection)
            .onSnapshot((snap) => {
                let documents = [];
                snap.forEach(doc => {
                    documents.push({...doc.data(), id: doc.id})
                });
                setDocs(documents);
            });

        return () => unsub();
    
    }, [collection])

    return { docs }
}

// const PushFirestore = (email) => {
//     const [docRef, setDocRef] = useState(null);
//     const [error, setError] = useState(null);

//     const collectionRef = projectFirestore.collection('emails');

//     collectionRef.add({email})
//         .then((docRef) => {
//             setDocRef(docRef);
//         }).catch((error) => {
//             setError(error);
//         });

//     return {docRef, error}
// }

// const PushFirestore = (collectionName, data) => {
//     const [docRef, setDocRef] = useState(null);
//     const [error, setError] = useState(null);

//     const collectionRef = projectFirestore.collection(collectionName);

//     collectionRef.add(data)
//         .then((docRef) => {
//             setDocRef(docRef);
//         }).catch((error) => {
//             setError(error);
//         });

//     return {docRef, error}
// }

export default useFirestore;