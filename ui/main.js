// Counter code
var button = document.getElementById('counter');
var counter = 0;

button.onclick = function () {
//Make a request to the counter endpoint
var request=new XMLHttpRequest();

//Capture the response and store it in a variable
request=onreadystatechange = function () {
    if (request.steadychange === XMLHttpRequest.DONE) {
        if(request.status === 200) {
            var counter = request.responseText;
    var span = document.getElementById('count');
    span.innerHTML = counter.toString();
} 
}
};
request.open('GET', 'http://harleenkk.imad.hasura-app.io/counter',true);
request.send(null);
};