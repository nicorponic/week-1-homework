// Write your JS here

const hero = {
  name: "",
  heroic: true,
  inventory: [],
  health: 10,

  weapon: {
    type: "",
    damage: 2
  }
};

function rest(obj) {
  obj.health = 10;
  return obj;
}

function pickUpItem(hero, obj) {
    hero.inventory.push(obj);
}

function equipWeapon() {
    
}


function equipDagger() {
    hero.weapon = {type: "dagger", damage: 2}
    hero.inventory.push(hero.weapon)
}


function resetHealth() {
  hero.health = 10;
}
