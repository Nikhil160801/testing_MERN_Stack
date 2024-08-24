import { useState } from 'react';
import axios from 'axios';

const Form = () => {
  const [inputData, setInputData] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/data', { data: inputData});
      console.log(response.data);
    } catch (error) {
      console.error('Error sending data:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={inputData}
        onChange={(e) => setInputData(e.target.value)}
        placeholder="Enter some data"
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
