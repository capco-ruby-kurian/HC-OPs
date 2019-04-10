import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HttpXrsService } from '../../providers/http-xrs.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { EditServiceService } from '../../providers/edit-service.service';
import { CategorysubcategoryService } from '../../providers/categorysubcategory.service';



const createFormGroup = dataItem => new FormGroup({
    'cityName': new FormControl(dataItem.cityName),
});
@Component({
    selector: 'app-admin-city',
    templateUrl: './admin-city.component.html',
    styleUrls: ['./admin-city.component.scss']
})
export class AdminCityComponent implements OnInit {
    gridData = [];
    r: any;
    @Input() public countryDetails: any;
    @Input() public stateDetails: any;
    @Output() refreshCountryDetails = new EventEmitter();
    public sss: String;
    public formGroup: FormGroup;
    private editedRowIndex: number;
    public data = [];
    constructor(private location: HttpXrsService, private categorysubcategory: CategorysubcategoryService, public router: Router, public es: EditServiceService) { }

    ngOnInit() {
        this.gridData = this.location.city;
        console.log("city display:", this.gridData);
    }

    public locations(name: string): any {
        return this.data.find(x => x.cityName === name);
    }

    public addHandler({ sender }) {
        this.closeEditor(sender);

        this.formGroup = createFormGroup({
            'cityName': '',
        });
        sender.addRow(this.formGroup);
    }

    public editHandler({ sender, rowIndex, dataItem }) {
        this.closeEditor(sender);
        this.formGroup = createFormGroup(dataItem);
        this.editedRowIndex = rowIndex;
        sender.editRow(rowIndex, this.formGroup);
    }


    private updateSubCategory(dataItem, formGroup) {
        this.location.httprequest({
            type: 'POST', url: 'city/editCity/' + dataItem.cityId,
            data: { "cityName": formGroup.value.cityName }
        })
            .then((data) => {
                debugger;
                this.refreshCountryDetails.emit("");
                if (data) { console.log("data  saved:", data); }
                else {
                    console.log("error");
                }
            }, (error) => {
                console.log(error);
            });
    }

    public saveHandler({ dataItem, sender, rowIndex, formGroup, isNew }) {
        const cityName = formGroup.value;
        //start
        debugger;
        // this.category;
        if (!isNew) {
            this.updateSubCategory(dataItem, formGroup);
            this.changeView(cityName, isNew, rowIndex, sender);
            return;
        }
        // new subcategory
        var details = {
            "countryName": this.countryDetails.countryName,
            "states": [
                {
                    "stateName": this.stateDetails.stateName,
                    "cities": [

                        {
                            "cityName": formGroup.value.cityName
                        }
                    ]
                }
            ]
        };
        this.location.httprequest({
            type: 'POST', url: 'city/addCity',
            data: details
        })
            .then((data) => {
                debugger;
                this.refreshCountryDetails.emit("");
                if (data) { console.log("data saved/Added:", data); }
                else {
                    console.log("error");
                }
            }, (error) => {
                console.log(error);
            });
        this.changeView(cityName, isNew, rowIndex, sender);

    }

    public changeView(cityName, isNew, rowIndex, sender) {

        // update the data source
        this.es.save(cityName, isNew);
        // close the editor, that is, revert the row back into view mode
        sender.closeRow(rowIndex);
    }

    public cancelHandler({ sender, rowIndex }) {
        this.closeEditor(sender, rowIndex);
    }

    private closeEditor(grid, rowIndex = this.editedRowIndex) {
        grid.closeRow(rowIndex);
        this.editedRowIndex = undefined;
        this.formGroup = undefined;
    }

    public removeHandler({ dataItem }): void {
        this.categorysubcategory.remove(dataItem);
        console.log("deleted data", dataItem);
    }

    // Delete the selected data
    removeItems(i) {

        // this.gridData.splice(i, 1);
        this.location.httprequest({ type: 'DELETE', url: 'city/deleteCityId/' + i.cityId, data: {} })
            .then((data) => {
                // debugger;
                this.ngOnInit();
            }, (data) => {
                console.log("error");
                console.log(data);

            });
    }
}
