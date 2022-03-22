let kgbtn = document.getElementById('kg');
let pound = document.getElementById('pound');
let ounces = document.getElementById('ounce')

    kgbtn.addEventListener('click', function () {
    let input = document.getElementById('input',value)
    document.getElementById('output').value = input/2.205+"kg";
    })
    poundbtn.addEventListener('click', function () {
    let input = document.getElementById('input',value)
        document.getElementById('output').value = input * 2.205 + "pound";
    })
    ouncesbtn.addEventListener('click', function () {
    let input = document.getElementById('input', value)
    document.getElementById('output').value = input * 0.035274 + "ounce";
    })
        
        
        
/*kitos funkcijos kodas su parametrais konvertavimo formulei idiegti, 
ir kintamasis Let su svoriu santykiu*/
function convert_pound(kg) {
let rate = 2.2046, pounds;
    pounds = kg * rate;
    /*kad gautume html faile rezultaa, paduodame jam koda*/
    document.getElementById('output').innerHTML = `${kg}kilograms=${kilograms.toFixed(3)}kilograms.`;
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
    document.getElementById('output').innerHTML = `${Pounds}Pounds=${Pounds.toFixed(3)}pounds.`;
}
document.addEventListener("click", submit - btn);
    e.preventDefault();
    let submit= document.getElementById("submit-btn");
/*kai mygtuka Btn  paspaudžiame pelyte, matome naršyklėje 
rezultata keitimo,ty funkcija function*/
button.addEventListener('click'), function ()
{
    const kg = parseInt(document.getElementById)('Kilograms').value;
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
        allert('Error')}