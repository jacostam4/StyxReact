import React, {useState} from 'react'

export default function Component() {

    const [text, setText] = useState('Texto Input')
    const [Updated, setUpdated] = useState('Texto Actualizado')
   
    const TextOnChange = (event) => {
        setText(event.target.value)
    }

    const bottonOnClick = () => {
        setUpdated(text)
    }

  return (
    <div>
        <input type="text" value={text} onChange={TextOnChange} />
        <button onClick={bottonOnClick}>Actualizar</button>
        <p>Texto Input:  {text}</p>
        <p>Texto Actualizado: {Updated}</p>
    </div>
  )
}
