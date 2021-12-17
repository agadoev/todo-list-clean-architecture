import * as Core from '../core/services';
import {Injectable} from "@angular/core";

@Injectable({ providedIn: 'root' })
export class InteractionService implements Core.InteractionService {
  public async confirm(message: string): Promise<boolean> {
    return confirm(message);
  }

  public async enterString(currentValue?: string): Promise<string> {
    // @ts-ignore
    return prompt('Input: ', currentValue);
  }

}
