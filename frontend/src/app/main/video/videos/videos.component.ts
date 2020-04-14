import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

import { VideoService } from '../../../services/video.service';

@Component({
  selector: 'app-video',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.scss']
})
export class VideoComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'email', 'role'];
  data: any;
  videoForm: FormGroup;
  totalVideos = 0;
  totalTime = 0;

  resultsLength = 0;
  isLoadingResults = true;

  constructor(
    private videoService: VideoService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
     this.data = {
      "meta": {
        "mostUsedWordsTitle": [
          ["covid19", 275],
          ["the", 204],
          ["coronavirus", 99],
          ["and", 50],
          ["for", 35]
        ],
        "dailyMin": [10, 30, 20, 50]
      },
      "playlist": [{
        "minutes": 10,
        "items": [{
          "kind": "youtube#searchResult",
          "etag": "\"tnVOtk4NeGU6nDncDTE5m9SmuHc/6_79c5d2Fi_uahFYDVjyvGtfFRw\"",
          "id": {
            "kind": "youtube#video",
            "videoId": "PHAcd7I0TZk"
          },
          "snippet": {
            "publishedAt": "2020-04-14T04:15:46.000Z",
            "channelId": "UCqYw-CTd1dU2yGI71sEyqNw",
            "title": "LIVESTREAM: GMA NEWS COVID-19 Bulletin - 11:30 AM | April 14, 2020 | Replay",
            "description": "Subscribe to our YouTube channel for updates about the novel coronavirus disease 2019 (COVID-19) and the Luzon-wide lockdown or the Enhanced ...",
            "thumbnails": {
              "default": {
                "url": "https://i.ytimg.com/vi/PHAcd7I0TZk/default.jpg",
                "width": 120,
                "height": 90
              },
              "medium": {
                "url": "https://i.ytimg.com/vi/PHAcd7I0TZk/mqdefault.jpg",
                "width": 320,
                "height": 180
              },
              "high": {
                "url": "https://i.ytimg.com/vi/PHAcd7I0TZk/hqdefault.jpg",
                "width": 480,
                "height": 360
              }
            },
            "channelTitle": "GMA News",
            "liveBroadcastContent": "none"
          },
          "contentDetails": {
            "duration": 10,
            "dimension": "2d",
            "definition": "hd",
            "caption": "false",
            "licensedContent": true,
            "projection": "rectangular"
          }
        }, {
          "kind": "youtube#searchResult",
          "etag": "\"tnVOtk4NeGU6nDncDTE5m9SmuHc/YuCC02w9nFdtqg__NfKxp-bvfKE\"",
          "id": {
            "kind": "youtube#video",
            "videoId": "AcmuRXnnShI"
          },
          "snippet": {
            "publishedAt": "2020-04-12T19:39:47.000Z",
            "channelId": "UC2SEk1w7DgoHs_G3w1biz-w",
            "title": "Por Covid-19, muere el presidente de la BMV, Jaime Ruiz Sacristán",
            "description": "Ruiz Sacristán habría contraído la enfermedad del coronavirus Covid-19 en un viaje a Vail, Colorado, en marzo pasado #JaimeRuizSacristán #Covid19México ...",
            "thumbnails": {
              "default": {
                "url": "https://i.ytimg.com/vi/AcmuRXnnShI/default.jpg",
                "width": 120,
                "height": 90
              },
              "medium": {
                "url": "https://i.ytimg.com/vi/AcmuRXnnShI/mqdefault.jpg",
                "width": 320,
                "height": 180
              },
              "high": {
                "url": "https://i.ytimg.com/vi/AcmuRXnnShI/hqdefault.jpg",
                "width": 480,
                "height": 360
              }
            },
            "channelTitle": "El Universal",
            "liveBroadcastContent": "none"
          },
          "contentDetails": {
            "duration": 0,
            "dimension": "2d",
            "definition": "hd",
            "caption": "false",
            "licensedContent": true,
            "projection": "rectangular"
          }
        }]
      }, {
        "minutes": 30,
        "items": [{
          "kind": "youtube#searchResult",
          "etag": "\"tnVOtk4NeGU6nDncDTE5m9SmuHc/qv5u3qgPYorCGHNo6o5IdLBZvak\"",
          "id": {
            "kind": "youtube#video",
            "videoId": "vsV_PJ3txn8"
          },
          "snippet": {
            "publishedAt": "2020-03-13T20:58:23.000Z",
            "channelId": "UCTrQ7HXWRRxr7OsOtodr2_w",
            "title": "WHO says Europe new coronavirus pandemic epicentre as global covid-19 death toll passes 5,000",
            "description": "The head of the World Health Organisation has urged European countries to take more aggressive action against the virus as he says Europe is the new ...",
            "thumbnails": {
              "default": {
                "url": "https://i.ytimg.com/vi/vsV_PJ3txn8/default.jpg",
                "width": 120,
                "height": 90
              },
              "medium": {
                "url": "https://i.ytimg.com/vi/vsV_PJ3txn8/mqdefault.jpg",
                "width": 320,
                "height": 180
              },
              "high": {
                "url": "https://i.ytimg.com/vi/vsV_PJ3txn8/hqdefault.jpg",
                "width": 480,
                "height": 360
              }
            },
            "channelTitle": "Channel 4 News",
            "liveBroadcastContent": "none"
          },
          "contentDetails": {
            "duration": 29,
            "dimension": "2d",
            "definition": "hd",
            "caption": "false",
            "licensedContent": true,
            "projection": "rectangular"
          }
        }, {
          "kind": "youtube#searchResult",
          "etag": "\"tnVOtk4NeGU6nDncDTE5m9SmuHc/Q2E0yQtrWXHg0AKG0DR4_bWzXIc\"",
          "id": {
            "kind": "youtube#video",
            "videoId": "9YQdnsWct08"
          },
          "snippet": {
            "publishedAt": "2020-04-14T07:09:34.000Z",
            "channelId": "UCPgLNge0xqQHWM5B5EFH9Cg",
            "title": "Trump has meltdown at covid-19 press conference lashing out at media and shows propaganda video",
            "description": "A furious Donald Trump lashed out at the media in a 'meltdown' during the daily coronavirus briefing at the White House. The US President was largely reacting ...",
            "thumbnails": {
              "default": {
                "url": "https://i.ytimg.com/vi/9YQdnsWct08/default.jpg",
                "width": 120,
                "height": 90
              },
              "medium": {
                "url": "https://i.ytimg.com/vi/9YQdnsWct08/mqdefault.jpg",
                "width": 320,
                "height": 180
              },
              "high": {
                "url": "https://i.ytimg.com/vi/9YQdnsWct08/hqdefault.jpg",
                "width": 480,
                "height": 360
              }
            },
            "channelTitle": "The Telegraph",
            "liveBroadcastContent": "none"
          },
          "contentDetails": {
            "duration": 1,
            "dimension": "2d",
            "definition": "hd",
            "caption": "false",
            "licensedContent": true,
            "projection": "rectangular"
          }
        }]
      }, {
        "minutes": 20,
        "items": [{
          "kind": "youtube#searchResult",
          "etag": "\"tnVOtk4NeGU6nDncDTE5m9SmuHc/q6gAXIXwylQAXPlBH_cZ1jRrQ4w\"",
          "id": {
            "kind": "youtube#video",
            "videoId": "qc6VV7ue4cE"
          },
          "snippet": {
            "publishedAt": "2020-04-08T21:20:41.000Z",
            "channelId": "UCG-iSMVtWbbwDDXgXXypARQ",
            "title": "Coronavirus Pandemic Update 52: Ivermectin Treatment; Does COVID-19 Attack Hemoglobin?",
            "description": "COVID-19 Update 52 with Roger Seheult, MD of https://www.MedCram.com Dr. Seheult illustrates the possible mechanism of the medication Ivermectin for a ...",
            "thumbnails": {
              "default": {
                "url": "https://i.ytimg.com/vi/qc6VV7ue4cE/default.jpg",
                "width": 120,
                "height": 90
              },
              "medium": {
                "url": "https://i.ytimg.com/vi/qc6VV7ue4cE/mqdefault.jpg",
                "width": 320,
                "height": 180
              },
              "high": {
                "url": "https://i.ytimg.com/vi/qc6VV7ue4cE/hqdefault.jpg",
                "width": 480,
                "height": 360
              }
            },
            "channelTitle": "MedCram - Medical Lectures Explained CLEARLY",
            "liveBroadcastContent": "none"
          },
          "contentDetails": {
            "duration": 20,
            "dimension": "2d",
            "definition": "hd",
            "caption": "true",
            "licensedContent": true,
            "projection": "rectangular"
          }
        }]
      }, {
        "minutes": 50,
        "items": [{
          "kind": "youtube#searchResult",
          "etag": "\"tnVOtk4NeGU6nDncDTE5m9SmuHc/IFC5iJFpVBVbduSEWphu7mBpJRM\"",
          "id": {
            "kind": "youtube#video",
            "videoId": "RvcA1U0NuNc"
          },
          "snippet": {
            "publishedAt": "2020-04-09T07:00:33.000Z",
            "channelId": "UCZMsvbAhhRblVGXmEXW8TSA",
            "title": "CORONAVIRUS IN DEUTSCHLAND: Wieder deutlich mehr Covid-19-Tote vor Ostern",
            "description": "Die Zahl der weltweit nachgewiesenen Infektionen mit dem Coronavirus hat inzwischen die Marke von 1,5 Millionen überschritten. In Deutschland zählt die ...",
            "thumbnails": {
              "default": {
                "url": "https://i.ytimg.com/vi/RvcA1U0NuNc/default.jpg",
                "width": 120,
                "height": 90
              },
              "medium": {
                "url": "https://i.ytimg.com/vi/RvcA1U0NuNc/mqdefault.jpg",
                "width": 320,
                "height": 180
              },
              "high": {
                "url": "https://i.ytimg.com/vi/RvcA1U0NuNc/hqdefault.jpg",
                "width": 480,
                "height": 360
              }
            },
            "channelTitle": "WELT Nachrichtensender",
            "liveBroadcastContent": "none"
          },
          "contentDetails": {
            "duration": 39,
            "dimension": "2d",
            "definition": "hd",
            "caption": "false",
            "licensedContent": true,
            "projection": "rectangular"
          }
        }, {
          "kind": "youtube#searchResult",
          "etag": "\"tnVOtk4NeGU6nDncDTE5m9SmuHc/PJpTUG7v-jG-wJO5PlNAnl4E5is\"",
          "id": {
            "kind": "youtube#video",
            "videoId": "YyqRsOPo4Ik"
          },
          "snippet": {
            "publishedAt": "2020-04-14T03:26:43.000Z",
            "channelId": "UCBi2mrWuNuyYy4gbM6fU18Q",
            "title": "A Tale of Two Countries: Sweden, Germany take different COVID-19 approaches",
            "description": "Sweden still hasn't imposed a full lockdown even though death rates have jumped compared other Nordic countries; Germany, in contrast, has deployed ...",
            "thumbnails": {
              "default": {
                "url": "https://i.ytimg.com/vi/YyqRsOPo4Ik/default.jpg",
                "width": 120,
                "height": 90
              },
              "medium": {
                "url": "https://i.ytimg.com/vi/YyqRsOPo4Ik/mqdefault.jpg",
                "width": 320,
                "height": 180
              },
              "high": {
                "url": "https://i.ytimg.com/vi/YyqRsOPo4Ik/hqdefault.jpg",
                "width": 480,
                "height": 360
              }
            },
            "channelTitle": "ABC News",
            "liveBroadcastContent": "none"
          },
          "contentDetails": {
            "duration": 11,
            "dimension": "2d",
            "definition": "hd",
            "caption": "false",
            "licensedContent": true,
            "projection": "rectangular"
          }
        }]
      }]
    }
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
    this.data.playlist.map((list) => this.totalVideos = this.totalVideos + list.items.length);
    this.data.playlist.map((list) => this.totalTime = this.totalTime + list.minutes);
  }

  getVideos(): any {
    this.isLoadingResults = true;
    this.videoService.getVideosBySearch(this.videoForm.get('title').value, this.videoForm.get('hours').value)
      .subscribe((videosList) => {
        this.data = videosList;
      })
  }
}

