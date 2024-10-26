const MENU = [
  {
    title: "Novidade dos Deuses!",
    data: [
      {
        id: "1",
        title: "Milkshake de Nutella",
        price: 25.0,
        description: "Saboroso milkshake de Nutella dos Deuses",
        cover: require("../../assets/products/cover/1.png"),
        thumbnail: require("../../assets/products/thumbnail/1.png"),
        ingredients: [],
      },
    ],
  },
  {
    title: "Burguers",
    data: [
      {
        id: "2",
        title: "Ragnarok",
        price: 40.40,
        description:
          "Suculento burguer com blend 180g no pão brioche, coroa de bacon recheada com cebola, muçarela derretida e maionese defumada.",
        cover: require("../../assets/products/cover/2.png"),
        thumbnail: require("../../assets/products/thumbnail/2.png"),
        ingredients: [
          "Pão brioche;",
          "1x carne (blend da casa) de 180g;",
          "coroa de bacon recheada com cebola;",
          "muçarela derretida e maionese defumada;",
        ],
      },
      {
        id: "3",
        title: "Drakkar",
        price: 53.90,
        description:
          "Delicioso Hamburguer de camarão crocante, molho de maionese especial, alface americano fininho e cobertura de camarão ao alho e azeite no pão brioche.",
        cover: require("../../assets/products/cover/3.png"),
        thumbnail: require("../../assets/products/thumbnail/3.png"),
        ingredients: [
          "Pão brioche;",
          "1x burguer empanado de camarão 130g;",
          "molho de maionese especial;",
          "Alface americano;",
          "Cobertura de camarão ao alho e azeite;",
        ],
      },
      {
        id: "4",
        title: "Balder",
        price: 36.80,
        description:
          "Aquele que você não gosta de primeira, mas depois fica viciado e não consegue mais largar...",
        cover: require("../../assets/products/cover/4.png"),
        thumbnail: require("../../assets/products/thumbnail/4.png"),
        ingredients: [
          "Pão brioche;",
          "2x carnes smash (blend da casa) de 80g;",
          "Queijo cheddar;",
          "Alface;",
          "Tomate;",
          "Picles;",
          "Cebola;",
          "Molho da casa;",
        ],
      },
      {
        id: "5",
        title: "Ragnar",
        price: 36.80,
        description:
          "Pão brioche, blend bovino de 180 grs., queijo muçarela empanada, molho de tomate apimentando e manjericão.",
        cover: require("../../assets/products/cover/5.png"),
        thumbnail: require("../../assets/products/thumbnail/5.png"),
        ingredients: [
          "Pão brioche;",
          "1x blend bovino de 180 grs;",
          "Queijo muçarela empanada;",
          "Molho de tomate apimentando e manjericão;",
        ],
      },
      {
        id: "6",
        title: "Meili",
        price: 35.10,
        description:
          "Delicioso burguer de 180g no pão australiano, queijo gorgonzola derretido, cebola caramelizada, rúcula e geleia de pimenta.",
        cover: require("../../assets/products/cover/6.png"),
        thumbnail: require("../../assets/products/thumbnail/6.png"),
        ingredients: [
          "Pão australiano;",
          "1x burguer de 180g;",
          "Queijo gorgonzola derretido;",
          "Cebola caramelizada;",
          "Rúcula;",
          "Geleia de pimenta;",
        ],
      },
      {
      id: "7",
        title: "Bragi Kids",
        price: 29.60,
        description:
          "Pão brioche, blend de 140g e queijo prato.",
        cover: require("../../assets/products/cover/7.png"),
        thumbnail: require("../../assets/products/thumbnail/7.png"),
        ingredients: [
          "Pão brioche;",
          "1x burguer de 140g;",
          "Queijo prato;",
        ],
      },
      {
        id: "8",
        title: "Freya",
        price: 29.70,
        description:
          "Pão de brioche, hambúrguer de frango empanado, queijo prato, molho de maionese defumada, cebola roxa, picles e alface americana.",
        cover: require("../../assets/products/cover/8.png"),
        thumbnail: require("../../assets/products/thumbnail/8.png"),
        ingredients: [
          "Pão brioche;",
          "1x burguer de frango empanado;",
          "Queijo prato;",
          "Molho de maionese defumada;",
          "Cebola roxa;",
          "Picles;",
          "Alface americana;",
        ],
      },
      {
        id: "9",
        title: "Viking Smash",
        price: 28.70,
        description:
          "2 blends de 60g, american cheese do Valhalla, molho sauce e cebola roxa",
        cover: require("../../assets/products/cover/9.png"),
        thumbnail: require("../../assets/products/thumbnail/9.png"),
        ingredients: [
          "2x blends de 60g;",
          "American cheese do Valhalla,;",
          "Molho sauce;",
          "Cebola roxa;",
        ],
      },
      {
        id: "10",
        title: "Thor",
        price: 36.80,
        description:
          "Pão brioche coberto com parmesão, delicioso hambúrguer de blend bovino de 180 g., molho barbecue de goiabada, cebola crispy crocante, bacon picado artesanal, queijo prato derretido e alface americana.",
        cover: require("../../assets/products/cover/10.png"),
        thumbnail: require("../../assets/products/thumbnail/10.png"),
        ingredients: [
          "Pão brioche coberto com parmesão;",
          "Blend bovino de 180g;",
          "Molho Barbecue de goiabada;",
          "Cebola Crispy;",
          "Bacon picado;",
        ],
      },
      {
        id: "11",
        title: "Odin Duplo",
        price: 40.41,
        description:
          "Delicioso hambúrguer com 2 blends bovinos de 140 g no pão pretzel caramelizado, molho relish de pepino, tiras de bacon artesanal, mix de queijos muzzarela e prato derretidos, cebola roxa e alface americano.",
        cover: require("../../assets/products/cover/11.png"),
        thumbnail: require("../../assets/products/thumbnail/11.png"),
        ingredients: [
          "Pão pretzel caramelizado;",
          "2 blends bovinos de 140 g;",
          "molho relish de pepino;",
          "tiras de bacon artesanal;",
          "Bacon picado;",
          "mix de queijos muzzarela e prato derretidos;",
          "cebola roxa;",
          "alface americano;",
        ],
      },
    ],
  },
  {
    title: "Sobremesa dos Deuses",
    data: [
      {
        id: "997",
        title: "Pudim do chef",
        price: 12.51,
        description:
          "120g de pudim muuuuuuuuito gostoso!",
        cover: require("../../assets/products/cover/997.png"),
        thumbnail: require("../../assets/products/thumbnail/997.png"),
        ingredients: [
          "Pudim",
        ],
      },
    ],
  },
  {
    title: "Bebidas",
    data: [
      {
        id: "1000",
        title: "Coca Cola lata",
        price: 7.90,
        thumbnail: require("../../assets/products/thumbnail/coca.png"),
        cover: require("../../assets/products/cover/coca.png"),
        description:
          "350ml",
        ingredients: [],
      },

      {
        id: "1001",
        title: "Coca Cola Zero lata",
        price: 7.90,
        thumbnail: require("../../assets/products/thumbnail/cocazero.png"),
        cover: require("../../assets/products/cover/cocazero.png"),
        description:
          "350ml",
        ingredients: [],
      },

      {
        id: "1002",
        title: "Fanta Laranja lata",
        price: 7.90,
        thumbnail: require("../../assets/products/thumbnail/fantal.png"),
        cover: require("../../assets/products/cover/fantal.png"),
        description:
          "350ml",
        ingredients: [],
      },
      
      {
        id: "1003",
        title: "Fanta Uva lata",
        price: 7.90,
        thumbnail: require("../../assets/products/thumbnail/fantau.png"),
        cover: require("../../assets/products/cover/fantau.png"),
        description:
          "350ml",
        ingredients: [],
      },

      {
        id: "1004",
        title: "Guaraná Antártica lata",
        price: 7.90,
        thumbnail: require("../../assets/products/thumbnail/guarana.png"),
        cover: require("../../assets/products/cover/guarana.png"),
        description:
          "350ml",
        ingredients: [],
      },

      {
        id: "1005",
        title: "Guaraná Antártica Zero lata",
        price: 7.90,
        thumbnail: require("../../assets/products/thumbnail/guaranazero.png"),
        cover: require("../../assets/products/cover/guaranazero.png"),
        description:
          "350ml",
        ingredients: [],
      },

      {
        id: "1006",
        title: "Guaravita",
        price: 5.31,
        thumbnail: require("../../assets/products/thumbnail/guaravita.jpg"),
        cover: require("../../assets/products/cover/guaravita.jpg"),
        description:
          "350ml",
        ingredients: [],
      },

      {
        id: "1007",
        title: "Suco Del Valle de Uva lata",
        price: 8.10,
        thumbnail: require("../../assets/products/thumbnail/delvaleuva.jpg"),
        cover: require("../../assets/products/cover/delvaleuva.jpg"),
        description:
          "290ml",
        ingredients: [],
      },

      {
        id: "1008",
        title: "Água sem gás garrafa",
        price: 4.50,
        thumbnail: require("../../assets/products/thumbnail/agua.jpg"),
        cover: require("../../assets/products/cover/agua.jpg"),
        description:
          "500ml",
        ingredients: [],
      },
    ],
  },
];

const PRODUCTS = MENU.map((item) => item.data).flat();
const CATEGORIES = MENU.map((item) => item.title);

type ProductProps = (typeof PRODUCTS)[0];

export { CATEGORIES, MENU, PRODUCTS, ProductProps };

