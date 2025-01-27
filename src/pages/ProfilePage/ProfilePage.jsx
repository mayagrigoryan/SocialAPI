import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams, useNavigate } from 'react-router-dom'
import { getProfileThunk } from '../../store/reducers/profileReducers'
import './ProfilePage.css'

function ProfilePage() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { id } = useParams()

  const { profile } = useSelector((state) => state.profilePage)
  console.log(profile);

  useEffect(() => {
    dispatch(getProfileThunk(id))
  }, [id])

  const handleGoBack = () => {
    navigate(-1)
  }

  return (
    <div className="profile-page">
      <button className="go-back-btn" onClick={handleGoBack}>Go Back</button>
      <h1>Profile</h1>
      {profile ? (
        <div className="profile-details">
          <img className='profile-image' src={profile?.photos?.large === null ? "https://www.megavoxels.com/wp-content/uploads/2024/01/Pixel-Art-Cat-5.webp" : profile?.photos?.large} alt="" />
          <p>Username: {profile.fullName}</p>
          <p>ID: {profile.userId}</p>
        </div>
      ) : (
        <p>Profile not found.</p>
      )}
    </div>
  )
}

export default ProfilePage