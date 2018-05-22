const API = 	{
    logouturl : "",
    fetch: function(call) {
	return fetch(call,{headers: API.headers})
	    .then( (response)=>  response.json())
    },
    url : "http://localhost:8080/api/",
    headers : {
	'Accept': 'application/json, text/plain, */*',
	'Content-Type': 'application/json'
    },
    setKeycloak: (keycloak)=> {
 	API.headers['Authorization']= 'Bearer ' + keycloak.token;
	API.logouturl = keycloak.createLogoutUrl();
    },

    getPitanjaIzAnkete(anketaid){
	const call =   API.url + "pitanjaizankete/" + anketaid ;
	return API.fetch(call);
    },
       
    getAnkete: ( page,rowsperpage  )=> {
	const call =   API.url + "anketa?page=" + page + "&rowsPerPage=" + rowsperpage;
	return fetch(call,{headers: API.headers})
	    .then( (response)=>  response.json())
    },
    
    deleteAnketa: (id) => {
	return fetch(API.url+ "deleteanketa/" + id , {headers: API.headers} );
    },

    deletePitanje: (id) => {
	return fetch(API.url + "deletepitanje/" + id , {headers: API.headers} );
    }, 
    
    postPitanje: (pitanje)=>{
	return fetch(API.url+ "pitanje", { method: "POST",
					    headers: API.headers,
					    body: JSON.stringify(pitanje)})
	    .then( (response)=> response.json());
    },
    getPitanja: (page,rowsperpage,search)=>{
	const call =  API.url  + "pitanje?page=" + page
	      + "&rowsPerPage=" + rowsperpage
	      + ( search ?  "&search=" + search : ""  )
	return fetch(call , { headers: API.headers} )
	    .then( (response)=> response.json())  
    },
    postAnketa: (anketa) => {
	return fetch (API.url + "anketa" , { method: "POST",
					     headers: API.headers,
					     body: JSON.stringify(anketa)})
	    .then( (response)=> response.json())
    }
    
}

export default API
