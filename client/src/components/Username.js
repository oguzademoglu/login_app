import React from 'react'
import { Link } from 'react-router-dom';
import profile from '../assets/profile.png';
import styles from '../styles/Username.module.css'
import { Toaster } from 'react-hot-toast';
import { useFormik } from 'formik';
import { usernameValidate } from '../helper/validate';

const Username = () => {

  const formik = useFormik({
    initialValues: {
      username: '',
    },
    // validate: values => {
    //   const errors = {};
    //   if (!values.username) {
    //     errors.username = 'Required';
    //   } else if (values.username.length < 3) {
    //     errors.username = 'Must be 3 characters or more';
    //   } 
    //   return errors;
    // },
    validate: usernameValidate,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async values => {
      console.log(values);
    },
  });

  return (
    <div className='container mx-auto'> 

      <Toaster position='top-center' reverseOrder='false'></Toaster>

      <div className='flex items-center justify-center  h-screen'>
        <div className={styles.glass}>
          <div className='title flex flex-col items-center'>
              <h4 className='text-5xl font-bold'>Hello Again!</h4>
              <span className='py-4 text-xl w-2/3 text-center text-gray-500'>Explore more by connecting with us.</span>
          </div>

          <form className='py-1' onSubmit={formik.handleSubmit}>
              <div className='profile flex justify-center py-4'>
                  <img src={profile} className={styles.profile_img} alt='avatar'></img>
              </div>
              <div className='textbox flex flex-col items-center gap-6'>
                  <input {...formik.getFieldProps('username')} type='text' className={styles.textbox} placeholder='Username' ></input>
                  <button className={styles.btn} type='submit'>Let's Go</button> 
              </div>
          </form>
          <div className='text-center py-4'>
            <span>Not a Nember <Link className='text-red-500' to='/register'>Register Now</Link></span>
        </div>


        </div>
      </div>
    </div>
  )
}

export default Username;


