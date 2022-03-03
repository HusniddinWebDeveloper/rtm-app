import { useEffect, useState } from 'react';

const initialstate = {
	data: [],
	loaded: true,
}

export const useFetch = (url) => {
	const [state, setState] = useState(initialstate)
		useEffect(() => {
			setState({data: "", loaded: true});
        	fetch(url)
	        	.then(res => res.json())
	        	.then(data => {
	        		setState({data: data, loaded: false});
	        	})
	        	.catch(() => console.log("xatolik bor"))
	        },[]);

    return state;
};
