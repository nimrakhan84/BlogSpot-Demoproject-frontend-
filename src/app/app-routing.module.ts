import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';
import { AuthGuard } from './guards/auth.guard';
import { RouterModule, Routes} from '@angular/router';
import { ViewBlogComponent } from './pages/view-blog/view-blog.component';
import { EditBlogComponent } from './pages/edit-blog/edit-blog.component';
import { BlogComponent } from './pages/blog/blog.component';
import { MyBlogsComponent } from './pages/my-blogs/my-blogs.component';

const routes: Routes=[

  {
    path: 'edit-blog/:id',
    component: EditBlogComponent,
    canActivate: [AuthGuard]
   },
  {
    path: 'view-blog/:id',
    component: ViewBlogComponent,
    canActivate: [AuthGuard]
   },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthGuard]
   },
  {
    path: 'all_blogs',
    component: BlogComponent
    // canActivate: [AuthGuard]
  },
  {
    path: 'my_blogs',
    component: MyBlogsComponent
    // canActivate: [AuthGuard]
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path:'login',
    component: LoginComponent
  }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
