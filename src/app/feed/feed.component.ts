import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {MICROSERVICE_URL} from '../utils/constants';
import {FeedModel} from '../models/feed.model';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {

  feed: FeedModel[];
  feedBaseUrl: string;

  constructor(private http: HttpClient) {
    this.feedBaseUrl = MICROSERVICE_URL;
  }

  ngOnInit(): void {
    this.initializeFeed();
  }

  initializeFeed() {
    this.http.get(this.feedBaseUrl).subscribe((data: FeedModel[]) => {
      this.feed = data;
      console.dir(data);
    });
  }

}
