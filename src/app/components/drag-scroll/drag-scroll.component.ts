import { AfterViewInit } from '@angular/core';
import { ElementRef } from '@angular/core';
import { Input, ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-drag-scroll',
  template: `
  <section #scroll class=" flex flex-row flex-nowrap | overflow-x-auto overflow-y-hidden hidden-scroll-bar " id="scroll">
      <app-card 
        (mousedown) = " dragStart($event)" 
        [items] =" items "
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