/*
Playground

1. Walk around park
  - can walk twice in total
2. Eat
  - can eat as many times as they want
  - depending on animal race give specific food
    - cat: fish
    - dog: rib
    - rabbit: cabbage or carrot
3. Toilet
    - animals go to toilet after eating 3 times
    - animal needs cleaning after toilet


The playground allows 10 animals in total.
The owner likes cats, so 5 animals must always be cats
Playground session lasts 
 - cat: as long as they like
 - dog: half the time of the cat
 - rabbit: three times more than the time of the dog

Cats either stay until the playground is closed or leave very early.
There are MANY dogs, and they always wait in line to get inside, usually 10 times more than cats.
Rabbits mainly eat food, but if they decide to walk they will poop on the path.
There is only one cleaner and cats will complain if there is poop on the path, making the playground close earlier. 

//animals_in_playground array Animal

const cats = generateCats();

const p = new Playground();

*/

enum FoodChoices {
    rib,
    fish,
    carrot,
    cabbage
}
enum Breed {
    cat,
    dog,
    rabbit
}

class Animal {
    name: string;
    constructor(name:string){
        this.name = name;
    }
    // type:
    i:number;
    poop(){
        //koga ke bide povikana ovaa methoda vo eat() da namestime counter sto 
        //ke go povika cleaner i console log deka pooped.
        // if the animal eats, pick it random and set it to poop + call do next action
        if(this.i > 0){
        console.log("Pooped");
        this.cleaner();
        this.doNextAction();
        }
    }
    eat(){
        var d: number;
        var c: number;
        var r: number;
        if(AnimalClasses[0] == Cat){
            c++;
            console.log(Cat,"Mackata se najade" + FoodChoices.fish);
            this.doNextAction();
        }
        if(AnimalClasses[1] == Dog){
             d++;
            console.log(Dog,"Kuceto se najade i jadese" + FoodChoices.rib);
            this.doNextAction();
        }
        if(AnimalClasses[2] == Rabbit){// da se napravi da jade samo ako random broj e 2
            var random = Math.floor(Math.random()*(11));
            if(random == 2){// rare eating
                r++;
                console.log(Rabbit,"Zajakot se najade" + FoodChoices.carrot);
                 this.doNextAction();
            }
        }// imame counter koj ni dava informacija dali nekoe zivotno jadelo 3 pati
        if(d || c || r == 3){
            this.i++;
            this.poop();
            this.doNextAction();
        }
        
        
        // ke ni treba if i counter za da znaeme kolku pati edno zivotno jadelo.
        // i taa promenliva od counterot i ako e == 3 da ja povikame methodata poop.
        // set a random animal to eat and pick the food from foodchoices for the correct breed or class + call do next action
    }
    walk(){
        // walk in playground for some interval
        var walking = setInterval(Playground, 20000);
        return walking;
    }
    cleaner(){
        if(this.i>0){//imame i counter za poop koe ni dava informacija za dali ima poop i treba da se iscisti
            console.log("Isciteno");
            this.doNextAction();
        }
        
        // koga ke bide povikana od poop da odi i da go iscisti istoto. i koga ke go iscisti counter da bide setiran na 0
        // set the cleaner to clean after the poop, but one poop at the time. + call do next action
    }
    interval = setInterval(this.doNextAction, 5000)
    stop(){
       return setInterval(this.doNextAction, 0);
    }

    doNextAction(){
    // use random numbers and two dimensional array to store possible scenarios
        var multi = Math.floor(Math.random()*(11))// picked random number and with if we call the method for nextaction.
        let arr1 = [];
          let multiarr;
            if(multi == 5){
             return multiarr = arr1.map(n=>n , this.walk());
           }
           if(multi == 7){
             return multiarr = arr1.map(n=>n , this.eat()); 
           }
           
        // two dim.
        
    } 
}
class Cat extends Animal {
    leave(){
        if(this.i == 0){
            console.log("Mackite si odat");
            animals.pop().i;
            // ne e tocno zaradi toa sto treba da ja izvadi mackata sto videla poop
        }   //to leave if the cat see the poop on the path
    }
    // unpredictable
    // if cat sees poop on the path, break the program

}
class Dog extends Animal {


}
class Rabbit extends Animal {
    // prefer eating, 10:1
    // don't poop
    // walk very rarely, but always poop on the path
}

