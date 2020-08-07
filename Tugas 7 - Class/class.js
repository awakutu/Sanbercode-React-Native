//1. Animal Class
//Release 0
class Animal {
  constructor(name, legs, cold_blooded) {
    this.name = name;
    this.legs = 4;
    this.cold_blooded = false;
  }
}

const sheep = new Animal("shaun");

console.log(sheep.name); // "shaun"
console.log(sheep.legs); // 4
console.log(sheep.cold_blooded); // false

//Release 1

class Frog extends Animal {
  constructor(name, legs, cold_blooded) {
    super(name, legs, cold_blooded);
    this.legs = 2;
  }

  jump() {
    return console.log("hop hop");
  }
}

class Ape extends Animal {
  constructor(name, legs, cold_blooded) {
    super(name, legs, cold_blooded);
  }

  yell() {
    return console.log("Auooo");
  }
}

const sungokong = new Ape("kera sakti");
sungokong.yell(); // "Auooo"

const kodok = new Frog("buduk");
kodok.jump(); // "hop hop"


//2. Function to Class
class Clock {
  constructor({ template }) {
    let timer;
    const render = () => {
      const date = new Date();
      let hours = date.getHours();
      let mins = date.getMinutes();
      let secs = date.getSeconds();
      if (hours < 10) {
        hours = "0" + hours;
      } else if (mins < 10) {
        mins = "0" + mins;
      } else if (secs < 10) {
        secs = "0" + secs;
      }

      let output = template
        .replace("h", hours)
        .replace("m", mins)
        .replace("s", secs);

      console.log(output);
    };

    this.stop =  ()=> {
      clearInterval(timer);
    };

    this.start =  () => {
      render();
      timer = setInterval(render, 1000);
    };
  }
}

const clock = new Clock({ template: "h:m:s" });
clock.start();