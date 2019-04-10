import { Component, OnInit, TemplateRef, ElementRef, Inject, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { GridDataResult, GridComponent, PageChangeEvent } from '@progress/kendo-angular-grid';
import { State, process } from '@progress/kendo-data-query';
import { HttpXrsService } from '../../providers/http-xrs.service';
import { map } from 'rxjs/operators/map';
import { CategorysubcategoryService } from '../../providers/categorysubcategory.service';
import { Router } from '@angular/router';
import { EditServiceService } from '../../providers/edit-service.service';


const createFormGroup = dataItem => new FormGroup({
    'subcategoryname': new FormControl(dataItem.subcategoryname),
});
@Component({
    selector: 'app-admin-subcategories',
    templateUrl: './admin-subcategories.component.html',
    styleUrls: ['./admin-subcategories.component.scss']
})
export class AdminSubcategoriesComponent implements OnInit {
    ss: any[];
    @Input() public categoryDetails: any;
    subcategoryname: any;
    public gridData = [];
    public sss: String;
    public formGroup: FormGroup;
    private editedRowIndex: number;
    public data = [];
    public skip = 0;
    /**
        * The subcategory for category are displayed
    */
    constructor(private categoryservice: HttpXrsService, private categorysubcategory: CategorysubcategoryService, public router: Router, public es: EditServiceService) {

    }
    ngOnInit() {
        this.gridData = this.categoryservice.sub;
        console.log("subcategory display:", this.gridData);
    }

    public category(name: string): any {
        return this.data.find(x => x.subcategoryname === name);
    }

    public addHandler({ sender }) {
        // define all editable fields validators and default values
        const group = new FormGroup({
            'subcategoryname': new FormControl("", Validators.required),
        });

        // show the new row editor, with the `FormGroup` build above
        sender.addRow(group);
    }

    public editHandler({ sender, rowIndex, dataItem }) {
        // this.closeEditor(sender);
        // this.formGroup = createFormGroup(dataItem);
        // this.editedRowIndex = rowIndex;
        // sender.editRow(rowIndex, this.formGroup);
        // define all editable fields validators and default values
        const group = new FormGroup({
            'subcategoryname': new FormControl(dataItem.subcategoryname, Validators.required),
        });

        // put the row in edit mode, with the `FormGroup` build above

        sender.editRow(rowIndex, group);
    }

    public cancelHandler({ sender, rowIndex }) {
        this.closeEditor(sender, rowIndex);
    }
    private updateSubCategory(dataItem, formGroup) {
        this.categoryservice.httprequest({
            type: 'PUT', url: 'category/updateSubcategory/' + dataItem.subcategoryid,
            data: { "subcategoryname": formGroup.value.subcategoryname }
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
        const subcategoryname = formGroup.value;
        //start
        debugger;
        // this.category;
        if (!isNew) {
            this.updateSubCategory(dataItem, formGroup);
            this.changeView(subcategoryname, isNew, rowIndex, sender);
            return;
        }
        // new subcategory
        var details = {
            "categoryName": this.categoryDetails.categoryName,
            "subcategory": [
                {
                    "subcategoryname": formGroup.value.subcategoryname
                }
            ]
        };
        this.categoryservice.httprequest({
            type: 'POST', url: 'category/save',
            data: details
        })
            .then((data) => {
                if (data) { console.log("data  saved:", data); }
                else {
                    console.log("error");
                }
            }, (error) => {
                console.log(error);
            });
        this.changeView(subcategoryname, isNew, rowIndex, sender);
    }

    public changeView(subcategoryname, isNew, rowIndex, sender) {

        // update the data source
        this.es.save(subcategoryname, isNew);
        // close the editor, that is, revert the row back into view mode
        sender.closeRow(rowIndex);
    }

    public removeHandler({ dataItem }): void {
        this.categorysubcategory.remove(dataItem);
        console.log("delete data", dataItem);
    }

    // Delete the selected data
    removeItems(i) {

        this.categoryservice.httprequest({ type: 'DELETE', url: 'category/deletebysubcategory/' + i.subcategoryid, data: {} })
            .then((data) => {
                this.ngOnInit();
            }, (data) => {
                console.log("error");
                console.log(data);

            });
    }

    private closeEditor(grid, rowIndex = this.editedRowIndex) {
        grid.closeRow(rowIndex);
        this.editedRowIndex = undefined;
        this.formGroup = undefined;
    }

}
