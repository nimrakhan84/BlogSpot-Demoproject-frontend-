import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HelloService } from 'src/app/services/hello.service';

@Component({
  selector: 'app-edit-blog',
  templateUrl: './edit-blog.component.html',
  styleUrls: ['./edit-blog.component.scss']
})
export class EditBlogComponent implements OnInit {

  editTile:string="";
  editContent:string="";
  blog_id: any;
  bloginfo: any;
  addcomment: string="";
  suggestedTags=['Technology','IT','Food', 'Business', 'Education', 'Beauty', 'Politics', 'Sports'];
  userTags: String[] = [];
 

  constructor(private helloservice: HelloService, private router: ActivatedRoute, private router2: Router) { }

  ngOnInit(): void {
    this.blog_id= this.router.snapshot.paramMap.get("id");
    this.helloservice.getBlog(this.blog_id).subscribe(
      (data: any) => {
        this.bloginfo=data.blogPosts[0];
        console.log(this.bloginfo);
        this.editTile=this.bloginfo.title;
        this.userTags=this.bloginfo.tagline;
        this.editContent=this.bloginfo.content;
        
      },
      err => {
        console.log(err);
      }
    )

  }
  editBlog(){
    this.helloservice.editMyBlog(this.blog_id, this.editTile, this.userTags, this.editContent).subscribe(
      (data: any) => {
        console.log("success", data);
        this.editTile="";
        this.userTags=[]
        this.editContent="";
        this.router2.navigate(['/my_blogs/']);
      },
      err => {
        console.log(err);
      }
    )
  }

  onTagAdd(e:any){
    this.userTags.push(e.value);
  }
  onTagRemove(e: any){
    this.userTags.filter(tag => tag !==e);
  }

}
