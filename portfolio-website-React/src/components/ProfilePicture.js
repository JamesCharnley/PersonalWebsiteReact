import imageStyles from './ProfilePicture.module.css';

export default function ProfilePicture({ imageUrl }) {
  return <img className={`${imageStyles.circle_border} ${imageStyles.profile_picture}`} src={imageUrl} alt="avatar" />;
}
