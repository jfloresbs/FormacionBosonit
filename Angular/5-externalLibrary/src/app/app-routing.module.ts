import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

import { BarChartComponent } from './bar-chart/bar-chart.component';
import { LineChartComponent } from './line-chart/line-chart.component';

const routes: Routes = [
  {
    path: 'barChart',
    component: BarChartComponent,
    pathMatch: 'full',
  },
  {
    path: 'lineChart',
    component: LineChartComponent,
  },
  {
    path: '**',
    redirectTo: 'barChart',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
