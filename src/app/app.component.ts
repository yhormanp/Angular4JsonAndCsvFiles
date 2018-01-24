import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { PrimarySourcesService } from './primary-sources.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  datajson;
  datacsv: any[] = [];;

  constructor(private dataService: PrimarySourcesService) {
  }

  ngOnInit() {
    
    // this.dataService.readJsonData()
    // .subscribe(x => this.datajson = x);
   
    // this.dataService.readCsvData()
    // .subscribe(x => this.datacsv = x);

    this.OnFilter('');
    // this.datajson=this.dataService.datajson
    // console.log ('data received');
    // console.log (this.datajson);
  }

  OnFilter(filter: string)
  {
    this.dataService.getData(filter);

    // this.dataService.readJsonData()
    // .subscribe(x => this.datajson = x);
   
    // this.dataService.readCsvData()
    // .subscribe(x => this.datacsv = x);
  }


}
