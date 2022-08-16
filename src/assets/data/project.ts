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
        imageNumber: 14
    },{
        id: 1018,
        title: "Restauro Basilica Cattedrale Maria SS delle Vittorie",
        description: "",
        place: "Piazza Armerina EN",
        mainFolder: "cattedrale",
        cover: 2,
        imageNumber: 12
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
        imageNumber: 13
    },{
        id: 1003,
        title: "Frette Outlet Noventa di Piave",
        description: "Collaborazione con Studio INTRO Architettura & Design",
        place: "Mc Arthur Glen Designer Outlet - Noventa di Piave VE",
        mainFolder: "noventa",
        cover: 1,
        imageNumber: 10,
    },{
        id: 1004,
        title: "Casa TB",
        description: "Centro storico",
        place: "Piazza Armerina EN",
        mainFolder: "tony",
        cover: 6,
        imageNumber: 25
    },{
        id: 1015,
        title: "Casa DF",
        description: "",
        place: "Piazza Armerina EN",
        mainFolder: "casa-df",
        cover: 3,
        imageNumber: 19
    },{
        id: 1017,
        title: "Casa SC",
        description: "Appartamento privato",
        place: "Piazza Armerina EN",
        mainFolder: "casa-sc",
        cover: 10,
        imageNumber: 11
    }],
    subgroup: {
        id: "product-design",
        name: "Product Design",
        type: "grid",
        subprojects: [{
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
    }
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
        imageNumber: 6
    }]
},{
    id: "miscellaneous",
    name: "Progetti",
    type: "grid",
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
    }],
    subgroup: undefined
}];

export default projects as unknown as GroupModel[];