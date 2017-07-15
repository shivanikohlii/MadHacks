// Put all your game code within this function definition


window.onload = function () {
    var width = innerWidth;
    var height = innerHeight;

    var text;
    var score_text;
    var can_try = true;
    var next;

    var game = new Phaser.Game(width, height, Phaser.CANVAS, '', {preload: preload, create: create});

    function preload() {
        game.load.json('question', '/random/Level 2/conditionals');
        game.load.image('next', '/images/nextButton.png')
    }

    function create() {
        //var c = document.getElementById("level-two")
        //var ctx=c.getContext("2d");
        //ctx.canvas.width = window.innerWidth;
        //ctx.canvas.height = window.innerHeight;   
        var top = game.add.graphics(0, 20);
        var topL = game.add.graphics(0, 20);
        var topR = game.add.graphics(0, 20);
        var botL = game.add.graphics(0, 20);
        var botR = game.add.graphics(0, 20);
        next = game.add.sprite(width / 2, height / 2 + 200, 'next');
        next.scale.set(.5, .5);
        next.anchor.set(.5);
        next.inputEnabled = true;
        next.events.onInputDown.add(next_click, this);
        next.visible = false;

        top.beginFill(0x89E894);
        top.moveTo(20, 20);
        top.lineTo(width - 20, 20);
        top.lineTo(width - 20, 160);
        top.lineTo(20, 160);
        top.lineTo(20, 20);
        top.endFill();

        topL.beginFill(0x93E2D5);
        topL.moveTo(20, 180);
        topL.lineTo((width / 2) - 20, 180);
        topL.lineTo((width / 2) - 20, 320);
        topL.lineTo(20, 320);
        topL.lineTo(20, 180);
        topL.endFill();

        topR.beginFill(0x34DDDD);
        topR.moveTo((width / 2) + 10, 180);
        topR.lineTo(width - 20, 180);
        topR.lineTo(width - 20, 320);
        topR.lineTo((width / 2) + 20, 320);
        topR.lineTo((width / 2) + 20, 180);
        topR.endFill();

        botL.beginFill(0x7AF5F5);
        botL.moveTo(20, 340);
        botL.lineTo((width / 2) - 20, 340);
        botL.lineTo((width / 2) - 20, 480);
        botL.lineTo(20, 480);
        botL.lineTo(20, 340);
        botL.endFill();

        botR.beginFill(0x78D5E3);
        botR.moveTo((width / 2) + 20, 340);
        botR.lineTo(width - 20, 340);
        botR.lineTo(width - 20, 480);
        botR.lineTo((width / 2) + 20, 480);
        botR.lineTo((width / 2) + 20, 340);
        botR.endFill();

        top.inputEnabled = true;
        top.events.onInputDown.add(top_click, this);

        topL.inputEnabled = true;
        topL.events.onInputDown.add(topL_click, this);

        topR.inputEnabled = true;
        topR.events.onInputDown.add(topR_click, this);

        botL.inputEnabled = true;
        botL.events.onInputDown.add(botL_click, this);

        botR.inputEnabled = true;
        botR.events.onInputDown.add(botR_click, this);

        var question = game.cache.getJSON('question');
        var style = {
            font: "bold 32px Arial", fill: "#fff", boundsAlignH: "center", boundsAlignV: "middle",
            wordWrap: true,
            wordWrapWidth: width / 2
        };

        text = game.add.text(0, 20, null, style);
        text.setShadow(3, 3, 'rgba(0,0,0,0.5)', 2);
        text.setTextBounds(0, 0, width, height);


        //top question
        textTop = game.add.text(0, 20, question.q, style);
        textTop.setShadow(3, 3, 'rgba(0,0,0,0.5)', 2);
        textTop.setTextBounds(20, 20, width - 20, 160);
        //answer topL
        textTopL = game.add.text(0, 20, question.ops[0].text, style);
        textTopL.setShadow(3, 3, 'rgba(0,0,0,0.5)', 2);
        textTopL.setTextBounds(20, 180, (width / 2) - 20, 160);
        //answer topR
        textTopR = game.add.text(0, 20, question.ops[1].text, style);
        textTopR.setShadow(3, 3, 'rgba(0,0,0,0.5)', 2);
        textTopR.setTextBounds((width / 2) + 20, 180, (width / 2) - 20, 160);
        //answer botL
        textBotL = game.add.text(0, 20, question.ops[2].text, style);
        textBotL.setShadow(3, 3, 'rgba(0,0,0,0.5)', 2);
        textBotL.setTextBounds(20, 340, (width / 2) - 20, 160);
        //answer botR
        textBotR = game.add.text(0, 20, question.ops[3].text, style);
        textBotR.setShadow(3, 3, 'rgba(0,0,0,0.5)', 2);
        textBotR.setTextBounds((width / 2) + 20, 340, (width / 2) - 20, 160);

        if (document.cookie == "")
            document.cookie = "score=0";

        score_text = game.add.text(0, 0, "Score: " + document.cookie.split("=")[1], style);
    }

    function next_click() {
        window.location = '/level-two';
    }

    function g_click(x) {
        if (can_try) {
            var question = game.cache.getJSON('question');
            var trueAnswer;
            console.info(x);

            can_try = false;
            next.visible = true;

            for (var i = 0; i < 4; i++) {
                if (question.ops[i].a == true)
                    trueAnswer = i;
            }
            textTop.visible = false;
            textTopR.visible = false;
            textTopL.visible = false;
            textBotR.visible = false;
            textBotL.visible = false;

            if (question.ops[trueAnswer].a == x) {
                text.text = question.correct;
                document.cookie = "score=" + (parseInt(document.cookie.split("=")[1]) + 1);
            }
            else
                text.text = question.wrong;
            // TODO Mark this question as solved
        }
        else
            text.text = "Go to the next Question to try again";
    }

    function top_click() {
        g_click(false);
    }

    function topL_click() {
        var question = game.cache.getJSON('question');
        g_click(question.ops[0].a);
    }

    function topR_click() {
        var question = game.cache.getJSON('question');
        g_click(question.ops[1].a);
    }

    function botL_click() {
        var question = game.cache.getJSON('question');
        g_click(question.ops[2].a);
    }

    function botR_click() {
        var question = game.cache.getJSON('question');
        g_click(question.ops[3].a);
    }
};
