import { Component } from '@angular/core';

@Component({
  selector: 'app-strong-test',
  template: '<p>Strong Test Component</p>'
})
export class StrongTestComponent {
  // Função para verificar se o número é primo
  isPrime(num: number): boolean {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  }

  // Função simples de soma
  add(a: number, b: number): number {
    return a + b;
  }
}
