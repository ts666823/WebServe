function compile() {
    var html = document.getElementById("html");
    var css = document.getElementById("css");
    var js = document.getElementById("js");
    var code = document.getElementById("code").contentWindow.document;
    document.body.onkeyup = function() {
        code.open();
        code.writeln(html.value + "<style>" + css.value + "</style>" + "<script>" + js.value + "</script>")
        code.close();
    }
}
compile();

$(document).ready(function() {
    $(document).onkeyup(function() {
        var code = $("#code").contents
        code.open();
        code.writeln($("#html").val + "<style>" + $("#css").val + "</style>" + "<script>" + $("#js").value + "</script>")
        code.close();
    })
})