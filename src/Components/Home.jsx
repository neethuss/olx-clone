import { Link } from "react-router-dom"

const Home = (props) => {
  return (
    <div className="grid grid-cols-4 p-5">
      {props?.products?.filter((product) => product.title.includes(props?.search ? props?.search : props?.menu)).map((product) => {
        return (
          <Link key={product.id} to='/details' state={{ product: product }}>
            <div className="border border-spacing-1 p-2 ml-3 mt-3">
              <img src={product.image} className="w-60 h-48" alt={product.title} />
              <h1 className="font-bold text-xl">$ {product.price}</h1>
              <h1>{product.title}</h1>
              <h1>{product.category}</h1>
            </div>
          </Link>
        )
      })}
    </div>
  )
}

export default Home
