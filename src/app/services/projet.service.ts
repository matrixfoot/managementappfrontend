import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Project } from '../models/Project.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProjetService {

  constructor(private http: HttpClient) {}

  private projet: Project[] = [
    
  ];
  public projet$ = new Subject<Project[]>();

  getProjet() {
    this.http.get('https://backendmanagementappprod.herokuapp.com/api/projet').subscribe(
      (projet: Project[]) => {
        if (projet) {
          this.projet = projet;
          this.emitProjet();
        }
      },
      (error) => {
        console.log(error);
      }
    );
  }

  emitProjet() {
    this.projet$.next(this.projet);
  }

  getProjectById(id: string) {
    return new Promise((resolve, reject) => {
      this.http.get('https://backendmanagementappprod.herokuapp.com/api/projet/' + id).subscribe(
        (response) => {
          resolve(response);
        },
        (error) => {
          reject(error);
        }
      );
    });
  }

  

  createNewProjectWithFile(project: Project, image: File) {
    return new Promise((resolve, reject) => {
      const projectData = new FormData();
      projectData.append('project', JSON.stringify(project));
      projectData.append('image', image, project.title);
      this.http.post('https://backendmanagementappprod.herokuapp.com/api/projet', projectData).subscribe(
        (response) => {
          resolve(response);
        },
        (error) => {
          reject(error);
        }
      );
    });
  }

 

  modifyProjectWithFile(id: string, project: Project, image: File | string) {
    return new Promise((resolve, reject) => {
      let projectData: Project | FormData;
      if (typeof image === 'string') {
        project.ficheUrl = image;
        projectData = project;
      } else {
        projectData = new FormData();
        projectData.append('project', JSON.stringify(project));
        projectData.append('image', image, project.title);
      }
      this.http.put('https://backendmanagementappprod.herokuapp.com/api/projet/' + id, projectData).subscribe(
        (response) => {
          resolve(response);
        },
        (error) => {
          reject(error);
        }
      );
    });
  }

  deleteProject(id: string) {
    return new Promise((resolve, reject) => {
      this.http.delete('https://backendmanagementappprod.herokuapp.com/api/projet/' + id).subscribe(
        (response) => {
          resolve(response);
        },
        (error) => {
          reject(error);
        }
      );
    });
  }
}
