let cssChangeView = `
    div#three-dimensional-site-view
    {
        transform: translateX(-50px) translateY(-100px) translateZ(0px) perspective(1200px) rotateX(40deg) rotateY(30deg) rotateZ(-20deg);
    }
`

let cssDetach = `
    #three-dimensional-site-view header,
    #three-dimensional-site-view section
    {
        transform:  translateZ(60px);
    }

    #three-dimensional-site-view header div,
    #three-dimensional-site-view section div,
    #three-dimensional-site-view section img
    {
        transform:  translateZ(60px);
    }
`

let style = document.getElementsByTagName('style')[0]
let buttonChangeView = document.getElementById('buttonChangeView')
let buttonDetach = document.getElementById('buttonDetach')
let rotationControllerValue = document.getElementsByClassName('rotation-controller-value')
let positionControllerValue = document.getElementsByClassName('position-controller-value')
let perspective = document.getElementById("perspective");
let rotate_x = document.getElementById("rotate_x")
let rotate_y = document.getElementById("rotate_y")
let rotate_z = document.getElementById("rotate_z")
let position_x = document.getElementById("position_x")
let position_y = document.getElementById("position_y")
let position_z = document.getElementById("position_z")

function buttonsdisabled(state){
        perspective.disabled = state
        rotate_x.disabled = state
        rotate_y.disabled = state
        rotate_z.disabled = state
        position_x.disabled = state
        position_y.disabled = state
        position_z.disabled = state
}


function setDefaultRangesValue(){
    rotate_x.value = 40;
    rotate_y.value = 30;
    rotate_z.value = 20;
    perspective.value = 1200
    position_x.value = -50
    position_y.value = -100
    position_z.value = 0
    rotationControllerValue[0].innerText = rotate_x.value
    rotationControllerValue[1].innerText = rotate_y.value
    rotationControllerValue[2].innerText = rotate_z.value
    rotationControllerValue[3].innerText = perspective.value
    positionControllerValue[0].innerText = position_x.value
    positionControllerValue[1].innerText = position_y.value
    positionControllerValue[2].innerText = position_z.value
}



function changeView() {
    if (style.innerHTML === '') {
        style.appendChild(document.createTextNode(cssChangeView))
        buttonChangeView.style.backgroundColor = '#F05D79'
    }
    else {
        style.innerHTML = ''
        buttonChangeView.style.backgroundColor = '#5E5DF0'
        buttonDetach.style.backgroundColor = '#5E5DF0'
        buttonsdisabled(true)
    }
}



function detach() {
    if (style.innerHTML === cssChangeView) {
        style.appendChild(document.createTextNode(cssDetach))
        buttonDetach.style.backgroundColor = '#F05D79'
        buttonsdisabled(false)
        setDefaultRangesValue()
    }
    else {
        if (style.innerHTML.substring(172) === cssDetach) {
            style.innerHTML = ''
            style.innerHTML = cssChangeView
            buttonDetach.style.backgroundColor = '#5E5DF0'
            buttonsdisabled(true)
        }
    }
}


function changeCSSOfTheElement(property, value){
    switch(property){
        case 'rotate_X': {
            if (style.innerHTML.length > 480 ) {
                style.innerHTML = style.innerHTML.replace(/rotateX\(\d+deg\)/, `rotateX(${value}deg)`)
                rotationControllerValue[0].innerText = value
                break;
            }
        }
        case 'rotate_Y':{
            if (style.innerHTML.length > 480) {
                style.innerHTML = style.innerHTML.replace(/rotateY\(\d+deg\)/, `rotateY(${value}deg)`)
                rotationControllerValue[1].innerText = value
                break;
            }
        }
        case 'rotate_Z':{
            if (style.innerHTML.length > 480) {
                style.innerHTML = style.innerHTML.replace(/rotateZ\(-?\d+deg\)/, `rotateZ(${value}deg)`)
                rotationControllerValue[2].innerText = value
                break;
            }
        }
        case 'perspective':{
            if (style.innerHTML.length > 480 && value >= 100) {
                style.innerHTML = style.innerHTML.replace(/perspective\(-?\d+px\)/, `perspective(${value}px)`)
                rotationControllerValue[3].innerText = value
                break;
            }
        }
        case 'position_X':{
            if (style.innerHTML.length > 480) {
                style.innerHTML = style.innerHTML.replace(/translateX\(-?\d+px\)/, `translateX(${value}px)`)
                positionControllerValue[0].innerText = position_x.value
                break;
            }
        }
        case 'position_Y':{
            if (style.innerHTML.length > 480) {
                style.innerHTML = style.innerHTML.replace(/translateY\(-?\d+px\)/, `translateY(${value}px)`)
                positionControllerValue[1].innerText = position_y.value
                break;
            }
        }
        case 'position_Z':{
            if (style.innerHTML.length > 480) {
                style.innerHTML = style.innerHTML.replace(/translateZ\(-?\d+px\)/, `translateZ(${value}px)`)
                positionControllerValue[2].innerText = position_z.value
                break;
            }
        }
    }
    console.log(rotate_x.value,rotate_y.value,rotate_z.value, perspective.value,position_x.value,position_y.value,position_z.value); //For troubleshooting
}



