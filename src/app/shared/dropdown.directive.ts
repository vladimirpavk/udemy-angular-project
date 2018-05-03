import { Directive, ElementRef, Renderer2, OnInit, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective implements OnInit{
  
  @HostBinding('class.open') isDropDown: boolean = false;
  
  @HostListener('click') mouseClicked(value:Event){
    this.isDropDown=!this.isDropDown;   
  }

  constructor() { }

  ngOnInit(){    
  }

}
