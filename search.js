const input_div = document.getElementsByClassName("input_div")[0];
const search_btn = document.getElementsByClassName("search_btn")[0];
const reset_btn = document.getElementsByClassName("reset_btn")[0];
const input = document.getElementsByClassName("input_text")[0];

search_btn.onclick = function(){
    input_div.style.display = "inline";
}

reset_btn.onclick = function(){
    input.value = "";
    input_div.style.display = "none"
}