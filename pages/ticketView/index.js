import { useState, useEffect } from 'react'
import styles from 'styles/ticketView.module.css'
import { v4 as uuidv4 } from 'uuid'
import { useRouter } from 'next/router'

const TicketView = () => {
  const router =useRouter()
  const [formData, setFormData] = useState({
    category: '',
    priority: "",
    owner: '',
    title: '',
    status: '',
    progress: "",
    description: '',
    avatar:""
  })
  const getTicket= async ()=>{
    const res = await fetch(`http://localhost:3000/api/tickets/${router.query.id}`)
    const data = await res.json()
    setFormData({
      category: data.category,
      priority: data.priority,
      owner: data.owner,
      title: data.title,
      status: data.status,
      progress: data.progress,
      description: data.description,
      avatar:data.avatar
      })
  }

    useEffect(()=>{
      if(router.query.id) getTicket()
      
    },[])

    

  const handleChange = (e) => {
    e.preventDefault()
   
    const value = e.target.value
    const name = e.target.name

    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
 
    if(router.query.id){
      await updateTicket()
    }else await createTicket()
    
    await router.push("/dashboard")
  }

  

  const createTicket= async ()=>{
      try {
        await fetch("http://localhost:3000/api/tickets",{
          method:"POST",
          headers:{
            "Content-Type":"application/json",
          },
          body:JSON.stringify(formData),
        })

      } catch (error) {
       console.log(error) 
      }
  }

  const updateTicket = async ()=>{
    try {
      await fetch(`http://localhost:3000/api/tickets/${router.query.id}`,{
        method:"PATCH",
        headers:{
          "Content-Type":"application/json",
        },
        body:JSON.stringify(formData),
      })

    } catch (error) {
     console.log(error) 
    }
  }

  const categories = [" ",'test1', 'test2']

  return (
    <div className={styles.ticketView_container}>
      <h1>{(!router.query.id ?`Create ticket`:`Update ticket`)}</h1>
      <form onSubmit={handleSubmit} className={styles.form_container}>
        <section className={styles.body_form}>
          <div className={styles.title_view}>
            <label htmlFor="title_view"> Title </label>
            <input
              type="text"
              placeholder="Title"
              name="title"
              onChange={handleChange}
              required={true}
              value={formData.title}
            />
          </div>
          <div className={styles.description_view}>
            <label htmlFor="description"> Description </label>
            <input
              type="text"
              placeholder="Description"
              name="description"
              onChange={handleChange}
              required={true}
              value={formData.description}
            />
          </div>
          <div className={styles.category_view}>
            <label htmlFor="category">Category</label>
            <select name="category" value={formData.category} onChange={handleChange}>
              {categories.map((category) => (
                <option key={uuidv4()} >
                  {category}
                </option>
              ))}
            </select>
          </div>

          <div className={styles.new_category}>
            <label htmlFor="new-category">New category</label>
            <input
              type="text"
              placeholder="New category"
              name="category"
              onChange={handleChange}
              required={true}
              value={formData.category}
            />
          </div>
          <div className={styles.multiple_input_container}>
          <label>Priority</label>
          <div className={styles.input_container}>

       
              <input
                id="priority-1"
                name="priority"
                type="radio"
                onChange={handleChange}
                value={1}
                checked={formData.priority == 1}
              />
              <label htmlFor="priority-1">1</label>
              <input
                id="priority-2"
                name="priority"
                type="radio"
                onChange={handleChange}
                value={2}
                checked={formData.priority == 2}
              />
              <label htmlFor="priority-2">2</label>
              <input
                id="priority-3"
                name="priority"
                type="radio"
                onChange={handleChange}
                value={3}
                checked={formData.priority == 3}
              />
              <label htmlFor="priority-3">3</label>
              <input
                id="priority-4"
                name="priority"
                type="radio"
                onChange={handleChange}
                value={4}
                checked={formData.priority == 4}
              />
              <label htmlFor="priority-4">4</label>
              <input
                id="priority-5"
                name="priority"
                type="radio"
                onChange={handleChange}
                value={5}
                checked={formData.priority == 5}
              />
              <label htmlFor="priority-5">5</label>
              </div>
          </div>

          <div className={styles.progress_view}>
            <label htmlFor="progress">Progress</label>
            <input
              type="range"
              onChange={handleChange}
              name="progress"
              min={0}
              max={100}
              value={formData.progress}
            />
          </div>

          <div className={styles.status_view}>
            <label htmlFor="status">Status</label>
            <select
              name="status"
              value={formData.status}
              onChange={handleChange}
            >
              <option defaultValue={formData.status === 'done'} name="done">
                Done
              </option>
              <option
                defaultValue={formData.status === 'in process'}
                name="in process"
              >
                in process
              </option>
              <option defaultValue={formData.status === 'standby'} name="standby">
                Standby
              </option>
            </select>
          </div>
        </section>

        <section className={styles.user}>
          <div className={styles.owner_view}>
            <label htmlFor="owner">Owner</label>
            <input
              type="text"
              onChange={handleChange}
              name="owner"
              required={true}
              value={formData.owner}
              placeholder="Owner"
            />
          </div>

          <div className={styles.avatar_view}>
            <label htmlFor="avatar">Avatar</label>
            <input
              type="url"
              placeholder="URL"
              onChange={handleChange}
              name="avatar"
              required={true}
              value={formData.avatar}
            />

            <div className={styles.avatar_preview}>
              {formData.avatar && (
                <img src={formData.avatar} alt="avatar-preview" />
              )}
            </div>
          </div>
        </section>
        <button className={styles.button} formAction="onSubmit">
          Add
        </button>
      </form>
    </div>
  )
}
export default TicketView
