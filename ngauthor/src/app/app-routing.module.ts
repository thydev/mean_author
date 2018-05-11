import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewauthorComponent } from './newauthor/newauthor.component';
import { EditauthorComponent } from './editauthor/editauthor.component';
import { ListingComponent } from './listing/listing.component';
import { HomeComponent } from './home/home.component';
import { QuotesComponent } from './quotes/quotes.component';
import { QuotesaddComponent } from './quotesadd/quotesadd.component';

const routes: Routes = [
  { path: 'new', component: NewauthorComponent },
  { path: 'edit/:id', component: EditauthorComponent },
  { path: 'listing', component: ListingComponent },
  { path: 'home', component: HomeComponent },
  { path: 'quotes/:id', component: QuotesComponent },
  { path: 'write/:id', component: QuotesaddComponent },
  // { path: '', component: HomeComponent},
  // { path: '', pathMatch: 'full', redirectTo: '/home' },
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
