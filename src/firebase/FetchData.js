import { useCollection } from '../firebase/useCollection'
import { useAuthContext } from "./useAuthContext" 
export default function FetchData() {
    const {user} = useAuthContext()
    const {documents: users} = useCollection('users',['uid','==',user.uid])
  return (
    <div>
      <button onClick={()=>console.log(users)}>
            Get Data
        </button>
    </div>
  )
}
