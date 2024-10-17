
import AddImg from '../../component/ProfilePages/item/AddImg'
import Address from '../../component/ProfilePages/item/Address'
import RentingUnit from '../../component/ProfilePages/item/RentingUnit'

const AddNewItem = () => {

  return (
    <section className=" min-h-[150vh]">
        <form  className='px-3 sm:px-5 md:px-7'>
            <AddImg />
            <RentingUnit />
            <Address />
        </form>
    </section>
  )
}

export default AddNewItem