// create a request instance
var req = new XMLHttpRequest();
// initiate a connection or create a connection
req.open('GET','https://restcountries.eu/rest/v2/all',true);
//sending the request
req.send();
//load the function
//this function will be triggered when data has been received successfully.
req.onload = function(){
var data = JSON.parse(this.response);
console.log(data);

for(var i in data){
    console.log(data[i].name);   
}

}


