import { Component } from '@angular/core';

@Component({
  selector: 'app-loading',
  template: `
  <div class=" h-full | w-full | flex justify-center items-center ">
    <span class=" font-bold text-7xl text-white loader">
    </span>
  </div>`,
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent {

  constructor() { }

}
