import './card-tile.js';

const projects = [
    'card',
    'clock',
    'curved-background',
    'gradient-loader',
    'horizontal-scroll',
    'lantern-effect',
    'neon-button',
    'parallax-scroll',
    'ribbon',
    'sliding-menu',
    'social-icons',
    'text-highlight'
];

const articlesGridWrapper = document.getElementById('articles-grid-wrapper');

projects.forEach(project => {
    createCardTile(project);
});

function createCardTile(projectName) {
    const cardTileElement = document.createElement('card-tile');
    cardTileElement.cardTile = projectName;

    articlesGridWrapper.appendChild(cardTileElement);
}

// createCardTile('projectName');