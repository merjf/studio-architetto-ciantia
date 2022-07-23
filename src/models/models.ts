class Project {
    id: number | undefined;
    title: string | undefined
    description: string | undefined;
    place: string | undefined;
    mainFolder: string | undefined;
    imageNumber: number | undefined;
}
export default class ProjectModel {
    name: string | undefined;
    type: string | undefined;
    values: Project[] | undefined;
    subgroup: ProjectModel | undefined;
}