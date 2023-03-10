import { useCollection } from '../firebase/useCollection'
import { useAuthContext } from "./useAuthContext" 
import { UserRecords } from './UserRecordsObject'
import { doc, setDoc, updateDoc } from 'firebase/firestore' 
import { db } from './config'

export default function FetchData() {
    const {user} = useAuthContext()
    const {documents: users} = useCollection('users',['uid','==',user.uid])

    function processData(){ //load user data
        var record= new UserRecords(users[0])
        return record
    }
    async function updateData(){ //update user data
        var record= processData()
        //new update is score for round 5 being 5
        record.setScore(4,5)
        const ref=doc(db,'users','darren')
        await updateDoc(ref,{
            score:record.score,
          })
    }
    async function addStuff(){ //create new user function
        const ref=doc(db,'users','darren')
        await setDoc(ref,{
            name:'darren',
            score:[5,5,5,5,10],
            uid: user.uid
          })
      }
  return (
    <div>
        <button onClick={addStuff}>
            Add Data
        </button>
        <button onClick={processData}>
            Get Data
        </button>
        <button onClick={updateData}>
            Update Data
        </button>
    </div>
  )
}