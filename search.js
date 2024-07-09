const input_div = document.getElementById("input_div");
const search_btn = document.getElementById("search_btn");
const reset_btn = document.getElementById("reset_btn");
const input = document.getElementById("input_text");

search_btn.onclick = function(){
    input_div.style.display = "inline";
}

reset_btn.onclick = function(){
    input.value = "";
    input_div.style.display = "none"
}