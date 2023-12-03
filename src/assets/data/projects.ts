import { GroupModel } from '../../utils/Utils'

const projects = [{
    id: "restoration",
    name: "Restauro",
    type: "group",
    projects: [{
        id: 101,
        title: "Palco per il Teatro Antico di Catania",
        description: "Restauro palco in teatro. Per Amenanos Festival, Associazione Di.DE - Michele Di Dio. Collaborazione: Arch. Luca Renato Fauzia.",
        city: "Catania",
        place: "Catania, Italia",
        mainFolder: "palco-teatro-antico-catania",
        cover: "palco",
        imageNumber: 14,
        orientation: "horizontal",
        order: 14,
    },{
        id: 118,
        title: "Basilica Cattedrale Maria SS delle Vittorie",
        description: "Restauro cupola",
        city: "Piazza Armerina",
        place: "Piazza Armerina, Enna, Italia",
        mainFolder: "cattedrale",
        cover: "cattedrale",
        imageNumber: 9,
        orientation: "vertical",
        order: 13,
    },{
        id: 120,
        title: "Basilica Cattedrale Maria SS delle Vittorie",
        description: "Progetto di accessibilità, rampa per disabili",
        city: "Piazza Armerina",
        place: "Piazza Armerina, Enna, Italia",
        mainFolder: "restauro-rampa-cattedrale",
        cover: "rampa",
        imageNumber: 7,
        orientation: "horizontal",
        order: 15,
    }]
},{
    id: "interiors",
    name: "Interiors",
    type: "group",
    projects: [{
        id: 102,
        title: "Frette Outlet Agira",
        description: "Negozio tessile. Collaborazione con Studio INTRO Architettura & Design",
        city: "Agira",
        place: "Sicilia Outlet Village, Enna, Italia",
        mainFolder: "frette-agira",
        cover: "frette-agira",
        imageNumber: 13,
        orientation: "horizontal",
        order: 8,
    },{
        id: 103,
        title: "Frette Outlet Noventa di Piave",
        description: "Negozio tessile. Collaborazione con Studio INTRO Architettura & Design",
        city: "Noventa di Piave",
        place: "Mc Arthur Glen Designer Outlet, Venezia, Italia",
        mainFolder: "noventa",
        cover: "frette-noventa",
        imageNumber: 10,
        orientation: "wide",
        order: 5,
    },{
        id: 104,
        title: "Casa TB",
        description: "Appartamento privato",
        city: "Piazza Armerina",
        place: "Piazza Armerina, Enna, Italia",
        mainFolder: "tony",
        cover: "casa-tb",
        imageNumber: 25,
        orientation: "horizontal",
        order: 3,
    },{
        id: 115,
        title: "Casa DF",
        description: "Appartamento privato",
        city: "Piazza Armerina",
        place: "Piazza Armerina, Enna, Italia",
        mainFolder: "casa-df",
        cover: "casa-df",
        imageNumber: 19,
        orientation: "horizontal",
        order: 4
    },{
        id: 117,
        title: "Casa SC",
        description: "Appartamento privato",
        city: "Piazza Armerina",
        place: "Piazza Armerina, Enna, Italia",
        mainFolder: "casa-sc",
        cover: "casa-sc",
        imageNumber: 11,
        orientation: "wide",
        order: 1,
    },{
        id: 122,
        title: "Volpe Gioielli",
        description: "Gioielleria",
        city: "Piazza Armerina",
        place: "Piazza Armerina, Enna, Italia",
        mainFolder: "volpe-gioielli",
        cover: "volpe-gioielli",
        imageNumber: 10,
        orientation: "horizontal",
        order: 7,
    },{
        id: 121,
        title: "Casa RA&F",
        description: "Appartamento privato",
        city: "Piazza Armerina",
        place: "Piazza Armerina, Enna, Italia",
        mainFolder: "casa-ra-f",
        cover: "casa-ra-f",
        imageNumber: 11,
        orientation: "vertical",
        order: 2,
    },{
        id: 123,
        title: "Villa Gerace",
        description: "Agriturismo",
        city: "Enna",
        place: "Enna, Italia",
        mainFolder: "villa-gerace",
        cover: "villa-gerace",
        imageNumber: 16,
        orientation: "wide",
        order: 9,
    },{
        id: 124,
        title: "Frette Outlet Marcianise",
        description: "Negozio tessile. Collaborazione con Studio INTRO Architettura & Design",
        city: "Marcianise",
        place: "Marcianise, Caserta, Italia",
        mainFolder: "frette-caserta",
        cover: "frette-caserta",
        imageNumber: 26,
        orientation: "wide",
        order: 12,
    }],
},{
    id: "gardens",
    name: "Gardens",
    type: "group",
    projects: [{
        id: 116,
        title: "Giardino Privato",
        description: "",
        city: "Piazza Armerina",
        place: "Piazza Armerina, Enna, Italia",
        mainFolder: "private-garden",
        cover: "garden",
        imageNumber: 6,
        orientation: "horizontal",
        order: 11,
    }]
},{
    id: "miscellaneous",
    name: "Miscellaneous",
    type: "miscellaneous",
    projects: [{
        id: "product-design",
        name: "Product Design",
        type: "grid",
        cover: "interior-design",
        orientation: "square",
        order: 10,
        city: "Piazza Armerina",
        place: "Piazza Armerina, Enna, Italia",
        projects: [{
            id: 105,
            mainFolder: "product-design",
            squarePic: "1",
            widePic: "2"
        },{
            id: 106,
            mainFolder: "product-design",
            squarePic: "3",
            widePic: "4"
        },{
            id: 107,
            mainFolder: "product-design",
            squarePic: "5",
            widePic: "6"
        }]
    },{
        id: "various",
        name: "Progetti",
        type: "grid",
        cover: "projects",
        orientation: "vertical",
        order: 6,
        city: "Piazza Armerina",
        place: "Piazza Armerina, Enna, Italia",
        projects: [{
            id: 108,
            mainFolder: "projects",
            squarePic: "1",
            widePic: "2"
        },{
            id: 109,
            mainFolder: "projects",
            squarePic: "3",
            widePic: "4"
        },{
            id: 110,
            mainFolder: "projects",
            squarePic: "5",
            widePic: "6"
        },{
            id: 111,
            mainFolder: "projects",
            squarePic: "7",
            widePic: "8"
        },{
            id: 112,
            mainFolder: "projects",
            squarePic: "9",
            widePic: "10"
        },{
            id: 113,
            mainFolder: "projects",
            squarePic: "11",
            widePic: "12"
        },{
            id: 114,
            mainFolder: "projects",
            squarePic: "13",
            widePic: "14"
        },{
            id: 119,
            mainFolder: "projects",
            squarePic: "15",
            widePic: "16"
        },{
            id: 125,
            mainFolder: "projects",
            squarePic: "17",
            widePic: "18"
        }]
    }]
}];

export default projects as unknown as GroupModel[];