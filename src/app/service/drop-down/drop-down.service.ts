import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { DropDownItem } from '../../drop-down/drop-down.model';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable()
export class DropDownService {
  options = [];
  constructor(private http: Http) { }
  getSelectOptions(type: string): Promise<any> {
    // debugger
    console.log("获取数据第一步", type)
    let url = '';
    if (type === 'date') {
      url = environment.selectDateUrl;
      console.log("请求URL", url)
    } else if (type === 'account') {
      url = environment.selectAccountUrl;
    } else {
      return;
    }
    return this.http.get(url).toPromise().then((res) => { 
      res.json().data 
    });
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
