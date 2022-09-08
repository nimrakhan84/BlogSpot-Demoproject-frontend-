import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'todoApp';
  
  listItems =[
    {id:1, task:"Assignmnet 2", status: true},
    {id:2, task:"Assignmnet 4", status: false},
    {id:3, task:"Assignmnet 5", status: true},
    {id:4, task:"Assignmnet 3", status: false}
  ];
  id:number =this.listItems.length+1;

  constructor(public authService: AuthService, private router: Router) { }
  getNewTodoItem(todoTask: string){
    this.listItems.push({id: this.id, task:todoTask, status:false});
    this.id++;
  }

  onStatusChange(e:{id:number, checked: boolean}){
    this.listItems.forEach(item =>{
      if(item.id === e.id){
        item.status =e.checked;
      }
    })
  }

  onDeleteTask(id: number){
    console.log("delete", id)
    this.listItems=this.listItems.filter(item => item.id != id);
  }

  onTaskUpdate(e:{id:number, task: string}){
    this.listItems.forEach(item =>{
      if(item.id === e.id){
        item.task =e.task;
      }
    })
  }

  logout(){
    localStorage.removeItem('token');
    this.authService.isLoggedIn=false;
    this.router.navigate(['/login']);
  }
}
