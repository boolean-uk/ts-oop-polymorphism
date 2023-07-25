import { Attack } from "./Attack"
import { AxeAttack } from "./AxeAttack"
import { FireSpellAttack } from "./FireSpellAttack"
import { IceSpellAttack } from "./IceSpellAttack"
import { SwordAttack } from "./SwordAttack"
import * as readline from 'readline';

export class Player {
    private name ='player'
    private _health = 52 // when this reaches 0, the player dies
    private _armour = 14 // an attack must be >= this to hit the player
    enemies:Player[];
     equipment: Map<  string, number>  ;
    character={
        class:Class.Peasant,
        race:Race.Other,
        description:""
    }
    constructor()
    {  
        this.enemies=[];
        this.equipment= new Map();
    }
    setName(name:string):void{
        this.name=name
    }
    getName():string{
       return this.name
    }
    SpecificCombatEncounters(player:Player,attackType:string):string{
        if(this.enemies.includes(player)){
            return 'You: '+this.getName()+" "+this.takeHit(this.createNewAttack(attackType))
            +' Enemy: '+ player.takeHit(this.createNewAttack(attackType))
        }else{
            return "Hello "+player.name
        }
    }
    addAttackToEquipment(thing:string){
        if (this.equipment.has(thing)) {
            const currentValue = this.equipment.get(thing) || 0;
            this.equipment.set(thing, currentValue + 1);
          }else{
            this.equipment.set(thing, 1);
          }
        
    }
    addEnemy(newPlayer:Player): void {
        this.enemies.push(newPlayer);
      }
    removeEnemy(newPlayer:Player):void{
        this.enemies.splice(this.enemies.indexOf(newPlayer),1)
    }
    
      getPlayerList(): Player[] {
        return this.enemies;
      }
    getHealth(): number {
        return this._health
    }
    gatArmour():number {
        return this._armour
    }

    takeHit(newAttack: Attack): string {
        let damage: number
      
        if (newAttack.attackRoll() >= this._armour) {
            damage = newAttack.damage(newAttack.damageNumber)
            this._health -= damage
        } else if(newAttack.attackType.length === 0){
            return 'Not a valid attack!'
        }else{
            return 'The ' + newAttack.attackType + ' attack missed!'
        }

        return `The attack hit for ${damage} damage! The player now has ${this._health} health.`
    }
    createNewAttack(attackType:string):Attack{
       
        switch (attackType){
            case 'sword':
                return new SwordAttack()
                break;
            case 'fire spell':
               return new FireSpellAttack()
                break;
            case 'ice spell':
                return new IceSpellAttack()
                break;
            case 'axe':
                return new AxeAttack()
                break;
            default:
                return new Attack()
        }
    }
   
    CharacterBuilder(num:string,numb:string,descript:string):void{
        
            switch(num){
                case '1': this.character.class=Class.Royalty
                case '2': this.character.class=Class.Nobility
                case '3': this.character.class=Class.Peasant
            }
           
              switch(numb){
                  case '1': this.character.race=Race.Black
                  case '2': this.character.race=Race.White
                  case '3': this.character.race=Race.Asian
                  case '4': this.character.race=Race.Other
              }
                this.character.description=descript
               
           
         
    }
   
}
enum Class {
    Royalty,
    Nobility,
    Peasant,
  }
  enum Race {
    Black,
    White,
    Asian,
    Other,
  }