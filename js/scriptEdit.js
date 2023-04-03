let nameID = location.hash.substring(1)
let names = datafromLS()


let searchedName = names.find(function(oneObject){
    return oneObject.id === nameID
})

if(searchedName === undefined){
    location.assign("/html/index.html")
}

document.querySelector("#myInput2").value = searchedName.firstname

let editform = document.querySelector("#myForm2")
editform.addEventListener("submit",function(event){
    event.preventDefault()

    searchedName.firstname = event.target.elements.myInput2.value

    dataToLS(names)
})