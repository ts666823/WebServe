let html = document.getElementById("html");
let css = document.getElementById("css");
let js = document.getElementById("js");
let code = document.getElementById("code").contentWindow.document;

window.onload = function (){
    code.open();
    code.writeln("<!DOCTYPE html>"+html.value + "<style>" + css.value + "</style>" + "<script>" + js.value + "</script>")
    code.close();
}

function compile() {
    document.body.onkeyup = function() {
        code.open();
        code.writeln("<!DOCTYPE html>"+html.value + "<style>" + css.value + "</style>" + "<script>" + js.value + "</script>")
        code.close();
    }
}
compile();