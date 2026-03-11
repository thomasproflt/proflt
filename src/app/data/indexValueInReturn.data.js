const GraphDown = (
    <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" className="bi bi-graph-down-arrow" viewBox="0 0 16 16">
        <path fillRule="evenodd" d="M0 0h1v15h15v1H0zm10 11.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 0-1 0v2.6l-3.613-4.417a.5.5 0 0 0-.74-.037L7.06 8.233 3.404 3.206a.5.5 0 0 0-.808.588l4 5.5a.5.5 0 0 0 .758.06l2.609-2.61L13.445 11H10.5a.5.5 0 0 0-.5.5" />
    </svg>
);

const ArrowUp = (
    <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" className="bi bi-arrow-up" viewBox="0 0 16 16">
        <path fillRule="evenodd" d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5" />
    </svg>
);

const ArrowRightUp = (
    <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" className="bi bi-arrow-up-right" viewBox="0 0 16 16">
        <path fillRule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0z" />
    </svg>
);

export const indexValueInReturn = [
    {
        id: 1,
        svg: GraphDown,
        title: "Reduzir Custos",
        description:
            "Reduzir custos operacionais",
    },
    {
        id: 2,
        svg: ArrowUp,
        title: "Aumentar Receita",
        description:
            "Disposição dos usuários para pagar",
    },
    {
        id: 3,
        svg: ArrowRightUp,
        title: "Aumentar Valor",
        description:
            "Construir um negócio sustentável",
    },
];
