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

  private getUser (user) {
    this.gitHubServiceProvider.getUserInfo(user)
    .subscribe(info => {
      this.data = info;
      console.log(this.data);
    });
  }

  // tslint:disable-next-line:use-life-cycle-interface
  ngOnInit () {
    this.getUser(this.username);
  }

  handleSubmit (event: any): void {
    event.preventDefault();
    this.username = event.target.value;
    this.getUser(this.username);
  }
}
