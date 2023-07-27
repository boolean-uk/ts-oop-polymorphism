export class Enemy {
    constructor(private _name: string, private _health: number, private _attackPower: number) {}
  
    get name(): string {
      return this._name;
    }
  
    get health(): number {
      return this._health;
    }
  
    takeHit(damage: number): void {
      this._health -= damage;
    }
  
    attack(): number {
      return this._attackPower;
    }
  }