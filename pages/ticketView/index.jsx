import { useState} from 'react'
import styles from '../../styles/ticketView.module.css'
import { v4 as uuidv4 } from "uuid"

const TicketView =()=>{

    const [formData, setFormData]=useState({
        status:"not started yed",
        progress:0,
        title:"title"
    })

const handleChange=(e)=>{
        console.log(e.target.value);
            const value =e.target.value
            const name =e.target.name

        setFormData((prevState)=>({
                ...prevState,
                [name]:value   

        }))

}

const handleSubmit=(e)=>{
        e.preventDefault()
    console.log("from submit");
}

    const categories = ["test1", "test2"]
    
    return(
<div className={styles.ticketView_container}>
        <h1>from TicketView</h1>

        <form onSubmit={handleSubmit}>
            <section>

            <label htmlFor="title"> Title </label>
            <input 
            type="text" 
            placeholder="Title" 
            name="title"
            onChange={handleChange}
            required={true}
            value={formData.title}
            />

              <label htmlFor="description"> Description </label>
            <input 
            type="text" 
            placeholder="description" 
            name="description"
            onChange={handleChange}
            required={true}
            value={formData.description}
            />

            <label htmlFor="category">Category</label>
            <select 
            name="category" 
            value={formData.category}
            >
                    {categories.map(category=>( 
                        <option key={uuidv4()} value={category}>{category}</option>
                    ))}

            </select>
            <label htmlFor="new-category">New category</label>
            <input type="text" 
            placeholder="new category" 
            name="new category"
            onChange={handleChange}
            required={true}
            value={formData.category}
            />
            <div className="multiple-input-container">
            <input type="radio"
            id='priority-1'
            onChange={handleChange}
            name="priority"
            checked={formData.priority===1}
            value={1}
             />
            <label htmlFor="priority-1">1</label>
              <input type="radio"
            id='priority-2'
            onChange={handleChange}
            name="priority"
            checked={formData.priority===2}
            value={2}
             />
             <label htmlFor="priority-2">2</label>
              <input type="radio"
            id='priority-3'
            onChange={handleChange}
            name="priority"
            checked={formData.priority===3}
            value={3}
             />
             <label htmlFor="priority-3">3</label>
              <input type="radio"
            id='priority-4'
            onChange={handleChange}
            name="priority"
            checked={formData.priority===4}
            value={4}
             />
             <label htmlFor="priority-4">4</label>
              <input type="radio"
            id='priority-5'
            onChange={handleChange}
            name="priority"
            checked={formData.priority===5}
            value={5}
             />
              <label htmlFor="priority-5">5</label>

             </div>

            <button formAction='onSubmit'>add</button>
            </section>



        </form>
        
</div>


        )

}
export default TicketView