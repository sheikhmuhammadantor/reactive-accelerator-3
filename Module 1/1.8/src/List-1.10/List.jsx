import { people } from './data.js';
import { getImageUrl } from './utils.js';

export default function List() {
    const chemists = people.filter(person =>
        person.profession === 'chemist'
    );
    const everyoneElse = people.filter(person =>
        person.profession !== 'chemist'
    );
    return (
        <article className='border-2 border-blue-400 p-4 rounded-2xl text-left'>
            <h1>Scientists</h1>
            <h2 className='text-left text-3xl'>Chemists</h2>
            <ul>
                {chemists.map(person =>
                    <li key={person.id}>
                        <img
                            src={getImageUrl(person)}
                            alt={person.name}
                        />
                        <p>
                            <b>{person.name}:</b>
                            {' ' + person.profession + ' '}
                            known for {person.accomplishment}
                        </p>
                    </li>
                )}
            </ul>
            <h2 className='text-left text-3xl'>Everyone Else</h2>
            <ul>
                {everyoneElse.map(person =>
                    <li key={person.id}>
                        <img
                            src={getImageUrl(person)}
                            alt={person.name}
                        />
                        <p>
                            <b>{person.name}:</b>
                            {' ' + person.profession + ' '}
                            known for {person.accomplishment}
                        </p>
                    </li>
                )}
            </ul>
        </article>
    );
}
