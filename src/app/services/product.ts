import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private products:Product[]=[
    {
      id: 1,
      name: 'Robe vert',
      price: 55,
      description: 'Robe voilée femme',
      imageUrl: 'https://www.abaya-hijab.fr/4778-home_large/ensemble-saliha.webp',
      image: undefined,
      volume: undefined,
      brand: undefined,
      inStock: undefined
    },
    {
      id: 2,
      name: 'Robe bleu',

      price: 140,
      description: 'Robe voilée femme',
      imageUrl: 'https://www.abaya-hijab.fr/4099-home_large/robe-femme-voilee-pas-cher-ferouz-bleu.webp',
      image: undefined,
      volume: undefined,
      brand: undefined,
      inStock: undefined
    },
    {
      id: 3,
      name: 'robe',

      price: 100,
      description: 'robe voileé femme',
      imageUrl: 'data:image/webp;base64,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',
      image: undefined,
      volume: undefined,
      brand: undefined,
      inStock: undefined
    },
    {
      id: 4,
      name: 'Abaya',

      price: 85,
      description: 'Abaya',
      imageUrl: 'https://neyssa-shop.com/116872-home_default/abaya-dubai-jawaara-marron-glace.jpg',
      image: undefined,
      volume: undefined,
      brand: undefined,
      inStock: undefined
    },
    {
      id: 5,
      name: 'kimono',

      price: 110,
      description: 'KIMONO.',
      imageUrl: 'https://neyssa-shop.com/103503-home_default/kimono-long-oversize-femme-effet-lin-sharifa.jpg',
      image: undefined,
      volume: undefined,
      brand: undefined,
      inStock: undefined
    },
    {
      id: 6,
      name: 'hijab',

      price: 25,
      description: 'Folard chiffon',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGRTRjO1ZzrcdRABpRRFj431CK1_R6-TsvyA&s',
      image: undefined,
      volume: undefined,
      brand: undefined,
      inStock: undefined
    },
    {
      id: 7,
      name: 'Folard chiffon',

      price: 30,
      description: 'Navy opaque chiffon hijab',
      imageUrl: 'https://bantik.co/cdn/shop/products/IMG_6437.jpg?v=1637601865&width=980',
      image: undefined,
      volume: undefined,
      brand: undefined,
      inStock: undefined
    },
    {
      id: 8,
      name: ' BLACK HOOD',
      price: 12,
      description: 'BLACK HOOD',
      imageUrl: 'https://bantik.co/cdn/shop/products/IMG_3379O.jpg?v=1631792224&width=980',
      image: undefined,
      volume: undefined,
      brand: undefined,
      inStock: undefined
    },
    {
      id: 9,
      name: 'WHITE HOOD',
      price: 12,
      description: 'CREAM PREMIUM JERSEY HAT',
      imageUrl: 'https://bantik.co/cdn/shop/products/image_35a0cc79-a3cb-4035-9c75-e27673f94cdd.jpg?v=1663086617&width=980',
      image: undefined,
      volume: undefined,
      brand: undefined,
      inStock: undefined
    },
    {
      id: 10,
      name: 'JUPE',
      price: 75,
      description: 'Jupe noir blissé',
      imageUrl: 'https://www.vila.com/dw/image/v2/BDTC_PRD/on/demandware.static/-/Sites-pim-catalog/default/dw74dc8fcc/pim-static/VL/14063241/14063241_Black_001.jpg?sw=900&sh=1200&strip=false',
      image: undefined,
      volume: undefined,
      brand: undefined,
      inStock: undefined
    },
{
  id: 11,
  name: 'ENSEMBLE JUPE',
  price: 180,
  description: 'Jupe longue Sabiha - Jupe longue femme voilée',
  imageUrl: 'https://www.abaya-hijab.fr/2707-large_default/jupe-longue-sabiha-jupe-longue-femme-voilee.webp',
  image: undefined,
  volume: undefined,
  brand: undefined,
  inStock: undefined
},
{
  id: 12,
  name: 'Ensemble Kimono et Jupe',
  price: 89,
  description: 'Ensemble Kimono et Jupe tissu épais',
  imageUrl: 'https://monhijabpascher.com/wp-content/uploads/2024/01/kimono-jupe-abaya-gris-vert-kaki.jpg',
  image: undefined,
  volume: undefined,
  brand: undefined,
  inStock: undefined
},
{
  id: 13,
  name: 'ROBE SOIREée noir',
  price: 320,
  description: 'Robe soirée pour femme voilée ',
  imageUrl: 'https://modazehrada.com/cdn/shop/files/tesettur-abiye-Meyra-Tesettur-Abiye-ModaZehrada-2_5645e5cc.jpg?v=1744324997&width=500',
  image: undefined,
  volume: undefined,
  brand: undefined,
  inStock: undefined
},
{
  id: 13,
  name: 'ROBE SOIREE BLANCH',
  price: 350,
  description: 'Robe soirée pour femme voilée',
  imageUrl: 'https://modazehrada.com/cdn/shop/files/tesettur-abiye-Meyra-Tesettur-Abiye-ModaZehrada-2_621ad157.jpg?v=1744325045&width=500',
  image: undefined,
  volume: undefined,
  brand: undefined,
  inStock: undefined
},

    {
      id: 14,
      name: 'ROBE SOIREE BLEU',
      price: 180,
      description: 'Robe soirée pour femme voilée',
      imageUrl: 'https://modazehrada.com/cdn/shop/files/tesettur-abiye-Pelerin-Tesettur-Abiye-ModaZehrada-2.jpg?v=1743800245&width=500',
      image: undefined,
      volume: undefined,
      brand: undefined,
      inStock: undefined
    },

{
  id: 15,
  name: 'TENUE SPORT FEMME VOILEé',
  price: 88,
  description: 'Ensemble sportswear oversize Neyssa Vieux rose',
  imageUrl: 'https://images-eu.ssl-images-amazon.com/images/I/61bnMneiiBL._AC_UL600_SR600,600_.jpg',
  image: undefined,
  volume: undefined,
  brand: undefined,
  inStock: undefined
},
{
  id: 16,
  name: 'FOULARD EN COTON',
  price: 10,
  description: 'Foulard en gaze de coton',
  imageUrl: 'https://i.etsystatic.com/34672290/r/il/ab8d5d/6420233023/il_1588xN.6420233023_ehw9.jpg',
  image: undefined,
  volume: undefined,
  brand: undefined,
  inStock: undefined
},

{
  id: 17,
  name: 'FOULARD EN COTON',
  price: 12,
  description: 'Foulard en gaze de coton',
  imageUrl: 'https://i.etsystatic.com/34672290/r/il/ebbf5b/6420230967/il_1588xN.6420230967_871e.jpg',
  image: undefined,
  volume: undefined,
  brand: undefined,
  inStock: undefined
},

  ];
  getProducts():Product[]{
    return this.products;
  }
  getProductById(id:number):Product | undefined{
    return this.products.find(product => product.id === id);
  }

}
export type { Product };

