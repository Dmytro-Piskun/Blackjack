import './AuthenticationInput.css'


const AuthenticationInput = ({label,type,name=type,id=name,className,...props}) => {

    const classes = className?"authentification-input"+className:"authentification-input";

  return (
    <div className={classes}>
    {label?<label htmlFor={id}>{label}</label>:null}
      <input type={type} name={name} id={id} {...props} />
    </div>
  )
};

export default AuthenticationInput;
