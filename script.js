const planetData = {
  Mercury: {
    name: "Mercury",
    desc: "Smallest planet and closest to the Sun.",
    distance: "57.9 million km",
    size: "4,879 km diameter"
  },
  Venus: {
    name: "Venus",
    desc: "Second planet. Similar in size to Earth but with thick atmosphere.",
    distance: "108.2 million km",
    size: "12,104 km diameter"
  },
  Earth: {
    name: "Earth",
    desc: "Our home planet. The only known planet with life.",
    distance: "149.6 million km",
    size: "12,742 km diameter"
  },
  Mars: {
    name: "Mars",
    desc: "The Red Planet. Possible future human habitat.",
    distance: "227.9 million km",
    size: "6,779 km diameter"
  },
  Jupiter: {
    name: "Jupiter",
    desc: "Largest planet. Gas giant with strong storms.",
    distance: "778.5 million km",
    size: "139,820 km diameter"
  },
  Saturn: {
    name: "Saturn",
    desc: "Famous for its beautiful rings.",
    distance: "1.4 billion km",
    size: "116,460 km diameter"
  },
  Uranus: {
    name: "Uranus",
    desc: "Icy gas giant that rotates on its side.",
    distance: "2.9 billion km",
    size: "50,724 km diameter"
  },
  Neptune: {
    name: "Neptune",
    desc: "Farthest planet from the Sun. Very cold and windy.",
    distance: "4.5 billion km",
    size: "49,244 km diameter"
  }
};

document.querySelectorAll('.planet').forEach(planet => {
  planet.addEventListener('click', () => {
    const name = planet.getAttribute('data-name');
    const data = planetData[name];
    document.getElementById('planet-info').innerHTML = `
      <h2>${data.name}</h2>
      <p>${data.desc}</p>
      <p><strong>Distance from Sun:</strong> ${data.distance}</p>
      <p><strong>Diameter:</strong> ${data.size}</p>
    `;
  });
});
