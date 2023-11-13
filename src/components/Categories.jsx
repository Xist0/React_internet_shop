import React, { Component } from 'react'

export class Categories extends Component {
  constructor(props) {
    super(props)
    this.state = {
      categories: [
        {
          key: 'all',
          name: 'Всё'
        },
        {
          key: '1',
          name: '1'
        },
        {
          key: '2 ',
          name: '2'
        },
        {
          key: '3',
          name: '3'
        },
        {
          key: '4',
          name: '4'
        },
      ]
    }
  }

  render() {
    return (
      <div className="categories">
        {this.state.categories.map(el => (
          <div key={el.key} onClick={() => this.props.chooseCategory(el.key)}> {el.name}</div>
        ))}
      </div>
    )
  }
}

export default Categories