import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-diretiva-component',
  templateUrl: './diretiva-component.component.html',
  styleUrls: ['./diretiva-component.component.css']
})
export class DiretivaComponentComponent implements OnInit,AfterViewInit {
/* 
  @ViewChild('h1Element') h1Element:ElementRef;

  @ViewChild('ComponentDirective') inputElement:ElementRef; */

  constructor() { }

  ngOnInit(): void {
    
  }

  ngAfterViewInit(){
    /* this.inputElement.nativeElement.value = "red";
    this.h1Element.nativeElement.style.color = "red"; */
  }

}