const AnimalNames = {[Breed.cat]: "Cat" , [Breed.dog]: "Dog", [Breed.rabbit]: "Rabbit" };
const AnimalClasses = {[Breed.cat]: Cat , [Breed.dog]: Dog, [Breed.rabbit]: Rabbit };


// functions for testing
function generateAnimal(animalClass, name){
    return animalClass(name);
}
function generateAnimals(number_of_animals: number, breed: Breed){
    let animals: Array<Animal>;
    for(var i=1;i<=number_of_animals;i++){
        if (breed == Breed.cat){
            animals.push(generateAnimal(AnimalClasses[breed], AnimalNames[breed] + i));
        }
    }
    return animals;
}
class Playground extends Animal {
//# properties
wait_to_enter : Array<Animal>;
animals_in_playground: Array<Animal>;
animals_eating: Array<Animal>;
animals_in_toilet: Array<Animal>;
animals_walking: Array<Animal>;


 Playground(animals: Array<Animal>) {
    /* - iterate through all animals, saving the in the animals_in_playground list
     filter out, so that there are only 5 cats, 3 dogs and 2 rabbits
     if there are no cats in the array of Animals, dont let anyone in, playground is still not open
    */


    // if there are more than 5 cats, let only 5 cats in
    //      - EXTRA CONDITION if there are cats waiting, they have priority over dogs and rabbits
    // dogs wait in line
    // rabbits wait in line
  }
  eat(){
    var d: number;
    var c: number;
    var r: number;
    if(AnimalClasses[0] == Cat){
        c++;
        console.log(Cat,"Mackata se najade" + FoodChoices.fish);
        this.doNextAction();
    }
    if(AnimalClasses[1] == Dog){
         d++;
        console.log(Dog,"Kuceto se najade i jadese" + FoodChoices.rib);
        this.doNextAction();
    }
    if(AnimalClasses[2] == Rabbit){// da se napravi da jade samo ako random broj e 2
        var random = Math.floor(Math.random()*(11));
        if(random == 2){// rare eating
            r++;
            console.log(Rabbit,"Zajakot se najade" + FoodChoices.carrot);
             this.doNextAction();
        }
    }
    if(d || c || r == 3){
        this.i++;
        this.poop();
        this.doNextAction();
    }
}
    Date(){
        // implementacija na date
    }
//# methods
     enter_toilet(animal: Animal){
      // save it to list
      // save dateEntered = new Date() when an animal enters..

      // if (dateEntered != null)
      // don't let another animal in

      // save dateLeft = new Date() when animal leaves..
      // after dateLeft is set, allow animals to enter
    }
     go_for_a_walk(animal: Animal){
      //save it to list
      // save new Date() when an animal enters..
      // save new Date() when an animal enters..
      // allow all animals to go for a walk, not limited to number of animals
     }
     have_lunch(animal: Animal){
    // save new Date() when an animal enters..
    
     }
     openPlayground(){
      for(let i = 0; i < 5; i++){
          if(AnimalNames[0]){
              return true;
          }else break;
      }
    // check if reaady
    // see if we have 5 cats
  }
}

let cats = generateAnimals(5, Breed.cat);
let dogs = generateAnimals(3, Breed.dog);
let rabbits = generateAnimals(2, Breed.rabbit);

const animals = [ ...cats, ...dogs, ...rabbits];

const p = new Playground(Animal.name);
p.Playground(animals);
// crash if there are no 5 cats
p.openPlayground();



