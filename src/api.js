const url = "http://localhost:8080/api/"
const API = 	{
	 getAnkete: ( )=> {
	 	return fetch( url + "anketa")
	    .then( (response)=>  response.json())
	 }
	
}

export default API