import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { debounceTime, Subject } from 'rxjs';

@Component({
  selector: 'ap-search-photo',
  templateUrl: './search-photo.component.html',
})
export class SearchPhotoComponent implements OnInit, OnDestroy {
  debounce: Subject<string> = new Subject<string>();

  @Output() onTyping: EventEmitter<string> = new EventEmitter<string>();
  @Input() valueFilter: string = '';

  ngOnInit(): void {
    this.debounce
      .pipe(debounceTime(500))
      .subscribe((filter) => this.onTyping.emit(filter));
  }
  ngOnDestroy(): void {
    this.debounce.unsubscribe();
  }

  getValue(event: Event): string {
    return (event.target as HTMLInputElement).value;
  }
}
