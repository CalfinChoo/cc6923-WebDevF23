const categories = {
  Normal: {
    img: "./img/types/normal.png",
    alt: "Normal",
  },
  Fighting: {
    img: "./img/types/fighting.png",
    alt: "Fighting",
  },
  Flying: {
    img: "./img/types/flying.png",
    alt: "Flying",
  },
  Poison: {
    img: "./img/types/poison.png",
    alt: "Poison",
  },
  Ground: {
    img: "./img/types/ground.png",
    alt: "Ground",
  },
  Rock: {
    img: "./img/types/rock.png",
    alt: "Rock",
  },
  Bug: {
    img: "./img/types/bug.png",
    alt: "Bug",
  },
  Ghost: {
    img: "./img/types/ghost.png",
    alt: "Ghost",
  },
  Steel: {
    img: "./img/types/steel.png",
    alt: "Steel",
  },
  Fire: {
    img: "./img/types/fire.png",
    alt: "Fire",
  },
  Water: {
    img: "./img/types/water.png",
    alt: "Water",
  },
  Grass: {
    img: "./img/types/grass.png",
    alt: "grass",
  },
  Electric: {
    img: "./img/types/electric.png",
    alt: "Electric",
  },
  Psychic: {
    img: "./img/types/psychic.png",
    alt: "Psychic",
  },
  Ice: {
    img: "./img/types/ice.png",
    alt: "Ice",
  },
  Dragon: {
    img: "./img/types/dragon.png",
    alt: "Dragon",
  },
  Dark: {
    img: "./img/types/dark.png",
    alt: "Dark",
  },
  Fairy: {
    img: "./img/types/fairy.png",
    alt: "Fairy",
  },
  //   Region: {
  //     img: null,
  //     alt: "Region"
  //   },
  Mega: {
    img: null,
    alt: "Mega Evolution",
  },
  GMAX: {
    img: null,
    alt: "GMAX Form",
  },
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
