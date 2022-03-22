document.getElementById(SvorioIsvedimas).addEventListener("submit-btn")
    e.preventDefault();
let submitBtn = document.getElementById("submit-btn");
    /*kai mygtuka Btn  paspaudziame pelyte, matome narsykleje 
    rezultata keitimo,ty funkcija function*/
button.addEventListener('click'), function(){
    const kg = parseInt(document.getElementById)('kilograms').value;
};
    const type = document.getElementById('type').value;
/* ciklas naudojamas patikrinti ar ne tuscias ivesties langelis*/
if (kg === 'isNaN'(kg)) {
    document.getElementById('kg').focus();
    document.getElementById('error').innerHtml = `Įveskite tinkamą vertę kilogramais`; 
    document.getElementById('output').innerHtml =``
}
else {
    document.getElementById('error').innerHTM= ``;
}
    switch (type) {
    case 'Pounds':
        /*iskvieciu funkcija, kad paverstų svorį į svarus, nurodydamas tokius parametrus kaip Value*/
        convert_pounds(kg);
        break;
    case 'Kilograms':
        convert_kilograms(kg)
        break;
    case 'Ounces':
        convert_ounces(kg);
        break;
    case 'Pounds':
        convert_pounds(kg)
        break;
    default:
        allert('Error')
    }
/*kitos funkcijos kodas su parametrais konvertavimo formulei idiegti, 
ir kintamasis Let su svoriu santykiu*/

function convert_pounds(kg) {
    let rate = 2.2046, pounds;
    pounds = kg * rate;
    /*kad gautume html faile rezultaa, paduodame jam koda*/
    document.getElementById('output').innerHTML = `${kilograms}kilograms=${kilograms.toFixed(3)}kilograms.`;
}
    function convert_ounces(kg) {
        let rate = 0.035274, ounces;
        ounces = kg * rate;
        document.getElementById('output').innerHTML = `${ounces}ounces=${ounces.toFixed(3)}ounces.`;
    }
    
    function convert_kilograms(kg) {
        let rate = 0.0022046, kilograms;
        pound = kg / rate;
        /*kad gautume html faile rezultata, paduodame jam koda*/
        document.getElementById('output').innerHTML = `${pounds}pounds=${pounds.toFixed(3)}pounds.`;
}
e.preventDefault();
    
   
    
