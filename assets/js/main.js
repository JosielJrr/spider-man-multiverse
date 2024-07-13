function handleMouseEnter() {
    // Adiciona a classe 'card--hovered' ao elemento quando o mouse entra
    this.classList.add('card--hovered');
    // Define o ID do body como o ID do card seguido de '-hovered'
    document.body.id = `${this.id}-hovered`;
}

function handleMouseLeave() {
    // Remove a classe 'card--hovered' do elemento quando o mouse sai
    this.classList.remove('card--hovered');
    // Remove o ID do body
    document.body.id = '';
}

function addEventListenersToCards() {
    // Seleciona todos os elementos com a classe 'card'
    const cardElements = document.getElementsByClassName('card');

    // Adiciona os eventos de 'mouseenter' e 'mouseleave' a cada elemento 'card'
    for (let i = 0; i < cardElements.length; i++) {
        const card = cardElements[i];

        card.addEventListener('mouseenter', handleMouseEnter);
        card.addEventListener('mouseleave', handleMouseLeave);
    }
}

// Adiciona os listeners aos elementos 'card' após o carregamento do conteúdo da página
document.addEventListener('DOMContentLoaded', addEventListenersToCards, false);


function selectCarouselIten(selectedButtonElement) {
    const selectedIten = selectedButtonElement.id;
    const carousel = document.querySelector('.cards-carousel');
    const transform = carousel.style.transform;
    // A expressão regular procura por 'rotateY(' seguido de um ou mais dígitos (com um sinal opcional) e 'deg', terminando com ')'
    const rotateY = transform.match(/rotateY\((-?\d+deg)\)/i);
    // Calcula o novo ângulo de rotação Y com base no botão selecionado
    const rotateYDeg = -120 * (Number(selectedIten) - 1);
    // Cria a nova transformação com o ângulo de rotação atualizado
    const newTransform = transform.replace(rotateY[0], `rotateY(${rotateYDeg}deg)`);

    carousel.style.transform = newTransform;

    // Remove a classe ativa do botão atualmente ativo
    const activeButtonElement = document.querySelector('.controller__button--active');
    activeButtonElement.classList.remove('controller__button--active');
    // Adiciona a classe ativa ao botão selecionado
    selectedButtonElement.classList.add('controller__button--active')
}