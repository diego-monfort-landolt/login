//loguear is the function on the button - user and clave if is the corect data - window newopen- incorect date

function loguear() {
    let user =document.getElementById("user").value;
    let pass =document.getElementById("clave").value;
    if(user=== "Diego" && pass=="1234") {
        window.location="open.html";
    }
    else {
        alert("INcorrect Dates")
    }
}