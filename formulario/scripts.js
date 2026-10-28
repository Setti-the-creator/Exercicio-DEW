
const dialog = document.getElementById("meuDialog");

document.getElementById("abrir").addEventListener("click", () => {
  dialog.showModal();
});

const nota1 = document.getElementById("Nota-1")
const nota2 = document.getElementById("Nota-2")


function MostrarResultado() {
        const nome = document.getElementById("nome").value
        const n1 = nota1.valueAsNumber;
        const n2 = nota2.valueAsNumber;

        
        if (isNaN(n1) || isNaN(n2)) {
            resultado.innerText = "Por favor, preencha ambas as notas.";
            return;
        }
        
        const ValorCalculado = (n1 + n2) / 2;
        
        
        if (ValorCalculado >= 6)
            resultado.textContent = nome +  ", voce foi aprovado!! Sua media foi de: " + ValorCalculado.toFixed(1);
        else
            resultado.textContent = nome + " voce foi reprovado... sua media foi de: " + ValorCalculado.toFixed(1);
        
}

document.querySelectorAll('input[type="number"]').forEach(input => {
    input.addEventListener('wheel', function(e) {
        e.preventDefault(); // Impede o comportamento padrão de rolar o número
    }, { passive: false }); // O "passive: false" permite o preventDefault funcionar
});