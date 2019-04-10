import { Component, OnInit } from '@angular/core';
import { HttpXrsService } from '../../providers/http-xrs.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { ChartComponent } from '@progress/kendo-angular-charts';
import { saveAs } from '@progress/kendo-file-saver';
import { exportPDF } from '@progress/kendo-drawing/pdf'; 
import { ExcelExportModule } from '@progress/kendo-angular-excel-export';
@Component({
    selector: 'app-admin-dashboard',
    templateUrl: './admin-dashboard.component.html',
    styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent implements OnInit {
  reOpen: any;
  closed: any;
  cancled: any;
  resolved: any;
  onhold: any;
  inprogress: any;
  open: any;
  gridData: any;
  barAxis: any;
  barGraphAxis: void;
  percent: any;
  categoryAxis: void;
  public ctyAxis: any;
  public lineUnit = 'weeks';
  public barUnit = 'weeks';
  dataSeries: any;

    constructor(public admindashboard: HttpXrsService, public router: Router) { }
    ngOnInit() {
        /**
   * @param type endpoint for which we get the json data
   */
           //Incidents Details for the month of March(2018 
        this.admindashboard.httprequest({ type: 'GET', url: 'Dashboard/getAllSLA', data: {} })
            .then((data: any) => {
                console.log("admin header component ", data);
                this.gridData = data;
        });
              // Daily Request Time Trend
            this.categoryAxis = this.mockData();


              //Request Resolution Time Trend
              this.barGraphAxis = this. BarGraphData();


            // Percentage wise status rendering
            this.admindashboard.httprequest({ type: 'GET', url: 'incident/getOpenStatus' })
            .then((data: any) => {
              this.percentageDetails(data);
              console.log("percentage wise rendering",this.percent);
            });

    }

    percentageDetails(data){
      this.open=data.open;
      this.inprogress=data.inprogress;
      this.onhold=data.onHold;
      this.resolved=data.resolved;
      this.cancled=data.cancel;
      this.closed=data.close;
      this.reOpen=data.reOpen;
      } 
       
      
    checkMethod(event) {
        console.log("event :", event);

    }
    mockData() {
      this.admindashboard.httprequest({ type: 'GET', url: './assets/data/dailyTT.json', data: {} })
        .then((data: any) => {
          console.log("filterData", data);
          this.ctyAxis = data.newreqst;
          console.log("filterDataaaa", this.ctyAxis);
          for (var index = 0; index < this.ctyAxis.length; index++) {
            // var element = this.categoryAxis[index];
            this.ctyAxis[index].RangeFilter.map(p => {
              p.Date = new Date(p.Timestamp);
              return p;
            });
          }
        });
    }

    // bar graph
    BarGraphData() {
      this.admindashboard.httprequest({ type: 'GET', url: 'http://localhost:8080/Dashboard/findByPerDay', data: {} })
        .then((data: any) => {
          console.log("filterData", data);
          this.barAxis = data.newRequest;
          console.log("column filterDataaaa", this.barAxis);
          for (var index = 0; index < this.barAxis.length; index++) {
            // var element = this.categoryAxis[index];
            this.barAxis[index].rangeFilter.map(p => {
              p.Date = new Date(p.Timestamp);
              return p;
            });
          }
        });
    }

    /**
     * Export Chart
     */
    private chart: ChartComponent;
    public exportChart(): void {
        this.chart.exportImage().then((dataURI) => {
          saveAs(dataURI, 'chart.png');
        });
      } 
      public exportExcel(): void {
        this.chart.exportSVG().then((dataURI) => {
          saveAs(dataURI, 'chart.svg');
        });
      } 
      public exportPDF(): void {
        const visual = this.chart.exportVisual();
        exportPDF(visual, {
          paperSize: "A4",
          landscape: true
        }).then((dataURI) => {
          saveAs(dataURI, 'chart.pdf');
        });
      }
    
}
