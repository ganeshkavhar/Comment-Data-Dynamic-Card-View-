var main = document.getElementById("main-section");

var http = new XMLHttpRequest();
http.open("GET", "https://jsonplaceholder.typicode.com/comments" , true);
http.onreadystatechange = function(){
    http.onreadystatechange = function(){
        if(this.readyState === 4){ //work done
            var response = JSON.parse(this.responseText);
            // console.log(response);

            if(response.length > 0){
                for(var i=0; i<response.length;i++){

                 //Comment Data dynammic Div
                    var data= document.createElement("div");
                    data.id="comment-data";

                    //Append to parent
                    data.appendChild(main);


                // Name    
                var nam = document.createElement("h1");
                nam.className = "name";
                nam.innerHTML=response[i].name;
                console.log(nam);

                // Email
                var email = document.createElement("h2");
                email.className = "email";
                email.innerHTML=response[i].email;

                // Body of Comment

                var body = document.createElement("h2");
                body.className = "body";
                body.innerHTML=response[i].body;

                //Main Appending to comment data

                data.appendChild(nam);
                data.appendChild(email);
                data.appendChild(body);           
            }
            }
        }
        
    }
}
    http.send();