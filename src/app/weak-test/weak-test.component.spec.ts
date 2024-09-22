import { WeakTestComponent } from './weak-test.component';

describe('WeakTestComponent', () => {
  let component: WeakTestComponent;

  beforeEach(() => {
    component = new WeakTestComponent();
  });

  it('should correctly identify prime numbers', () => {
    expect(component.isPrime(2)).toBe(true);  // Primo
    expect(component.isPrime(4)).toBe(false); // Não primo
    expect(component.isPrime(9)).toBe(false); // Não primo, cobrir a raiz quadrada
  });

  it('should correctly add two numbers', () => {
    expect(component.add(1, 2)).toBe(3);
    expect(component.add(0, 0)).toBe(0);  // Cobrir a condição especial
  });
});
