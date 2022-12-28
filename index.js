
let names;
let chosenName = [];
let value;
let greeting = 'Merry Christmas and happy gift-giving!'

function getNames(){

    names = document.getElementById('input-names').value; 

    if(names === '' || names === greeting){
        alert('Please enter the names of your party')
        return
    }

    names = names.replaceAll(',', '');
    names = names.split(' ')
    names = names.filter(word => word !== 'and')
    names = names.filter(word => word !== '')

        

    let nameList = document.getElementById('selected-names');
    let nameInput = document.querySelectorAll(".name-input");
    let namesForSanta = document.getElementById('names-for-santa')

        
    
        // For assigning who each person gives a gift to 
    if(names.length >= 3 && names !== greeting){
        nameList.style.display = 'contents';
        nameInput.forEach(input => {
            input.style.display = 'none';
        })
        
        for(let i=0; i < names.length; i++){
            let newListItem = document.createElement('button');
            newListItem.textContent = names[i]
            namesForSanta.appendChild(newListItem);
            
        }
            let j=0
            while(j < names.length - 1){
            let randomIndex = Math.floor(Math.random() * names.length)
                if(names[j] !== names[randomIndex] && chosenName.indexOf(names[randomIndex]) === -1){
                chosenName.push(names[randomIndex])
                }  else {
                continue;
                }
                j++  
            }

            let randomIndex2 = Math.floor(Math.random() * (names.length - 1))  

            if (chosenName.indexOf(names[names.length - 1]) === -1){
                chosenName.push(names[names.length - 1])
                var a = chosenName[chosenName.length - 1]
                chosenName[chosenName.length - 1] = chosenName[randomIndex2]
                chosenName[randomIndex2] = a
            } else if(chosenName.indexOf(names[names.length - 1]) !== -1){
                let i = 0;
                do{
                    chosenName.indexOf(names[i])
                    value = i
                    i++;
                }
                while(chosenName.indexOf(names[i]) !== -1)

                if(value === (names.length - 1)){
                    chosenName.push(names[0])
                } else {
                    chosenName.push(names[value + 1])
                } 
            }      
        }

    //For edge cases with one or two involved 
    if(names.length === 1){
        alert(`Get yourself a gift :)`)
    }

    if(names.length === 2){
        alert(`You've chosen each other :)`)
        } 

}


let buttonEvent = document.getElementById('button')
buttonEvent.addEventListener('click', getNames)


//for finding who you give your gift to on click
function clickName(e){
    let nameIndex = names.indexOf(e.target.textContent)

    let newItem = document.createElement('h3');
    const namesForSanta = document.getElementById('gifts-for').querySelectorAll('h3')
    
    newItem.textContent = chosenName[nameIndex]
    document.getElementById('gifts-for').appendChild(newItem);
    
    if(namesForSanta.length > 0){
        namesForSanta[0].remove();
    }

    let giftsFor = document.getElementById('gifts-for').querySelector('h2')
    giftsFor.style.position = 'relative';
    giftsFor.style.top = '25.5px'
}

let nameButton = document.getElementById('names-for-santa')
nameButton.addEventListener('click', clickName)



function clearTextarea(){
    document.querySelector('textarea').innerHTML = ''
}
document.querySelector('textarea').addEventListener('click', clearTextarea)

