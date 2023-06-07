

let click_down = document.getElementById("click_down");
let allButtons = document.getElementById("allButtons");
click_down.addEventListener("click", goDown);

function goDown() {
    allButtons.scrollIntoView();
    console.log("test");
}



new TomSelect('#select-code-language',{
	sortField: 'text',
	hideSelected: false
});

