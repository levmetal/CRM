import { useState, useEffect } from 'react'
import styles from 'styles/ticketView.module.css'
import { v4 as uuidv4 } from 'uuid'
import { useRouter } from 'next/router'
import { motion } from 'framer-motion'


const TicketView = () => {
  const router = useRouter()
  const dinamicRoute= router.asPath
  const [formData, setFormData] = useState({
    category: '',
    priority: '',
    owner: '',
    title: '',
    status: '',
    progress: '',
    description: '',
    avatar: '',
  })

  const [isSubmiting, setSubmiting] = useState(false)
  const [errors, setErrors] = useState({})

   const getTicket = async () => {
  

    const res = await fetch(
      `/api/tickets/${router.query.id}`,
    )
    const data = await res.json()
    
      
      setFormData({
      category: data.category,
      priority: data.priority,
      owner: data.owner,
      title: data.title,
      status: data.status,
      progress: data.progress,
      description: data.description,
      avatar: data.avatar,
    })
  }
   const clean=()=>{
    setFormData((prevState)=>({
      ...prevState,
      category: '',
    priority: '',
    owner: '',
    title: '',
    status: '',
    progress: '',
    description: '',
    avatar: ''
    }))
  }

  useEffect(() => {
    router.query.id? getTicket():clean()
    
  }, [dinamicRoute])

  const handleChange = (e) => {
    const value = e.target.value
    const name = e.target.name

    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    let err = validate()
    if (Object.keys(err).length) return setErrors(err)

    setSubmiting(true)
    console.log(errors)

    if (router.query.id) {
      await updateTicket()
    } else {
      await createTicket()
    }

    await router.push('/')
  }

  const validate = () => {
    let error = {}
    if (!formData.category) {
      error.category = 'Category is required'
    }

    if (!formData.priority) {
      error.priority = 'Priority is required'
    }

    if (!formData.owner) {
      error.owner = 'Owner is required'
    }

    if (!formData.title) {
      error.title = 'Title is required'
    }
    if (!formData.progress) {
      error.progress = 'Progress is required'
    }

    if (!formData.description) {
      error.description = 'Description is required'
    }

    if (!formData.avatar) {
      error.avatar = 'Avatar is required'
    }
    return error
  }

  const createTicket = async () => {
    try {
      await fetch('/api/tickets', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
    } catch (error) {
      console.log(error)
    }
  }

  const updateTicket = async () => {
    try {
      await fetch(`api/tickets/${router.query.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
    } catch (error) {
      console.log(error)
    }
  }

  const categories = [' ', 'Q1-2022', 'Q2-2022', 'Q3-2022']

  const scale = {
    init: {
      scale: [2, 5, 5, 2, 2],
      color: 'black',
      transition: {
        duration: 2,
        type: 'spring',
        damping: 100,
        stiffness: 500,
      },
    },
  }
  const customerror = {
    errorsanimeted: {
      scale: [1, 1.2, 1],
      transition: {
        duration: 0.5,
        type: 'spring',
        damping: 100,
        stiffness: 500,
      },
      color: 'red',
    },
  }
  return (
    <div className={styles.ticketView_container}>
      {isSubmiting ? (
        <motion.p
          variants={scale}
          animate="init"
          transition={{
            repeat: true,
          }}
        >
          Loading
        </motion.p>
      ) : (
        <>
          <form onSubmit={handleSubmit} className={styles.form_container}>
            <section className={styles.user}>
              <div className={styles.owner_view}>
                <label htmlFor="owner">Owner</label>
                <input
                  type="text"
                  onChange={handleChange}
                  name="owner"
                  value=  {router.query.id ? formData.owner : ''}
                  placeholder="Owner"
                />
                {errors.owner && !formData.owner ? (
                  <motion.p variants={customerror} animate="errorsanimeted">
                    {errors.owner}
                  </motion.p>
                ) : null}
              </div>

              <div className={styles.avatar_view}>
                <label htmlFor="avatar">Avatar</label>
                <input
                  type="url"
                  placeholder="URL"
                  onChange={handleChange}
                  name="avatar"
                  autoComplete="off"
                  value={formData.avatar}
                />

                <div className={styles.avatar_preview}>
                  <img
                    src={
                      formData.avatar
                        ? `${formData.avatar}`
                        : `avatar-default.png`
                    }
                    alt="avatar-preview"
                  />
                </div>
                {errors.avatar && !formData.avatar ? (
                  <motion.p variants={customerror} animate="errorsanimeted">
                    {errors.avatar}
                  </motion.p>
                ) : null}
              </div>
            </section>
            <section className={styles.body_form}>
              <div className={styles.title_view}>
                <label htmlFor="title_view"> Title </label>
                <input
                  type="text"
                  placeholder="Title"
                  name="title"
                  onChange={handleChange}
                  value={formData.title}
                />
                {errors.title && !formData.title ? (
                  <motion.p variants={customerror} animate="errorsanimeted">
                    {errors.title}
                  </motion.p>
                ) : null}
              </div>

              <div className={styles.category_view}>
                <label htmlFor="category">Category</label>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                >
                  {categories.map((category) => (
                    <option key={uuidv4()}>{category}</option>
                  ))}
                </select>
                {errors.category && !formData.category ? (
                  <motion.p variants={customerror} animate="errorsanimeted">
                    {errors.category}
                  </motion.p>
                ) : null}
              </div>

              <div className={styles.new_category}>
                <label htmlFor="new-category">New category</label>
                <input
                  type="text"
                  placeholder="New category"
                  name="category"
                  onChange={handleChange}
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
                    value={1}
                    onChange={handleChange}
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
                {errors.priority && !formData.priority ? (
                  <motion.p variants={customerror} animate="errorsanimeted">
                    {errors.priority}
                  </motion.p>
                ) : null}
              </div>

              <div className={styles.progress_view}>
                <label htmlFor="progress">
                  Progress {`:   ${formData.progress}% `}
                </label>
                <input
                  type="range"
                  onChange={handleChange}
                  name="progress"
                  min={0}
                  max={100}
                  value={formData.progress}
                />
                {errors.progress && !formData.progress ? (
                  <motion.p variants={customerror} animate="errorsanimeted">
                    {errors.progress}
                  </motion.p>
                ) : null}
              </div>

              <div className={styles.status_view}>
                <label htmlFor="status">Status</label>
                <select
                  name="status"
                  value={formData.status}
                  onChange={handleChange}
                >
                  <option selected> -- Select an option -- </option>

                  <option defaultValue={formData.status === 'done'} name="done">
                    done
                  </option>
                  <option
                    defaultValue={formData.status === 'in process'}
                    name="in process"
                  >
                    in process
                  </option>
                  <option
                    defaultValue={formData.status === 'standby'}
                    name="standby"
                  >
                    standby
                  </option>
                </select>
              </div>
              <div className={styles.description_view}>
                <label htmlFor="description"> Description </label>
                <textarea
                  type=""
                  placeholder="Description"
                  name="description"
                  onChange={handleChange}
                  value={formData.description}
                />
                {errors.description && !formData.description ? (
                  <motion.p variants={customerror} animate="errorsanimeted">
                    {errors.description}
                  </motion.p>
                ) : null}
              </div>
            </section>

            <motion.button
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.3 },
              }}
              whileTap={{ scale: 1 }}
              className={styles.button}
              formAction="onSubmit"
            >
              {router.query.id ? 'Update' : 'Create'}
            </motion.button>
          </form>
        </>
      )}
    </div>
  )
}
export default TicketView
