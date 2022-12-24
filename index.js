
let names;

function getNames(){

names = document.getElementById('input-names').value; 
names = names.replaceAll(',', '');
names = names.replaceAll('and', '');
names = names.split(' ')
    
    
    let nameList = document.getElementById('selected-names');
    let nameInput = document.getElementById('name-input');
    let namesForSanta = document.getElementById('names-for-santa')


    for(let i=0; i < names.length; i++){
        let newListItem = document.createElement('button');
        newListItem.textContent = names[i]
        namesForSanta.appendChild(newListItem);
    }
   
}

//execution of submit name function
let buttonEvent = document.getElementById('button')
buttonEvent.addEventListener('click', getNames)



let chosenName = [];
let namesForSanta = document.getElementById('names-for-santa')

function getSanta(e){
    //let randomIndex = Math.floor(Math.random() * names.length)
    let name = e.target.textContent
    
    let currentIndex = names.length
    let randomIndex; 
    
    while(currentIndex !== 0){
        


    }


    // randomName = names[randomIndex]
    // let i = 0
    // while(i < 1){
    // if(name !== randomName && chosenName.indexOf(randomName) === -1)
    // {
    // chosenName.push(randomName)
    //     } else {
    //         continue
    //     }
    //     i++
    // }


    document.getElementById('test').innerHTML = chosenName
}


namesForSanta.addEventListener('click', getSanta)


