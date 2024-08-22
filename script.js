document.addEventListener('DOMContentLoaded', () => {
    const matrixBackground = document.getElementById('matrix-background');
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    const charWidth = 20; // Ajuste conforme necessário
    const charHeight = 20; // Ajuste conforme necessário
    const numColumns = Math.floor(window.innerWidth / charWidth); // Ajuste conforme necessário

    // Função para criar uma coluna de caracteres
    function createColumn(x) {
        for (let i = 0; i < Math.ceil(window.innerHeight / charHeight); i++) {
            const matrixChar = document.createElement('div');
            matrixChar.className = 'matrix-char';
            matrixChar.style.left = `${x}px`;
            matrixChar.style.top = `${i * charHeight}px`;
            matrixChar.style.animationDuration = `${Math.random() * 1.5 + 1}s`; // Ajuste para velocidade variável
            matrixChar.textContent = chars.charAt(Math.floor(Math.random() * chars.length));
            matrixBackground.appendChild(matrixChar);
        }
    }

    // Cria colunas de caracteres para toda a largura da tela
    for (let i = 0; i < numColumns; i++) {
        createColumn(i * charWidth);
    }
});


