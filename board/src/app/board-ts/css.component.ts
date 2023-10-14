import { Component } from '@angular/core';
import { ColumnMode } from '@swimlane/ngx-datatable/lib/types/column-mode.type';


@Component({
  selector: 'row-css-demo',
  template: `
    <div>
      <h3>
        Row/Header/Cell CSS Class Demo
        <small>
          <a
            href="https://github.com/swimlane/ngx-datatable/blob/master/src/app/basic/css.component.ts"
            target="_blank"
          >
            Source
          </a>
        </small>
      </h3>
      <ngx-datatable
        class="material"
        [rows]="rows"
        [columnMode]="ColumnMode.force"
        [headerHeight]="50"
        [rowHeight]="50"
        [rowClass]="getRowClass"
        [scrollbarV]="true"
      >
        <ngx-datatable-column name="ID"></ngx-datatable-column>
        <ngx-datatable-column name="Name"></ngx-datatable-column>
        <ngx-datatable-column name="LastName"></ngx-datatable-column>
        <ngx-datatable-column name="E-mail"></ngx-datatable-column>
        <ngx-datatable-column name="Pet"></ngx-datatable-column>
        <ngx-datatable-column name="Consultation"></ngx-datatable-column>
        <ngx-datatable-column name="Date"></ngx-datatable-column>
        <ngx-datatable-column name="Shift" headerClass="is-shift" [cellClass]="getCellClass"></ngx-datatable-column>
      </ngx-datatable>
    </div>
  `
})
export class RowCssComponent {
  rows = [];
  expanded = {};
  timeout: any;

  ColumnMode = ColumnMode;

  constructor() {
    this.fetch((data: never[]) => {
      this.rows = data;
    });
  }

  fetch(cb: { (data: any): void; (arg0: any): void; }) {
    const req = new XMLHttpRequest();
    req.open('GET', `assets/data/100k.json`);

    req.onload = () => {
      const rows = JSON.parse(req.response);
      cb(rows.splice(0, 50));
    };

    req.send();
  }

  getRowClass(row: { age: number; }) {
    return {
      'age-is-ten': row.age % 10 === 0
    };
  }

  getCellClass({ row, column, value }): any {
    return {
      'is-pending': value === 'pending'
    };
  }
}