// Control/Game_Scripts/Scenes/BootScene.js

class BootScene extends Phaser.Scene {
    constructor() {
        super({ key: 'BootScene' });
    }

    preload() {
        // Cargar los recursos necesarios para el juego
        this.load.image('menuBackground', '../../Resources/img/Backgrounds/menu.png');
        this.load.image('newGameButton', '../../Resources/img/new_game_button.png');
        this.load.image('loadGameButton', '../../Resources/img/load_game_button.png');
    }

    create() {
        // Mostrar el fondo del menú
        let background = this.add.image(400, 300, 'menuBackground');
        background.setScale(800 / background.width, 600 / background.height);

        // Añadir botón para nueva partida
        let newGameButton = this.add.image(400, 300, 'newGameButton').setInteractive();
        newGameButton.on('pointerdown', () => this.startNewGame());

        // Añadir botón para cargar partida
        let loadGameButton = this.add.image(400, 400, 'loadGameButton').setInteractive();
        loadGameButton.on('pointerdown', () => this.loadGame());
    }

    startNewGame() {
        // Iniciar la escena NewGameScene
        this.scene.start('NewGameScene');
    }

    loadGame() {
        // Lógica para cargar una partida guardada
    }
}

export default BootScene;
