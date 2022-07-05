class Project {
    id = Number;
    title = String;
    description = String;
    place = String;
    images = Array<string | number>();
}

const projects = [{
        id: 1001,
        title: "Casa Residenziale",
        description: "Descrizione Progetto Casa Residenziale",
        place: "Via Noto 26 - Piazza Armerina (EN)",
        images: [4, 5, 6]
    },{
        id: 1002,
        title: "Villa Bifamiliare",
        description: "Descrizione Progetto Villa Bifamiliare",
        place: "Via Largo Rosolino Pilo 13 - Catania (CT)",
        images: [1, 2, 3]
    }];

export default projects as unknown as Project[];