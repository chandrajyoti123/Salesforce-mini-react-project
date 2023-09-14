import './ProductCard.css'



export default function ProductCard({ImgURL , Title , conteint ,link}){
    return(
    <>
    <div className='productCard' >
        <img src={ImgURL} alt='img' className='CardImg'/>
        <div className='cardCanten'>
            <h3 className='title'>{Title}</h3>
            <p className='content'>{conteint} </p>
            <p className='link'>{link}</p>
        </div>
    </div>
    </>
    );
}