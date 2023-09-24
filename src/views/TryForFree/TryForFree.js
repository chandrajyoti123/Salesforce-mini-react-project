import './TryForFree.css'
import { Link } from 'react-router-dom'
import salesforce from './salesforce.svg'
import trialsales from './trialsales.png'
import { DarkButton } from '../../components/Button/Button'
import Bottom from '../../components/Bottom/Bottom'


export default function TryForFree(){
    return(

      <div>
<div className='sales-container'>
    <div className='image-salesforce'>
<Link to="/"><img src={salesforce}/></Link>
   </div>
<div className='salesforce-text'>
        <h2 className='slogen'>Start your free trial.</h2><br/>

        <p className='nocredit-text'>No credit card required, no software to install.</p>
        <p className='no-text'>With your 30-day trial, you get:</p>

        <li className='no-text'>Pre-loaded data or upload your own</li>
        <li className='no-text'>Pre-configured processes, reports, and dashboards</li>
        <li className='no-text'>Guided experiences for sales reps, leaders, and administrators</li>
        <li className='no-text'>Online training and live onboarding webinars</li><br/>

        <p className='question-text'>Questions? Talk to an expert: <b>1800-420-7332.</b></p>

        <img src={trialsales} className='image-trailsalesforce'/>
        </div>

<div className='input-card'>
<p className='text-sign'>Sign up now to start your free sales trial.</p>

<p className='text-complete'>Complete the form to start your free trial. Our team will be in touch to help you make the most of your trial.</p>


    <div className='lfname'>
<input type="text" className="lname" name="fname" placeholder='First Name'/>
<input type="text" className="lname" name="lname" placeholder='Last Name'/>
</div>

<div>
<input type="text" className="lname" name="Email" placeholder='Email'/>
<select className="lname" name="job title">
<option value="Job title">Job title</option>
  <option value="saab">Sales Manager</option>
  <option value="fiat">Marketing/PR Manager</option>
<option value="saab">IT Manager</option>
  <option value="fiat">Operations Manager</option>
  <option value="audi">Software Engineer</option>
  <option value="audi">Devloper</option>
  <option value="audi">Student/Job Seeker</option>
  <option value="audi">Other</option>
</select>
</div>

<div>
<input type="text" className="lname" name="company" placeholder="Company"/>
<select className="lname" name="employees">
<option value="Job title">Employees</option>
  <option value="saab">1-25 Employees</option>
  <option value="fiat">26-100 Employees</option>
<option value="saab">101-200 Employees</option>
  <option value="fiat">200-500 Employees</option>
  <option value="audi">501-2000 Employees</option>
  <option value="audi">2001 - 3000 Employees</option>
</select>
</div>

<div>
<input type="text" className="lname" name="phone" placeholder="Phone"/>
<select className="lname" name="city">
<option value="fiat">India</option>
<option value="Job title">Country/Region</option>
  <option value="saab">United State</option>
  <option value="fiat">Afghanistan</option>
<option value="saab">Africa</option>
  <option value="fiat">Iceland</option>
  <option value="audi">Nepal</option>
  <option value="audi">Yemen</option>
</select>
</div>

<input type="checkbox" className="agree-text" name="text" value="text"/>
     <label for="text">   I agree to the Main Services Agreement.</label><br></br>

<p className='text-by'>By registering, you confirm that you agree to the storing and processing of your personal data by Salesforce as described in the Privacy Statement.</p>

<div className='tryforfreebtn'><DarkButton text={"start my free trial"} color={"BlueButton"}/></div>

</div>
</div>
<div className='bottomoffree'><Bottom/></div>

</div>



        
    )
}
