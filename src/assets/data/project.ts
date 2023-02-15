import { GroupModel } from '@/models/models'

const projects = [{
    id: "restoration",
    name: "Restauro",
    type: "group",
    projects: [{
        id: 1001,
        title: "Palco per il Teatro Antico di Catania",
        description: "Per Amenanos Festival, Associazione Di.DE - Michele Di Dio. Collaborazione: Arch. Luca Renato Fauzia.",
        place: "Via Vittorio Emanuele II 266, Catania CT",
        mainFolder: "palco-teatro-antico-catania",
        cover: 14,
        imageNumber: 14,
        orientation: "square",
        order: 1,
    },{
        id: 1018,
        title: "Restauro Basilica Cattedrale Maria SS delle Vittorie",
        description: "",
        place: "Piazza Armerina EN",
        mainFolder: "cattedrale",
        cover: 2,
        imageNumber: 9,
        orientation: "vertical",
        order: 4,
    },{
        id: 1020,
        title: "Progetto di accessibilità, rampa per disabili",
        description: "Basilica Cattedrale Maria SS delle Vittorie",
        place: "Piazza Armerina EN",
        mainFolder: "restauro-rampa-cattedrale",
        cover: 6,
        imageNumber: 7,
        orientation: "square",
        order: 5,
    }]
},{
    id: "interiors",
    name: "Interiors",
    type: "group",
    projects: [{
        id: 1002,
        title: "Frette Outlet Agira",
        description: "Collaborazione con Studio INTRO Architettura & Design",
        place: "Sicilia Outlet Village - Agira EN",
        mainFolder: "frette-agira",
        cover: 1,
        imageNumber: 13,
        orientation: "horizontal",
        order: 2,
    },{
        id: 1003,
        title: "Frette Outlet Noventa di Piave",
        description: "Collaborazione con Studio INTRO Architettura & Design",
        place: "Mc Arthur Glen Designer Outlet - Noventa di Piave VE",
        mainFolder: "noventa",
        cover: 1,
        imageNumber: 10,
        orientation: "square",
        order: 10,
    },{
        id: 1004,
        title: "Casa TB",
        description: "Centro storico",
        place: "Piazza Armerina EN",
        mainFolder: "tony",
        cover: 6,
        imageNumber: 25,
        orientation: "square",
        order: 8,
    },{
        id: 1015,
        title: "Casa DF",
        description: "",
        place: "Piazza Armerina EN",
        mainFolder: "casa-df",
        cover: 3,
        imageNumber: 19,
        orientation: "horizontal",
        order: 3
    },{
        id: 1017,
        title: "Casa SC",
        description: "Appartamento privato",
        place: "Piazza Armerina EN",
        mainFolder: "casa-sc",
        cover: 10,
        imageNumber: 11,
        orientation: "horizontal",
        order: 9,
    },{
        id: 1021,
        title: "Casa RA&F",
        description: "Appartamento privato",
        place: "Piazza Armerina EN",
        mainFolder: "casa-ra-f",
        cover: 6,
        imageNumber: 11,
        orientation: "square",
        order: 7,
    }],
    subgroups: undefined
},{
    id: "gardens",
    name: "Gardens",
    type: "group",
    projects: [{
        id: 1016,
        title: "Giardino Privato",
        description: "",
        place: "Piazza Armerina EN",
        mainFolder: "private-garden",
        cover: 6,
        imageNumber: 6,
        orientation: "horizontal",
        order: 12,
    }]
},{
    id: "miscellaneous",
    name: "Miscellaneous",
    type: "group",
    projects: [{
        id: "product-design",
        name: "Product Design",
        type: "grid",
        cover: "1",
        orientation: "square",
        order: 11,
        projects: [{
            id: 1005,
            mainFolder: "product-design",
            windowImage: "1",
            zoomedImage: "2"
        },{
            id: 1006,
            mainFolder: "product-design",
            windowImage: "3",
            zoomedImage: "4"
        },{
            id: 1007,
            mainFolder: "product-design",
            windowImage: "5",
            zoomedImage: "6"
        }]
    },{
        id: "various",
        name: "Progetti",
        type: "grid",
        cover: "5",
        orientation: "vertical",
        order: 6,
        projects: [{
            id: 1008,
            mainFolder: "projects",
            windowImage: "1",
            zoomedImage: "2"
        },{
            id: 1009,
            mainFolder: "projects",
            windowImage: "3",
            zoomedImage: "4"
        },{
            id: 1010,
            mainFolder: "projects",
            windowImage: "5",
            zoomedImage: "6"
        },{
            id: 1011,
            mainFolder: "projects",
            windowImage: "7",
            zoomedImage: "8"
        },{
            id: 1012,
            mainFolder: "projects",
            windowImage: "9",
            zoomedImage: "10"
        },{
            id: 1013,
            mainFolder: "projects",
            windowImage: "11",
            zoomedImage: "12"
        },{
            id: 1014,
            mainFolder: "projects",
            windowImage: "13",
            zoomedImage: "14"
        },{
            id: 1019,
            mainFolder: "projects",
            windowImage: "15",
            zoomedImage: "16"
        }]
    }]
}];

export default projects as unknown as GroupModel[];