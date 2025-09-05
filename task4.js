export class Player {
  name;
  level;

    constructor(name,level,) {
      this.name = name;
      this.level = level;
      
    }
  info(){
    console.log( `${this.name} has reached level ${this.level}!!
    `);
  }
  levelUp(){
    this.level++;
      console.log(`${this.name} leveled up to Level ${this.level}!!`);
  }
  }
  const Tara = new Player("Tara",6);
  console.log(Tara);
  Tara.info();
  Tara.levelUp();