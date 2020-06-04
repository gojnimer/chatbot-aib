import { Directive, ElementRef, Renderer2, AfterViewInit } from '@angular/core';

@Directive({
  selector: '[Emoji]'
})
export class EmojiDirective implements AfterViewInit {

  constructor(private element: ElementRef, private render: Renderer2) { }

  ngAfterViewInit() {
    let lista = this.element.nativeElement.innerHTML.split(' ');
    /*   lista.forEach(element => {
        console.log(element);
      }); */

    for (let index = 0; index < lista.length; index++) {

      if (lista[index] == ':)') {
        lista[index] = "<img src='https://i.pinimg.com/originals/79/ee/9b/79ee9b5dc03ea74dd992db25d56c14f4.png' style='width:24px'>";
      }
      if (lista[index] == ':(') {
        lista[index] = "triste";
      }
      if (lista[index] == ':D') {
        lista[index] = "alegre";
      }


    }

    this.element.nativeElement.innerHTML = lista.join(' ');
  }

}
