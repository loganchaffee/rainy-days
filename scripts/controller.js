let playersFirstShot = [];

let controller = {
    left: false,
    right: false,
    up: false,
    keyEventListener: function (event) {
        let keyState = event.type === 'keydown' ? true : false;

        switch (event.key) {
            case 'a':
                controller.left = keyState;
                break;
            case 'd':
                controller.right = keyState;
                break;
            case ' ':
                if (document.getElementById('waveCount').innerHTML !== '0') {
                    event.preventDefault();
                }

                controller.up = keyState;
                break;
            case 'ArrowUp':
                event.preventDefault();
                let firstShot = {};
                if (playersFirstShot.length < 2) {
                    playersFirstShot.push(firstShot);
                }
                if (playersFirstShot.length >= 2) {
                    let projectile = new Projectile(player.x + 15, player.y, 6, -10);
                    if (projectiles.length < 1) {
                        projectiles.push(projectile);
                        shootSound();
                    }
                }
                break;
            case 's':
                controller.down = keyState;
                break;
        }
    },
    clickEventListener: function (event) {
        let firstShot = {};
        if (playersFirstShot.length < 2) {
            playersFirstShot.push(firstShot);
        }
        if (playersFirstShot.length >= 2) {
            let projectile = new Projectile(player.x + 15, player.y, 6, -10);
            if (projectiles.length < 1) {
                projectiles.push(projectile);
                shootSound();
            }
        }
    },
};

// Event Listeners
window.addEventListener('keydown', controller.keyEventListener);
window.addEventListener('keyup', controller.keyEventListener);
// window.addEventListener('click', controller.clickEventListener);
