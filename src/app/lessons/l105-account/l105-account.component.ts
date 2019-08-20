import { Component, EventEmitter, Input, Output } from '@angular/core';
import {LoggingService} from "../../services/logging.service";

@Component({
  selector: 'app-l105-account',
  templateUrl: './l105-account.component.html',
  styleUrls: ['./l105-account.component.css'],
  providers: [LoggingService]
})
export class L105AccountComponent {

  @Input() account: {name: string, status: string};
  @Input() id: number;
  @Output() statusChanged = new EventEmitter<{id: number, newStatus: string}>();
  constructor(private loggingService: LoggingService) {}

  onSetTo(status: string) {
    this.statusChanged.emit({id: this.id, newStatus: status});
    this.loggingService.logStatusChange(status);
  }


}
