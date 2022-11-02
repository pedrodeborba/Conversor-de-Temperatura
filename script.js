let celsius = document.getElementById('celsius');
let fahrenheit = document.getElementById('fahrenheit');
let kelvin = document.getElementById('kelvin');
let rankine = document.getElementById('rankine');

celsius.oninput = () => {
    //fahrenheit
    let resultadoF = (parseFloat(celsius.value) * 9) /5 +32;
    fahrenheit.value = parseFloat(resultadoF.toFixed(2));

    //kelvin
    let resultadoK = (parseFloat(celsius.value) + 273.15);
    kelvin.value = parseFloat(resultadoK.toFixed(2));

    //rankine
    let resultadoR = ((parseFloat(celsius.value) * 9) /5) + 491.67;
    rankine.value = parseFloat(resultadoR.toFixed(2));

    //concluido
};

fahrenheit.oninput = () => {
    //celsius
    let resultadoC = ((parseFloat(fahrenheit.value) - 32) * 5) /9;
    celsius.value = parseFloat(resultadoC.toFixed(2));

    //kelvin
    let resultadoK = (((parseFloat(fahrenheit.value) -32 ) *5 ) /9) + 273.15;
    kelvin.value = parseFloat(resultadoK.toFixed(2));

    //rankine
    let resultadoR = (parseFloat(fahrenheit.value) + 459.67);
    rankine.value = parseFloat(resultadoR.toFixed(2));

    //concluido
};

kelvin.oninput = () => {
    //celsius
    let resultadoC = (parseFloat(kelvin.value) - 273.15);
    celsius.value = parseFloat(resultadoC.toFixed(2));

    //fahrenheit
    let resultadoF = (((parseFloat(kelvin.value) - 273.15) *9 ) /5) +32;
    fahrenheit.value = parseFloat(resultadoF.toFixed(2));

    //rankine
    let resultadoR = (parseFloat(kelvin.value) * 1.8);
    rankine.value = parseFloat(resultadoR.toFixed(2));
};

rankine.oninput = () => {
    //celsius
    let resultadoC = ((parseFloat(rankine.value) -491.67) *5 ) /9;
    celsius.value = parseFloat(resultadoC.toFixed(2));

    //fahrenheit
    let resultadoF = (parseFloat(rankine.value) - 459.67);
    fahrenheit.value = parseFloat(resultadoF.toFixed(2));

    //kelvin
    let resultadoK = (parseFloat(rankine.value) *5) /9;
    kelvin.value = parseFloat(resultadoK.toFixed(2));
}


