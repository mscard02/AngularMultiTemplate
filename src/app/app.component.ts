import { Component, OnInit } from '@angular/core';
import { DealerStyle } from './models/dealer-style';
import { DealerTemplateService } from './services/dealer-template.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  styles: DealerStyle;
  constructor(private _dealerTemplateService: DealerTemplateService) {}
  ngOnInit() {
    this.styles = this._dealerTemplateService.GetDealerTemplateById(1);
  }
}
