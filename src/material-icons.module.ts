import { NgModule } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';
import { udbIconNames } from '../udb-icon.names';

@NgModule({
  exports: [],
})
export class MaterialIconsRegistryModule {
  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
      udbIconNames.BagHand,
      sanitizer.bypassSecurityTrustResourceUrl(
        './assets/svg/icons/bag-hand.svg'
      )
    );

    iconRegistry.addSvgIcon(
      udbIconNames.InfoCircle,
      sanitizer.bypassSecurityTrustResourceUrl(
        './assets/svg/icons/info-circle.svg'
      )
    );
  }
}
