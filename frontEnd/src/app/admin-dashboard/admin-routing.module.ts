import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { HomeComponent } from './home/home.component';
import { ListComponent as CourseListComponent } from './content/course/list/list.component';
import { ListComponent as ExeciceListComponent} from './content/execice/list/list.component';
import { ListComponent as StudentListComponent} from './users/student/list/list.component';
import { ListComponent as TeacherListComponent} from './users/teacher/list/list.component';


const routes: Routes = [
  {
    path: '',
    component: AdminPanelComponent,
    children: [
        {
            path: '',
            redirectTo: 'home'
        },
        {
            path: 'home',
            component: HomeComponent
        },
        {
            path: 'course',
            component: CourseListComponent
        },
        {
            path: 'exercice',
            component: ExeciceListComponent
        },
        {
            path: 'student',
            component: StudentListComponent
        },
        {
            path: 'teacher',
            component: TeacherListComponent
        },
    ]
},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }