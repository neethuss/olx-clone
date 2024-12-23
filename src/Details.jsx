import { useLocation } from "react-router-dom"

const Details = () => {

  const location = useLocation()

  console.log(location);
  return (
    <div className="flex p-4">
      <img src={location?.state?.product?.image} />
      <div>
        <h1 className="font-bold text-3xl">$ {location?.state?.product?.price}</h1>
        <h1 className="mt-5"><span className="font-semibold">Category</span> : {location?.state?.product?.category}</h1>
        <h1 className="mt-5"><span className="font-semibold">Title</span> : {location?.state?.product?.title}</h1>
        <h1 className="mt-5"><span className="font-semibold">Description</span> : {location?.state?.product?.description}</h1>
      </div>
    </div>
  )
}

export default Details
