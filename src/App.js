import {Component} from 'react'
import Greeting from './component/Greeting'
import './App.css'

const languageGreetingsList = [
  {
    id: 'bfdf40eb-eec9-4a66-a493-752fe689f0d0',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/english-greetings-img.png',
    buttonText: 'English',
    imageAltText: 'english',
  },
  {
    id: '0ceda891-2a0c-49e2-8c62-68e78180bac6',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/tamil-greetings-img.png',
    buttonText: 'Tamil',
    imageAltText: 'tamil',
  },
  {
    id: '89537778-7a46-4c58-988c-0adc931d087c',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/telugu-greetings-img.png',
    buttonText: 'Telugu',
    imageAltText: 'telugu',
  },
]

// Replace your code here
class App extends Component {
  state = {
    activeId: languageGreetingsList[0].id,
  }

  onClickedButton = id => {
    console.log(id)
    this.setState({activeId: id})
  }

  render() {
    const {activeId} = this.state
    console.log(activeId)
    const detailsList = languageGreetingsList.filter(
      each => each.id === activeId,
    )

    const {imageUrl, imageAltText} = detailsList[0]
    console.log(imageAltText)

    return (
      <div className="container">
        <h1>Multilingual Greetings</h1>
        <ul className="buttonRow">
          {languageGreetingsList.map(each => (
            <Greeting
              details={each}
              key={each.id}
              isActive={activeId === each.id}
              onClickedButton={this.onClickedButton}
            />
          ))}
        </ul>
        <img src={imageUrl} alt={imageAltText} className="image" />
      </div>
    )
  }
}

export default App
