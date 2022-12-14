  import React, {useContext } from 'react';
  import Image from './../../../images/Account.gif';
  import styled from 'styled-components';
  import { StepperContext } from '../context/StepperContext';  
  
  export const Img = styled.img`
    width: 70%;
    height: 70%;
    margin: 0 0 10px 0;
    padding-right: 0;
`
 
 const Account = () => {
  
    const {userData,setUserData} = useContext(StepperContext);
    const handleChange =(e) => {
      const {name,value} = e.target;
      setUserData({...userData,[name]:value});
    }
    return (
     <div className='grid grid-flow-col grid-cols-2'>
      <div className='flex justify-center items-center h-full w-full'>
          <Img src={Image}/>
      </div>
      <div className='flex flex-col'>
        <div className='w-full mx-2 flex-1'>
          <div className='font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase'>
            Username
          </div>  

          <div className='bg-white my-2 p-1 flex border border-gray-200 rounded'>
              <input
              onChange={handleChange}
              value={userData["username"]  || ""}
              name='username'
              placeholder='Username'
              className='p-1 px-2 appearance-none outline-none w-full text-gray-800'
              />
          </div>

        </div>
        <div className='w-full mx-2 flex-1'>
          <div className='font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase'>
            Password
          </div>  

          <div className='bg-white my-2 p-1 flex border border-gray-200 rounded'>
              <input
              onChange={handleChange}
              value={userData["password"]  || ""}
              name='password'
              placeholder='Password'
              type='password'
              className='p-1 px-2 appearance-none outline-none w-full text-gray-800'
              />
          </div>

        </div>  
        <div className='w-full mx-2 flex-1'>
          <div className='font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase'>
            Confirm Password
          </div>  

          <div className='bg-white my-2 p-1 flex border border-gray-200 rounded'>
              <input
              onChange={handleChange}
              value={userData["confirmpassword"]  || ""}
              name='confirmpassword'
              placeholder='Confirm Password'
              type='password'
              className='p-1 px-2 appearance-none outline-none w-full text-gray-800'
              />
          </div>  
        </div>  
      </div>
     </div> 
    )
  }
  
  export default Account;