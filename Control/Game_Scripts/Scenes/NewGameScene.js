// Control/Game_Scripts/Scenes/NewGameScene.js

class NewGameScene extends Phaser.Scene {
    constructor() {
        super({ key: 'NewGameScene' });
    }

    create() {
        // Fondo del menú
        this.add.image(400, 300, 'menuBackground');

        // Texto de título
        this.add.text(400, 100, 'Selecciona tu personaje', { fontSize: '32px', fill: '#fff' }).setOrigin(0.5);

        // Grupos de botones para cada personaje
        const characters = ['Barbaro', 'Mago', 'Cazador', 'Guerrero'];
        const startX = 200;
        const startY = 200;
        const spacingX = 200;

        characters.forEach((char, index) => {
            const button = this.add.image(startX + spacingX * index, startY, char).setInteractive();
            button.on('pointerdown', () => this.selectCharacter(char, button));
        });

        // Entrada para el nombre del personaje
        this.add.text(400, 400, 'Nombre del personaje:', { fontSize: '16px', fill: '#fff' }).setOrigin(0.5);
        this.input = this.add.dom(400, 430, 'input');
        this.input.node.placeholder = 'Ingresar nombre';

        // Botón para crear nueva partida
        this.add.text(400, 500, 'Crear', { fontSize: '24px', fill: '#fff' }).setOrigin(0.5);
        const createButton = this.add.image(400, 530, 'createButton').setInteractive();
        createButton.on('pointerdown', () => this.createNewGame());

        // Botón para volver al menú principal
        this.add.text(400, 580, 'Volver', { fontSize: '24px', fill: '#fff' }).setOrigin(0.5);
        const backButton = this.add.image(400, 610, 'backButton').setInteractive();
        backButton.on('pointerdown', () => this.loadScene('Menu'));
    }

    selectCharacter(character, button) {
        console.log('Clase seleccionada:', character);
        
        // Deseleccionar todos los botones
        this.scene.children.each(child => {
            if (child.type === 'Image' && child.getData('selected')) {
                child.clearTint();
                child.setData('selected', false);
            }
        });

        // Seleccionar el botón actual
        button.setTint(0x00ff00);
        button.setData('selected', true);
    }

    createNewGame() {
        // Obtener el nombre del personaje ingresado por el jugador
        const characterName = this.input.node.value.trim();
        
        // Verificar si se ha seleccionado un personaje
        const selectedCharacter = this.scene.children.getArray().find(child => child.type === 'Image' && child.getData('selected'));
        if (!selectedCharacter) {
            console.error('No se ha seleccionado un personaje');
            return;
        }
        
        // Obtener la clase del personaje seleccionado
        const characterClass = selectedCharacter.texture.key;

        // Lógica para crear una nueva partida con el nombre del personaje y la clase seleccionada
        console.log('Crear nueva partida con nombre:', characterName, 'y clase:', characterClass);
    }

    loadScene(sceneKey) {
        this.scene.start(sceneKey);
    }
}

export default NewGameScene;
