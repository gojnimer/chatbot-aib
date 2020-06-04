import { BankService } from './bank.service';
import { Directive, Renderer2, ElementRef, Input, AfterViewInit } from '@angular/core';

@Directive({
  selector: '[Custom]'
})
export class CustomDirective implements AfterViewInit {

  @Input('agencia') agencia;
  @Input('conta') conta;

  constructor(private element:ElementRef,private render:Renderer2,private bank:BankService) { 

  /*   this.render.setStyle(this.element.nativeElement,"color","blue");
    this.render.setStyle(this.element.nativeElement,"background-color","yellow"); */
    this.render.listen(this.element.nativeElement,'click',()=>{
      console.log();
    });
    
    
    

  }

  ngAfterViewInit(){
    console.log(this.agencia);
    console.log(this.conta);
    let banco = this.bank.getUser(this.agencia,this.conta);
    
    if(banco){
      this.element.nativeElement.innerHTML =  "<p>Saldo: "+ banco.Saldo +"</p>" ;
     
    }else{
      this.element.nativeElement.innerHTML = "<p> Usuário não encontrado";
    }
  }

}
