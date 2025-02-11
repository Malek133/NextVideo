


import {
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs'

const AuthBtn = () => {
  return (
    <div>
      <SignedOut>
       
          <SignInButton />
        
            
            
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
      
    </div>
  )
}

export default AuthBtn
