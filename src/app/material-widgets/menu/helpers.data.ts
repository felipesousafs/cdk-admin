export const MENU_HELPERS: any = {
	tsSourceMenu: `
import { Component, OnInit } from '@angular/core';
import { MatMenuModule } from '@angular/material';
@Component({
  selector: 'cdk-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
@NgModule({
      imports: [
        MatMenuModule,
    })
export class AppModule { }
export class MenuComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
	`.trim(),
	htmlSourceMenu: `
<div>
    <button mat-button [matMenuTriggerFor]="menu">Menu</button>
    <mat-menu #menu="matMenu">
        <button mat-menu-item>Item 1</button>
        <button mat-menu-item>Item 2</button>
    </mat-menu>
</div>
	`.trim(),
}