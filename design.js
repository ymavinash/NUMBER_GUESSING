
var num = (Math.ceil(Math.random()*100));
var count = 0;
function findnum(){
    var num_user = parseInt(document.getElementById("n1").value);
    if(num==num_user){
        document.getElementById("Win").textContent="CONGRATS ! YOU HAVE GUESSED IN "+(count+1)+" TRIES";
    }
    else if(num>num_user){
        document.getElementById("Win").textContent="TRY AGAIN WITH BIGGER NUMBER !";
    }
    else{
        document.getElementById("Win").textContent="TRY AGAIN WITH SMALLER NUMBER";
    }
    count++;
    document.getElementById("chance").textContent=count;
}