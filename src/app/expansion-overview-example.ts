import { Component } from '@angular/core';
import { UdbExpansionPanelItem } from './accordion/models';

/**
 * @title Basic expansion panel
 */
@Component({
  selector: 'expansion-overview-example',
  templateUrl: 'expansion-overview-example.html',
  styleUrls: ['expansion-overview-example.css'],
})
export class ExpansionOverviewExample {
  panelItems: UdbExpansionPanelItem[] = [
    new UdbExpansionPanelItem('Buying Power'),
    new UdbExpansionPanelItem('Another item'),
    new UdbExpansionPanelItem('Brokerage Cash'),
  ];

  buttonClick() {
    console.log('button was clicked from parent');
  }
}
