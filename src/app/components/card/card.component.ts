import { Input } from '@angular/core';
import { ElementRef } from '@angular/core';
import { ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {

  @Input() items:any[];
  @Input() dragScroll: boolean;
  
  constructor(private router: Router) { this.dragScroll = true;}

  getArtist(item: any) {
    let id: string = (item.artists == undefined) ? item.id : item.artists[0].id;
    this.router.navigate(['/artist', id])
    return false;
  }

  dragStart(e) {
    console.log(e)
    let slider = e.target; 
    let isDown = true;
    let startX = e.pageX - slider.offsetLeft;
    let scrollLeft = slider.scrollLeft;
    this.unFocus(slider);
    slider.addEventListener("mouseleave", () => {
      isDown = false;
      slider.classList.remove("active");
    });
    slider.addEventListener("mouseup", () => {
      isDown = false;
      slider.classList.remove("active");
    });
    slider.addEventListener("mousemove", e => {
      this.unFocus(slider);
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - slider.offsetLeft;
      const walk = (x - startX) * 3;
      slider.scrollLeft = scrollLeft - walk;
    });
  }

   private unFocus(slider): void {
    if (slider.selection) {
      slider.empty()
    } else {
      window.getSelection().removeAllRanges()
    }
  }
}
