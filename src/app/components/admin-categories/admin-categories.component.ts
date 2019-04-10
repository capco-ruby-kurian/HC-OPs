import { Component, OnInit, TemplateRef, ElementRef } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SelectableSettings } from '@progress/kendo-angular-grid';
import { HttpXrsService } from '../../providers/http-xrs.service';
// import {MatExpansionModule} from '@angular/material/expansion';
import { catagory } from '../../../catagories';
import {
    PopupService,
    PopupRef
} from '@progress/kendo-angular-popup';
declare var $: any;
@Component({
    selector: 'app-admin-categories',
    templateUrl: './admin-categories.component.html',
    styleUrls: ['./admin-categories.component.scss']
})
export class AdminCategoriesComponent implements OnInit {
    subcategory: any;
    subcategoryname: any;
    categoryName: any;
    categoryid: any;
    constructor(private categoryservice: HttpXrsService) { }
    categoryForm = { category: '', subCategory: '' };
    gridData = [];
    ngOnInit() {
        /**
         * Service to get data in the kendo table ./assets/data/category.json
         */
        this.categoryservice.httprequest({ type: 'GET', url: 'category/getAll', data: {} })
            .then((data: any) => {
                this.gridData = data;
                console.log("data grid", this.gridData)
            });

        /**
         * to add new category and subcategories
         * 
         */
        $(document).ready(function () {
            // The maximum number of options
            var MAX_OPTIONS = 5;

            $('#surveyForm')


                // Add button click handler
                .on('click', '.addButton', function () {
                    var $template = $('#optionTemplate'),
                        $clone = $template
                            .clone()
                            .removeClass('hide')
                            .removeAttr('id')
                            .insertBefore($template),
                        $option = $clone.find('[name="option[]"]');

                    // Add new field
                    $('#surveyForm').formValidation('addField', $option);
                })

                // Remove button click handler
                .on('click', '.removeButton', function () {
                    var $row = $(this).parents('.form-group'),
                        $option = $row.find('[name="option[]"]');

                    // Remove element containing the option
                    $row.remove();

                    // Remove field
                    $('#surveyForm').formValidation('removeField', $option);
                })

                // Called after adding new field
                .on('added.field.fv', function (e, data) {
                    // data.field   --> The field name
                    // data.element --> The new field element
                    // data.options --> The new field options

                    if (data.field === 'option[]') {
                        if ($('#surveyForm').find(':visible[name="option[]"]').length >= MAX_OPTIONS) {
                            $('#surveyForm').find('.addButton').attr('disabled', 'disabled');
                        }
                    }
                })

                // Called after removing the field
                .on('removed.field.fv', function (e, data) {
                    if (data.field === 'option[]') {
                        if ($('#surveyForm').find(':visible[name="option[]"]').length < MAX_OPTIONS) {
                            $('#surveyForm').find('.addButton').removeAttr('disabled');
                        }
                    }
                });
        });
    }


    showSubCat(evt) {
        this.categoryservice.sub = evt.dataItem.subcategory;
        console.log("helloooooooo", this.categoryservice.sub);
    }

    addNewCategories() {
        let addNewCategories = {
            categoryName: this.categoryName,
            // subcategory: [
            //     {
            //         subcategoryname: this.subcategoryname
            //     }
            // ]
        };
        var subCategoryArr = [];
        debugger;
        // :not(.excludeSubCategory)
        var ele = $(".excludeSubCategory");
        for (var index = 0; index < ele.length; index++) {
            var element = ele[index];
            subCategoryArr.push({ subcategoryname: element.value });
        }
        addNewCategories["subcategory"] = subCategoryArr;
        console.log(addNewCategories);
        debugger;
        this.categoryservice.httprequest({ type: 'POST', url: 'category/save', data: addNewCategories })
         .then((data) => {
            this.ngOnInit();   
            }, (error) => {
                console.log(error);
            });
    }
    
}





