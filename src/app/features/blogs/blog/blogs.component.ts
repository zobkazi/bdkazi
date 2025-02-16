import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogService } from '../services/blog.service';
import { BlogPost } from '../interfaces/blog.interfaces';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  standalone: true,
  imports: [CommonModule],
})
export class BlogsComponent implements OnInit {
  blogs: BlogPost[] = [];
  totalPosts = 0;

  constructor(private blogService: BlogService) {}

  ngOnInit(): void {
    this.blogService.getBlogs().subscribe({
      next: (response) => {
        this.blogs = response.posts;
        this.totalPosts = response.total;
      },
      error: (error) => {
        console.error('Error fetching blogs:', error);
      },
    });
  }
}
