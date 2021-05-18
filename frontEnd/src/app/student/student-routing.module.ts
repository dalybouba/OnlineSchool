import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AcceuilComponent } from "./acceuil/acceuil.component";
import { ExerciceComponent } from "./exercice/exercice.component";
import { ProfileComponent } from "./profile/profile.component";
import { SettingComponent } from "./setting/setting.component";

const routes: Routes = [
    {
      path: '',
      component: AcceuilComponent,
      children: [
          {
              path: '',
              redirectTo: 'profile'
          },
          {
              path: 'profile',
              component: ProfileComponent
          },
          {
              path: 'setting',
              component: SettingComponent
          },
          {
              path: 'exercice',
              component: ExerciceComponent
          },
      ]
  },
  
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class StudentRoutingModule { }