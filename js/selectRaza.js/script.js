const enemigos = [
    // Enemigos de D&D
    { nombre: "Goblin", descripcion: "Pequeños y astutos, suelen atacar en grupos con tácticas sucias." },
    { nombre: "Orco", descripcion: "Fuertes y brutales, con una gran resistencia al dolor." },
    { nombre: "Troll", descripcion: "Regeneran rápidamente sus heridas, se les daña con fuego o ácido." },
    { nombre: "Dragón Rojo", descripcion: "Majestuoso y temible, su aliento de fuego arrasa con todo." },
    { nombre: "Liche", descripcion: "Poderosos magos no-muertos, maestros de la magia oscura." },
    { nombre: "Beholder", descripcion: "Monstruos flotantes con muchos ojos, cada uno con un rayo diferente." },
    { nombre: "Mind Flayer", descripcion: "Criaturas psíquicas que devoran cerebros y controlan mentes." },
    { nombre: "Kobold", descripcion: "Pequeños y cobardes, excavan túneles y colocan trampas." },
    { nombre: "Gnoll", descripcion: "Hombres hiena salvajes y feroces, cazadores incansables." },
    { nombre: "Hobgoblin", descripcion: "Disciplina militar y estrategias bien coordinadas." },
    { nombre: "Doppelganger", descripcion: "Cambian de forma, expertos en engaño y suplantación." },
    { nombre: "Gelatinous Cube", descripcion: "Cubo de gelatina traslúcido que disuelve todo lo que toca." },
    { nombre: "Displacer Beast", descripcion: "Criatura felina con tentáculos, difícil de acertar por su ilusión de desplazamiento." },
    { nombre: "Owlbear", descripcion: "Mitad búho, mitad oso, extremadamente fuerte y agresivo." },
    { nombre: "Mimic", descripcion: "Puede tomar la forma de objetos, atrapando a sus víctimas por sorpresa." },
    { nombre: "Bugbear", descripcion: "Hombres oso grandes y peludos, cazadores silenciosos." },
    { nombre: "Vampiro", descripcion: "No-muerto que chupa la sangre y tiene habilidades sobrenaturales." },
    { nombre: "Espectro", descripcion: "Fantasmas malditos, intangibles y drenadores de vida." },
    { nombre: "Zombi", descripcion: "No-muertos lentos y torpes, pero implacables." },
    { nombre: "Esqueleto", descripcion: "Guerreros no-muertos, animados por magia oscura." },
    { nombre: "Gárgola", descripcion: "Estatuas de piedra que cobran vida, resistentes y feroces." },
    { nombre: "Medusa", descripcion: "Puede convertir a los seres en piedra con su mirada." },
    { nombre: "Hydra", descripcion: "Dragón con múltiples cabezas que regeneran si se cortan." },
    { nombre: "Giant Spider", descripcion: "Arañas gigantes que tejen redes y poseen veneno mortal." },
    { nombre: "Basilisk", descripcion: "Su mirada puede petrificar, su mordida es venenosa." },
    { nombre: "Manticore", descripcion: "Criatura con cuerpo de león, alas de murciélago y cola venenosa." },
    { nombre: "Chimera", descripcion: "Criatura híbrida con partes de león, cabra y dragón." },
    { nombre: "Rakshasa", descripcion: "Demonios con aspecto de tigre, expertos en ilusiones y magia." },
    { nombre: "Yeti", descripcion: "Criatura del frío, enorme y fuerte, vive en las montañas nevadas." },
    { nombre: "Griffon", descripcion: "Mitad águila, mitad león, feroz y noble." },
    { nombre: "Wyvern", descripcion: "Pariente menor del dragón, venenoso y volador." },
    { nombre: "Súcubo", descripcion: "Demonio que seduce y drena la energía vital de sus víctimas." },
    { nombre: "Incubo", descripcion: "Versión masculina del súcubo, también drena energía vital." },
    { nombre: "Demonio", descripcion: "Criaturas del infierno, poderosas y malévolas." },
    { nombre: "Diablo", descripcion: "Más astutos que los demonios, expertos en hacer pactos y engañar." },
    { nombre: "Gnomo Oscuro", descripcion: "Seres pequeños y maliciosos que usan magia oscura." },
    { nombre: "Duergar", descripcion: "Enanos oscuros, viven en las profundidades y son crueles esclavistas." },
    { nombre: "Aboleth", descripcion: "Criaturas ancestrales acuáticas con poderes psíquicos." },
    { nombre: "Shadow", descripcion: "Sombras que drenan la fuerza vital y son difíciles de golpear." },
    { nombre: "Wraith", descripcion: "Espectros que se alimentan de la energía vital." },
    { nombre: "Ghoul", descripcion: "No-muertos que comen carne de los muertos." },
    { nombre: "Tarrasque", descripcion: "Bestia colosal y casi indestructible, la encarnación de la destrucción." },
    { nombre: "Golem de Hierro", descripcion: "Constructos de metal, increíblemente fuertes y resistentes." },
    { nombre: "Golem de Piedra", descripcion: "Constructos de piedra, extremadamente duros y pesados." },
    { nombre: "Golem de Carne", descripcion: "Constructos hechos de carne, animados por magia oscura." },
    { nombre: "Elemental de Fuego", descripcion: "Seres de fuego, queman todo lo que tocan." },
    { nombre: "Elemental de Agua", descripcion: "Seres de agua, capaces de ahogar y manipular líquidos." },
    { nombre: "Elemental de Tierra", descripcion: "Seres de tierra, resistentes y poderosos." },
    { nombre: "Elemental de Aire", descripcion: "Seres de aire, veloces y etéreos." },

    // Monstruos del folclore argentino
    { nombre: "El Lobizón", descripcion: "Hombre lobo que se transforma en noches de luna llena, muy peligroso." },
    { nombre: "El Pombero", descripcion: "Duende protector de la naturaleza, puede ser benévolo o travieso." },
    { nombre: "El Yasy Yateré", descripcion: "Duende rubio que secuestra a los niños y los engaña." },
    { nombre: "La Llorona", descripcion: "Fantasma de una mujer que llora por sus hijos perdidos, su lamento es mortal." },
    { nombre: "El Familiar", descripcion: "Demonio que protege propiedades a cambio de almas humanas." },
    { nombre: "El Ucumar", descripcion: "Hombre oso andino, feroz y protector de la selva." },
    { nombre: "El Almamula", descripcion: "Espíritu de una mujer condenada, se convierte en una mula que emite fuego." },
    { nombre: "El Zupay", descripcion: "Demonio de las minas, trae mala suerte y desgracias." },
    { nombre: "El Cacuy", descripcion: "Ave nocturna que se lleva a los niños desobedientes." },
    { nombre: "El Futre", descripcion: "Espíritu de un hombre elegante que aparece en caminos solitarios." },
    { nombre: "La Mulánima", descripcion: "Espíritu de una mujer transformada en mula, condenada por sus pecados." },
    { nombre: "El Yasí-Yateré", descripcion: "Duende que confunde a los viajeros en la selva." },
    { nombre: "La Luz Mala", descripcion: "Luz fantasmagórica que guía a los viajeros a su perdición." },
    { nombre: "El Anchimallén", descripcion: "Espíritu protector de los Mapuches, puede ser benévolo o vengativo." },
    { nombre: "El Pehuenche", descripcion: "Espíritu guerrero protector de la tribu Pehuenche." },
    { nombre: "El Chancha Bruja", descripcion: "Bruja que se convierte en chancha para espiar y causar daño." },
    { nombre: "La Pata Sola", descripcion: "Mujer con una sola pierna que ataca a los hombres infieles." },
    { nombre: "El Sapo de la Lluvia", descripcion: "Sapo gigante que controla las lluvias y tormentas." },
    { nombre: "El Mandinga", descripcion: "Demonio que concede deseos a cambio de almas." },
    { nombre: "El Iguazú", descripcion: "Espíritu del agua que habita en las Cataratas del Iguazú." },
    { nombre: "El Kueyo", descripcion: "Ser mitológico que habita en los montes y protege a los animales." },
    { nombre: "El Toro Aterror", descripcion: "Toro fantasmal que aterroriza a los viajeros nocturnos." },
    { nombre: "El Aquerrale", descripcion: "Reunión de brujas y demonios que celebran rituales oscuros." },
    { nombre: "El Ñeque", descripcion: "Duende travieso que roba objetos y se oculta en la selva." },
    { nombre: "El Sachayoj", descripcion: "Espíritu del monte, protector de la flora y fauna." },

    // Otros monstruos
    { nombre: "Vampiro de Nosferatu", descripcion: "No-muerto con apariencia grotesca, chupador de sangre." },
    { nombre: "Hombre Lobo", descripcion: "Humano que se transforma en lobo durante la luna llena." },
    { nombre: "Zombie Voodoo", descripcion: "Cadáver resucitado mediante magia vudú, obediente a su amo." },
    { nombre: "Chupacabras", descripcion: "Criatura que ataca al ganado y drena su sangre." },
    { nombre: "Bigfoot", descripcion: "Gran simio que habita en los bosques, rara vez visto." },
    { nombre: "Yeti", descripcion: "Criatura del Himalaya, similar a Bigfoot pero adaptada al frío." },
    { nombre: "Kraken", descripcion: "Gigantesco calamar que habita en las profundidades del océano." },
    { nombre: "Sirena", descripcion: "Mitad mujer, mitad pez, seduce y ahoga a los marineros." },
    { nombre: "Leviatán", descripcion: "Monstruo marino colosal, símbolo del caos." },
    { nombre: "Espectro", descripcion: "Fantasma vengativo, intocable y mortal." },
    { nombre: "Harpía", descripcion: "Mitad mujer, mitad ave, rapta a los hombres." },
    { nombre: "Fénix", descripcion: "Ave de fuego que resucita de sus cenizas." },
    { nombre: "Banshee", descripcion: "Espíritu femenino cuyo lamento anuncia la muerte." },
    { nombre: "Quimera", descripcion: "Criatura con cabeza de león, cuerpo de cabra y cola de serpiente." },
    { nombre: "Gremlin", descripcion: "Pequeño ser travieso que causa accidentes y malfunciones." },
    { nombre: "Djinn", descripcion: "Espíritu del viento, puede conceder deseos o traer desgracias." },
    { nombre: "Esfinge", descripcion: "Guardiana de secretos, plantea enigmas mortales." },
    { nombre: "Hombre Polilla", descripcion: "Criatura alada que presagia desastres." },
    { nombre: "Pies Grandes", descripcion: "Gigante peludo que habita en zonas boscosas." },
    { nombre: "Dullahan", descripcion: "Jinete sin cabeza que anuncia la muerte." },
    { nombre: "Kelpie", descripcion: "Espíritu de agua que toma la forma de un caballo para ahogar a sus víctimas." },
    { nombre: "Taniwha", descripcion: "Criatura acuática de la mitología maorí, protectora o destructora." },
    { nombre: "Alp", descripcion: "Demonio nocturno que causa pesadillas y roba el aliento." },
    { nombre: "Azeman", descripcion: "Vampiro sudamericano que se transforma en murciélago." },
    { nombre: "Chaneque", descripcion: "Duendes mexicanos que protegen la naturaleza." },
    { nombre: "La Ciguapa", descripcion: "Mujer con pies al revés que seduce y pierde a los hombres." },
    { nombre: "Pishtaco", descripcion: "Asesino mitológico que roba la grasa de sus víctimas." },
    { nombre: "Aswang", descripcion: "Criatura filipina que cambia de forma y se alimenta de carne humana." },
    { nombre: "Baba Yaga", descripcion: "Bruja eslava que vive en una cabaña con patas de gallina." }
];

document.getElementById('enemyForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const level = parseInt(document.getElementById('level').value);
    const quantity = parseInt(document.getElementById('quantity').value);
    const difficultyValue = document.getElementById('difficulty').value;

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
        const enemy = generateEnemy(level, points, difficultyValue);
        enemyContainer.appendChild(createEnemyCard(enemy, i));
    }
});

function generateEnemy(level, points, difficulty) {
    const stats = distributePoints(points);
    const randomIndex = Math.floor(Math.random() * enemigos.length);
    const enemyType = enemigos[randomIndex];
    return {
        level: level,
        difficulty: difficulty,
        type: enemyType.nombre,
        description: enemyType.descripcion,
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

    const description = document.createElement('p');
    description.className = 'card-text';
    description.innerText = enemy.description;

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
    cardBody.appendChild(description);
    cardBody.appendChild(difficulty);
    cardBody.appendChild(stats);
    cardBody.appendChild(lifeInput);
    cardBody.appendChild(updateLifeBtn);
    card.appendChild(cardBody);
    col.appendChild(card);

    return col;
}