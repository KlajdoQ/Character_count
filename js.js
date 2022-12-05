const textareaEl=document.getElementById("textarea")
const totalCounterEl=document.getElementById("total_counter")
const remainingCountEl=document.getElementById("remaining_counter")


textareaEl.addEventListener("keyup", ()=>{
    updateCounter()
})

updateCounter();

function updateCounter(){
    totalCounterEl.innerText = textareaEl.value.length;
    remainingCountEl.innerText= textareaEl.getAttribute("maxLength") - textareaEl.value.length;
}