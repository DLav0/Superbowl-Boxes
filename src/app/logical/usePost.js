import { useState, useEffect } from 'react';

const usePost = () => {
    // const [data, setData] = useState(null);
    // const [isPending, setIsPending] = useState(true);
    // const [error, setError] = useState(null);

    useEffect(() => {


       console.log('Asynch')
        
            // fetch(url)
            //     .then(res => {
            //         if (!res.ok) {
            //             throw Error('Error fetching users data');
            //         }
            //         return res.json();
            //     })
            //     .then(data => {
            //         setData(data);
            //         setIsPending(false);
            //         setError(null);
            //     })
            //     .catch(err => {
            //         setIsPending(false);
            //         setError(err.message);
            //     });
        
    }, [property]);

}

export default usePost;