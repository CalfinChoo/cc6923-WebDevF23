const categories = {
  Normal: {
    img: "./img/types/normal.png",
    alt: "Normal",
    type: "type",
  },
  Fighting: {
    img: "./img/types/fighting.png",
    alt: "Fighting",
    type: "type",
  },
  Flying: {
    img: "./img/types/flying.png",
    alt: "Flying",
    type: "type",
  },
  Poison: {
    img: "./img/types/poison.png",
    alt: "Poison",
    type: "type",
  },
  Ground: {
    img: "./img/types/ground.png",
    alt: "Ground",
    type: "type",
  },
  Rock: {
    img: "./img/types/rock.png",
    alt: "Rock",
    type: "type",
  },
  Bug: {
    img: "./img/types/bug.png",
    alt: "Bug",
    type: "type",
  },
  Ghost: {
    img: "./img/types/ghost.png",
    alt: "Ghost",
    type: "type",
  },
  Steel: {
    img: "./img/types/steel.png",
    alt: "Steel",
    type: "type",
  },
  Fire: {
    img: "./img/types/fire.png",
    alt: "Fire",
    type: "type",
  },
  Water: {
    img: "./img/types/water.png",
    alt: "Water",
    type: "type",
  },
  Grass: {
    img: "./img/types/grass.png",
    alt: "grass",
    type: "type",
  },
  Electric: {
    img: "./img/types/electric.png",
    alt: "Electric",
    type: "type",
  },
  Psychic: {
    img: "./img/types/psychic.png",
    alt: "Psychic",
    type: "type",
  },
  Ice: {
    img: "./img/types/ice.png",
    alt: "Ice",
    type: "type",
  },
  Dragon: {
    img: "./img/types/dragon.png",
    alt: "Dragon",
    type: "type",
  },
  Dark: {
    img: "./img/types/dark.png",
    alt: "Dark",
    type: "type",
  },
  Fairy: {
    img: "./img/types/fairy.png",
    alt: "Fairy",
    type: "type",
  },
  // Kanto: {
  //   img: null,
  //   alt: "Kanto",
  //   type: "region",
  // },
  // Johto: {
  //   img: null,
  //   alt: "Johto",
  //   type: "region",
  // },
  // Hoenn: {
  //   img: null,
  //   alt: "Hoenn",
  //   type: "region",
  // },
  // Sinnoh: {
  //   img: null,
  //   alt: "Sinnoh",
  //   type: "region",
  // },
  // Unova: {
  //   img: null,
  //   alt: "Unova",
  //   type: "region",
  // },
  // Kalos: {
  //   img: null,
  //   alt: "Kalos",
  //   type: "region",
  // },
  // Alola: {
  //   img: null,
  //   alt: "Alola",
  //   type: "region",
  // },
  // Galar: {
  //   img: null,
  //   alt: "Galar",
  //   type: "region",
  // },
  // Paldea: {
  //   img: null,
  //   alt: "Paldea",
  //   type: "region",
  // },
  Mega: {
    img: null,
    alt: "Mega Evolution",
    type: "mega",
  },
  GMAX: {
    img: null,
    alt: "GMAX Form",
    type: "gmax",
  },
  Monotype: {
    img: null,
    alt: "Monotype",
    type: "monotype"
  }
};

const liClassList = [
  "list-item",
  "d-flex",
  "justify-content-between",
  "align-items-center",
  "px-3",
];
const liSpanClassList = [".d-inline-flex", "align-self-center", "px-2"];
const liButtonClassList = ["sub-btn", "btn", "btn-danger"];
const nameBanner = ["banner", "position-absolute", "bottom-0"];

const excludeSet = new Set([
  "pikachu-rock-star",
  "pikachu-belle",
  "pikachu-pop-star",
  "pikachu-phd",
  "pikachu-libre",
  "pikachu-cosplay",
  "raticate-totem-alola",
  "pikachu-original-cap",
  "pikachu-hoenn-cap",
  "pikachu-sinnoh-cap",
  "pikachu-unova-cap",
  "pikachu-kalos-cap",
  "pikachu-alola-cap",
  "lurantis-totem",
  "salazzle-totem",
  "gumshoos-totem",
  "vikavolt-totem",
  "marowak-totem",
  "ribombee-totem",
  "mimikyu-totem-disguised",
  "mimikyu-totem-busted",
  "kommo-o-totem",
  "araquanid-totem",
  "togedemaru-totem",
  "pikachu-starter",
  "eevee-starter",
  "pikachu-world-cap",
  "zygarde-10",
  "cramorant-gulping",
  "cramorant-gorging",
  "koraidon-limited-build",
  "koraidon-sprinting-build",
  "koraidon-swimming-build",
  "koraidon-gliding-build",
  "miraidon-low-power-mode",
  "miraidon-drive-mode",
  "miraidon-aquatic-mode",
  "miraidon-glide-mode",
]);

const excludeCombos = {
  Normal: ["Ice", "Bug", "Steel", "Rock"],
  Fire: ["Fairy"],
  Ice: ["Poison", "Normal"],
  Ground: ["Fairy"],
  Bug: ["Dragon", "Normal"],
  Rock: ["Ghost", "Normal"],
  Steel: ["Normal"],
  Fairy: ["Fire", "Ground"],
  Poison: ["Ice"],
  Dragon: ["Bug"],
  Ghost: ["Rock"],
  GMAX: ["Mega", "Monotype"],
  Mega: ["GMAX", "Monotype"],
  Monotype: ["Mega", "GMAX"]
};