import {Component, Input, OnInit} from '@angular/core';
import {FeedModel} from '../../models/feed.model';

@Component({
  selector: 'app-feed-element',
  templateUrl: './feed-element.component.html',
  styleUrls: ['./feed-element.component.css']
})
export class FeedElementComponent implements OnInit {

  @Input() feedData: FeedModel;

  constructor() {
  }

  ngOnInit(): void {
  }

}
