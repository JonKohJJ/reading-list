import { useState, useEffect, useRef } from 'react'
import { db } from '../firebase/config'

// firebase imports
import { collection, onSnapshot, query, where } from 'firebase/firestore'

export const useCollection = (c, _q) => {

    const [documents, setDocuments] = useState()

    // set up query
    const q = useRef(_q).current

    useEffect(() => {

        let ref = collection(db, c)

        if (q) {
            ref = query(ref, where(...q))
        }

        // setting up real time listener - onSnapshot

        // we also need to *unsubscribe* to the listener of real time data once the component unmounts
        // that is done using the clean up function within useEffect

        const unsubscribe = onSnapshot(ref, (snapshot) => {
            let results = []
            snapshot.docs.forEach((doc) => {
                results.push({id: doc.id, ...doc.data()}) /* push an object into the results array */
            })
            setDocuments(results)
        })

        return () => {
            unsubscribe()
        }

    }, [c]) /* we have to pass in the collection dependency so that the useEffect function will re-run if the collection changes */

    return { documents } /* so we can reuse this state in another component */
}