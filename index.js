
let names;
let chosenName = [];
let value;

function getNames(){

names = document.getElementById('input-names').value; 
names = names.replaceAll(',', '');
names = names.split(' ')
names = names.filter(word => word !== 'and')
names = names.filter(word => word !== '')
    

    let nameList = document.getElementById('selected-names');
    let nameInput2 = document.querySelectorAll(".name-input");
    let namesForSanta = document.getElementById('names-for-santa')

    nameList.style.display = 'contents';
    nameInput2.forEach(input => {
        input.style.display = 'none';
    })
    


    for(let i=0; i < names.length; i++){
        let newListItem = document.createElement('button');
        newListItem.textContent = names[i]
        namesForSanta.appendChild(newListItem);
        
    }

   
    // For assigning who each person gives a gift to 
    if(names.length <= 1){
        alert(`Get yourself a gift :)`)
    }

    if(names.length === 2){
        alert(`You've chosen each other :)`)
     }


  if(names.length >= 3){
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
    



    document.getElementById('test').innerHTML = chosenName 

}



//execution of submit name function
let buttonEvent = document.getElementById('button')
buttonEvent.addEventListener('click', getNames)


//for finding who you give your gift to on click
function clickName(e){
    let nameIndex = names.indexOf(e.target.textContent)
    document.getElementById('your-name').innerHTML = chosenName[nameIndex]
}

let nameButton = document.getElementById('names-for-santa')

nameButton.addEventListener('click', clickName)





//FOR SAFE KEEPING


// if(names.length === 3){
//     let j=0
//       while(j < names.length - 1){
//        let randomIndex = Math.floor(Math.random() * (names.length - 1))  
//          if(names[j] !== names[randomIndex] && chosenName.indexOf(names[randomIndex]) === -1){
//         chosenName.push(names[randomIndex])
//          } else {
//            continue;
//          }
//         j++ 
//    }


//    let randomIndex = Math.floor(Math.random() * (names.length - 1))  
//    chosenName.push(names[names.length - 1])
   
//    var b = chosenName[chosenName.length - 1]
//    chosenName[chosenName.length - 1] = chosenName[randomIndex]
//     chosenName[randomIndex] = b
//  }






//  if(names.length > 3){
//            let j=0
//           while(j < names.length - 1){
//            let randomIndex = Math.floor(Math.random() * names.length)
//              if(names[j] !== names[randomIndex] && chosenName.indexOf(names[randomIndex]) === -1){
//             chosenName.push(names[randomIndex])
//              }  else {
//                continue;
//              }
//             j++ 

            
//        }
//        let randomIndex2 = Math.floor(Math.random() * (names.length - 1))  

//        if (chosenName.indexOf(names[names.length - 1]) === -1){
//            chosenName.push(names[names.length - 1])
//            var a = chosenName[chosenName.length - 1]
//            chosenName[chosenName.length - 1] = chosenName[randomIndex2]
//            chosenName[randomIndex2] = a
//        } else if(chosenName.indexOf(names[names.length - 1]) !== -1){
//            let i = 0;
//            do{
//                chosenName.indexOf(names[i])
//                value = i
//                i++;
//            }
//            while(chosenName.indexOf(names[i]) !== -1)

//            if(value === (names.length - 1)){
//                chosenName.push(names[0])
//            } else {
//                chosenName.push(names[value + 1])
//            } 


//        }
            
//    }

