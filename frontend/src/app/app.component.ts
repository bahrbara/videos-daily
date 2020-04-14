import { Component, OnInit } from '@angular/core';

import { VideoService } from './services/video.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Ahgora Challenge';
  isMenuOpen = true;
  contentMargin = 240;

  constructor(
    private videoService: VideoService
  ) {}

  ngOnInit(): void {}

}
