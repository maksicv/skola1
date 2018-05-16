const url =  "http://localhost:8080/api/";
const headers = {
  'Accept': 'application/json, text/plain, */*',
  'Content-Type': 'application/json'
}


const API = 	{
    getAnkete: ( page,rowsperpage  )=> {
	const call =   url + "anketa?page=" + page + "&rowsPerPage=" + rowsperpage;
	return fetch(call)
	    .then( (response)=>  response.json())
    },
    deleteAnketa: (id) => {
	return fetch(url+ "deleteanketa/" + id );
    },
    
    postPitanje: (pitanje)=>{
	return fetch(url+"pitanje", { method: "POST",
				      headers: headers,
				      body: JSON.stringify(pitanje)});
    },
    getPitanja: (page,rowsperpage,search)=>{
	const call = url + "pitanja?page=" + page
	      + "&rowsPerPage=" + rowsperpage
	      + "&search=" + search
	return fetch(call).
	    then( (response)=> response.json())  
    },
    postAnketa: (anketa) => {
	return fetch (url + "anketa" , {method: "POST",
				      headers: headers,
				      body: JSON.stringify(anketa)})
	    .then( (response)=> response.json())
    }
    
}

export default API
