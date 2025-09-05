export class Player {
  name;
  level;

    constructor(name,level) {
      this.name = name;
      this.level = level;
    }
  info(){
    console.log( ` ${this.name} has reach level ${this.level}
    `);
  }
  }
  const Tara = new Player("Tara",6);
  console.log(Tara);
  Tara.info();
  
  