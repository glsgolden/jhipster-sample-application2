import { NgModule } from '@angular/core';

import { Microservicejhipster1SharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [Microservicejhipster1SharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [Microservicejhipster1SharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class Microservicejhipster1SharedCommonModule {}
