import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HttpXrsService } from '../../providers/http-xrs.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { EditServiceService } from '../../providers/edit-service.service';
import { CategorysubcategoryService } from '../../providers/categorysubcategory.service';


const createFormGroup = dataItem => new FormGroup({
    'stateName': new FormControl(dataItem.stateName),
});
@Component({
    selector: 'app-admin-state',
    templateUrl: './admin-state.component.html',
    styleUrls: ['./admin-state.component.scss']
})
export class AdminStateComponent implements OnInit {
    gridData = [];
    r: any;
    @Input() public countryDetails: any;
    // public dataItemCountry:any;
    public sss: String;
    public formGroup: FormGroup;
    private editedRowIndex: number;
    public data = [];
    @Output() refreshCountryDetails = new EventEmitter();


    constructor(private location: HttpXrsService, private categorysubcategory: CategorysubcategoryService, public router: Router, public es: EditServiceService) { }

    ngOnInit() {
        this.gridData = this.location.state;
        console.log("state display:", this.gridData)
    }
    showSubCat(evt) {
        this.location.city = evt.dataItem.cities;
        console.log("helloooooooo", this.location.city);
    }

    public locations(name: string): any {
        return this.data.find(x => x.stateName === name);
    }

    public addHandler({ sender }) {
        this.closeEditor(sender);

        this.formGroup = createFormGroup({
            'stateName': '',
        });
        sender.addRow(this.formGroup);
    }

    public editHandler({ sender, rowIndex, dataItem }) {
        debugger;
        this.closeEditor(sender);
        this.formGroup = createFormGroup(dataItem);
        this.editedRowIndex = rowIndex;
        sender.editRow(rowIndex, this.formGroup);
    }

    public cancelHandler({ sender, rowIndex }) {
        this.closeEditor(sender, rowIndex);
    }

    private updateSubCategory(dataItem, formGroup) {
        this.location.httprequest({
            type: 'POST', url: 'city/editState/' + dataItem.id,
            data: { "stateName": formGroup.value.stateName }
        })
            .then((data) => {
                if (data) { console.log("data  saved:", data); }
                else {
                    console.log("error");
                }
            }, (error) => {
                console.log(error);
            });
    }

    public saveHandler({ dataItem, sender, rowIndex, formGroup, isNew }) {
        const stateName = formGroup.value;
        // this.dataItemCountry = this.countryDetails.countryName;
        // console.log("Data pinca ",this.dataItemCountry);
        //start
        debugger;
        // this.category;
        if (!isNew) {
            this.updateSubCategory(dataItem, formGroup);
            this.changeView(stateName, isNew, rowIndex, sender);
            return;
        }
        // new add state
        debugger;
        var details = {
            "countryName": this.countryDetails.countryName,
            "states": [
                {
                    "stateName": formGroup.value.stateName
                }
            ]
        };
        this.location.httprequest({
            type: 'POST', url: 'city/addCity',
            data: details
        })
            .then((data) => {
                this.refreshCountryDetails.emit();
                if (data) { console.log("data  saved:", data); }
                else {
                    console.log("error");
                }
            }, (error) => {
                console.log(error);
            });
        this.changeView(stateName, isNew, rowIndex, sender);
    }

    public changeView(stateName, isNew, rowIndex, sender) {

        // update the data source
        this.es.save(stateName, isNew);
        // close the editor, that is, revert the row back into view mode
        sender.closeRow(rowIndex);
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
        console.log(i);
        // this.gridData.splice(i, 1);
        this.location.httprequest({ type: 'DELETE', url: 'city/deleteStateId/' + i.stateid, data: {} })
            .then((data) => {
                this.ngOnInit();
                if (data) {
                    console.log("data :", data);

                }
                else {
                    console.log("error");
                }
            });
    }

    //  save and edit

}
