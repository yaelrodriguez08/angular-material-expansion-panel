import { NgModule } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';

@NgModule({
  exports: [],
})
export class MaterialIconsRegistryModule {
  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
      'bag-hand',
      sanitizer.bypassSecurityTrustResourceUrl(
        './assets/svg/icons/bag-hand.svg'
      )
    );

    iconRegistry.addSvgIcon(
      'info-circle',
      sanitizer.bypassSecurityTrustResourceUrl(
        './assets/svg/icons/info-circle.svg'
      )
    );
  }
}
