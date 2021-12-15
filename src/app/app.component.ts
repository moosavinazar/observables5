import {Component, OnInit} from '@angular/core';
import {User} from "./models/app-model";
import {filter, from, of} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private http: HttpClient ) {
  }

  users: User[] = [
    {
      name: 'Foad',
      age: 40,
      status: 'active'
    },
    {
      name: 'Rezvan',
      age: 30,
      status: 'active'
    },
    {
      name: 'Ferion',
      age: 28,
      status: 'inactive'
    },
    {
      name: 'Miad',
      age: 32,
      status: 'inactive'
    },
  ];

  public ngOnInit() {

    of(1, 2,3, 4, 5, 6, 7, 8, 9).subscribe(val => {

      let body = JSON.stringify({
        body: 'Test123',
        title: 'Test Title'
      });

      let headers = new HttpHeaders({'Content-Type': 'application/json; charset=UTF-8'});
      let options = { headers: headers }

      this.http.patch(`https://jsonplaceholder.typicode.com/posts/${ val }`, body, options).subscribe(console.log)
    });

    from(this.users).pipe(
      filter(user => user.age < 35 && user.status === 'active')
    ).subscribe(console.log);
  }

}
