import { StrongTestComponent } from './strong-test.component';

describe('StrongTestComponent', () => {
  let component: StrongTestComponent;

  beforeEach(() => {
    component = new StrongTestComponent();
  });

  it('should correctly identify prime numbers', () => {
    // Casos básicos
    expect(component.isPrime(2)).toBe(true);
    expect(component.isPrime(3)).toBe(true);
    expect(component.isPrime(4)).toBe(false);

    // Casos adicionais
    expect(component.isPrime(1)).toBe(false);  // Menor que 2
    expect(component.isPrime(0)).toBe(false);  // Caso extremo
    expect(component.isPrime(-5)).toBe(false); // Número negativo

    // Casos de grandes números
    expect(component.isPrime(13)).toBe(true);
    expect(component.isPrime(17)).toBe(true);
    expect(component.isPrime(100)).toBe(false);

    expect(component.isPrime(9999991)).toBe(true);
  });

  it('should correctly add two numbers', () => {
    // Casos básicos
    expect(component.add(1, 2)).toBe(3);
    expect(component.add(0, 0)).toBe(0);

    // Casos com números negativos
    expect(component.add(-1, -1)).toBe(-2);
    expect(component.add(-1, 1)).toBe(0);

    // Casos com números grandes
    expect(component.add(Number.MAX_SAFE_INTEGER, 1)).toBe(Number.MAX_SAFE_INTEGER + 1);
    expect(component.add(Number.MIN_SAFE_INTEGER, -1)).toBe(Number.MIN_SAFE_INTEGER - 1);
  });

});
