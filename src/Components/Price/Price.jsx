import PropTypes from 'prop-types';
import { FaDumbbell } from "react-icons/fa6";
import { GiGymBag } from "react-icons/gi";

const Price = ({option}) => {

  const{option_name, price,features} = option

  return (
    <div className='border-2 flex flex-col border-rose-500 p-3 rounded-2xl'>
      <h2 className='text-4xl text-orange-600 '>{option_name}</h2>
      <div className='flex-grow'>
      {
        features.slice(0, 3).map((feature, idx) => 
        <p className='flex items-center ml-3 ' key={idx}>
        <FaDumbbell className='text-green-400'></FaDumbbell><span className='ml-2'>{feature}</span></p>)
      }
      </div>
      <p className='text-3xl'>At <span className='italic text-green-500'>{price}</span></p>
      <button className='flex mt-3 items-center gap-1 bg-green-600 hover:bg-orange-500 text-white px-3 py-2 rounded-xl mx-auto'><GiGymBag></GiGymBag> <span className='font-bold'>JOIN NOW</span></button>
    </div>
  );
};

Price.propTypes ={
  option:PropTypes.object
}

export default Price;