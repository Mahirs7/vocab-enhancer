import './App.css';
import Form from './components/Form';
import { Configuration, OpenAIApi } from 'openai';
import { useState } from 'react';
import { arrayItems } from './Options';
import SelectOptions from './components/SelectOptions';

function App() {

  const configuration = new Configuration({
    apiKey: "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",
  });

  const openai = new OpenAIApi(configuration);
  const [option, setOption] = useState(null);
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  const selectOption = (option) => {
    console.log(option)
    setOption(option)
  }

  const enhanceText = async () => {
    if (!input) {
      alert("Please enter some text!");
      return;
    }

    try {
      const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: `{Return the following sentece/paragraph with enhanced vocabulary. The structure of the paragraph should not change, only change certain words. If the paragraph contains few words, and there is nothing to change, return the paragraph as is. If the input is a single word, return a sophisticated synonym. Do not write additional sentences:
      } ${input}` ,
        temperature: 0.7,
        max_tokens: 256,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
      });
      console.log(response)
      if (response && response.data.choices && response.data.choices[0]) {
        setOutput(response.data.choices[0].text);
      } else {
        console.log("Error: response is undefined or malformed.");
      }
    } catch (error) {
      console.log("Error: ", error.message);
    }
  };

  const handleInputUpdate = (newInput) => {
    setInput(newInput);
  };

  const handleGoBack = () => {
    setOption(null);
    setInput("");
    setOutput("");
  };

  console.log("option: ", option)
  console.log("name: ", selectOption)
  console.log("name2: ", arrayItems.name)
  console.log("setoption: ", setOption)
  console.log("item: ", arrayItems)


  return (
    <div className="App">
      {option === null ? (
        <SelectOptions arrayItems={arrayItems} selectOption={selectOption}/>
      ) : (
        <div>
          <h1>{setOption.name}</h1>
          <Form input={input} onInputUpdate={handleInputUpdate} onEnhanceText={enhanceText} onGoBack={handleGoBack}/> 
        </div>
      ) 
      }
      <div className="output">
        {output}
      </div> 
    </div>
  );
}

export default App;
