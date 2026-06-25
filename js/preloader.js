class PreLoader extends Phaser.Scene{
    constructor() {
        super("preloader_image");
    }

    preload() {
        // this.load.image
        this.load.spritesheet('spritesheet_background', 'assets/images/background.png', {frameWidth: 1280, frameHeight: 720});
        
        // ========= LOADING AUDIO =========
        this.load.audio('bgm', ['assets/audio/bgm.mp3']);
        this.load.audio('button', ['assets/audio/button.mp3']);
        this.load.audio('cat1', ['assets/audio/buzz2.mp3']);
        this.load.audio('cat2', ['assets/audio/buzz1.mp3']);
        this.load.audio('cat3', ['assets/audio/buzz3.mp3']);
        this.load.audio('shuffling', ['assets/audio/shuffling.mp3']);
        this.load.audio('clickBox', ['assets/audio/click-box.mp3']);

        // ========= LOADING BAR   =========
        this.load.spritesheet('spritesheet_loading_frame', 'assets/loading-bar.png', {frameWidth: 200, frameHeight: 5});

        // ========= LOADING TITLE =========
        this.load.spritesheet('spritesheet_title', 'assets/title.png', {frameWidth: 642, frameHeight: 399});

        // ========= LOADING BUTTONS =========
        this.load.spritesheet('spritesheet_basebutton', 'assets/buttons/base-button.png', {frameWidth: 116, frameHeight: 116});
        this.load.spritesheet('spritesheet_playbutton', 'assets/buttons/play-button.png', {frameWidth: 280, frameHeight: 281});
        this.load.spritesheet('spritesheet_homebutton', 'assets/buttons/backtohome-button.png', {frameWidth: 280, frameHeight: 281});
        this.load.spritesheet('spritesheet_replaybutton', 'assets/buttons/replay-button.png', {frameWidth: 280, frameHeight: 281});
        this.load.spritesheet('spritesheet_nextlevelbutton', 'assets/buttons/nextlevel-button.png', {frameWidth: 280, frameHeight: 281});
        this.load.spritesheet('spritesheet_soundbutton', 'assets/buttons/sound-button.png', {frameWidth: 560 / 2, frameHeight: 281});
        this.load.spritesheet('spritesheet_moregamebutton', 'assets/buttons/DYLL-button.png', {frameWidth: 280, frameHeight: 281});

        // ========= LOADING PANEL =========
        this.load.spritesheet('spritesheet_panel', 'assets/popup-panel.png', {frameWidth: 503, frameHeight: 676});
    
        this.loadImage();
    }

    loadImage() {
        this.load.spritesheet('spritesheet_box', 'assets/images/box.png', {frameWidth: 337, frameHeight: 192});
        this.load.spritesheet('spritesheet_cat', 'assets/images/byll.png', {frameWidth: 228, frameHeight: 250});
        this.load.spritesheet('spritesheet_round', 'assets/images/round.png', {frameWidth: 576, frameHeight: 149});
        this.load.spritesheet('image_countdownframe', 'assets/images/loading/loading-bar0.png', {frameWidth: 642, frameHeight: 59});
        this.load.spritesheet('image_countdownbar', 'assets/images/loading/loading-bar1.png', {frameWidth: 626, frameHeight: 43});
    }

    create() {
        SoundHandler.setScene(this);
        SoundHandler.getInstance().playBgm();

        // this.setupLocalStore();

        this.scene.start('LoadingScreen');
    }

    setupLocalStore() {
        var data = {
            'current-level': 1,
            'high-score': 0,
            'current-tube': 1,
            'tube-type-was-bought': [1],
            'level-unlock': [1],
            'total-coins': 0
        }
    }
}