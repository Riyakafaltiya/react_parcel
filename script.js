import { createRoot } from 'react-dom/client'
import './style.css'
import React from 'react'

function Card(props) {
    const { key, image, title, brand, price } = props
    console.log(key)
    return (
        <div className="card" key={key}>
            <img src={image} alt="iphone" />
            <div className="card-content">
                <h3>{title}</h3>
                <p>{brand}</p>
                <p>
                    <b>${price}</b>
                </p>
            </div>
        </div>
    )
}

const root = createRoot(document.getElementById('root'))

console.log('Hello world!!!')

fetch('https://dummyjson.com/products')
  .then((res) => res.json())
  .then((data) => {
    root.render(
      <div className="container">
        {data.products.map((product) => {
          return <Card
              image = "https://images.moneycontrol.com/static-mcnews/2021/10/Apple-iPhone-13-4.jpg?impolicy=website&width=1600&height=900",
    id = {1}
    title = "iPhone 13"
    brand = "Apple"
    price = {1100}
    />})}
      </div>
    )
  })

// root.render({
//     $$typeof: Symbol.for('react.element'),
//     type: 'paras',
//     ref: null,
//     props: {},
// })

root.render({
    $$typeof: Symbol.for('react.element'),
    type: 'h1',
    ref: null,
    props: {},
})

// root.render({
//     $$typeof: Symbol.for('react.element'),
//     type: Card,
//     ref: null,
//     props: {
//         image: "https://images.moneycontrol.com/static-mcnews/2021/10/Apple-iPhone-13-4.jpg?impolicy=website&width=1600&height=900",
//         key: 1,
//         title: "iPhone 13",
//         brand: "Apple",
//         price: 1100,
//     }
// })

// root.render(React.createElement(Card, {
//     image: "https://images.moneycontrol.com/static-mcnews/2021/10/Apple-iPhone-13-4.jpg?impolicy=website&width=1600&height=900",
//     id: 1,
//     title: "iPhone 13",
//     brand: "Apple",
//     price: 1100,
// }))

// root.render(<Card image="https://images.moneycontrol.com/static-mcnews/2021/10/Apple-iPhone-13-4.jpg?impolicy=website&width=1600&height=900" id={1} title="iPhone 13" brand="Apple" price={1100} />)

