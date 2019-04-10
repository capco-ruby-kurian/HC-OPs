import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { tap } from 'rxjs/operators/tap';
import { map } from 'rxjs/operators/map';
const CREATE_ACTION = 'create';
const UPDATE_ACTION = 'update';
const REMOVE_ACTION = 'destroy';
@Injectable()
export class EditServiceService extends BehaviorSubject<any[]> {
    public assignedRow: Array<any> = [];
    public actRow:any;
    constructor(private http: HttpClient) { super([]); }
    private data: any[] = [];
    public read() {
        if (this.data.length) {
            return super.next(this.data);
        }

        this.fetch()
            .pipe(
            tap(data => {
                this.data = data;
            })
            )
            .subscribe(data => {
                super.next(data);
            });
    }
    public save(data: any, isNew?: boolean) {
        const action = isNew ? CREATE_ACTION : UPDATE_ACTION;
        this.reset();
        this.fetch(UPDATE_ACTION, data)
            .subscribe(() => this.read(), () => this.read());
        console.log(data);
    }
    public remove(data: any) {
        console.log(data);
        this.reset();
        this.fetch(REMOVE_ACTION, data)
            .subscribe(() => this.read(), () => this.read());

    }
    private reset() {

        this.data = [];
    }

    private fetch(action: string = '', data?: any): Observable<any[]> {
        return this.http
            .jsonp(`https://demos.telerik.com/kendo-ui/service/Products/${action}`, 'callback')
            .pipe(map(res => <any[]>res));
    }
}
