import ProjectClass from '@/models/models'

const projects = [{
    name: "Restauro",
    type: "group",
    values: [{
            id: 1001,
            title: "Frette - Agira",
            description: "Collaborazione con Filippo",
            place: "Sicilia Outlet Village - Agira EN",
            mainFolder: "frette-agira",
            imageNumber: 13
        },{
            id: 1002,
            title: "Noventa",
            description: "Descrizione Progetto Noventa",
            place: "Via xxx 1234, Noventa di Piave VE",
            mainFolder: "noventa",
            imageNumber: 10,
        },{
            id: 1003,
            title: "Palco Teatro Antico di Catania",
            description: "Descrizione Progetto Teatro Antico di Catania",
            place: "Via Vittorio Emanuele II 266, Catania CT",
            mainFolder: "palco-teatro-antico-catania",
            imageNumber: 15
        }],
    subgroup: undefined
},{
    name: "Interiors",
    type: "group",
    values: [{
        id: 1004,
        title: "Appartamento privato",
        description: "Descrizione Progetto Appartamento privato",
        place: "Via xxx 1234, Piazza Armerina EN",
        mainFolder: "tony",
        imageNumber: 25
    }],
    subgroup: {
        name: "Product Design",
        type: "grid",
        values: [{
            id: 1004,
            title: "Appartamento privato",
            description: "Descrizione Progetto Appartamento privato",
            place: "Via xxx 1234, Piazza Armerina EN",
            mainFolder: "tony",
            imageNumber: 25
        }], 
    }
}
];

export default projects as unknown as ProjectClass[];