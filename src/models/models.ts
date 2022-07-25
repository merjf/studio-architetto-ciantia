export class ProjectModel {
    id: number | undefined;
    title: string | undefined
    description: string | undefined;
    place: string | undefined;
    mainFolder: string | undefined;
    imageNumber: number | undefined;
}
export class SubProjectModel {
    id: number | undefined;
    mainFolder: string | undefined;
    windowImage: string | undefined;
    zoomedImage: string | undefined;
}
export class GroupModel {
    name: string | undefined;
    type: string | undefined;
    projects: ProjectModel[] | SubProjectModel[] | undefined;
    subprojects: SubProjectModel[] | undefined;
    subgroup: GroupModel | undefined;
}