import './loginscreen.scss';

const Login = () => {
  return (
    <div className="lend__login">
        <div className="lend__login-logo">
            <div className="lend__logo">
                <img 
                src='/logos/Union.png' 
                alt="lend logo"/>
            </div>
            <div className="lend__brand">
                <img 
                src="/logos/lendsqr.png" 
                alt="lend brand" />
            </div>
            <div className="lend__brand-big">
                <img src="/images/pablo-sign-in 1.svg" alt="lends" />
            </div>       
        </div>  
        
        
        <div className="lend__login-details">
            <div className="lend__login-details-welcome">
            <div className="lend__details">
                <h1 className="lend__login-head">Welcome!</h1>
            </div>
            <div className="lend__details">
                <p className="lend__login-text">Enter details to Login.</p>
            </div>
            </div>
            <div className="lend__form">
            <form >
                    <div className="lend__email-txt ">
                        <input 
                        className="lend-email"
                        type="email"
                        name="email"
                        placeholder="Email"

                         />
                    </div>
                    <div className="lend__password-txt">
                        <input 
                        className="lend-password"
                        placeholder="Password" 
                        type="password"
                        name="password"
                         />
                        <span>Show</span>
                    </div>
                    <div className='lend__action'>
                    <p className='lent-text'>Forgot password?</p>
                    </div>
                    <div className="lend__action-btn">
                    <button className='Lend__login-btn'>
                        login
                    </button>
                    </div>
                    
                </form>
            </div>
                
        </div>
       
      
    </div>
  )
}

export default Login
