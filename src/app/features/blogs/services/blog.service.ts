import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BlogResponse, BlogPost } from '../interfaces/blog.interfaces';

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  private apiUrl = 'https://api-nezuela.onrender.com/posts';

  constructor(private http: HttpClient) {}

  getBlogs(): Observable<BlogResponse> {
    return this.http.get<BlogResponse>(this.apiUrl);
  }
  getBlogById(id: number): Observable<BlogPost> {
    return this.http.get<BlogPost>(`${this.apiUrl}/${id}`);
  }
}
