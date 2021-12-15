import {Component, OnInit} from '@angular/core';
import {User} from "./models/app-model";
import {filter, from} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

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

    from(this.users).pipe(
      filter(user => user.age < 35 && user.status === 'active')
    ).subscribe(console.log);
  }

}
