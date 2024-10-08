import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TopbarComponent } from './topbar/topbar.component';
import {CitySearchResultsComponent} from "./city-search-results/city-search-results.component";

const routes: Routes = [
  { path: 'HousingPricePilot-1.0-SNAPSHOT', component: TopbarComponent, title: 'Home Page', pathMatch: 'full' },
  { path: 'HousingPricePilot-1.0-SNAPSHOT/results', component: CitySearchResultsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
