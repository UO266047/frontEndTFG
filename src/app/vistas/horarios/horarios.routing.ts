import {Routes, RouterModule} from '@angular/router';
import {NgModule} from "@angular/core";
import {TablaHorariosComponent} from "./tabla-horarios/tabla-horarios.component";

const routes:Routes =[

  {
    path:'tabla-horarios',
    component: TablaHorariosComponent
  }
];

@NgModule({
  imports:[RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class HorariosRouting{}
