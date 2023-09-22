import './index.css'

const Greeting = props => {
  const {details, onClickedButton, imageAltText, imageUrl} = props
  const {id, buttonText} = details

  const onButtonClicked = () => {
    console.log(id)
    onClickedButton(id)
  }
  return (
    <div>
      <div className="displayButton">
        <button type="button" className="button" onClick={onButtonClicked}>
          {buttonText}
        </button>
      </div>
      <img src={imageUrl} alt={imageAltText} className="image" />
    </div>
  )
}

export default Greeting
