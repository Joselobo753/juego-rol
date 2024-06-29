document.getElementById('enemyForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const level = parseInt(document.getElementById('level').value);
    const quantity = parseInt(document.getElementById('quantity').value);
    const difficultyValue = document.getElementById('difficulty').value;
    const enemyType = document.getElementById('enemyType').value;

    let difficultyMultiplier;
    switch (difficultyValue) {
        case 'easy':
            difficultyMultiplier = 1;
            break;
        case 'medium':
            difficultyMultiplier = 2;
            break;
        case 'hard':
            difficultyMultiplier = 3;
            break;
    }

    const points = (level * 10 + 30) * difficultyMultiplier;
    const enemyContainer = document.getElementById('enemyContainer');
    enemyContainer.innerHTML = '';

    for (let i = 0; i < quantity; i++) {
        const enemy = generateEnemy(level, points, difficultyValue, enemyType);
        enemyContainer.appendChild(createEnemyCard(enemy, i));
    }
});

function generateEnemy(level, points, difficulty, enemyType) {
    const stats = distributePoints(points);
    return {
        level: level,
        difficulty: difficulty,
        type: enemyType,
        stats: stats
    };
}

function distributePoints(points) {
    const stats = { life: 0, strength: 0, agility: 0, mana: 0 };
    const statNames = ["life", "strength", "agility", "mana"];
    
    for (let i = 0; i < points; i++) {
        const randomStat = statNames[Math.floor(Math.random() * statNames.length)];
        stats[randomStat]++;
    }

    return stats;
}

function createEnemyCard(enemy, index) {
    const col = document.createElement('div');
    col.className = 'col-md-4 enemy-card';
    col.id = `enemy-${index}`;

    const card = document.createElement('div');
    card.className = 'card';

    const cardBody = document.createElement('div');
    cardBody.className = 'card-body';

    const title = document.createElement('h5');
    title.className = 'card-title';
    title.innerText = `${enemy.type} (Nivel: ${enemy.level})`;

    const difficulty = document.createElement('p');
    difficulty.className = 'card-text';
    difficulty.innerText = `Dificultad: ${enemy.difficulty}`;

    const stats = document.createElement('p');
    stats.className = 'card-text';
    stats.innerHTML = `
        Vida: <span id="life-${index}">${enemy.stats.life}</span><br>
        Fuerza: ${enemy.stats.strength}<br>
        Agilidad: ${enemy.stats.agility}<br>
        Mana: ${enemy.stats.mana}
    `;

    const lifeInput = document.createElement('input');
    lifeInput.type = 'number';
    lifeInput.className = 'form-control mb-2';
    lifeInput.placeholder = 'Perdida de Vida';

    const updateLifeBtn = document.createElement('button');
    updateLifeBtn.className = 'btn btn-primary btn-sm';
    updateLifeBtn.innerText = 'Actualizar Vida';
    updateLifeBtn.addEventListener('click', function () {
        const lifeSpan = document.getElementById(`life-${index}`);
        let currentLife = parseInt(lifeSpan.innerText);
        const lostLife = parseInt(lifeInput.value);
        if (!isNaN(lostLife) && lostLife > 0) {
            currentLife -= lostLife;
            if (currentLife <= 0) {
                document.getElementById(`enemy-${index}`).remove();
            } else {
                lifeSpan.innerText = currentLife;
            }
        }
    });

    cardBody.appendChild(title);
    cardBody.appendChild(difficulty);
    cardBody.appendChild(stats);
    cardBody.appendChild(lifeInput);
    cardBody.appendChild(updateLifeBtn);
    card.appendChild(cardBody);
    col.appendChild(card);

    return col;
}
