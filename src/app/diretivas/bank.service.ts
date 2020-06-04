import { Injectable } from '@angular/core';
import bank  from '../conta';

@Injectable({
  providedIn: 'root'
})
export class BankService {
 /*  bank:any[] = 
  [
    {
    "nome":"Lorem",
    "Agencia":"07112",
    "Conta":"123",
    "Saldo":100.00
    },
    {
        "nome":"Ipsum",
        "Agencia":"1",
        "Conta":"1",
        "Saldo":100.00
    }
]; */
  constructor() {
    console.log(bank);
   }
  

  getUser(agencia,conta):any{
  
    for (let index = 0; index < bank.length; index++) {
      if(bank[index].Agencia == agencia && bank[index].Conta == conta){
        return bank[index];
      }
      
    }
   
  }

 
}
