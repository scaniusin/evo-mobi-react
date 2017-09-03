import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './styles.css';
import Sidebar from '../SideBar'
import ProductAPI from '../../db';

//
// class Content extends Component {
//
//
//
//   render() {
//
//     const products_list = ProductAPI.all().map(this.renderProductList)
//
//     return (
//
//       <div className="container">
//         <div className="row">
//           <div className="col-md-2">
//             <Sidebar/>
//           </div>
//           <div className="col-md-10">
//             <div className="content">
//               <div className="row">
//                 {products_list}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//
//     );
//   }
// }

const Content = (props) => {

  const renderProductList = ({name, desc, category, price, size, img, id}) => {

    let aStyle = {
      backgroundImage: 'url(' + img + ')'

    };

    return(

      <div className="col-md-4" key={name}>
        <div className="card">
          <Link className="card__link" to={`/product/${id}`}>
            <div className="card__header" style={aStyle}>
              <div className="card__header--overlay"></div>
            </div>
            <div className="card__title">
              <h4>{name}</h4>
              <h5 className="goods-price">{price} MDL</h5>
              <span className="paragraph-end"></span>
            </div>
          </Link>
        </div>
      </div>
    )
  }

  const noProducts =  (<h1>no items</h1>)

  const all_products_list = ProductAPI.all().map(renderProductList)

  const specific_products_list = ProductAPI.getListCateg(props.match.params.category).map(renderProductList)

  const category = ProductAPI.getbyCateg(props.match.params.category);


  console.log('list:' + specific_products_list.typeof + '    ' +'Category ' + category)

    return (

      <div className="container">
        <div className="row">
          <div className="col-md-2">
            <Sidebar/>
          </div>
          <div className="col-md-10">
            <div className="content">
              <div className="row">
                {!category && !props.match.params.category ? all_products_list : (
                  specific_products_list ? specific_products_list : noProducts
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

    );
};

export default Content;


