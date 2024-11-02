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
    title: "Combos",
    data: [
      {
        id: "3000",
        title: "Ragnarok Combo",
        price: 44.10,
        description:
          "Suculento burguer com blend 180g no pão brioche, coroa de bacon recheada com cebola, muçarela derretida e maionese defumada. Acompanha uma porção individual a sua escolha! (Sendo batata frita, batata rústica ou cebola empanada). COLOQUE NA ABA DE DESCRIÇÃO SEU COMPLEMENTO!!!",
        cover: require("../../assets/products/cover/2.png"),
        thumbnail: require("../../assets/products/thumbnail/2.png"),
        ingredients: [
          "Pão brioche;",
          "1x carne (blend da casa) de 180g;",
          "coroa de bacon recheada com cebola;",
          "muçarela derretida e maionese defumada;",
          "Acompanha uma porção individual a sua escolha! (Sendo batata frita, batata rústica ou cebola empanada).!",
        ],
      },
      {
        id: "3001",
        title: "Drakkar Combo",
        price: 61.10,
        description:
          "Delicioso Hamburguer de camarão crocante, molho de maionese especial, alface americano fininho e cobertura de camarão ao alho e azeite no pão brioche. . Acompanha uma porção individual a sua escolha! (Sendo batata frita, batata rústica ou cebola empanada).",
        cover: require("../../assets/products/cover/3.png"),
        thumbnail: require("../../assets/products/thumbnail/3.png"),
        ingredients: [
          "Pão brioche;",
          "1x burguer empanado de camarão 130g;",
          "molho de maionese especial;",
          "Alface americano;",
          "Cobertura de camarão ao alho e azeite;",
          "Acompanha uma porção individual a sua escolha! (Sendo batata frita, batata rústica ou cebola empanada).",
        ],
      },
      {
        id: "3002",
        title: "Balder Combo",
        price: 42.20,
        description:
          "Pão brioche, hambúrguer de linguiça toscana 180 gr., molho de parmesão, queijo muçarela, tiras de queijo coalho, cebola gratinada na manteiga e alface americana.  Acompanha uma porção individual a sua escolha! (Sendo batata frita, batata rústica ou cebola empanada). COLOQUE NA ABA DE DESCRIÇÃO SEU COMPLEMENTO!!!",
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
          "Acompanha uma porção individual a sua escolha! (Sendo batata frita, batata rústica ou cebola empanada).",
        ],
      },
      {
        id: "3003",
        title: "Ragnar Combo",
        price: 42.20,
        description:
          "Pão brioche, blend bovino de 180 grs., queijo muçarela empanada, molho de tomate apimentando e manjericão.  Acompanha uma porção individual a sua escolha! (Sendo batata frita, batata rústica ou cebola empanada).",
        cover: require("../../assets/products/cover/5.png"),
        thumbnail: require("../../assets/products/thumbnail/5.png"),
        ingredients: [
          "Pão brioche;",
          "1x blend bovino de 180 grs;",
          "Queijo muçarela empanada;",
          "Molho de tomate apimentando e manjericão;",
          "Acompanha uma porção individual a sua escolha! (Sendo batata frita, batata rústica ou cebola empanada).",
        ],
      },
      {
        id: "3004",
        title: "Meili Combo",
        price: 44.90,
        description:
          "Delicioso burguer de 180g no pão australiano, queijo gorgonzola derretido, cebola caramelizada, rúcula e geleia de pimenta. Acompanha uma porção individual a sua escolha! (Sendo batata frita, batata rústica ou cebola empanada).",
        cover: require("../../assets/products/cover/6.png"),
        thumbnail: require("../../assets/products/thumbnail/6.png"),
        ingredients: [
          "Pão australiano;",
          "1x burguer de 180g;",
          "Queijo gorgonzola derretido;",
          "Cebola caramelizada;",
          "Rúcula;",
          "Geleia de pimenta;",
          "Acompanha uma porção individual a sua escolha! (Sendo batata frita, batata rústica ou cebola empanada).",
        ],
      },
      {
      id: "3005",
        title: "Bragi Kids Combo",
        price: 32.40,
        description:
          "Pão brioche, blend de 140g e queijo prato. Acompanha uma porção individual a sua escolha! (Sendo batata frita, batata rústica ou cebola empanada). COLOQUE NA ABA DE DESCRIÇÃO SEU COMPLEMENTO!!! ",
        cover: require("../../assets/products/cover/7.png"),
        thumbnail: require("../../assets/products/thumbnail/7.png"),
        ingredients: [
          "Pão brioche;",
          "1x burguer de 140g;",
          "Queijo prato;",
          "Acompanha uma porção individual a sua escolha! (Sendo batata frita, batata rústica ou cebola empanada).",
        ],
      },
      {
        id: "3006",
        title: "Freya Combo",
        price: 33.90,
        description:
          "Pão de brioche, hambúrguer de frango empanado, queijo prato, molho de maionese defumada, cebola roxa, picles e alface americana. Acompanha uma porção individual a sua escolha! (Sendo batata frita, batata rústica ou cebola empanada).",
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
          "Acompanha uma porção individual a sua escolha! (Sendo batata frita, batata rústica ou cebola empanada).",
        ],
      },
      
      {
        id: "3007",
        title: "Odin Duplo Combo",
        price: 51.21,
        description:
          "Delicioso hambúrguer com 2 blends bovinos de 140 g no pão pretzel caramelizado, molho relish de pepino, tiras de bacon artesanal, mix de queijos muzzarela e prato derretidos, cebola roxa e alface americano. Acompanha uma porção individual a sua escolha! (Sendo batata frita, batata rústica ou cebola empanada).",
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
          "Acompanha uma porção individual a sua escolha! (Sendo batata frita, batata rústica ou cebola empanada).",
        ],
      },

      {
        id: "3008",
        title: "Loki Combo",
        price: 40.40,
        description:
          "Pão australiano, blend bovino de 180g com queijo cheddar melt e cebola caramelizada. Acompanha uma porção individual a sua escolha! (Sendo batata frita, batata rústica ou cebola empanada).",
        cover: require("../../assets/products/cover/lokih.jpg"),
        thumbnail: require("../../assets/products/thumbnail/lokih.jpg"),
        ingredients: [
          "Pão australiano;",
          "blend bovino de 180g;",
          "queijo cheddar melt;",
          "cebola caramelizada",
          "Acompanha uma porção individual a sua escolha! (Sendo batata frita, batata rústica ou cebola empanada).",
        ],
      },

      {
        id: "3009",
        title: "Vali Combo",
        price: 44.90,
        description:
        "Saboroso Hambúrguer de blend de costela 180g no pão brioche, molho ranch, cream cheese, bacon picado artesanal, alho frito e couve crispy crocante. Acompanha uma porção individual a sua escolha! (Sendo batata frita, batata rústica ou cebola empanada).",
        cover: require("../../assets/products/cover/valih.jpg"),
        thumbnail: require("../../assets/products/thumbnail/valih.jpg"),
        ingredients: [
          "Pão brioche;",
          "blend de costela 180g;",
          "molho ranch;",
          "cream cheese",
          "bacon",
          "alho frito",
          "couve crispy",
          "Acompanha uma porção individual a sua escolha! (Sendo batata frita, batata rústica ou cebola empanada).",
        ],
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
    title: "Burguers Duplos",
    data: [
      {
        id: "4000",
        title: "Loki Duplo",
        price: 40.40,
        description: "Delicioso burguer de carne premium com 2 blends de 140g, pão australiano, queijo cheddar melt, cebola caramelizada e fatias de bacon artesanal.",
        cover: require("../../assets/products/cover/lokiduplo.jpg"),
        thumbnail: require("../../assets/products/thumbnail/lokiduplo.jpg"),
        ingredients: [
          "Pão australiano;",
          "2 blend bovino de 140g;",
          "queijo cheddar melt;",
          "cebola caramelizada;",
          "bacon",
        ],
      },



      {
        id: "4001",
        title: "Odin Duplo",
        price: 44.90,
        description:
          "Delicioso hambúrguer com 2 blends bovinos de 140 g no pão pretzel caramelizado, molho relish de pepino, tiras de bacon artesanal, mix de queijos muzzarela e prato derretidos, cebola roxa e alface americano.",
        cover: require("../../assets/products/cover/odinduplo.jpg"),
        thumbnail: require("../../assets/products/thumbnail/odinduplo.jpg"),
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


      {
        id: "4002",
        title: "Loki Duplo Combo",
        price: 51.20,
        description: "Delicioso burguer de carne premium com 2 blends de 140g, pão australiano, queijo cheddar melt, cebola caramelizada e fatias de bacon artesanal. Acompanha uma porção individual a sua escolha! (Sendo batata frita, batata rústica ou cebola empanada). COLOQUE NA ABA DE DESCRIÇÃO SEU COMPLEMENTO!!! ",
        cover: require("../../assets/products/cover/lokiduplocombo.jpg"),
        thumbnail: require("../../assets/products/thumbnail/lokiduplocombo.jpg"),
        ingredients: [
          "Pão australiano;",
          "2 blend bovino de 140g;",
          "queijo cheddar melt;",
          "cebola caramelizada;",
          "bacon",
          "Acompanha uma porção individual a sua escolha! (Sendo batata frita, batata rústica ou cebola empanada). COLOQUE NA ABA DE DESCRIÇÃO SEU COMPLEMENTO!!!",
        ],
      },

      {
        id: "4003",
        title: "Odin Duplo Combo",
        price: 53.90,
        description:
          "Delicioso hambúrguer com 2 blends bovinos de 140 g no pão pretzel caramelizado, molho relish de pepino, tiras de bacon artesanal, mix de queijos muzzarela e prato derretidos, cebola roxa e alface americano. Acompanha uma porção individual a sua escolha! (Sendo batata frita, batata rústica ou cebola empanada). COLOQUE NA ABA DE DESCRIÇÃO SEU COMPLEMENTO!!! ",
        cover: require("../../assets/products/cover/odinduplocombo.jpg"),
        thumbnail: require("../../assets/products/thumbnail/odinduplocombo.jpg"),
        ingredients: [
          "Pão pretzel caramelizado;",
          "2 blends bovinos de 140 g;",
          "molho relish de pepino;",
          "tiras de bacon artesanal;",
          "Bacon picado;",
          "mix de queijos muzzarela e prato derretidos;",
          "cebola roxa;",
          "alface americano;",
          "Acompanha uma porção individual a sua escolha! (Sendo batata frita, batata rústica ou cebola empanada). COLOQUE NA ABA DE DESCRIÇÃO SEU COMPLEMENTO!!!",
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
    title: "Hot Dogs",
    data: [
      {
        id: "12",
        title: "Combo Hot Loki",
        price: 33.21,
        description: "Pão de batata com gergelim - linguiça de pernil artesanal - cheddar melt - cebola caramelizada - bacon picado. Acompanha uma porção individual a sua escolha! (Sendo batata frita, batata rústica ou cebola empanada). COLOQUE NA ABA DE DESCRIÇÃO SEU COMPLEMENTO!!!",
        cover: require("../../assets/products/cover/comboloki.jpg"),
        thumbnail: require("../../assets/products/thumbnail/comboloki.jpg"),
        ingredients: ["pão de batata com gergelim;",
          "linguiça de pernil artesanal;",
          "cheddar melt;",
          "cebola caramelizada;",
          "bacon picado;",],
      },

      {
        id: "13",
        title: "Combo Hot Vali",
        price: 33.21,
        description: "Pão de alho com ervas - linguiça de pernil artesanal - molho de maionese defumada - alho frito - bacon picado - couve crispy. Acompanha uma porção individual a sua escolha! (Sendo batata frita, batata rústica ou cebola empanada). COLOQUE NA ABA DE DESCRIÇÃO SEU COMPLEMENTO!!!",
        cover: require("../../assets/products/cover/combovali.jpg"),
        thumbnail: require("../../assets/products/thumbnail/combovali.jpg"),
        ingredients: ["pão de alho com ervas;",
          "linguiça de pernil artesanal;",
          "molho de maionese defumada;",
          "alho frito;",
          "bacon picado;",
          "couve crispy;",
        ],
      },

      {
        id: "14",
        title: "Hot Loki",
        price: 30.50,
        description: "Pão de batata com gergelim - linguiça de pernil artesanal - cheddar melt - cebola caramelizada - bacon picado.",
        cover: require("../../assets/products/cover/loki.jpg"),
        thumbnail: require("../../assets/products/thumbnail/loki.jpg"),
        ingredients: ["pão de batata com gergelim;",
          "linguiça de pernil artesanal;",
          "cheddar melt;",
          "cebola caramelizada;",
          "bacon picado;",],
      },
    
      {
        id: "15",
        title: "Vali",
        price: 30.50,
        description: "Pão de alho com ervas - linguiça de pernil artesanal - molho de maionese defumada - alho frito - bacon picado - couve crispy.",
        cover: require("../../assets/products/cover/vali.jpg"),
        thumbnail: require("../../assets/products/thumbnail/vali.jpg"),
        ingredients: ["pão de alho com ervas;",
          "linguiça de pernil artesanal;",
          "molho de maionese defumada;",
          "alho frito;",
          "bacon picado;",
          "couve crispy;",
        ],
      },
    ],
  },

{
    title: "Petiscos",
    data: [
      {
        id: "16",
        title: "Porção de Batata Rústica Individual",
        price: 22.95,
        description:
          "Deliciosa Batata Rústica temperada com sal e páprica defumada.",
        cover: require("../../assets/products/cover/batatarust.jpeg"),
        thumbnail: require("../../assets/products/thumbnail/batatarust.jpeg"),
        ingredients: [
        ],
      },


    {
      id: "17",
      title: "Porção de Batata Frita Individual",
      price: 22.95,
      description:"",
      cover: require("../../assets/products/cover/batatafrita.jpeg"),
      thumbnail: require("../../assets/products/thumbnail/batatafrita.jpeg"),
      ingredients: [
      ],
    },

    {
      id: "18",
      title: "Porção de Cebola Empanada Individual",
      price: 22.95,
      description:"",
      cover: require("../../assets/products/cover/cebola.jpeg"),
      thumbnail: require("../../assets/products/thumbnail/cebola.jpeg"),
      ingredients: [
      ],
    },

    {
      id: "19",
      title: "Almofadinha Queijo Gouda",
      price: 32.40,
      description:"Almofadinha recheada com queijo gouda empanado. Maravilhoso aperitivo da Mccain. Porção com 10 unidades.",
      cover: require("../../assets/products/cover/almofadinha.jpg"),
      thumbnail: require("../../assets/products/thumbnail/almofadinha.jpg"),
      ingredients: [
      ],
    },

    {
      id: "20",
      title: "Batata Valhalla",
      price: 36.90,
      description:"A Nossa saborosa porção de batata frita crocante coberta com nosso cheddar melt e farofa de bacon. Servindo até 3 pessoas.",
      cover: require("../../assets/products/cover/batatavalhalla.jpeg"),
      thumbnail: require("../../assets/products/thumbnail/batatavalhalla.jpeg"),
      ingredients: [
      ],
    },

    {
      id: "21",
      title: "Combo Valhalla",
      price: 22.95,
      description:"Deliciosas Tiras de frango empanado, fritas crocante com cheddar e bacon e onion rings.",
      cover: require("../../assets/products/cover/combovalhalla.jpg"),
      thumbnail: require("../../assets/products/thumbnail/combovalhalla.jpg"),
      ingredients: [
      ],
    },

    {
      id: "22",
      title: "Okolnir",
      price: 39.60,
      description:"Deliciosas Tiras de frango empanado.",
      cover: require("../../assets/products/cover/okolnir.jpg"),
      thumbnail: require("../../assets/products/thumbnail/okolnir.jpg"),
      ingredients: [
      ],
    },
    ],
  },






  {
    title: "Chopes Artesanais Sazonais",
    data: [
      {
        id: "2000",
        title: "Chope de Vinho - Esplêndido",
        price: 31.50,
        description:
          "Chope de vinho extremamente saboroso. Growler 1l. Ibu: 9 Abv: 5%",
        cover: require("../../assets/products/cover/chope.png"),
        thumbnail: require("../../assets/products/thumbnail/chope.png"),
        ingredients: [
          "",
        ],
      },

      {
        id: "2001",
        title: "Valhalla - IPA Clássica",
        price: 51.30,
        description:
          "Growler - 1l Abv 6% - Ibu 45 Cerveja refrescante, uma IPA extremamente clássica. Viva essa aventura conosco!",
        cover: require("../../assets/products/cover/ipa.png"),
        thumbnail: require("../../assets/products/thumbnail/ipa.png"),
        ingredients: [
          "",
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

