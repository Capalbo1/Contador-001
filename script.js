let contador = 0;

const valor = document.querySelector('#contador');
const botoes = document.querySelectorAll('.botao')

botoes.forEach(function (botao) {
    botao.addEventListener('click', function (e) {
        const styles = (e.currentTarget.classList)
        if (styles.contains('diminuir')) {
            contador--;
        } else if (styles.contains('aumentar')) {
            contador++;
        } else if (styles.contains('multiplicar')) {
            contador *= 2; // Corrigido para multiplicar por 2
        } else if (styles.contains('reset')) {
            contador = 0;
        }

        if (contador > 0) {
            valor.style.color = "green";
        } else if (contador < 0) {
            valor.style.color = "red";
        } else {
            valor.style.color = "black";
        }
        
        valor.textContent = contador;
    });
});

