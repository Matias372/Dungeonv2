// game.js
import BootScene from './Scenes/BootScene.js';
window.onload = function() {
    var config = {
        type: Phaser.AUTO,
        width: 800,
        height: 600,
        parent: 'game-section',
        scene: [BootScene]
    };

    var game = new Phaser.Game(config);

};
