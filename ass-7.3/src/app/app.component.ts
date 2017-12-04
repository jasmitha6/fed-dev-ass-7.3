import { Component } from '@angular/core';
// defining component property
@Component({
  selector: 'app-component',
  templateUrl: 'app.component.html',
  styleUrls: ['./app.component.css']
})
export class RootComponent {

  cricketPlayer: ICricketPlayer[] = [];
  ngOnInit() {
    this.cricketPlayer = [{
      name: "Sachin",
      lastName: 'Tendulkar'
    },
    {
      name: "MS",
      lastName: 'Dhoni'
    },
    {
      name: "Virat",
      lastName: 'Kohli'
    }]

  }
}
// defining interface ICricketPlayer
interface ICricketPlayer {
  name: string;
  lastName: string;
}
