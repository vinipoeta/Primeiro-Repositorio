let state = 0;
const button = document.querySelector('button');
button.addEventListener('click', calculate);
function calculate() {
   if (state == 0) {
       button.textContent = 'Fui Clicado!';
   }
   else if (state == 1) {
       button.textContent = 'Já chega';
   }
   else {
       button.textContent = 'Perdeu a graça. já clicou '+ (state + 1) +' vezes';
   }
   state++;
}
