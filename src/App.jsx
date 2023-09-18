import {  useState } from "react"

function App() {

  const [answer, setAnswer] = useState('')
  const [input, setInput] = useState('')
  const [step, setStep] = useState(0)

  const caesarCipher = (string, shift) => {
    // алфавит, можно заменить на любой другой и все будет ок
    const alphabet= 'абвгдеёжзийклмнопрстуфхцчшщъыьэюя';
  
    // Расшифрованный текст
    let encodedText= '';
  
    // на случай если шаг возьмут больше чем букв в алфавите
    if (shift > 33) {
      
      shift = shift % 33;
    }
  
    // Итерируемся
    let i = 0;
    while (i < string.length) {
      // Валидные символы
      if (alphabet.indexOf(string[i]) !== -1) {
        // Поиск индекса в алфавите
        const alphabetIndex = alphabet.indexOf((string[i]));
  
        // В рендже алфавита из 33 символов
        if (alphabet[alphabetIndex + shift]) {
          // объединяем в текст
          encodedText += alphabet[alphabetIndex + shift];
        }
        // Не в рендже
        else {
          // объединяем в текст
          encodedText += alphabet[alphabetIndex + shift - 33];
        }
      }
      // Особенные символы
      else {
        // Объединяем в текст
        encodedText += string[i];
      }
  
      i++;
    }
  
    return encodedText;
  };

  const caesarCipherCrypt = (string, shift) => {
    // алфавит, можно заменить на любой другой и все будет ок
    const alphabet= 'абвгдеёжзийклмнопрстуфхцчшщъыьэюя';
  
    // Расшифрованный текст
    let encodedText= '';
  
    // на случай если шаг возьмут больше чем букв в алфавите
    if (shift > 33) {
      
      shift = shift % 33;
    }
  
    // Итерируемся
    let i = 0;
    while (i < string.length) {
      // Валидные символы
      if (alphabet.indexOf(string[i]) !== -1) {
        // Поиск индекса в алфавите
        const alphabetIndex = alphabet.indexOf((string[i]));
  
        // В рендже алфавита из 33 символов
        if (alphabet[alphabetIndex + shift]) {
          // объединяем в текст
          encodedText += alphabet[alphabetIndex - shift];
        }
        // Не в рендже
        else {
          // объединяем в текст
          encodedText += alphabet[alphabetIndex - shift - 33];
        }
      }
      // Особенные символы
      else {
        // Объединяем в текст
        encodedText += string[i];
      }
  
      i++;
    }
  
    return encodedText;
  };

  const getResult = () => {
   const word = caesarCipher(input, step)
   setAnswer(word)
  }

  const getResultCrypt = () => {
    const word = caesarCipherCrypt(input, step)
    setAnswer(word)
   }


  return (
    <div className="bg-gray-400 w-full h-screen flex justify-center items-center flex-col gap-4">
      <h1 className="font-bold">Задание выполнено студентами РЭиТ-402 Кенес Алишер и Бакенов Тимур</h1>
      <div><label>Введите текст: </label><input type="text" onChange={e=> setInput(e.target.value)} className="border-2 border-black" /></div>
      <div className="flex justify-center items-center text-center"><button className="bg-white h-8 w-8 border-2 border-black" disabled={step<1} onClick={()=> setStep(prev=> prev-1)}>-</button><span className="w-8 h-8 font-bold">{step}</span><button className="bg-white h-8 w-8 border-2 border-black" onClick={()=> setStep(prev=> prev+1)}>+</button></div>
      <div><button className="border-2 border-black font-bold bg-white h-12 w-36" onClick={()=>getResult()}>Зашифровать</button>
      <button className="border-2 border-black font-bold bg-white h-12 w-36" onClick={()=>getResultCrypt()}>Дешифровать</button></div>
      <span className="font-bold">Ответ: {answer.toLowerCase()}</span>
      <a href="https://github.com/sleepien/homework">Ссылочка на гитхаб, где весь код</a>
    </div>
  )
}

export default App


