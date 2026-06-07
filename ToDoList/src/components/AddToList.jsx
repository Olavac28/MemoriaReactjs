import { useState } from 'react';
import './componentsStyle.css'

function AddToList(props) {
    {/*                                usar ''*/}
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    return(
        <div className="box">
            {/*                                    valor inicial; muda o valor do state quando atualiza*/}
            <input type='text' placeholder='Write The Title' value={title} onChange={(e) => setTitle(e.target.value)} />
            <textarea rows='10' placeholder='Write The Description' value={description} onChange={(e) => setDescription(e.target.value)} />

            <button onClick={() => {
                if(title != '' && description != '') {
                    props.addNewTask(title, description);
                    setTitle('');
                    setDescription('');
                }
            }}>Submit</button>
        </div>
    )
}

export default AddToList;