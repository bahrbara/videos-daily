import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

import { VideoService } from '../../../services/video.service';

@Component({
  selector: 'app-video',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.scss']
})
export class VideoComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'email', 'role'];
  videos: any;
  videoForm: FormGroup;
  totalVideos = 0;
  totalTime = 0;

  resultsLength = 0;
  isLoadingResults = false;

  constructor(
    private videoService: VideoService,
    private formBuilder: FormBuilder,
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit(): void {
    this.videoForm = this.createVideoForm();
    this.calculateTotal();
  }

  createVideoForm(): FormGroup {
    return this.formBuilder.group({
      title: ['', Validators.required],
      hours: ['', [Validators.required]],
    });
  }

  calculateTotal(): any {
    if (this.videos) {
      this.videos.playlist.map((list) => this.totalVideos = this.totalVideos + list.items.length);
      this.videos.playlist.map((list) => this.totalTime = this.totalTime + list.minutes);
    }
  }

  getVideos(): any {
    this.isLoadingResults = true;
    this.videoService.getVideosBySearch(this.videoForm.get('title').value, this.videoForm.get('hours').value)
      .subscribe((videosList) => {
        console.log(videosList);
        this.videos = videosList;
      });
      this.isLoadingResults = false;
  }

  getSafeVideoURL(videoLink): any {
    return this.sanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${videoLink}`)
  }
}

