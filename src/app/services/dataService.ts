import { Injectable, Output, EventEmitter } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class GitHubServiceProvider {

  @Output() onUserSearch: EventEmitter<any> = new EventEmitter<any>();
  constructor(private http: Http) {}

  public getUserInfo(username) {
    return this.http.get(`https://api.github.com/users/${username}`)
                .map(this.extractData)
                .catch(this.handleError);
  }

  private extractData(res) {
    return res.json();
  }

  private handleError (error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const err = error || '';
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}
