var name = document.getElementById("name").value;
alert("Welcome" + name + ",")

function printTable(){
    var num;
    num=Number(document.getElementById('txtNumber').value);
    for(var i=1; i<=10; i++){
        var pTag= document.getElementById('pPrint');
        pTag.innerHTML += (num*i) + "<br/>" 
    }
}