function clearScreen() {
    document.getElementById("result").value = "";
    document.getElementById("result").disabled=false;
}
function display(value) {
    document.getElementById("result").value += value;
    document.getElementById("result").disabled=false;
}
function calculate() {
    var p = document.getElementById("result").value;
    var q = eval(p);
    document.getElementById("result").value = q;
    document.getElementById("result").disabled=true;
}