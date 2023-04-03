


const names = datafromLS()


let myForm = document.querySelector("#myForm")
let myCheckbox = document.querySelector(".myCheckbox")
console.log(myCheckbox)
myForm.addEventListener("submit",function(event){
    event.preventDefault()

    names.push({
        id: uuidv4(),
        firstname: event.target.elements.myInput.value,
        priority: myCheckbox.checked,
        
    })
    
    event.target.elements.myInput.value = ""
    myCheckbox.checked = false
    dataToLS(names)

    
})

let button = document.querySelector(".button")
    button.addEventListener("click",function(event){
        document.querySelector(".myDiv").innerHTML = ""
        let namesFromLS = localStorage.getItem("names")
        let namesFromLSJSON = JSON.parse(namesFromLS)
        
        namesFromLSJSON.forEach(function(name1){
            const oneNameHTML = generateHTMLstructure(name1)
            
            document.querySelector(".myDiv").appendChild(oneNameHTML)
        })
        
        
        
    })