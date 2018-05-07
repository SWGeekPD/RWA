import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-rwa',
  templateUrl: './rwa.component.html',
  styleUrls: ['./rwa.component.css']
})
export class RWAComponent implements OnInit {
  private gridApi;
  private gridColumnApi;

  private columnDefs;
  private defaultColDef;
  private defaultColGroupDef;
  private columnTypes;
  private rowData;
  constructor(private http: HttpClient) {

    this.columnDefs = [
      {
        headerName: 'Q1 Result',
        field: 'q1Result'
      },
      {
        headerName: 'Q2 Result',
        field: 'q2Result'
      }
    ];

  }

  ngOnInit() {
  }

  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;


    this.rowData = [{
      'q1Result': 100,
      'q2Result': 200
    }, {
      'q1Result': 110,
      'q2Result': 210
    }];
    // this.http
    //   .get('https://raw.githubusercontent.com/ag-grid/ag-grid-docs/master/src/olympicWinnersSmall.json')
    //   .subscribe(data => {
    //     params.api.setRowData(data);
    //   });
  }
}
