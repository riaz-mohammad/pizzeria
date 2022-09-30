import { Component, OnInit } from '@angular/core';
import { timer } from 'rxjs';
import { take } from 'rxjs/operators';


@Component({
  selector: "app-confirm",
  template: `
    <app-sending *ngIf="sending"></app-sending>

    <app-confirmation *ngIf="!sending">
    </app-confirmation>
  `,
  styles: [
    `
      :host {
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 10px;
        align-items: center;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.9);
        font-weight: bold;
        color: rgba(255, 255, 255, 0.8);
      }

      
    `,
  ],
})
export class ConfirmComponent implements OnInit {
  sending = false;
  constructor() {}
  ngOnInit(): void {
    timer(0, 3000)
      .pipe(take(2))
      .subscribe((_) => (this.sending = !this.sending));
  }
}



