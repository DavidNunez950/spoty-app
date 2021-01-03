import { AfterViewInit } from '@angular/core';
import { Input, ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-drag-scroll',
  templateUrl: './drag-scroll.component.html',
  styleUrls: ['./drag-scroll.component.scss']
})

export class DragScrollComponent implements AfterViewInit{

  @Input() items:any[];
  slider:any;

  constructor() { 
    console.log(" helo wordl!!! ")
  }

  

  ngAfterViewInit(): void {
    this.slider = document.getElementById('scroll');
    console.log(  )
  }

  dragStart(e) {
    this.unFocus();
    this.slider.classList.add("active");
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
  templateUrl: './drag-scroll.component.html'
//   template: `
//     <section class=" flex flex-row flex-nowrap overflow-x-auto " class=" scroll "   >
//         <article class="h-min min-w-7xl max-w-screen-2xl "  (click)=" dragStart() "  *ngFor=" let item of items ">
//             <app-card 
//               [artist]=" item.artists[0].name " 
//               [titel]="  item.name " 
//               [type]="   item.album_type " 
//               [date]="   item.release_date " 
//               [img]="    item.images[0].url "
//             ></app-card>
//         </article>
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
