export interface Task {
  id: number;
  text: string;
}

export interface ProjectData {
  title: string;
  description: string;
  dueDate: string;
}

export class Project {
  id: number;
  title: string;
  description: string;
  dueDate: string;
  tasks: Task[];

  constructor(project: { id: number; title: string; description: string; dueDate: string; tasks?: Task[] }) {
    this.id = project.id;
    this.title = project.title;
    this.description = project.description;
    this.dueDate = project.dueDate;
    this.tasks = project.tasks || [];
  }
}

export const getNextId = (items: { id: number }[]): number =>
  items.length ? items[items.length - 1].id + 1 : 1;

export const reindexIds = <T extends { id: number }>(items: T[]): T[] =>
  items.map((item, index) => ({ ...item, id: index + 1 }));
