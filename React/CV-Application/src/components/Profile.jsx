import ape from '../img/ape.png';
import Overlay from './Overlay';

const Profile = (props) => {
  return (
    <div id="profile">
      <Overlay choice="profile" />
      <img src={ape} />
    </div>
  );
};

export default Profile;
