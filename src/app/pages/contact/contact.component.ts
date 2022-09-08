import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HelloService } from 'src/app/services/hello.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  MyBlogs: any[] = [];
  delBlogId: string='';
  constructor(private helloservice: HelloService, private router: Router) { }
  

  ngOnInit(): void {
    this.helloservice.getMyBlogs().subscribe(
      (data: any) => {
        console.log(data);
        this.MyBlogs = data.blogPosts;
      },
      err => {
        console.log(err);
      }
    )
  }

  ViewBlog(blogid: string){
    console.log(blogid)

    this.router.navigate(['/view-blog/'+blogid]);
  }

  setDelId(blog_id:string){
    this.delBlogId=blog_id;
  }

  deleteBlog(){
    this.helloservice.delBlog(this.delBlogId).subscribe(
      (data: any) => {
        console.log(data);
        this.MyBlogs=this.MyBlogs.filter(blog => blog._id != this.delBlogId);
      },
      err => {
        console.log(err);
      }
    )
  }

  EditBlog(blogid: string){
    this.router.navigate(['/edit-blog/'+blogid]);
  }

}
