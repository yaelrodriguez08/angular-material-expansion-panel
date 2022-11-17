import { Input, Output, Component, OnInit, EventEmitter } from '@angular/core';

/**
 * @title Basic expansion panel
 */
@Component({
  selector: 'udb-simple-expansion-panel[headerIcon][panelTitle]',
  templateUrl: 'simple-expansion-panel.component.html',
  styleUrls: ['simple-expansion-panel.component.css'],
})
export class UdbSimpleExpansionPanel implements OnInit {
  @Input() isExpandable: boolean = true;
  @Input() isExpanded: boolean = false;
  @Input() headerIcon: string;
  @Input() panelTitle: string;
  @Input() panelSubtitle: string;

  @Input() titleInfoIcon: string = 'info-circle';
  @Input() titleInfoTooltip: string | undefined = undefined;
  @Input() buttonText: string | undefined = undefined;

  @Output() buttonClickEvent = new EventEmitter<any>();

  hideToggle: boolean;
  displayButton: boolean;
  displayTooltip: boolean;

  ngOnInit(): void {
    if (!this.headerIcon) {
      throw new TypeError('headerIcon is required');
    }
    if (!this.panelTitle) {
      throw new TypeError('panelTitle is required');
    }
    this.hideToggle = this.isExpandable == false;
    this.displayButton = this.buttonText != undefined;
    this.displayTooltip = this.titleInfoTooltip != undefined;
  }

  onButtonClick(event: any) {
    event.stopPropagation();
    this.buttonClickEvent?.emit();
  }
}
