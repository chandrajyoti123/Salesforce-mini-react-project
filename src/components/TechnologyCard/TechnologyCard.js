import './TechnologyCard.css'
import img from './img.webp'

export default function TechnologyCard({imgoftechnolgy, textoftechnology}){
    return(
        <div className='technologycard'>
            <img className='technologycardimg' src={imgoftechnolgy}/>
            <div className='technologycardtext'>{textoftechnology}</div>
          
        </div>
    )
}
