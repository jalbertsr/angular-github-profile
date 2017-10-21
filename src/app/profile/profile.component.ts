import { Component, OnInit } from '@angular/core';
import { GitHubServiceProvider } from '../services/dataService';

@Component({
  selector: 'app-root',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  providers: [GitHubServiceProvider]
})
export class ProfileComponent {
  public title = 'Github profile';
  public username = 'jalbertsr';
  public data = {};
  constructor (private gitHubServiceProvider: GitHubServiceProvider) {}

  // tslint:disable-next-line:use-life-cycle-interface
  ngOnInit () {
    this.gitHubServiceProvider.getUserInfo(this.username)
    .subscribe(info => {
      this.data = info;
      console.log(this.data);
    });
  }
}
