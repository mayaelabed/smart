import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  private apiUrl = 'http://localhost:90/conf.php';

  constructor(private http: HttpClient) { }

  getArticles() {
    return this.http.get(`${this.apiUrl}`);
  }
}
