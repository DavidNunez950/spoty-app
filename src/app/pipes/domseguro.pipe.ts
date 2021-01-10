import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'domseguro'
})
export class DomseguroPipe implements PipeTransform {
  constructor(private domsanitizaer: DomSanitizer ) { }
  transform(value: string): unknown {
    const url = 'https://open.spotify.com/embed/album/';
    return this.domsanitizaer.bypassSecurityTrustResourceUrl(url+value);
  }

}
