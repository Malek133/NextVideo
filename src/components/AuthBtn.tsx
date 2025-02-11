
import { Button } from "@/components/ui/button"
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
      <Button>
            <SignInButton />
            </Button>
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
      
    </div>
  )
}

export default AuthBtn
