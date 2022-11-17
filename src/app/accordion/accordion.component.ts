import { Input, Output, Component, OnInit, EventEmitter } from '@angular/core';
import { UdbExpansionPanelItem } from './models';

/**
 * @title Basic expansion panel
 */
@Component({
  selector: 'udb-accordion[panelItem]',
  templateUrl: 'accordion.component.html',
  styleUrls: ['accordion.component.css'],
})
export class UdbAccordion implements OnInit {
  @Input() panelItem: UdbExpansionPanelItem;
  @Input() hideToggle: boolean = false;

  ngOnInit(): void {
    if (!this.panelItem.panelTitle) {
      throw new TypeError('panelTitle is required');
    }
  }

  onButtonClick(event: any, panelItem: UdbExpansionPanelItem) {
    event.stopPropagation();
    panelItem.buttonClickEvent?.emit();
  }
}
