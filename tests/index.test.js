/** * @jest-environment jsdom */
const { performSlash, animate, canvas, c } = require('../js/index');
const { rectangularCollision, determineWinner } = require('../js/rectangularCollision'); 
const mockCanvas = require('jest-canvas-mock');


describe('Game Functions', () => {
  afterEach(() => {
    mockCanvas.reset(); // Reset canvas mock after each test
  });



  test('performSlash should reduce opponent health', () => {
    // Arrange
    const player = { health: 100 };
    const opponent = { health: 50 };

    // Act
    performSlash(player, opponent);

    // Assert
    expect(opponent.health).toBe(40);
  });

  test('animate should update canvas and game elements', () => {
    // Arrange
    const player = {
      // mock necessary properties and methods
      update: jest.fn(),
      switchSprite: jest.fn(),
      attack: jest.fn(),
      takeHit: jest.fn(),
      framesCurrent: 4,
      isAttacking: true,
    };
    const enemy = {
      // mock necessary properties and methods
      update: jest.fn(),
      switchSprite: jest.fn(),
      attack: jest.fn(),
      takeHit: jest.fn(),
      framesCurrent: 2,
      isAttacking: true,
    };
    const timerId = jest.fn();

    // Mocking canvas-related functions
    jest.mock('../js/index', () => ({
      ...jest.requireActual('../js/index'),
      canvas: mockCanvas.createCanvas(),
      c: mockCanvas.getContext('2d'),
    }));

    // Act
    animate();

    // Assert
    // Add assertions based on the expected behavior of the animate function
    expect(player.update).toHaveBeenCalled();
    expect(player.switchSprite).toHaveBeenCalled();
    expect(player.attack).toHaveBeenCalled();
    expect(player.takeHit).toHaveBeenCalled();
    expect(enemy.update).toHaveBeenCalled();
    expect(enemy.switchSprite).toHaveBeenCalled();
    expect(enemy.attack).toHaveBeenCalled();
    expect(enemy.takeHit).toHaveBeenCalled();
    expect(rectangularCollision).toHaveBeenCalled();
    expect(determineWinner).toHaveBeenCalled();
  });
});
