let allExpads = document.querySelectorAll('.expands')

allExpads.forEach(allEx => {
    allEx.addEventListener("click", eClick => {
        removeClassfromEvpands();
        console.log(eClick)
        eClick.target.classList.add("openExpanding")
    })
})

let removeClassfromEvpands = e => {
    allExpads.forEach(removeClass => {
        removeClass.classList
            .remove("openExpanding")
    })
}