import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';

import { HomeComponent } from './home/home.component';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzUploadModule } from 'ng-zorro-antd/upload';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { NzCarouselModule } from 'ng-zorro-antd/carousel';
import { NzPipesModule } from 'ng-zorro-antd/pipes';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { AdminRoutingModule } from './admin-routing.module';
import { NzTableModule } from 'ng-zorro-antd/table';
import { CourseModule } from './content/course/course.module';
import { ExeciceModule } from './content/execice/execice.module';
import { HttpClient } from '@angular/common/http';
import { StudentModule } from './users/student/student.module';
import { TeacherModule } from './users/teacher/teacher.module';
import { SharedModule } from '../shared/shared.module';




@NgModule({
  declarations: [


    AdminPanelComponent,
    HomeComponent,
  ],
  imports: [

    ExeciceModule,
    CourseModule,
    StudentModule,
    TeacherModule,
    CommonModule,
    NzTableModule,
    AdminRoutingModule,
    NzLayoutModule,
    NzMenuModule,
    NzBreadCrumbModule,
    NzGridModule,
    NzIconModule,
    NzDividerModule,
    NzAvatarModule,
    NzTypographyModule,
    NzSpinModule,
    NzButtonModule,
    NzTabsModule,
    NzFormModule,
    ReactiveFormsModule,
    NzInputModule,
    NzModalModule,
    NzUploadModule,
    NzDropDownModule,
    NzPopconfirmModule,
    NzListModule,
    NzToolTipModule,
    NzPipesModule,
    NzCarouselModule,
    NzBadgeModule,
    NzCardModule,
    SharedModule,
  ]
})
export class AdminDashboardModule { }
