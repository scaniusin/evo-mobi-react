const ProductAPI = {
  products: [
    {
      name: 'Ученический комплект с регулируемой наклонной и регулируемый по высоте SC-01',
      desc: 'Металлический каркас стола ученического состоит из двух боковин, опорные поверхности которых имеют наконечники из полимерных материалов.\n' +
      'Панель с лотком для карандашей и ручек выполнена из плиты МДФ облицованной плёнкой ПВХ. Крышка, вертикальная стенка и боковые накладки выполнены из ламинированной плиты толщиной 16 мм.\n' +
      'Крышка с кромками ПВХ 2 мм, с закругленными углами, подъёмно-наклонная, плоскость наклона 7-15 градусов.\n' +
      'Стулья с регулируемой высотой, на металлокаркасе. Спинка и сиденье стула – фанера гнутоклееная, имеет лаковое прозрачное покрытие. Металлокаркасы выполнены из трубы профильного сечения размерами 25х25 мм и 20х20 (в местах регулировки).',
      category: 'school',
      price: '1855,00',
      size:'1250х530 мм',
      img:'static/img/products/item-school-1.jpg',
      id:'item-school-1'
    },
    {
      name: 'Ученический комплект регулируемый по высоте с наклонной столшницей SC-02',
      desc: 'Металлический каркас стола ученического состоит из двух боковин, опорные поверхности которых имеют наконечники из полимерных материалов.\n' +
      'Панель с лотком для карандашей и ручек выполнена из плиты МДФ облицованной плёнкой ПВХ. Крышка, вертикальная стенка и боковые накладки выполнены из ламинированной плиты толщиной 16 мм.\n' +
      'Крышка с кромками ПВХ 2 мм, с закругленными углами, подъёмно-наклонная, плоскость наклона 7-15 градусов.\n' +
      'Стулья с регулируемой высотой, на металлокаркасе. Спинка и сиденье стула – фанера гнутоклееная, имеет лаковое прозрачное покрытие. Металлокаркасы выполнены из трубы профильного сечения размерами 25х25 мм и 20х20 (в местах регулировки).',
      category: 'school',
      price: '1710,00',
      size:'1250х530 мм',
      img:'static/img/products/item-school2.jpg',
      id:'item-school-2'
    },
    {
      name: 'Ученический комплект нерегулируемый SC-03',
      desc: 'Металлический каркас стола ученического состоит из двух боковин, опорные поверхности которых имеют наконечники из полимерных материалов.\n' +
      'Панель с лотком для карандашей и ручек выполнена из плиты МДФ облицованной плёнкой ПВХ. Крышка, вертикальная стенка и боковые накладки выполнены из ламинированной плиты толщиной 16 мм.\n' +
      'Крышка с кромками ПВХ 2 мм, с закругленными углами, подъёмно-наклонная, плоскость наклона 7-15 градусов.\n' +
      'Стулья с регулируемой высотой, на металлокаркасе. Спинка и сиденье стула – фанера гнутоклееная, имеет лаковое прозрачное покрытие. Металлокаркасы выполнены из трубы профильного сечения размерами 25х25 мм и 20х20 (в местах регулировки).',
      category: 'school',
      price: '1095,00',
      size:'1200х500х700 мм',
      img:'static/img/products/item-school-3.jpg',
      id:'item-school-3'
    },
    {
      name: 'Вешалка полотенец DS-01',
      desc: 'Вешалка изготовлена из ДСП-Л толщиной 16 мм. Кромки закрыты лентой ПВХ толщиной 2 мм. Задняя стенка изготовлена из ХДФ.',
      category: 'kindergarten',
      price: '531,00',
      size:' 856x104x750 мм',
      img:'static/img/products/item-kindergarten-1.jpg',
      id:'item-kindergarten-1'
    },
    {
      name: 'Игровой модуль "Библиотека" DS-02',
      desc: 'Модуль выполнен из ЛДСП толщиной 16мм.\n' +
      'Цветные элементы ЛДСП толщиной 18мм.\n' +
      'Все видимые кромки облицованы кромкой ПВХ 2мм, остальные кромки меламиновые.',
      category: 'kindergarten',
      price: '2227,00',
      size:' 856x104x750 мм',
      img:'static/img/products/item-kindergarten-2.jpg',
      id:'item-kindergarten-2'
    },
  ],
  all: function() { return this.products},
  get: function(id) {
    const isProduct = p => p.id === id
    return this.products.find(isProduct)
  },
  getbyCateg: function(category) {
    const isProduct = p => p.category === category
    return this.products.find(isProduct)
  },
  getListCateg: function(category) {
    const Products = this.products.filter(products =>{
      return products.category === category;
    })

    if(Products) return  Products

    return false;
  }
};

export default ProductAPI