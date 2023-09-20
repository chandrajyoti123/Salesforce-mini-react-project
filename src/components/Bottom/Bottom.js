import "./Bottom.css"
export default function Bottom(){

  return (
    <>
      <div className="lastfooterpart">


        <div className="firstpartbottom">

          <button className="btnrearthbottom"> <i class="fa-solid fa-globe"></i>Worldwide</button>
          {/* <Button text={`${<FontAwesomeIcon icon={faGlobe} />} Worlwide`} /> */}
        </div>

        <div className="secondpartbottom">
          <p className="copyrightfoterbottom"> © Copyright 2023 Salesforce, Inc. All rights reserved. Various trademarks held by their respective owners.</p>
          <div className="lastlinksbottom">
            <ul>
              <li>  <a href="#"> Legal</a></li>
              <li>  <a href="#"> Term of services</a></li>
              <li>  <a href="#"> Privacy </a></li>
              <li>  <a href="#"> Responsible Disclosure </a></li>
              <li>  <a href="#"> Trust </a></li>
              <li>  <a href="#"> Contact </a></li>
              <li>  <a href="#"> Cookie performance </a></li>
              <li>  <a href="#"> Your privacy Choices </a></li>
            </ul>
          </div>
        </div>
      </div>


    </>
  )
}