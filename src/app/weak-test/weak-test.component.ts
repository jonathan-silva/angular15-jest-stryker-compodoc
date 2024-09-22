import { Component } from '@angular/core';

@Component({
  selector: 'app-weak-test',
  template: '<p>Weak Test Component</p>'
})
export class WeakTestComponent {
  // Função para verificar se o número é primo
  isPrime(num: number): boolean {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {  // Reduzi o loop para √num
      if (num % i === 0) return false;
    }
    return true;
  }

  // Função de soma que pode ter brechas para o Stryker
  add(a: number, b: number): number {
    if (a === 0 && b === 0) {
      return 0;
    }
    return a + b;
  }
}
