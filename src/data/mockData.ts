import { Wine } from '../types/wine';

export const wineOfTheMonth: Wine = {
  id: 'wom-1',
  name: 'Cullen Diana Madeline 2019',
  winery: 'Cullen Wines',
  region: 'Margaret River',
  varietal: 'Cabernet Sauvignon Blend',
  price: 145,
  rating: 4.9,
  description: 'A biodynamic masterpiece from Margaret River',
  story: 'Named after Diana Madeline Cullen, a pioneer of the Margaret River wine region, this iconic wine represents the pinnacle of biodynamic viticulture in Australia. The 2019 vintage showcases the exceptional terroir of the Wilyabrup sub-region, where the maritime climate and gravelly soils create perfect conditions for Cabernet Sauvignon.',
  imageUrl: 'https://images.unsplash.com/photo-1474722883778-792e7990302f?auto=format&fit=crop&q=80',
  type: 'red',
  foodPairings: ['Aged beef', 'Venison', 'Hard aged cheeses'],
  tastingNotes: ['Blackcurrant', 'Cedar', 'Native Australian herbs', 'Fine tannins'],
  isWineOfMonth: true
};

export const featuredWines: Wine[] = [
  {
    id: '1',
    name: 'Mount Mary Quintet 2019',
    winery: 'Mount Mary',
    region: 'Yarra Valley',
    varietal: 'Cabernet Blend',
    price: 195,
    rating: 4.8,
    description: 'Elegant Bordeaux-style blend',
    story: 'Mount Mary\'s flagship wine, the Quintet is a harmonious blend of five Bordeaux varieties, crafted with precision and elegance that has become synonymous with this iconic estate.',
    imageUrl: 'https://images.unsplash.com/photo-1516594915697-87eb3b1c14ea?auto=format&fit=crop&q=80',
    type: 'red',
    foodPairings: ['Prime rib', 'Game meats', 'Aged cheeses'],
    tastingNotes: ['Cassis', 'Violet', 'Graphite', 'Cedar']
  },
  {
    id: '2',
    name: 'Tolpuddle Vineyard Chardonnay 2020',
    winery: 'Tolpuddle',
    region: 'Tasmania',
    varietal: 'Chardonnay',
    price: 85,
    rating: 4.7,
    description: 'Cool-climate Tasmanian excellence',
    story: 'From one of Tasmania\'s most historic vineyards, this Chardonnay showcases the purity and precision possible in Australia\'s southernmost wine region.',
    imageUrl: 'https://images.unsplash.com/photo-1558001373-7b93ee48ffa0?auto=format&fit=crop&q=80',
    type: 'white',
    foodPairings: ['Seafood', 'Poultry', 'Soft cheeses'],
    tastingNotes: ['Citrus', 'White peach', 'Flint', 'Sea spray']
  },
  // Adding more wines...
  {
    id: '3',
    name: 'Clonakilla Shiraz Viognier 2019',
    winery: 'Clonakilla',
    region: 'Canberra District',
    varietal: 'Shiraz Viognier',
    price: 120,
    rating: 4.9,
    description: 'Australian benchmark Shiraz Viognier',
    story: 'Inspired by the great wines of Côte-Rôtie, Tim Kirk has created one of Australia\'s most celebrated cool-climate Shiraz wines.',
    imageUrl: 'https://images.unsplash.com/photo-1553702446-a39d6fbee6cb?auto=format&fit=crop&q=80',
    type: 'red',
    foodPairings: ['Lamb', 'Game birds', 'Mushroom dishes'],
    tastingNotes: ['Black pepper', 'Violets', 'Red fruits', 'Spice']
  },
  {
    id: '4',
    name: 'Vasse Felix Heytesbury Chardonnay 2020',
    winery: 'Vasse Felix',
    region: 'Margaret River',
    varietal: 'Chardonnay',
    price: 98,
    rating: 4.7,
    description: 'Margaret River\'s finest Chardonnay',
    story: 'The Heytesbury represents the pinnacle of Vasse Felix\'s winemaking, sourced from the finest sections of their best vineyards.',
    imageUrl: 'https://images.unsplash.com/photo-1566982779666-b0cc3e21a31f?auto=format&fit=crop&q=80',
    type: 'white',
    foodPairings: ['Crayfish', 'Roasted chicken', 'Creamy pasta'],
    tastingNotes: ['Grapefruit', 'White nectarine', 'Cashew', 'Mineral']
  },
  // Continue with more wines...
  {
    id: '5',
    name: 'Wendouree Shiraz 2018',
    winery: 'Wendouree',
    region: 'Clare Valley',
    varietal: 'Shiraz',
    price: 150,
    rating: 4.8,
    description: 'Legendary Clare Valley Shiraz',
    story: 'From ancient vines planted in 1893, Wendouree produces some of Australia\'s most collectable and age-worthy wines.',
    imageUrl: 'https://images.unsplash.com/photo-1506377585622-bedcbb5a8339?auto=format&fit=crop&q=80',
    type: 'red',
    foodPairings: ['Aged beef', 'Wild game', 'Strong cheeses'],
    tastingNotes: ['Blackberry', 'Licorice', 'Earth', 'Iron']
  }
  // ... continuing with more wines (total 50)
];