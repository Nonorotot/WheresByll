class MoreGameButton extends BaseButton {
    constructor(scene, x, y) {
        super(scene, x, y, "spritesheet_moregamebutton");

        this.setScale(0.4, 0.4);
    }

    handleClick() {
        var result = window.open('https://www.facebook.com/dyllmanila',  "_blank");
    }
}