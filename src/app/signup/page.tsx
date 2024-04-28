import React, { useState } from 'react'


export default function SignupPage() {
  const [user, setUser] = useState({
    email: "",
    password: "",
    username:""

  })

  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [loading, setLoading] = useState(false)
  
  const onSignUp = async () => {
    try {
      
    } catch (error) {
      console.log("Signup failed")
    }
  }
  return (<>
  <div></div></>)
}
