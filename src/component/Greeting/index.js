import './index.css'

const Greeting = props => {
  const {details, onClickedButton, isActive} = props
  const {id, buttonText} = details

  const onButtonClicked = () => {
    console.log(id)
    onClickedButton(id)
  }

  const buttonClassName = isActive ? 'buttonActive' : 'button'
  return (
    <li>
      <div className="displayButton">
        <button
          type="button"
          className={buttonClassName}
          onClick={onButtonClicked}
        >
          {buttonText}
        </button>
      </div>
    </li>
  )
}

export default Greeting