function rotate_X() {
    changeCSSOfTheElement('rotate_X', rotate_x.value)
}

function rotate_Y() {
    changeCSSOfTheElement('rotate_Y', rotate_y.value)
}

function rotate_Z() {
    changeCSSOfTheElement('rotate_Z', rotate_z.value)

}

function changePerspective() {
    changeCSSOfTheElement('perspective', perspective.value)
}

function position_X(){
    changeCSSOfTheElement('position_X', position_x.value)
}
function position_Y(){
    changeCSSOfTheElement('position_Y', position_y.value)
}
function position_Z(){
    changeCSSOfTheElement('position_Z', position_z.value)
}






addEventListener('keydown', e => {
    if (style.innerHTML.length > 480 && e.key === 'a') {
        rotate_y.value = Number(rotate_y.value) + 1
        changeCSSOfTheElement('rotate_Y', rotate_y.value)
    }
})

addEventListener('keydown', e => {
    if (style.innerHTML.length > 480 && e.key === 'd') {
        rotate_y.value = Number(rotate_y.value) - 1
        changeCSSOfTheElement('rotate_Y', rotate_y.value)
    }
})


addEventListener('keydown', e => {
    if (style.innerHTML.length > 480 && e.key === 'w') {
        rotate_x.value = Number(rotate_x.value) + 1
        changeCSSOfTheElement('rotate_X', rotate_x.value)
    }
})

addEventListener('keydown', e => {
    if (style.innerHTML.length > 480 && e.key === 's') {
        rotate_x.value = Number(rotate_x.value) - 1
        changeCSSOfTheElement('rotate_X', rotate_x.value)
    }
})


addEventListener('keydown', e => {
    if (style.innerHTML.length > 480 && e.key === 'e') {
        rotate_z.value = Number(rotate_z.value) + 1
        changeCSSOfTheElement('rotate_Z', rotate_z.value)
    }
})

addEventListener('keydown', e => {
    if (style.innerHTML.length > 480 && e.key === 'q') {
        rotate_z.value = Number(rotate_z.value) - 1
        changeCSSOfTheElement('rotate_Z', rotate_z.value)
    }
})


addEventListener('keydown', e => {
    if (style.innerHTML.length > 480 && e.key === '+') {
        perspective.value = Number(perspective.value) + 100
        changeCSSOfTheElement('perspective', perspective.value)
    }
})

addEventListener('keydown', e => {
    if (style.innerHTML.length > 480 && e.key === '-') {
        perspective.value = Number(perspective.value) - 100
        changeCSSOfTheElement('perspective', perspective.value)
    }
})
















/*




addEventListenerForKeyboaredControlling(rotate, 'a', '+', 1, 'y')




function addEventListenerForKeyboaredControlling(type, button, action, increment){
    addEventListener('keydown', e => {
        if (style.innerHTML.length > 480 && e.key === button) {
            if (action === '+'){
                type.value = Number(type.value) + increment
            }
            else{
                type.value = Number(type.value) - increment
            }
            if(/_/g.text(`${type}`)){
            }
            changeCSSOfTheElement(type, type.value)
        }
    })
}
*/