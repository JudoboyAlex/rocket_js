
const Rocket = require('./rocket');

describe('Rocket', () => {

  describe('constructor', () => {
    test('it should set default attributes if nothing is passed', () => {
      // ...
    rocket = new Rocket();
    expect(rocket.name).toBeDefined();
    expect(rocket.colour).toBeDefined();
    expect(rocket.flying).toEqual(false);


    });

    test("it should set the rocket's name if provided", () => {
      // ...
    rocket = new Rocket();
    rocket.name = ("Alexander");
    expect(rocket.name).toEqual("Alexander");
    });
  });

  describe('liftOff', () => {
    test('if this.flying is true then return true else false', () => {

      rocket = new Rocket();
      rocket.flying = true;
      expect(rocket.flying).toEqual(true);
    })
 });
  
  describe('land', () => {
    test('if not this.flying then return false', () => {

      rocket = new Rocket();
      !rocket.flying;
      expect(rocket.flying).toEqual(false);
    })
  });

  describe('status', () => {
    test('if rocket is flying print rocket name and sentence', () => {

      rocket = new Rocket();
      rocket.flying = true;
      rocket.name = "Alexander";
      expect(rocket.status()).toEqual("Rocket Alexander is flying through the sky!")

      rocket = new Rocket();
      rocket.flying = false;
      rocket.name = "Alexander";
      expect(rocket.status()).toEqual("Rocket Alexander is ready for liftoff!")

    })
  })

  describe('sendCodedSignal', () => {
    test('if sended signal is delivering make right noise', () => {

      rocket = new Rocket();
      rocket.flying = true;
      expect(rocket.sendCodedSignal(3)).toEqual('beep beep');

      rocket = new Rocket();
      rocket.flying = true;
      expect(rocket.sendCodedSignal(11)).toEqual('boop boop boop');

      rocket = new Rocket();
      rocket.flying = false;
      expect(rocket.sendCodedSignal(4)).toEqual('beep');

      rocket =  new Rocket();
      rocket.flying = false;
      expect(rocket.sendCodedSignal(11)).toEqual('boop beep beep');

      rocket = new Rocket();
      rocket.flying = true;
      expect(rocket.sendCodedSignal()).toEqual('boop');
    })
  })

});



