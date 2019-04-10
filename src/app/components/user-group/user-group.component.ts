import { Component, OnInit } from '@angular/core';
import { HttpXrsService } from '../../providers/http-xrs.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { EditServiceService } from '../../providers/edit-service.service';
import { $ } from "protractor/built";

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'user-group',
  templateUrl: './user-group.component.html',
  styleUrls: ['./user-group.component.scss']
})
export class UserGroupComponent implements OnInit {
  userGroupName: any;
  userGroupCode: any;
  public gridData: any;
  public formGroup: FormGroup;
  public editUserGroup: any;
  constructor(public userGroupServe: HttpXrsService, public router: Router, public es: EditServiceService) { }
  userGroup = { grpcode: '', grpname: '' };
  ngOnInit() {
    /**
   * @param type endpoint for which we get the json data
   */
    this.userGroupServe.httprequest({ type: 'GET', url: 'UserGroup/getAllUserGroup' })
      .then((data: any) => {
        // debugger;
        console.log('user group component ', data);
        this.gridData = data;
      });
  }
  // Delete the selected data
  removeItems(i) {
    
    // this.gridData.splice(i, 1);
    this.userGroupServe.httprequest({ type: 'DELETE', url: 'UserGroup/delete/' + i.userGroupId, data: {} })
      .then((data) => {
        // debugger;
        this.ngOnInit();
      }, (data) => {
        console.log("error");
        console.log(data);
       
      });
  }
  editRow(dataItem) {
    console.log(dataItem);
    this.formGroup = new FormGroup({
      'userGroupCode': new FormControl(dataItem.userGroupCode, Validators.pattern('^[0-9]{1,3}')),
      'userGroupName': new FormControl(dataItem.userGroupName, Validators.required),
    })
  }
  protected editHandler({ sender, rowIndex, dataItem }) {
    // define all editable fields validators and default values
    const group = new FormGroup({
      'userGroupCode': new FormControl(dataItem.userGroupCode, Validators.pattern('^[0-9]{1,3}')),
      'userGroupName': new FormControl(dataItem.userGroupName, Validators.required),
    });

    // put the row in edit mode, with the `FormGroup` build above

    sender.editRow(rowIndex, group);
  }


  protected addHandler({ sender }) {
    // define all editable fields validators and default values
    const group = new FormGroup({
      'userGroupCode': new FormControl("", Validators.pattern('^[0-9]{1,3}')),
      'userGroupName': new FormControl("", Validators.required),
    });

    // show the new row editor, with the `FormGroup` build above
    sender.addRow(group);
  }

  protected cancelHandler({ sender, rowIndex }) {
    // close the editor for the given row
    sender.closeRow(rowIndex)
  }

  protected saveHandler({ dataItem, sender, rowIndex, formGroup, isNew }) {
    // collect the current state of the form
    // `formGroup` arguments is the same as was provided when calling `editRow`
    const savedata = formGroup.value;
    debugger;
    this.userGroupServe.httprequest({
      type: 'PUT', url: 'UserGroup/updateByUserGroupId/' + dataItem.userGroupId,
      data: {
        "userGroupName": formGroup.value.userGroupName,
        "userGroupCode": formGroup.value.userGroupCode
      }
    }).then((data) => {
      if (data) {
        console.log("data :", data);
      }
      else {
        console.log("error");
      }
    }, (error) => {
      console.log(error);
    });
    // update the data source
    this.es.save(savedata, isNew);
    // close the editor, that is, revert the row back into view mode
    sender.closeRow(rowIndex);
  }

  addNewUserGroup() {
    let addUserGroup = {
      userGroupCode: this.userGroupCode,
      userGroupName: this.userGroupName
    }
    console.log(addUserGroup);
    this.userGroupServe.httprequest({ type: 'POST', url: 'UserGroup/save', data: addUserGroup })
      .then((data) => {
        this.ngOnInit();
      }, (error) => {
        console.log(error);
      });
  }

}
