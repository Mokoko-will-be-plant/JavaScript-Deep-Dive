class Mokoko {
    constructor(weapon, subWeapon) {
        this.weapon = weapon;
        this.subWeapon = subWeapon;
    }
}

class MokokoSoldier extends Mokoko {
    constructor(name, weapon, subWeapon) {
        this.name = name;

        super(weapon, subWeapon);
    }
}

class Mokokong extends MokokoSoldier {
}

const soldier = new Mokokong('SangGyu', 'Keyboard', 'TouchPad');
console.log(soldier); 

/**
 * 실행 결과를 알려주세요.
 * 왜 결과가 그렇게 되었는지도 알려주세요! 
 */