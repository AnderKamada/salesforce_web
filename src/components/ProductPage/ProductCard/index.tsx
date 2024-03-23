import Image from 'next/image';
import Button from '../../Button';
import ProductCardProps from './interface';
import './styles.css';
import BtnSoliciteDemonstracao from '../BtnSoliciteDemonstracao';


function ProductCard(props: ProductCardProps) {
  return (
  <div className="cardProducts">
    <Image className='cardImageProduct' src={props.img} alt={props.altImg} width={300} height={300} />
    <h3>{props.title}</h3>
    <p>{props.paragraph}</p>
    <div className='flex gap-2 mt-10 buttons justify-between'>
      <BtnSoliciteDemonstracao />
      <Button class='btnSaibaMais button' text='Saiba mais' link={props.link} />
    </div>
  </div>
  )
};


export default ProductCard;