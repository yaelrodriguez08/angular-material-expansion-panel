import { Component } from '@angular/core';
import { udbIconNames } from 'udb-icon.names';

/**
 * @title Basic expansion panel
 */
@Component({
  selector: 'expansion-overview-example',
  templateUrl: 'expansion-overview-example.html',
  styleUrls: ['expansion-overview-example.css'],
})
export class ExpansionOverviewExample {
  get IconNames() {
    return udbIconNames;
  }

  buttonClick() {
    console.log('button was clicked from parent');
  }
}
