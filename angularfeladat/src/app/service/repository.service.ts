import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Repository } from '../model/repository';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RepositoryService {
  
  //serverUrl: string = 'https://api.github.com/repos/angular/angular/contributors?page=1&per_page=25';
  serverUrl: string = 'https://api.github.com/users';

  constructor(
    public http: HttpClient,
  ) {
    
   }

  getAll():Observable<Repository[]>{    
    return this.http.get<Repository[]>(this.serverUrl);
  }

  get(name:string):Observable<Repository[]>{    
    return this.http.get<Repository[]>(`${this.serverUrl}/${name}/repos`);
  }

}