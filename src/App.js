
import Greeting from './Greeting';
import Message from './Message';
import Button from './Button';

function App() {
  const handleClick = () => {
    console.log('Кнопка натиснута!');
  };

  return (
    <div>
      <Greeting name="Тимофій" />
      <Message text="Це моє перше React-повідомлення!" />
      <Button onClick={handleClick} />
    </div>
  );
}

export default App;