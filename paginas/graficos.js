const info = [
    gen = {
        id: "genero",
        labels: ['Masculino', 'Feminino', 'Não-Binário', 'Prefiro não informar'],
        data: [81, 132, 1, 1],
        title: 'Gênero',
    },
    idad = {
        id: "idade",
        labels: ['Abaixo de 18', '18 a 25', '26 a 59', 'Acima de 60'],
        data: [48, 34, 114, 19],
        title: 'Faixa Etária',
    },
    rac = {
        id: "raca",
        labels: ['Preto', 'Pardo', 'Branco', 'Indígena', 'Amarelo/Asiático'],
        data: [25, 68, 119, 1, 1],
        title: 'Cor/Raça',
    },
    zon = {
        id: "zona",
        labels: ['Zona Urbana', 'Zona Rural'],
        data: [181, 34],
        title: 'Zona',
    },
    e = {
        id: "e",
        labels: ['Frequentemente', 'Raramente', 'Nunca'],
        data: [135, 70, 10],
        title: 'Frequência de uso',
    },
    f = {
        id: "f",
        labels: ['Resolução de problemas simples', 'Geração e correção de textos e códigos', 'Pesquisas e auxílio acadêmico', 'Geração de imagens, vídeos, áudios, etc', 'Dúvidas quanto a problemas complexos', 'Não uso'],
        data: [44, 31, 65, 63, 5, 7],
        title: 'Principal uso',
    },
    g = {
        id: "g",
        labels: ['Conheço bastante', 'Conheço razoavelmente', 'Conheço pouco', 'Não conheço'],
        data: [48, 89, 67, 11],
        title: 'Conhecimento quanto aos Efeitos na Sociedade',
    },
    h = {
        id: "h",
        labels: ['Conheço bastante', 'Conheço razoavelmente', 'Conheço pouco', 'Não conheço'],
        data: [51, 25, 27, 112],
        title: 'Conhecimento quanto aos Impactos no Meio Ambiente',
    },
    i = {
        id: "i",
        labels: ['Conheço bastante', 'Conheço razoavelmente', 'Conheço pouco', 'Não conheço'],
        data: [61, 31, 32, 91],
        title: 'Sabe o que é um data center',
    },
    j = {
        id: "j",
        labels: ['Tenho conhecimento', 'Conheço um pouco', 'Não tenho conhecimento'],
        data: [41, 91, 83],
        title: 'Conhecimento quanto à coleta de dados',
    },
    k = {
        id: "k",
        labels: ['Sim', 'Pode dificultar', 'Não'],
        data: [64, 87, 64],
        title: 'Acredita que as IAs pode dificultar a busca por emprego',
    },
    l = {
        id: "l",
        labels: ['Positivamente', 'Negativamente', 'Depende de como forem usadas e regulamentadas', 'Não sei'],
        data: [20, 11, 174, 10],
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
                backgroundColor: ['#005200', '#4ea93b', '#92e27a', '#2a9db5',  '#0354a4', '#9be7ff'],
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
