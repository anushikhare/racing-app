import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'racing-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  headerDetails;
  appDataLoaded = false;
  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<any>(`/assets/racing-data-sample-v1.json`)
      .subscribe(feed => {
        this.headerDetails = {
          trackName: feed.Races[0].meet.trackName,
          raceNumber: feed.Races[0].raceCollection[1].raceNumber,
          raceDate: feed.Races[0].raceCollection[1].date,
          raceTime: feed.Races[0].raceCollection[1].date, // TODO: use moment.js to extract just the time
          raceDistance: feed.Races[0].raceCollection[1].distance,
          raceName: feed.Races[0].raceCollection[1].name,
        };
        this.appDataLoaded = true;
      });
  }
}
