let hometext = document.querySelector('.homeBox h1');
const chars = hometext.textContent.split("")


const charSpan = chars.map(e=>{
    
    span = document.createElement("span")
    
    span.textContent = e
    return span
    
})

hometext.innerHTML = ""

charSpan.forEach(span => {
    hometext.appendChild(span)  
});

const text = hometext.textContent
let idx = 0

function animeWriting(){
    hometext.textContent = text.substring(0, idx)
    idx++
    if (idx > text.length){
        idx = 0
        
    }setTimeout(animeWriting, 300)
}

animeWriting()

