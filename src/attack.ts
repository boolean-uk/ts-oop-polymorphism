class Attack {
    public attackType : string
    constructor(attackType: string){
        this.attackType = attackType
    }
    
    damageEnemy(){
        if (this.attackType==='sword'){
           return Math.floor(Math.random() * (8 - 2) + 1)
        }
        if (this.attackType==='fire spell' || 'ice spell'){
           return Math.floor(Math.random() * (12 - 2) + 1)
        }
        if (this.attackType==='axe'){
            return Math.floor(Math.random() * (10 - 2) + 1)
        }
        else return 0
        
    }
}

module.exports{
    Attack: Attack
}