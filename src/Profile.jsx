import { useParams } from 'react-router-dom'
import DefaultProfile from './DefaultProfile'
import Spinach from './Spinach'
import Popeye from './Popeye'
import Spongebob from './Spongebob'
import Jellyfish from './Jellyfish'

const Profile = () => {
  const { name } = useParams()
  console.log(name)
  return (
    <div>
      <h1>Hello from profile page!</h1>
      <p>So, how are you?</p>
      <hr />
      <h2>The profile visited is here:</h2>
      {name === 'popeye' ? (
        <Popeye />
      ) : name === 'spinach' ? (
        <Spinach />
      ) : name === 'spongebob' ? (
        <Spongebob />
      ) : name === 'jellyfish' ? (
        <Jellyfish />
      ) : (
        <DefaultProfile />
      )}
    </div>
  )
}

export default Profile
