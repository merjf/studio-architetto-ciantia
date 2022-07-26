import { GroupModel } from '@/models/models'

const projects = [{
    name: "Restauro",
    type: "group",
    projects: [{
            id: 1001,
            title: "Palco Teatro Antico di Catania",
            description: "Descrizione Progetto Teatro Antico di Catania",
            place: "Via Vittorio Emanuele II 266, Catania CT",
            mainFolder: "palco-teatro-antico-catania",
            imageNumber: 15
        }]
},{
    name: "Interiors",
    type: "group",
    projects: [{
        id: 1002,
        title: "Frette - Agira",
        description: "Collaborazione con Filippo",
        place: "Sicilia Outlet Village - Agira EN",
        mainFolder: "frette-agira",
        imageNumber: 13
    },{
        id: 1003,
        title: "Noventa",
        description: "Descrizione Progetto Noventa",
        place: "Via xxx 1234, Noventa di Piave VE",
        mainFolder: "noventa",
        imageNumber: 10,
    },{
        id: 1004,
        title: "Appartamento privato",
        description: "Descrizione Progetto Appartamento privato",
        place: "Via xxx 1234, Piazza Armerina EN",
        mainFolder: "tony",
        imageNumber: 25
    },{
        id: 1015,
        title: "Casa DF",
        description: "Descrizione Progetto Appartamento privato",
        place: "Via xxx 1234, Piazza Armerina EN",
        mainFolder: "casa-df",
        imageNumber: 19
    }],
    subgroup: {
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
    }],
    subgroup: undefined
}];

export default projects as unknown as GroupModel[];