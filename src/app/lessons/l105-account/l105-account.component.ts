import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-l105-account',
  templateUrl: './l105-account.component.html',
  styleUrls: ['./l105-account.component.css']
})
export class L105AccountComponent {

  @Input() account: {name: string, status: string};
  @Input() id: number;
  @Output() statusChanged = new EventEmitter<{id: number, newStatus: string}>();


  onSetTo(status: string) {
    this.statusChanged.emit({id: this.id, newStatus: status});
    console.log('A server status changed, new status: ' + status);
  }

}
