import { Component, OnInit, Inject, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { STORE_KEY, AppState } from '../../store';
import { DropDownState } from '../../store/reducers/drop-down.reducer';
import { DropDownItem } from './drop-down.model';
import { from } from 'rxjs/observable/from';


@Component({
  selector: 'app-drop-down',
  templateUrl: './drop-down.component.html',
  styles: []
})
export class DropDownComponent implements OnInit {

  @Input() selectType: string;
  options = [];

  constructor(@Inject('drop-down') private service) {
    // if (this.selectType == 'date') {
      this.options = [
        { id: "1", value: "2020/06", select: false },
        { id: "2", value: "2020/05", select: false }
      ]
    // } else if (this.selectType == 'account') {
    //   this.options = [
    //     { "id": "1", "value": "Account1", "select": true }, 
    //     { "id": "2", "value": "Account2", "select": false }
    //   ]
    // }
  }

  ngOnInit() {
  }

  // getSelectDataByType(selectType);

  getSelectDataByType(type: any) {
    this.options = this.service.getSelectOptions('date');
    console.log("获取到数据", this.options);
  }

  getSelectedValue(value) {
    // this.store
  }

}
