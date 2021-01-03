import { AfterViewInit } from '@angular/core';
import { ElementRef } from '@angular/core';
import { Input, ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-drag-scroll',
  template: `
  <section #scroll class=" flex flex-row flex-nowrap | overflow-x-auto overflow-y-hidden hidden-scroll-bar " id="scroll">
      <app-card 
        *ngFor = " let item of items " 
        (mousedown) = " dragStart($event)" 
        [artist] = " item.artists[0].name " 
        [titel]  = " item.name " 
        [type]   = " item.album_type "
        [img]    = " item.images[0].url "
      ></app-card>
  </section>
  `,
  styleUrls: ['./drag-scroll.component.scss']
})

export class DragScrollComponent implements AfterViewInit{

  @Input() items:any[];
  slider:any;
  
  @ViewChild('scroll')
  scroll: ElementRef;

  constructor() { 
    console.log(" helo wordl!!! ")
  }

  

  ngAfterViewInit(): void {
    this.slider = this.scroll.nativeElement;
  }

  dragStart(e) {
    this.unFocus();
    let isDown = true;
    let startX = e.pageX - this.slider.offsetLeft;
    let scrollLeft = this.slider.scrollLeft;
    this.slider.addEventListener("mouseleave", () => {
      isDown = false;
      this.slider.classList.remove("active");
    });
    this.slider.addEventListener("mouseup", () => {
      isDown = false;
      this.slider.classList.remove("active");
    });
    this.slider.addEventListener("mousemove", e => {
      this.unFocus();
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - this.slider.offsetLeft;
      const walk = (x - startX) * 3;
      this.slider.scrollLeft = scrollLeft - walk;
    });
  }

   private unFocus(): void {
    if (this.slider.selection) {
      this.slider.empty()
    } else {
      window.getSelection().removeAllRanges()
    }
  }
}




/*
@Component({
  selector: 'app-drag-scroll',
  @Component({
  selector: 'app-drag-scroll',
  template: `
  <section class=" flex flex-row flex-nowrap overflow-x-auto hidden-scroll-bar max-h-96" id="scroll">
      <app-card 
        *ngFor=" let item of items " 
        (mousedown)=" dragStart($event)" 
        [artist]=" item.artists[0].name " 
        [titel]="  item.name " [type]="   
        item.album_type " [date]="   
        item.release_date " 
        [img]=" item.images[0].url "
      ></app-card>
  </section>
  `
//     </section>
// `
})

export class DragScrollComponent implements OnInit {

  @Input() items:any[];
  slider:any = document.querySelector ('#slider');

  constructor() { setTimeout(() => {
    console.log( this )
  }, 3000);  console.log( 
    "asdasd"
   )
  }


ngAfeterViewInit():void {
  console.log( this )
}

  ngOnInit(): void {
  // const slider = document.querySelector(".scroll");console.log( this )
  console.log( this )
  let isDown = false;
  let startX;
  let scrollLeft;
  console.log("this.slider")
  this.slider.addEventListener("mousedown", (e:MouseEvent) => {
    isDown = true;
    this.slider.classList.add("active");
      startX = e.pageX - this.slider.offsetLeft;
    scrollLeft = this.slider.scrollLeft;
  });
  this.slider.addEventListener("mouseleave", () => {
    isDown = false;
    this.slider.classList.remove("active");
  });
  this.slider.addEventListener("mouseup", () => {
    isDown = false;
    this.slider.classList.remove("active");
  });
  this.slider.addEventListener("mousemove", e => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - this.slider.offsetLeft;
    const walk = x - startX;
    this.slider.scrollLeft = scrollLeft - walk;
  });

  
  }

  dragStart():void {
    console.log("asdasdasr")
  }
}*/ 
