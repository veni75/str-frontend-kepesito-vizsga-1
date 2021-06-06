import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contributor } from '../model/contributor';
import { HttpClient } from '@angular/common/http';
//import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class ContributorService  {
  //serverUrl: string = 'https://api.github.com/repos/angular/angular/contributors?page=1&per_page=25';
  serverUrl: string = 'https://api.github.com/repos/angular/angular/contributors?per_page=100';

  constructor(
    public http: HttpClient,
  ) {
    
   }

  getAll():Observable<Contributor[]>{    
    return this.http.get<Contributor[]>(this.serverUrl);
  }

  get(contributor:Contributor):Observable<Contributor>{    
    return this.http.get<Contributor>(`${this.serverUrl}/${contributor.id}`);
  }

  create(contributor:Contributor):Observable<Contributor>{      
    return this.http.post<Contributor>(this.serverUrl,contributor);
  } 

  remove(contributor:Contributor):Observable<Contributor>{    
    return this.http.delete<Contributor>(`${this.serverUrl}/${contributor.id}`);
  }

  update(contributor:Contributor):Observable<Contributor>{     
    return this.http.patch<Contributor>(`${this.serverUrl}/${contributor.id}`,contributor);
  } 
}