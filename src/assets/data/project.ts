import ProjectClass from '@/models/models'

const projects = [{
        id: 1001,
        title: "Casa Residenziale",
        description: "Descrizione Progetto Casa Residenziale",
        place: "Via Noto 26 - Piazza Armerina (EN)",
        images: [7, 8, 9, 10, 11, 12]
    },{
        id: 1002,
        title: "Villa Bifamiliare",
        description: "Descrizione Progetto Villa Bifamiliare",
        place: "Via Largo Rosolino Pilo 13 - Catania (CT)",
        images: [1, 2, 3, 4, 5, 6]
    },{
        id: 1003,
        title: "Negozio Abbigliamento Luxury",
        description: "Descrizione Progetto Negozio Abbigliamento Luxury",
        place: "Via Firenze 109 - AciCastello (CT)",
        images: [13, 14, 15, 16, 17, 18]
    }];

export default projects as unknown as ProjectClass[];