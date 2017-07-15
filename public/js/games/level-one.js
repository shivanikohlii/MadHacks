// Put all your game code within this function definition


window.onload = function () {
    var width = innerWidth;
    var height = innerHeight;

    var text;
    var score_test;
    var can_try = true;
    var next;

    var game = new Phaser.Game(width, height, Phaser.CANVAS, '', {preload: preload, create: create});

    function preload() {
        game.load.json('question', '/random/Level1/onlineSafety');
        game.load.image('next', '/images/nextbutton.svg')
    }

    function create() {
        var positive = game.add.graphics(0, 0);
        var negative = game.add.graphics(0, 0);

        // draw neg triangle
        next = game.add.sprite(width / 2, height / 2 + 200, 'next');
        next.scale.set(.5, .5);
        next.anchor.set(.5);
        next.inputEnabled = true;
        next.events.onInputDown.add(next_click, this);
        next.visible = false;

        positive.beginFill(0x8BE6B4);
        positive.moveTo(0, 0);
        positive.lineTo(width, 0);
        positive.lineTo(0, height);
        positive.endFill();
        

        // draw pos triangle
        negative.beginFill(0xF5D77A);
        negative.moveTo(width, 0);
        negative.lineTo(0, height);
        negative.lineTo(width, height);
        negative.endFill();

        positive.inputEnabled = true;
        negative.inputEnabled = true;
        positive.events.onInputDown.add(t_click, this);
        negative.events.onInputDown.add(f_click, this);
        true_ans = game.add.text(0,10, "If you agree");
        true_ans2 = game.add.text(0,30, "click this block.");
        false_ans = game.add.text(1070,550, "If you disagree ");
        false_ans2 = game.add.text(1070,570, "click this block.");
     
        var phaseJSON = game.cache.getJSON('question');
        var style = {
            font: "bold 32px Arial", fill: "#fff", boundsAlignH: "center", boundsAlignV: "middle",
            wordWrap: true,
            wordWrapWidth: width / 2
        };

        //  The Text is positioned at 0, 100
        text = game.add.text(0, 0, phaseJSON.q, style);
        text.setShadow(3, 3, 'rgba(0,0,0,0.5)', 2);
        text.setTextBounds(0, 0, width, height);

        if (document.cookie == "")
            document.cookie = "score=0";

        console.info(document.cookie);
        score_test = game.add.text(500,0, "Score: " + document.cookie.split("=")[1], style);
    }
        

    function next_click() {
        window.location = '/level-one';
    }

    function g_click(x) {
        if (can_try) {
            can_try = false;
            next.visible = true;
            var phaseJSON = game.cache.getJSON('question');

            if (phaseJSON.a == x) {
                text.text = phaseJSON.correct;
                document.cookie = "score=" + (parseInt(document.cookie.split("=")[1]) + 1);
            }
            else
                text.text = phaseJSON.wrong;

            // TODO Mark this question as solved
        }
        else
            text.text = "Go to the next Question to try again";
    }

    function t_click() {
        g_click(true);
    }

    function f_click() {
        g_click(false);
    }
};