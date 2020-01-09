import { Component } from '@angular/core';
import { Movie } from "./movie"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'new-movies';

  watched = [
    new Movie("Into the Spiderverse", "Animation", 2019),
    new Movie("The  Way", "Comedy/Drama", 2011),
  ];

  toWatch = [
    new Movie("Knives Out", "Drama", 2019),
    new Movie("Abominable", "Animation", 2011),
  ];
}
