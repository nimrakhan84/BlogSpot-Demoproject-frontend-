import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HelloService } from 'src/app/services/hello.service';

@Component({
  selector: 'app-view-blog',
  templateUrl: './view-blog.component.html',
  styleUrls: ['./view-blog.component.scss']
})
export class ViewBlogComponent implements OnInit {
  blog_id: any;
  bloginfo: any;
  addcomment: string="";
  constructor(private helloservice: HelloService, private router: ActivatedRoute) { 
    
    }

  ngOnInit(): void {
    this.blog_id= this.router.snapshot.paramMap.get("id");
    console.log(typeof( this.router.snapshot.paramMap.get("id")));

    this.helloservice.getBlog(this.blog_id).subscribe(
      (data: any) => {
        this.bloginfo=data.blogPosts[0];
        console.log(this.bloginfo);
        
      },
      err => {
        console.log(err);
      }
    )
   
  }
 
  submitComment(){
    this.helloservice.postComment(this.addcomment, this.blog_id).subscribe((data: any)=>{
      console.log(data);
      this.bloginfo.Comments=data.added_comment.Comments;
      this.addcomment="";
    },err=>{
      console.log("Login Error", err.message);
    })
  }
 
}
