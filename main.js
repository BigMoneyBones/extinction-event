// To Cross out a list item on 'click'
let crossOff = document.querySelectorAll('#list1 li'); // Sets a variable that selects the list items in the ordered list in the html document.

for (let i = 0; i < crossOff.length; i++) {

    let item = crossOff[i]; // Sets a variable - 'item' to represent each index as we pass through the list array. (array created by '.querySelectAll()' )

    item.addEventListener('click', function() {

        if (item.style.textDecoration === 'line-through'){ // If the word is already lined-through, on 'click' it will remove the line.

            item.style.textDecoration = 'none';

        } else { // If there is no line-through, on 'click' it will line out the word. 

            item.style.textDecoration = 'line-through';

        };

    })

}

// To Fade out an item on 'click'
let fadeOut = document.querySelectorAll('#list2 li'); // Sets a variable that selects the list items in the ordered list in the html document.

for (let i = 0; i < fadeOut.length; i++) {

    let list = fadeOut[i]; // Sets a variable - 'list' to represent each index as we pass through the list array. (array created by '.querySelectAll()' )
    
    list.addEventListener("click", function () {

        if (list.style.opacity === '0'){ // If the opacity is '0', on 'click' it will fade-in. (transition affect is set in the .css file.)
            
            list.style.opacity = '1';

        } else if (list.style.opacity === '1'){ // If the opacity is '1', on 'click' it will fade-out. (transition affect is set in the .css file.)

            list.style.opacity = '0';

        } else { // For any other case, the index item will fade-out. 

            list.style.opacity = '0';

        }

    })
        
};

// Image manipulator
let row = document.querySelector('#row'); // Sets a variable for the row of dinosaur images in the html file. 

row.addEventListener('click', function(event){

    event.target.style.width = '0px' // On 'click', the image will slowly shrink to nothing. ***NOTE*** manipulation of width will automatically scale the image. 
                                     // Therefore, the image will shrink to nothing when scaling the width to 0px.
    
})

// Meteor Button
let meteorButton = document.querySelector('#destroy-all'); // Creates a variable representing the meteor button in the html file.

meteorButton.addEventListener('click', function(){

    for (img of row.children){

        img.style.width = '0px'

    }
    
    for (let i = 0; i < fadeOut.length; i++){ // On 'click' sets all items in the fadeOut array to opacity '0'.

        let item = fadeOut[i];

        item.style.opacity = '0'

    }

    for (let i = 0; i < crossOff.length; i++){ // On 'click' gives all items in the crossOff array the line-through property.

        let item = crossOff[i];

        item.style.textDecoration = 'line-through'

    }

})

