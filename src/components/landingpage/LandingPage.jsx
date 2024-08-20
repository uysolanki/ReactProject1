import ContactForm from '../forms/contactform/ContactForm'
import './LandingPage.css'
export const LandingPage = () => {
  return (
   <div className='parentContainer'>
    <div className='top'>
            <h1>CONTACT US</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor error nam voluptates at, sequi repudiandae nemo a animi necessitatibus voluptate deleniti unde vitae ratione facere doloribus asperiores aperiam recusandae. Ipsa?</p>

    </div>
    <div className='pageContent'>
            <div className='left'>
               <ContactForm />
            </div>
            <div className='right'>
                <img src="landingimage.jpg" />
            </div>
    </div>

   </div>
  )
}

// export default LandingPage