import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { ProfileComponent } from './profile/profile.component';
import { GitHubServiceProvider } from './services/dataService';

@NgModule({
  declarations: [
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [GitHubServiceProvider],
  bootstrap: [ProfileComponent]
})
export class AppModule { }
