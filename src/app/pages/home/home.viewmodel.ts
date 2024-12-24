import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HomeViewModel {
  public title: string = 'Bem-vindo à minha página!';
  public description: string = 'Esta é uma aplicação Angular com Ionic e MVVM.';
  public projects: { name: string; description: string }[] = [];

  constructor() {
    this.loadProjects();
  }

  private loadProjects(): void {
    this.projects = [
      { name: 'Projeto 1', description: 'Descrição do projeto 1' },
      { name: 'Projeto 2', description: 'Descrição do projeto 2' },
      { name: 'Projeto 3', description: 'Descrição do projeto 3' },
    ];
  }

  public getProjects(): { name: string; description: string }[] {
    return this.projects;
  }

  public updateTitle(newTitle: string): void {
    this.title = newTitle;
  }
}
