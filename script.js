let phrase = document.createElement('div');
const importantBox = document.getElementById('importantBox');

let passOne = "";
let passTwo = "";

const firstPass = document.getElementById('firstPass');
const secPass = document.getElementById('secPass');

function setPhrase(phrase)
{
    
    phrase.textContent = ""
    phrase.style.flex = "0 0 0.3cm";    
    phrase.style.color = 'red';
    phrase.style.fontSize = "10px";
    phrase.style.fontFamily = "Arial, Helvetica, sans-serif";
    phrase.style.fontWeight = "bold";
    phrase.style.margin = "0";
    return phrase;
}

phrase = setPhrase(phrase);
importantBox.appendChild(phrase);

firstPass.addEventListener('blur',()=>{
    passOne = firstPass.value;
    if((passOne !== passTwo)||(passOne !== ""))
    {
    firstPass.style.outline = "solid";
    firstPass.style.outlineWidth = "thin";
    firstPass.style.outlineColor = 'red';
    phrase.textContent = "The passwords don't match."
    
    }
})

secPass.addEventListener('focus',()=>{
    
    if(passOne.length !== 0)
    {
      secPass.style.outline = "solid";
      secPass.style.outlineWidth = "thin";
      secPass.style.outlineColor = 'red';
    }
    secPass.addEventListener('input',()=>{
        passTwo = secPass.value;
        phrase.textContent = "The passwords don't match."
        if(passOne === passTwo)
        {
            phrase.textContent = "";
            secPass.style.outline = "none";
            firstPass.style.outline = "none";
        }
    })
})

