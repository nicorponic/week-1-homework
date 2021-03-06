// Write your JS here

const hero = {
  name: "The Cool Hero",
  heroic: true,
  inventory: [],
  health: 10,

  weapon: {
    type: "Melee",
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

function equipWeapon(hero) {
    
    if (hero.inventory.length > 0) {
        hero.weapon = hero.inventory[0];
    }
}

function equipDagger() {
    hero.weapon = {type: "dagger", damage: 2}
    hero.inventory.push(hero.weapon)
}

function resetHealth() {
  hero.health = 10;
}



function displayStats(hero) {
    const container = document.getElementById("hero-stats");

    const heading1 = document.createElement("h2");
    const heading2 = document.createElement("h2");
    const heading3 = document.createElement("h2");
    const heading4 = document.createElement("h2");

    
    heading1.innerText = "hero name: " +hero.name;
    container.appendChild(heading1);

    heading2.innerText = "Health: " +hero.health;
    container.appendChild(heading2);

    heading3.innerText = "Weapon type: " +hero.weapon.type;
    container.appendChild(heading3);

    heading4.innerText = "Weapon damage: " +hero.weapon.damage;
    container.appendChild(heading4);
 
}

document.body.onload = displayStats(hero);
