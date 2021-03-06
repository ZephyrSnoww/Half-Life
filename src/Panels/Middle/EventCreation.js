import { Link, Route, Routes, useLocation } from 'react-router-dom';
import ExactEvents from './ExactEvents';
import RelativeEvents from './RelativeEvents';

function EventCreation (props) {
  const location = useLocation();

  return (
    <div className='event-creation'>
      <div className='event-type-links'>
        <Link to='/relative' className={['/relative', '/', ''].includes(location.pathname) ? '' : 'dim'}>Relative</Link>
        <Link to='/exact' className={['/exact'].includes(location.pathname) ? '' : 'dim'}>Exact</Link>
      </div>
      <Routes>
        <Route
          path=''
          element={
            <RelativeEvents
              time={props.time}
              events={props.events}
              setEvents={props.setEvents}
            />
          }
        />
        <Route
          path='/relative'
          element={
            <RelativeEvents
              time={props.time}
              events={props.events}
              setEvents={props.setEvents}
            />
          }
        />
        <Route
          path='/exact'
          element={
            <ExactEvents
              time={props.time}
              events={props.events}
              setEvents={props.setEvents}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default EventCreation;
