import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-material-design',
  templateUrl: './material-design.component.html',
  styleUrl: './material-design.component.scss',
})
export class MaterialDesignComponent {
  name: string = '';
  constructor(private dialog: MatDialog) {}
  openModal(): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      data: { name: this.name },
    });

    dialogRef.afterClosed().subscribe((result) => {
      this.name = result;
    });
  }
}
