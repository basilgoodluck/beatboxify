let hometext = document.querySelector('.homeBox h1');
let para = document.getElementById("para")




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

// function animeWriting(){
//     hometext.textContent = text.substring(0, idx)
//     idx++
//     if (idx > text.length){
//         idx = 0
        
//     }setTimeout(animeWriting, 300)
// }

// animeWriting()

let paraARR = ['We are the best', 'You should try us out', 'Don\'t miss out on this one', 'The only one file box']
let paraTXT;


function animationWRT (){
    paraTXT = paraARR[idx]
    para.textContent = paraTXT.substring(0, idx)
    idx++
    if(idx > paraARR[idx].length){
        idx = 0
    }setTimeout(animationWRT, 300)


}
animationWRT()