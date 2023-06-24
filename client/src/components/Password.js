import React from 'react'
import { Link } from 'react-router-dom';
import profile from '../assets/profile.png';
import styles from '../styles/Username.module.css'
import { Toaster } from 'react-hot-toast';
import { useFormik } from 'formik';
import { passwordValidate } from '../helper/validate';

const Password = () => {

  const formik = useFormik({
    initialValues: {
      password: '',
    },
    // validate: values => {
    //   const errors = {};
    //   if (!values.password) {
    //     errors.password = 'Required';
    //   } else if (values.password.length < 3) {
    //     errors.password = 'Must be 3 characters or more';
    //   } 
    //   return errors;
    // },
    validate: passwordValidate, 
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
                  <input {...formik.getFieldProps('password')} type='password' className={styles.textbox} placeholder='password' ></input>
                  <button className={styles.btn} type='submit'>Let's Go</button> 
              </div>
          </form>
          <div className='text-center py-4'>
            <span>Not a Nember <Link className='text-red-500' to='/register'>Sign Up</Link></span>
        </div>


        </div>
      </div>
    </div>
  )
}

export default Password;


