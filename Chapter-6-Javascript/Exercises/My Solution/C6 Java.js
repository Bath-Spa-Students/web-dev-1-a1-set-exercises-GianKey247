window.onload = () => 
    {
        const inputs = document.querySelectorAll("input");

        inputs.forEach(input => {
                    input.addEventListener('change', calculate)
                })
    }
//Multiplies the "Petrol_Price" with "Litres"
function calculate (){
        const Petrol_Price = document.querySelector('#Petrol_Price').value;
        const Litres = document.querySelector('#Litres').value;

        if (!Petrol_Price || !Litres)return;
        document.querySelector('#T-Amount').innerText = Petrol_Price*Litres
}