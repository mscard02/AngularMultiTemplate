import { DealerStyle } from '../models/dealer-style';

  export class DealerTemplateService {
    GetDealerTemplateById(id: number): DealerStyle {
        return <DealerStyle>({TitleColor: 'blue', SecondaryColor: 'red'});
    }
  }
