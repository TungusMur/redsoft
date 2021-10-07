/* eslint-disable object-shorthand */
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { getGalery } from '../../Store/reducers/reducerGarely';
import { getLoading } from '../../Store/reducers/reducerLoading';
import ItemsGalery from '../../component/ItemGalery';
import './Home.scss';

const Home = ({ galery, getData, loading }) => {
  useEffect(() => {
    getData();
  }, [getData]);
  return (
    <div className="home">
      <ItemsGalery galery={galery.galery} loading={(e) => loading(e)} statusLoading={galery.loading} />
    </div>
  );
};

export default connect((galery, loading) => ({ galery: galery, loading: loading }), {
  getData: getGalery,
  loading: getLoading,
})(Home);
