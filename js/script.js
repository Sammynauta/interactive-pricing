const priceBar = document.getElementById('barra');
const value = document.querySelector('.value');
const views = document.querySelector('.views');

value.textContent = priceBar.value;
views.textContent = priceBar.value;

priceBar.oninput = function(){
    value.textContent = this.value
    views.textContent = this.value 
    
}