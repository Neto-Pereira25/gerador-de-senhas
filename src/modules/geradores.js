const rand = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
};

const geraMaiusculas = () => String.fromCharCode(rand(65, 91));
const geraMinusculas = () => String.fromCharCode(rand(97, 123));
const geraNumero = () => String.fromCharCode(rand(48, 58));
const simbolos = ',.;~^[]{}!@#$%*()_+=-';
const geraSimbolo = () => simbolos[rand(0, simbolos.length)];

export default function geraSenha(qtd, maiusculas, minusculas, numeros, simbolos) {
    const senhaArray = [];
    qtd = Number(qtd);


    for(let i = 0; i < qtd; i++) {
        maiusculas && senhaArray.push(geraMaiusculas());
        minusculas && senhaArray.push(geraMinusculas());
        numeros && senhaArray.push(geraNumero());
        simbolos && senhaArray.push(geraSimbolo());
    }

    return senhaArray.join('').slice(0, qtd);
}

geraSenha(5, true, true, true, true);