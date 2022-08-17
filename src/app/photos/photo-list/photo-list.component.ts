import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Photos, PhotosReturn } from '../photo/model/photo.model';
import { PhotoService } from '../photo/photo.service';

@Component({
  selector: 'ap-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css'],
})
export class PhotoListComponent implements OnInit {
  constructor(
    private activatedRoute: ActivatedRoute,
    private photoService: PhotoService
  ) {}

  photos: Photos[] = [];
  photosReturn: PhotosReturn[];
  filter: string = '';
  currentPage: number = 1;
  userName: string;
  hasMore: boolean = true;

  ngOnInit(): void {
    this.photosReturn = this.activatedRoute.snapshot.data['photos'];
    this.userName = this.activatedRoute.snapshot.params['userName'];

    this.LoadPhotos(this.photosReturn);
  }

  public load() {
    this.filter = '';
    this.photoService
      .listFromUserNamePaginated(this.userName, ++this.currentPage)
      .subscribe((photos) => this.LoadPhotos(photos));
  }

  private LoadPhotos(photos: PhotosReturn[]) {
    photos.forEach((element) => {
      this.photos = [
        ...this.photos,
        {
          url: element.urls.full + '&crop=edges&fit=crop&w=300&h=100',
          description: element.description,
          user: element.user.username,
        },
      ];
    });

    if (!photos.length) this.hasMore = false;
  }
}
