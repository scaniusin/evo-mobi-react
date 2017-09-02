import React, { Component } from 'react';
import './styles.css';
import { Link } from 'react-router-dom'

class Sidebar extends Component {

  renderMenuItems = ({name, category, src}) => {
    return(
      <li key={name} className="sidebar__li">
        <Link className="sidebar__a" to={`/${category}`}>{name}</Link>
      </li>
    )
  }

  render() {

    const MenuItems = menuItems.map(this.renderMenuItems)

    const MenuItems2 = menuItems2.map(this.renderMenuItems)

    return (

      <div className="sidebar">
        <h2 className="sidebar__title">Категории</h2>
        <nav className="sidebar__nav">
          <ul className="sidebar__ul">
            {MenuItems}
          </ul>
          <ul className="sidebar__ul second">
            {MenuItems2}
          </ul>
        </nav>
      </div>

    );
  }
}

export default Sidebar;




const menuItems = [
  {
    name: 'Школьная мебель',
    category: 'school',
    src:'',
  },
  {
    name: 'Мебель для детсада',
    category: 'kindergarten',
    src:'',
  },
  {
    name: 'Офисная мебель',
    category: 'office',
    src:'',
  },
  {
    name: 'Мебель для столовой',
    category: 'kitchen',
    src:'',
  },
  {
    name: 'Мебель для больниц',
    category: 'hospital',
    src:'',
  },
  {
    name: 'Мебель для актовых залов',
    category: 'festrooms',
    src:'',
  },
  {
    name: 'Шкафы',
    category: 'cupboard',
    src:'',
  },
]

const menuItems2 = [
  {
    name: 'Мебель под заказ',
    category: 'customfurniture',
    src:'',
  },
  {
    name: 'Сооружения из дерева',
    category: 'woodmade',
    src:'',
  },
]