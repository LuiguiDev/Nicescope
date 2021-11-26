let planets = [
  {
    name: 'Venus',
    dayDuration: '3 earth days',
    distance: 120000,
    moons: 'None',
  }
];

function planet (name, dayDuration, distance, moons){
  this.name = name;
  this.dayDuration = dayDuration;
  this.distance = distance;
  this.moons = moons;
};  

const createPlanet = () => {
  var name = prompt("Write planet name");
  var dayDuration = prompt("Write planet's day duration");
  var distance = prompt("Write planet distance");
  var moons = prompt("Write planet's moons");

  planets.push(new planet(name, dayDuration, distance, moons))
};

const planetList = (obj) => {
  for (var i in obj){
    console.log(Object.values(i))
  }  
};

const searchPlanet = (obj, planetName) => {
  for (var i in obj) {
    if (obj[i].name == planetName) {
      console.log('Planet is on planet list')
    }else{
      console.log('Planet is not on planet list')
    }
  }
};


