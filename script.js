function passOver1() {
    document.querySelector('.image1').classList.add('image_2')
    document.querySelector('.image2').classList.remove('image_2')
    document.querySelector('.image3').classList.remove('image_2')
    document.querySelector('.image4').classList.remove('image_2')
}

function passOver2() {
    document.querySelector('.image2').classList.add('image_2')
    document.querySelector('.image1').classList.remove('image_2')
    document.querySelector('.image3').classList.remove('image_2')
    document.querySelector('.image4').classList.remove('image_2')
}



function passOver3() {
    document.querySelector('.image3').classList.add('image_2')
    document.querySelector('.image2').classList.remove('image_2')
    document.querySelector('.image1').classList.remove('image_2')
    document.querySelector('.image4').classList.remove('image_2')
}



function passOver4() {
    document.querySelector('.image4').classList.add('image_2')
    document.querySelector('.image2').classList.remove('image_2')
    document.querySelector('.image3').classList.remove('image_2')
    document.querySelector('.image1').classList.remove('image_2')
}



function passOut1() {
    document.querySelector('.image1').classList.remove('image_2')
    document.querySelector('.image2').classList.remove('image_2')
    document.querySelector('.image3').classList.remove('image_2')
    document.querySelector('.image4').classList.remove('image_2')
}

function passOver5() {
    document.querySelector('.presentationImage').classList.add('presentationImage_2')
}

function passOut2() {
    document.querySelector('.presentationImage').classList.remove('presentationImage_2')
}