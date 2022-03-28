import PersonCard from './Componentes/PersonCard/PersonCard';
import './App.css';

function App (){

  const personas = [
    {
        firstName: 'Jane',
        lastName: 'Doe',
        age: 45,
        hairColor: 'Black'
      },
      {
        firstName: 'John',
      lastName: 'Smith',
      age: 88,
      hairColor: 'Brown'
      }
    ]; 

      return(
        <div className='App'>
          {
            personas.map( person => <PersonCard firstName={person.firstName} lastName={person.lastName} age={person.age} hairColor={person.hairColor}/>)
            }
        </div>
      );

      }
    
    
    
    

export default App;
