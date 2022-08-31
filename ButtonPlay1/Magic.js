alert('Welcome :)')

let clicks = 0;
function bulbON(){

    if(!(clicks%2)){
    document.getElementById('Img').src='https://thumbs.dreamstime.com/b/vector-light-bulb-white-file-eps-format-34983265.jpg';   
    }
    else{
    document.getElementById('Img').src='https://previews.123rf.com/images/ericmilos/ericmilos0912/ericmilos091200136/6109526-3d-render-of-light-bulb-on-white.jpg';
    }

    clicks++;
    console.log(clicks);
}

function printMe(){
    print();
}

function hoverPrint(){
    document.getElementById('print').innerHTML = 'This button will literally print the page';
}
