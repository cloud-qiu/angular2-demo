import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, Selector } from '@ngrx/store';
import { map } from 'rxjs/operators';
import { DropDownItem } from './drop-down/drop-down.model';
import { STORE_KEY, AppState } from '../store';
import { DropDownState } from '../store/reducers/drop-down.reducer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  selectType = 'date';

  dropDownItems$: Observable<DropDownItem[]>;
  editTargetIndex: number;
  dropDownItem: string;
  editing: boolean = false;

  constructor(private store: Store<AppState>) {
    this.dropDownItems$ = this.store.select('dropDownState').pipe(
      map((state: DropDownState) => state.dropDownItems)
    );
  }
}
