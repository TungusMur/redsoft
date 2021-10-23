import { useEffect } from 'react';
import { connect } from 'react-redux';
import { getGalery, addLoading } from '../../Store/reducers/reducerGarely';
import ItemsGalery from '../../component/ItemGalery';
import './Home.scss';

const Home = ({ data, getData, loading }) => {
  useEffect(() => {
    getData();
  }, [getData]);
  console.log(data);
  return (
    <div className="home">
      <ItemsGalery galery={data.galery} loading={(e) => loading(e)} />
    </div>
  );
};

export default connect((galery) => ({ data: galery.galery }), {
  getData: getGalery,
  loading: addLoading,
})(Home);

// loading={(e) => loading(e)}
