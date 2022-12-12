import React from 'react';
import './Education.css';

const Education = () => {
  return (
    <div className='py-16 grid grid-cols justify-center'>
      <h1 className='text-white font-bold  text-3xl text-center'>MY <span className='text-primary font-bold'>EDUCATION</span></h1>

      <br /><br />

      <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mt-6'>
        <div>
          <div className='box'>
            <i className='fas fa-graduation-cap'></i>
            <span className='text-2xl font-bold text-white'>2016</span>
            <h3 className='font-bold text-primary'>HSC</h3>
            <h3 className='font-bold text-primary'>Dhaka Collage</h3>
            <p className='text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>


          <div className=' box'>
            <i className='fas fa-graduation-cap'></i>
            <span className='text-2xl font-bold text-white'>2017-18</span>
            <h3 className='font-bold text-primary'>SSC</h3>
            <h3 className='font-bold text-primary'>Dhaka Collage</h3>
            <p className='text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, distinctio iusto aperiam excepturi quidem quas? Corporis similique laudantium quod perspiciatis</p>
          </div>


          <div className='box'>
            <i className='fas fa-graduation-cap'></i>
            <span className='text-2xl font-bold text-white'>2019-20</span>
            <h3 className='font-bold text-primary'>HSC</h3>
            <h3 className='font-bold text-primary'>Dhaka Collage</h3>
            <p className='text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat ab, nam quam perspiciatis tenetur maxime dolores nulla corporis illum blanditiis sed assumenda porro eligendi officiis hic impedit quis alias quibusdam!</p>
          </div>
        </div>



        <div>
          <div className='box'>
            <i className='fas fa-graduation-cap'></i>
            <span className='text-2xl font-bold text-white'>2021</span>
            <h3 className='font-bold text-primary'>Web Design </h3>
            <h3 className='font-bold text-primary'>10 minutes School</h3>

            <p className='text-white'>I did a course in web design and got a certificate.</p>
          </div>

          <div className='box'>
            <i className='fas fa-graduation-cap'></i>
            <span className='text-2xl font-bold text-white'>2022</span>
            <h3 className='font-bold text-primary'>INTER</h3>
            <h3 className='font-bold text-primary'>Mirpur Collage, Dhaka</h3>
            <p className='text-white'>I am studying in the Science department at Mirpur Collage in Dhaka division.</p>
          </div>

          <div className='box'>
            <i className='fas fa-graduation-cap'></i>
            <span className='text-2xl font-bold text-white'>2022</span>
            <h3 className='font-bold text-primary'>Web Development Course</h3>
            <h3 className='font-bold text-primary'>Programming Hero Course</h3>
            <p className='text-white'>I do a 6 month on web development course. Through which we acquire many skills web development.
              I can easily create any web site. We can easily make web site responsive for all devices
            </p>
          </div>

        </div>

      </div>

    </div>
  );
};

export default Education;