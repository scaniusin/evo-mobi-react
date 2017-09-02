import React, { Component } from 'react';
import './styles.css';
import ProductAPI from '../../db'
import foto from "../../static/img/products/item-school-1.jpg"

// class Detailed extends Component {
//
//
//   render() {
//
//     return (
//
//       <section className="content">
//         <div className="container">
//           <div className="row item">
//             <div className="col-md-6">
//               <img className="item-img" src={foto} alt="" />
//             </div>
//             <div className="col-md-6">
//               <div className="item-description">
//                 <h2 className="item-description__title">Ученический комплект с регулируемой наклонной и регулируемый по высоте SC-01</h2>
//                 <p className="item-description__txt"><strong>Размеры стола:</strong> 1250х530 мм</p>
//                 <p className="item-description__txt"><strong>Материал:</strong> Металлический каркас стола ученического состоит из двух боковин, опорные поверхности которых имеют наконечники из полимерных материалов.</p>
//                 <p className="item-description__txt">Панель с лотком  для карандашей и ручек выполнена из плиты МДФ облицованной плёнкой ПВХ. Крышка, вертикальная стенка и боковые накладки выполнены из ламинированной плиты толщиной 16 мм.</p>
//                 <p className="item-description__txt">Крышка с кромками ПВХ 2 мм, с закругленными углами, подъёмно-наклонная, плоскость наклона 7-15 градусов.</p>
//                 <p className="item-description__txt">Стулья с регулируемой высотой,  на металлокаркасе. Спинка и сиденье стула – фанера гнутоклееная, имеет лаковое прозрачное покрытие.  Металлокаркасы выполнены из трубы профильного сечения размерами 25х25 мм и 20х20 (в местах регулировки).</p>
//                 <span className="price">цена: <strong> 1855,00 MDL</strong></span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//
//     );
//   }
// }

const Detailed = (props) => {
  const product = ProductAPI.get(
    props.match.params.id
  );
  if (!product) {
    return <div>Sorry, but the product was not found</div>
  }
  return (
    <section className="content">
      <div className="container">
        <div className="row item">
          <div className="col-md-6">
            <img className="item-img" src={product.img} alt="" />
          </div>
          <div className="col-md-6">
            <div className="item-description">
              <h2 className="item-description__title">{product.name}</h2>
              <p className="item-description__txt"><strong>Размеры стола:</strong> {product.size} мм</p>
              <p className="item-description__txt"><strong>Материал:</strong> {product.desc}</p>
              <span className="price">цена: <strong> {product.price} MDL</strong></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
};

export default Detailed;


