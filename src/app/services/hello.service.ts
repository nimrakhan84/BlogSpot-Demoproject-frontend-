import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HelloService {


  data=[1,2,3];
  constructor( private httpClient: HttpClient) { }

  commonFun(){
    console.log("This is common service");
  }

  // getTodos(){
  //   return this.httpClient.get("http://jsonplaceholder.typicode.com/todos/");
  // }

  // getAllUsers(){
  //   console.log("aaaaaaaaaaaaaa");
  //   return this.httpClient.get('http://localhost:3000/auth/all_users');
  // }


  getMyBlogs(){
    console.log("aaaaaaaaaaaaaa");
    return this.httpClient.get('http://localhost:3000/blogs/get_your_blogs');
  }

  getAllBlogs(){
    console.log("aaaaaaaaaaaaaa");
    return this.httpClient.get('http://localhost:3000/blogs/get_all_blogs');
  }

  getBlog(blogid: any){
    return this.httpClient.get('http://localhost:3000/blogs/get_blog/'+blogid);
    
  }

  createNewBlog(title: string, tagline: any, content:string){
    console.log("done")
  return this.httpClient.post('http://localhost:3000/blogs/create_blog',{
    title,tagline,content
  });
  }

  postComment(comment: string, id: string){
    return this.httpClient.put('http://localhost:3000/blogs/add_comment',{id,comment})
  }

  editMyBlog(_id: string, title:string, tagline: any, content:string){
    return this.httpClient.put('http://localhost:3000/blogs/update_blog',{_id, title, tagline, content})
  }

  delBlog(blogid: string){
    return this.httpClient.delete('http://localhost:3000/blogs/delete_blog/'+blogid)
  }
}
