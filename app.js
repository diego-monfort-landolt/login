//loguear is the function on the button - user and clave if is the corect data - window newopen- incorect date




function loguear() {
    let user =document.getElementById("user").value;
    let pass =document.getElementById("clave").value;
    if(user=== "Diego" && pass=="1234") {
        window.location="open.html";
    }
    else {
        alert("Incorrect Dates");
    }
}


var nueva = null;
function nuevaventana(){
    nueva = window.open("","", "resizable, width=300, heigth=300");
    nueva.document.open();
    nueva.document.writeIn("<html><head><title>Neues Dokument</title></head></html>");

    nueva.document.writeIn("<body><h1>Das ist wie ein H1</h1></body>");

    nueva.document.writeIn("<img src='img3.jpg' height='15' width='15'>");

    nueva.document.writeIn("<h2>Das ist ein untertitel!</h2>");
    nueva.document.writeIn("</body></html>");


    nueva.document.close();
}