import { createTheme } from "@mui/material";
import { useState } from "react";

export const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
});

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
  squarePic: string | undefined;
  widePic: string | undefined;
}
export class GroupModel {
  name: string | undefined;
  id: string | undefined;
  type: string | undefined;
  projects: ProjectModel[] | ProjectGridModel[] | GroupModel[] | undefined;
}
export class ProjectRandomGridModel {
  id: number | undefined;
  mainFolder: string | undefined;
  cover: number | undefined;
  title: string | undefined;
  place: string | undefined;
  description: string | undefined;
  orientation: string | undefined;
  order: number | undefined;
}