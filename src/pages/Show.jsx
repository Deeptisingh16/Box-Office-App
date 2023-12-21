import { useParams } from 'react-router-dom';
const Show = () => {
  const { showId } = useParams();
  return <div>SHOW PAGE For {showId}</div>;
};
export default Show;
