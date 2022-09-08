import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HelloService } from 'src/app/services/hello.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  titleErr=false;
  contentErr=false;
  title:string ="";
  content:string ="";
  showContainer=false;
  uploaddone=false;
  noupload=true;
  suggestedTags=['Technology','IT','Food', 'Business', 'Education', 'Beauty', 'Politics', 'Sports'];
  userTags: String[] = [];
  constructor(private helloService: HelloService, private router: Router) { }
  ngOnInit(): void {
    
  }

  AddDetails(){
    this.showContainer=true;
    this.noupload=false;
  }

  onTagAdd(e:any){
    this.userTags.push(e.value);
  }
  onTagRemove(e: any){
    this.userTags.filter(tag => tag !==e);
  }

  createBlog(){
    this.titleErr=false;
    this.contentErr=false;
    console.log(this.userTags.length);
    if(this.title != "" && this.content !="" ){
      this.helloService.createNewBlog(this.title, this.userTags, this.content)
        .subscribe((data:any)=>{
          console.log(this.title, this.content);
          console.log("successfully uplaoded");
          this.showContainer=false;
          this.uploaddone=true;
          this.noupload=true
        }, err=>{
          console.log("error:",err.message)
        })
    }
    else{
        if(this.title==""){
            this.titleErr=true;
        }
        if(this.content==""){
          this.contentErr=true;
        }
       
    }
    
  }


}
