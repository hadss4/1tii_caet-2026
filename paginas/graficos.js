const info = [
    gen = {
        id: "genero",
        labels: ['Masculino', 'Feminino', 'Não-Binário', 'Prefiro não informar'],
        data: [78, 129, 1, 1],
        title: 'Gênero',
    },
    idad = {
        id: "idade",
        labels: ['Abaixo de 18', '18 a 25', '26 a 59', 'Acima de 60'],
        data: [48, 31, 112, 18],
        title: 'Faixa Etária',
    },
    rac = {
        id: "raca",
        labels: ['Preto', 'Branco', 'Indígena', 'Amarelo/Asiático', 'Pardo'],
        data: [25, 117, 1, 1, 64],
        title: 'Cor/Raça',
    },
    zon = {
        id: "zona",
        labels: ['Zona Urbana', 'Zona Rural'],
        data: [175, 34],
        title: 'Zona',
    },
    e = {
        id: "e",
        labels: ['Frequentemente', 'Raramente', 'Nunca'],
        data: [131, 68, 10],
        title: 'Frequência de uso',
    },
    f = {
        id: "f",
        labels: ['Resolução de problemas simples', 'Geração e correção de textos e códigos', 'Pesquisas e auxílio acadêmico', 'Geração de imagens, vídeos, áudios, etc', 'Dúvidas quanto a problemas complexos', 'Não uso'],
        data: [44, 30, 63, 62, 3, 7],
        title: 'Principal uso',
    },
    g = {
        id: "g",
        labels: ['Conheço bastante', 'Conheço razoavelmente', 'Conheço pouco', 'Não conheço'],
        data: [46, 87, 65, 11],
        title: 'Conhecimento quanto aos Efeitos na Sociedade',
    },
    h = {
        id: "h",
        labels: ['Conheço bastante', 'Conheço razoavelmente', 'Conheço pouco', 'Não conheço'],
        data: [48, 25, 26, 110],
        title: 'Conhecimento quanto aos Impactos no Meio Ambiente',
    },
    i = {
        id: "i",
        labels: ['Conheço bastante', 'Conheço razoavelmente', 'Conheço pouco', 'Não conheço'],
        data: [58, 31, 31, 89],
        title: 'Sabe o que é um data center',
    },
    j = {
        id: "j",
        labels: ['Tenho conhecimento', 'Conheço um pouco', 'Não tenho conhecimento'],
        data: [39, 89, 81],
        title: 'Conhecimento quanto à coleta de dados',
    },
    k = {
        id: "k",
        labels: ['Sim', 'Pode dificultar', 'Não'],
        data: [63, 84, 62],
        title: 'Acredita que as IAs pode dificultar a busca por emprego',
    },
    l = {
        id: "l",
        labels: ['Positivamente', 'Negativamente', 'Depende', 'Não sei'],
        data: [18, 11, 170, 10],
        title: 'Como a expansão das IAs afetará o futuro',
    }
];

for (const item of info) {
    const canvasElement = document.getElementById(item.id);
    if (!canvasElement) continue;

    new Chart(canvasElement, {
        type: 'pie',
        data: {
            labels: item.labels,
            datasets: [{
                data: item.data,
                backgroundColor: ['#1b7b3d', '#2dc48d', '#b7ff90', '#73d6ee', '#1a67a5', '#0d3b66'],
                borderWidth: 0.3,
                borderColor: '#0a3323',
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        boxWidth: 14,
                        padding: 10,
                        font: { size: 12 }
                    },
                },
                title: {
                    display: true,
                    text: item.title,
                    color: '#0a3323',
                    font: { size: 15, weight: 'bold' },
                    padding: { top: 5, bottom: 12 }
                }
            }
        }
    });
}
