import './FreeTrile.css'
import Image from './Img.webp'

import Button from './../Button/Button';
import { DarkButton } from './../Button/Button'

export default function FreeTrile() {
    return (
        <>
            <div className="free-trile">
                <div className="col">
                    <div className="margins">
                        <h2 className='heading' > Try Salesforce for free. No credit card required, no software to install. </h2>
                        <div className="button-container" >
                            <DarkButton text={"Start Free Trial"} color={'BlueButton'} />
                            <Button text={" See pricing"} />
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="margins">
                        <img src={Image} alt='Image' className="Image" />
                    </div>
                </div>
            </div>
        </>

    )
}