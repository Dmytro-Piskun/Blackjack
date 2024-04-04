import './AuthenticationCheckbox.css'

const AuthenticationCheckbox  = ({label,id=label}) => {
  return (
    <div className='authentication-checkbox'>
        <input id={id} type="checkbox" />
        <label htmlFor={id}>{label}</label>
    </div>
   
  )
};
export default AuthenticationCheckbox;
