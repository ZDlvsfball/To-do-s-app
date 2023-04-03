const datafromLS = function(){
    const myNames = localStorage.getItem("names")

    if(myNames !== null){
        return JSON.parse(myNames)

    } else {
       return []
    }
}



const dataToLS = function(oneName){
    localStorage.setItem("names",JSON.stringify(oneName))
}






const generateHTMLstructure = function(oneName){
    const newDiv = document.createElement("div")
    const newLink = document.createElement("a")
   
    
    const button = document.createElement("button")

    button.textContent = "Delete TASK"
    newDiv.appendChild(button)
    
    button.addEventListener("click",function(event){
        deleteN(names,oneName.id)
        dataToLS(names)
        toListAgain()
    })

    newLink.textContent = oneName.firstname.toLowerCase()
    if(oneName.priority === true){
        newLink.classList.add("priority")
    } else {
        newLink.classList.add("no-priority")
    }
    newLink.setAttribute("href",`/html/edittask.html#${oneName.id}`)
    newDiv.appendChild(newLink)
    
    return newDiv
}




const deleteN = function(ourNames,id){
    const index = ourNames.findIndex(function(nameToCheck){
        return nameToCheck.id === id
    })
    if(index > -1){
        ourNames.splice(index,1)
    }
}

const toListAgain = function(){
    document.querySelector(".myDiv").innerHTML = ""
    let newData = datafromLS()
    newData.forEach(function(onlyOneName){
        const newContent = generateHTMLstructure(onlyOneName)
        document.querySelector(".myDiv").appendChild(newContent)
    })
}