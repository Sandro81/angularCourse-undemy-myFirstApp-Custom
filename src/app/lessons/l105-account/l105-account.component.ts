import { Component, Input } from '@angular/core';
import {LoggingService} from "../../services/logging.service";
import {AccountService} from "../../services/account.service";

@Component({
  selector: 'app-l105-account',
  templateUrl: './l105-account.component.html',
  styleUrls: ['./l105-account.component.css']
})
export class L105AccountComponent {

  // we receive the data from outside
  @Input() account: {name: string, status: string};
  @Input() id: number;

  constructor(private loggingService: LoggingService,
              private accountsService: AccountService) {
    this.accountsService.statusUpdated.subscribe(
      (status: string) => alert('New Status ' + status)
    );
  }

  onSetTo(status: string) {
    this.accountsService.updateStatus(this.id, status);
    this.accountsService.statusUpdated.emit(status);
  }


}
