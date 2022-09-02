
condoFunc();

document.getElementById("condo").onmouseover = function() {condoFunc()};
document.getElementById("town").onmouseover = function() {townFunc()};
document.getElementById("semiDetached").onmouseover = function() {semiFunc()};
document.getElementById("detached").onmouseover = function() {detachedFunc()};


function condoFunc(){
    document.getElementById('houseType').innerHTML = "Condomanium";
    document.getElementById('bigImage').src = "./Images/condo.jpg";
    document.getElementById('description').innerText = "A condominium, often shortened to simply “condo,” is a privately owned individual unit within a community of other units. In general, the owner usually owns the interior of their condo and the structural components of exterior walls.";
}

function townFunc(){
    document.getElementById('houseType').innerHTML = "Town Houses";
    document.getElementById('bigImage').src = "./Images/townHouse.jpg";
    document.getElementById('description').innerText = "Townhouses are a style of multi-floor home that share one to two walls with adjacent properties but have their own entrances. In the suburbs, townhouses are often uniform homes built in a distinct community that might have its own homeowners association";
}

function semiFunc(){
    document.getElementById('houseType').innerHTML = "Semi-detached House";
    document.getElementById('bigImage').src = "./Images/semiDetached.jpg";
    document.getElementById('description').innerText = "A house that is semi-detached is one that is joined to another similar house on only one side: They live in a semi-detached houseSemi-detached houses can offer a good compromise between affordability and autonomy. You will have a party wall with just one neighbour, but depending on when the house was built and to what design, you may have a substantial amount of living space for your money and even a decent area of garden.";
}

function detachedFunc(){
    document.getElementById('houseType').innerHTML = "Detached House";
    document.getElementById('bigImage').src = "./Images/detached.jpg";
    document.getElementById('description').innerText = "A detached house is not connected to any other building. A detached home is one of the most popular types of houses in Canada since it stands on its own and doesn't share any walls with other homes. In addition, most detached homes have a front yard and backyard, so they're great for families looking for additional space. Prices are rising so fast that people can't afford detached houses.";
}