import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { Alert, Container } from 'reactstrap';
import { getConcerts, loadConcertsRequest } from '../../../redux/concertsRedux';

const Prices = () => {
  const dispatch = useDispatch();
  const concerts = useSelector(getConcerts);

  const dayOne = 0;
  const dayTwo = 1;
  const dayThree = 2;

  useEffect(() => {
    dispatch(loadConcertsRequest());
  }, [dispatch]);

  return (
    <Container>
      <h1>Prices</h1>
      <p>
        Prices may differ according the day of the festival. Remember that
        ticket includes not only the star performance, but also 10+ workshops.
        We gathered several genre teachers to help you increase your vocal
        skills, as well as self confidence.
      </p>

      <Alert color='info'>
        Attention!{' '}
        <strong>
          Children under 4 can go freely with you without any other fee!
        </strong>
      </Alert>

      <h2>Day one</h2>
      <p>Price: {concerts[dayOne]?.price}$</p>
      <p>Workshops: {concerts[dayOne]?.workshops[0]?.name}</p>
      <h2>Day Two</h2>
      <p>Price: {concerts[dayTwo]?.price}$</p>
      <p>Workshops: {concerts[dayTwo]?.workshops[0]?.name}</p>
      <h2>Day three</h2>
      <p>Price: {concerts[dayThree]?.price}$</p>
      <p>Workshops: {concerts[dayThree]?.workshops[0]?.name}</p>
    </Container>
  );
};

export default Prices;