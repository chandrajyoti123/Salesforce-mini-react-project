import './TryForFree.css'

import salesforce from './salesforce.svg'
import trialsales from './trialsales.png'


export default function TryForFree(){
    return(
<div className='sales-container'>
    <div>
<img src={salesforce} className='image-salesforce'/>
</div>
<div className='salesforce-text'>
        <h2 className='start-text'>Start your free trial.</h2><br/>

        <p className='nocredit-text'>No credit card required, no software to install.</p>
        <p className='no-text'>With your 30-day trial, you get:</p>

        <li className='no-text'>Pre-loaded data or upload your own</li>
        <li className='no-text'>Pre-configured processes, reports, and dashboards</li>
        <li className='no-text'>Guided experiences for sales reps, leaders, and administrators</li>
        <li className='no-text'>Online training and live onboarding webinars</li><br/>

        <p className='no-text'>Questions? Talk to an expert: <b>1800-420-7332.</b></p>

        <img src={trialsales} className='image-trailsalesforce'/>
        </div>

<div className='input-card'>
<h1 className='text-sign'>Sign</h1>
<p className='text-sign'>page</p>
<p className='text-sign'>syetrjydkfulg</p>

    <div className='lfname'>
<input type="text" className="fname" name="fname" value="First Name"/>
<input type="text" className="fname" name="lname" value="Last Name"/>
</div>

<div>
<input type="text" className="lname" name="fname" value="Email"/>
<select className="lname" name="cars">
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
<input type="text" className="lname" name="fname" value="Company"/>
<select className="lname" name="cars">
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
<input type="text" className="lname" name="fname" value="Phone"/>
<select className="lname" name="cars">
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

</div>
</div>

        
    )
}
