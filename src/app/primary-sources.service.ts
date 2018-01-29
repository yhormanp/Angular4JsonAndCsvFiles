import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map'
import { _ } from 'underscore';

import { Observable } from 'rxjs/Rx';

import { forkJoin } from "rxjs/observable/forkJoin";

@Injectable()
export class PrimarySourcesService {
  datajson;
  datacsv: any[] = [];;

  constructor(private http:Http) { }

  // getData(){
  //    let dataA= this.readJsonData();
  //    let dataB= this.readCsvData();

  //    return forkJoin([dataA, dataB]).subscribe(results => {
  //      console.log (results[0]);
  //      console.log ( results[1]);
  //     // results[0] is our character
  //     // results[1] is our character homeworld
  //     return {
  //       data1: results[0],
  //       data2: results[1]
  //     }
  //     // return [].concat (results[0], results[1]);
  //   });


  // }

  // activateSearch():Observable<any> {
  //   return this.getAllJsonAndCsvData();
  // }

  // getAllJsonAndCsvData():Observable<any>{
  //   const dataA= this.http.get('./assets/data/infoColors.json')
  //   .map(jsonData => 
  //     jsonData.json());

  //     const dataB= this.http.get ('./assets/data/users.csv')
  //     .map(
  //       data => this.extractData(data),
  //       err => this.handleError(err)
  //       );

  //       return Observable.forkJoin([dataA, dataB])
  //       .map (Responses => {
  //         console.log ('info');
  //         console.log (Responses[0]);
  //         console.log (Responses[1]);
  //         return [].concat (Responses[0], Responses[1]);
  //         // responses[0] => cars
  //       // responses[1] => bikes

  //       })

        


  // }

  readJsonData() {
    console.log ('json obtained')
       return                     this.http.get('./assets/data/infoColors.json')
      .map(x  => this.datajson=x.json());
      // console.log ('json obtained')
      
  }


  readCsvData() {
      return          this.http.get('./assets/data/users.csv')
      .map(
      data => this.extractData(data)
      // err => this.handleError(err)
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
    console.log('data obtained');
    return lines;
     
  }

  private handleError(error: any) {
    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return errMsg;
  }


  // mixAndFilterData() {
  //   console.log (this.datajson);
  //   if (this.datajson)
  //   {
  //     console.log('info returned');
  //     console.log (this.datajson);
  //     console.log (this.datacsv);
  //     return {
  //       datajson: this.datajson,
  //       datacsv: this.datacsv
  //     }

  //   }
  // }

}
