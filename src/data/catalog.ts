export interface CatalogProduct {
  id: string
  title: string
  type: string
  model: string
  image: string
  price: number
  sizes: string[]
  description: string
}

export const demoProduct: CatalogProduct = {
  id: '1',
  title: 'Худи с капюшоном',
  type: 'Худи',
  model: 'Oversize · чёрный',
  image: '/images/catalog/1.jpg',
  price: 50000,
  sizes: ['S', 'M', 'XXL'],
  description: 'Чёрное худи свободного силуэта с капюшоном и накладным карманом. Лаконичная модель для повседневных образов.',
}

export const catalogProducts = [demoProduct]

const priceFormatter = new Intl.NumberFormat('ru-RU', {
  style: 'currency',
  currency: 'RUB',
  maximumFractionDigits: 0,
})

export const formatPrice = (price: number) => priceFormatter.format(price)
