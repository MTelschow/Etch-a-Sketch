const drawingField = document.getElementById('drawingField');
let sizeInput = document.getElementById('sizeInput');
let sizeValue = document.getElementById('sizeValue');
let size = sizeInput.value;
sizeValue.innerHTML = `${sizeInput.value} x ${sizeInput.value}`;
createDrawingField(size);

let colorInput = document.getElementById('colorInput');
let color = colorInput.value;

//Change size after using slider

sizeInput.oninput = function(){
    sizeValue.innerHTML = `${sizeInput.value} x ${sizeInput.value}`;
        size = sizeInput.value;
    sizeInput.addEventListener('mouseup' , function(){
        createDrawingField(size);
    })
}

//Add Button (highlighting)

let colorMode = document.getElementById('colorMode');
let randomMode = document.getElementById('randomMode');
let erase = document.getElementById('erase');
let clear = document.getElementById('clear');

clear.addEventListener('click', function(){
    createDrawingField(size);
})

erase.addEventListener('click',function(){
    toggleButton(erase);
    color = '#ffffff';
})
randomMode.addEventListener('click', function(){
    toggleButton(randomMode);
})
colorMode.addEventListener('click', function(){
    toggleButton(colorMode);
})

function toggleButton (button){
    colorMode.classList.remove('active');
    randomMode.classList.remove('active');
    erase.classList.remove('active');
    button.classList.add('active');
}


//Color Input

colorInput.oninput = function(){
    if (colorMode.classList.contains('active')){
        color = this.value;
    }
}




//Creat Drawing Field or change the size

function createDrawingField (size) {
    removePixels();
    for(let i = 0; i < size*size; i++){
        const pixel = document.createElement('div');
        pixel.setAttribute('id', `pixel${i+1}`);
        pixel.classList.add('pixel');
        changePixelSize(pixel, size);
        drawingField.appendChild(pixel);
    }
}

function removePixels(){
    const pixels = document.querySelectorAll('.pixel');
    for(instace of pixels){
        drawingField.removeChild(instace);
    }
}

function changePixelSize(pixel, size){
    let width = `${(1/size)*100}%`;
    pixel.style.width = width;
    pixel.style.height = width;
}
