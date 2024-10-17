
import Cart from './Cart'
import Info from './Info'

const Details = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-8 px-3 sm:px-5 md:px-10 min-h-[70vh] mx-auto max-w-[1200px]'>
        <Cart  />
        <Info />
    </div>
  )
}

export default Details