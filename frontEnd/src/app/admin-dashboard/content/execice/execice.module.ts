import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { UpdateComponent } from './update/update.component';
import { CreateComponent } from './create/create.component';
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
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzTableModule } from 'ng-zorro-antd/table';


@NgModule({
  declarations: [
    ListComponent,
    UpdateComponent,
    CreateComponent
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
    NzCardModule
  ]
})
export class ExeciceModule { }