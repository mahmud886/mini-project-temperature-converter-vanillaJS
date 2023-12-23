const celsiusElement = document.querySelector('#celsius');
const fahrenheitElement = document.querySelector('#fahrenheit');
const kelvinElement = document.querySelector('#kelvin');

function inplimentTemperature(event) {
    const currentElementValue = +event.target.value;

    switch (event.target.name) {
        case 'celsius':
            kelvinElement.value = (currentElementValue + 273.32).toFixed(2);
            fahrenheitElement.value = (currentElementValue * 1.8 + 32).toFixed(2);
            break;
        case 'fahrenheit':
            celsiusElement.value = ((currentElementValue - 32) / 1.8).toFixed(2);
            kelvinElement.value = ((currentElementValue - 32) / 1.8 + 273.32).toFixed(2);
            break;
        case 'kelvin':
            celsiusElement.value = (currentElementValue - 273.32).toFixed(2);
            fahrenheitElement.value = ((currentElementValue - 273.32) * 1.8 + 32).toFixed(2);
            break;
        default:
            break;
    }
}
