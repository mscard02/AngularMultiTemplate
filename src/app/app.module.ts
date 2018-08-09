import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DealerTemplateService } from './services/dealer-template.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [DealerTemplateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
