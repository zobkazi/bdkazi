import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogService } from '../services/blog.service';
import { BlogPost } from '../interfaces/blog.interfaces';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  standalone: true,
  imports: [
      CommonModule,
      ReactiveFormsModule
    ]
})
export class BlogDetailsComponent implements OnInit {
  blog?: BlogPost; // ✅ Correct type

  constructor(
    private route: ActivatedRoute,
    private blogService: BlogService
  ) {}

  ngOnInit(): void {
    const blogId = Number(this.route.snapshot.paramMap.get('id')); // ✅ Get blog ID
    if (blogId) {
      this.blogService.getBlogById(blogId).subscribe((data) => {
        this.blog = data; // ✅ Assign directly as BlogPost
      });
    }
  }
}
