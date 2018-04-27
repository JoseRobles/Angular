import { Injectable } from '@angular/core';
import { Article } from '../_models/article.model';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable()
export class ArticlesService {
  articles:Article[];
  apiUrl: string = 'http://localhost:3000';

  constructor(private http:HttpClient) { 
    
  }

  addArticle(title:string, link:string){
    
    let jsonSent =    
    {
      "title":title,      
      "link":link,      
      "votes":0    
    }
    return this.http.post(`${this.apiUrl}/articles`,jsonSent).pipe();

  }
  getList():Observable<Article[]>{
    return this.http.get<Article[]>("http://localhost:3000/articles").pipe();
  }


}
