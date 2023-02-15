export class ProjectModel {
    id: number | undefined;
    title: string | undefined
    description: string | undefined;
    place: string | undefined;
    mainFolder: string | undefined;
    cover: number | undefined;
    imageNumber: number | undefined;
    orientation: string | undefined;
    order: number | undefined;
}
export class ProjectGridModel {
    id: number | undefined;
    mainFolder: string | undefined;
    windowImage: string | undefined;
    zoomedImage: string | undefined;
}
export class GroupModel {
    name: string | undefined;
    id: string | undefined;
    type: string | undefined;
    projects: ProjectModel[] | ProjectGridModel[] | undefined;
}
export class ProjectRandomGridModel {
    id: number | undefined;
    mainFolder: string | undefined;
    cover: number | undefined;
    title: string | undefined;
    description: string | undefined;
    orientation: string | undefined;
    order: number | undefined;
}