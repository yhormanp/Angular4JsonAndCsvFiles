import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map'
import { _ } from 'underscore';


@Injectable()
export class PrimarySourcesService {
  datajson;
  datacsv: any[] = [];;

  constructor(private http:Http) { }

  getData(filter: string){
    this.readJsonData();
    this.readCsvData();

    // return mixAndFilterData;

  }

  readJsonData() {
    // return
     this.http.get('./assets/data/infoColors.json')
      .map(x  => this.datajson=x.json());
  }


  readCsvData() {
    // return 
    this.http.get('./assets/data/users.csv')
      .map(
      data => this.extractData(data),
      err => this.handleError(err)
      );
  }

  private extractData(res: Response) {

    let csvData = res['_body'] || '';
    let allTextLines = csvData.split(/\r\n|\n/);
    let headers = allTextLines[0].split(',');
    let lines = [];

    for (let i = 0; i < allTextLines.length; i++) {
      // split content based on comma
      let data = allTextLines[i].split(',');
      if (data.length == headers.length) {
        let tarr = [];
        for (let j = 0; j < headers.length; j++) {
          tarr.push(data[j]);
        }
        lines.push(tarr);
      }
    }
    this.datacsv = lines;
    return lines;
    // console.log(lines);
  }

  private handleError(error: any) {
    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return errMsg;
  }


  mixAndFilterData() {

  }

}
