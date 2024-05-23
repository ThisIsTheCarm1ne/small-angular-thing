import { Component, HostListener, ElementRef } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'animated_searchfield';
  showButton: boolean = true;
  showPopup: boolean = false;

  @HostListener('document:click', ['$event'])
  clickout(event: MouseEvent) {
    const clickedOutsideInputContainer =!this.elementRef.nativeElement.querySelector('.input-container').contains(event.target);
    if (clickedOutsideInputContainer) {
      this.showPopup= false;
      this.showButton = true;
    }
  }

  constructor(private elementRef: ElementRef) {}

  onFocus() {
    this.showPopup = true;
  }

  stopPropagation(event: MouseEvent) {
    event.stopPropagation();
  }

  toggleSearch() {
    this.showButton =!this.showButton;
    console.log(this.showButton);
  }
}
