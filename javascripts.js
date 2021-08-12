function Function() {
    var ums = 4;
    var dd = new Date();
    var string = " Ums As Of";
    var fullSentence = ums + string;
    document.getElementById("num").innerHTML = fullSentence;
    document.getElementById('date').innerHTML = dd;
}