import React from 'react'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Items from './components/Items'
import Categories from './components/Categories'

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      orders: [],
      currentItems: [],
      items: [
        {
          id: 1,
          title: '1',
          img: '1.png',
          desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing.',
          category: '1',
          price: '49.99'
        },
        {
          id: 2,
          title: '2',
          img: '2.png',
          desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing.',
          category: '2',
          price: '3.99'
        },
        {
          id: 3,
          title: '3',
          img: '3.png',
          desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing.',
          category: '3',
          price: '4449.99'
        },
        {
          id: 4,
          title: '4',
          img: '4.png',
          desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing.',
          category: '4',
          price: '9.99'
        },
        {
          id: 5,
          title: '5',
          img: '5.png',
          desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing.',
          category: '5',
          price: '4.99'
        }
      ]
    }
    this.state.currentItems = this.state.items
    this.addToOrder = this.addToOrder.bind(this)
    this.deleteOrder = this.deleteOrder.bind(this)
    this.chooseCategory = this.chooseCategory.bind(this)
  }

  render() {
    return (
      <>
        <div className="wrapper">
          <Header orders={this.state.orders} onDelete={this.deleteOrder} />
          <Categories chooseCategory={this.chooseCategory}/>
          <Items items={this.state.currentItems} onAdd={this.addToOrder} />
          <Footer />
        </div>
      </>
    )
  }
  chooseCategory(category){
    if(category === 'all'){
      this.setState({currentItems: this.state.items})
      return
    }
    this.setState({
      currentItems: this.state.items.filter(el => el.category === category)
    })
  }
  deleteOrder(id) {
    this.setState({orders: this.state.orders.filter(el => el.id !== id)})
  }

  addToOrder(item) {
    let isInArray
    this.state.orders.forEach(el => {
      if (el.id === item.id)
        isInArray = true
    })
    if (!isInArray)
      this.setState({ orders: [...this.state.orders, item] })
  }
}

export default App
