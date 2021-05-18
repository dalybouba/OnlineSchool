import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateComponent } from './create/create.component';
import { ListComponent } from './list/list.component';
import { AdminRoutingModule } from '../../admin-routing.module';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzFormModule } from 'ng-zorro-antd/form';
import { ReactiveFormsModule } from '@angular/forms';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzPipesModule } from 'ng-zorro-antd/pipes';
import { NzCarouselModule } from 'ng-zorro-antd/carousel';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { SharedModule } from 'src/app/shared/shared.module';
// import { UserFilterPipe } from 'src/app/shared/pipes/user-filter.pipe';


@NgModule({
  declarations: [
    CreateComponent,
    ListComponent,
    // UserFilterPipe
  ],
  imports: [
    CommonModule,
    NzIconModule,
    NzModalModule,
    AdminRoutingModule,
    NzMenuModule,
    NzTableModule,
    NzGridModule,
    NzButtonModule,
    NzTabsModule,
    NzFormModule,
    ReactiveFormsModule,
    NzInputModule,
    NzDropDownModule,
    NzListModule,
    NzPipesModule,
    NzCarouselModule,
    NzCardModule,
    NzPipesModule,
    SharedModule,

  ]
})
export class StudentModule { }
