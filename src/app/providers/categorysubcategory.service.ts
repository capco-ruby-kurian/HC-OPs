import { Injectable } from '@angular/core';
import { HttpXrsService } from '../providers/http-xrs.service';
@Injectable()
export class CategorysubcategoryService {

  constructor(private categoryservice: HttpXrsService) { }
  public assignedRow: Array<any> = [];
  private dataItem = [] ;
  private counter: number = this.dataItem.length;


  public remove(subcategory: any): void {
      const index = this.dataItem.findIndex(({ subcategoryName }) => subcategoryName === subcategory.subcategoryName);
      this.dataItem.splice(index, 1);
  }

  public save(dataItem: any, isNew: boolean): void {
      console.log("add details",dataItem);
      if (isNew) {
        dataItem = this.counter++;
        console.log("adding detailsss", dataItem);
          this.dataItem.splice(0, 0,dataItem);
          console.log("added detailssssd",dataItem);
      } else {
          Object.assign(
              this.dataItem.find(({ subcategoryName }) => subcategoryName === dataItem.subcategoryName),
              dataItem.this.catsub.sub
          );
      }
  }

 
}
