import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HelloService } from 'src/app/services/hello.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  Blogs: any[] = [];

  constructor(private helloservice: HelloService, private router: Router) { }

  ngOnInit(): void {
      this.helloservice.getAllBlogs().subscribe(
        (data: any) => {
          // console.log(data);
          this.Blogs = data.blogPosts;
        },
        err => {
          console.log(err);
        }
      )
    // console.log("about on int")
  }

  ViewBlog(blogid: string){
    console.log(blogid)

    this.router.navigate(['/view-blog/'+blogid]);
  }

}
