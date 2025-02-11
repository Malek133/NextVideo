import {LayoutHome} from '@/modules/ui/LayoutHome'

interface LayoutProps {
    children:React.ReactNode
}

const layout = ({children}:LayoutProps) => {
  return (
    
      <LayoutHome>
         {children}
      </LayoutHome>
   
    
  )
}

export default layout