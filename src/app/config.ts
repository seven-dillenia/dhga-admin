import { environment } from 'src/environments/environment.prod';
import { isDevMode } from '@angular/core';

export class Config {
  
  static GetAuthority(): string{
    if(isDevMode()){
      return "http://localhost:5000";
    }
    else{
      return "https://dgha-identityserver.azurewebsites.net";
    }
  }
  
  static GetResource(): string{
    if(isDevMode()){
      return "https://localhost:44383";
    }
    else{
      return "https://dgha-api.azurewebsites.net";
    }
  }
}
