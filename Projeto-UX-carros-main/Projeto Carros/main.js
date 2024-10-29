let prevButton = document.getElementById('prev');
let nextButton = document.getElementById('next');
let container = document.querySelector('section');
let items = container.querySelectorAll('.list .item');
let indicator = document.querySelector('.indicators');
let dots = indicator.querySelectorAll('ul li');
let numberDisplay = document.querySelector('.indicators .number'); // Seleciona o elemento para exibir o número

let active = 0;
let firstPosition = 0; 
let lastPosition = items.length - 1;

// Função para atualizar os itens, indicadores e número
function updateActiveItem() {
    items.forEach((item, index) => {
        item.classList.toggle('active', index === active);
        dots[index].classList.toggle('active', index === active);
    });
    
    // Atualiza o número exibido
    numberDisplay.textContent = String(active + 1).padStart(2, '0'); // Exibe o número com dois dígitos
}

nextButton.onclick = () => {
    console.log('next click');
    active = (active + 1 > lastPosition) ? firstPosition : active + 1;
    updateActiveItem();
}

prevButton.onclick = () => {
    active = (active - 1 < firstPosition) ? lastPosition : active - 1;
    updateActiveItem();
}

// Inicializa o primeiro item como ativo
updateActiveItem();
