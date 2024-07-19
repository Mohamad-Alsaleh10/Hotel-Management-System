import { useEffect, useState } from 'react';
import { Navigate, Route, Routes, useLocation, useNavigate } from 'react-router-dom';

import Loader from './common/Loader';
import PageTitle from './components/PageTitle';
import SignIn from './pages/Authentication/SignIn';
import SignUp from './pages/Authentication/SignUp';
import Calendar from './pages/Calendar';
import Chart from './pages/Chart';
import ECommerce from './pages/Dashboard/ECommerce';
import FormElements from './pages/Form/FormElements';
import FormLayout from './pages/Form/FormLayout';
import Profile from './pages/Profile';
import Settings from './pages/Settings';
import Tables from './pages/Tables';
import Alerts from './pages/UiElements/Alerts';
import Buttons from './pages/UiElements/Buttons';
import DefaultLayout from './layout/DefaultLayout';
import Hotels from './pages/Hotels/Hotels';
import AddHotel from './pages/Hotels/AddHotel';
import Transportations from './pages/Transportations/Transportations';
import AddTransportations from './pages/Transportations/AddTransportations';
import OptionalJourney from './pages/OptionalJourney/OptionalJourney';
import AddOptionalJourney from './pages/OptionalJourney/AddOptionalJourney';
import ConstTrip from './pages/ConstTrip/ConstTrip';
import AddConstTrip from './pages/ConstTrip/AddConstTrip';
import Tickets from './pages/Tickets/Tickets';
import AddTickets from './pages/Tickets/AddTickets';
import TripSchedual from './pages/TripSchedual/TripSchedual';
import AddTripSchedual from './pages/TripSchedual/AddTripSchedual';
import AddResturantFood from './pages/resturantfood/AddResturantFood';
import ResturantFood from './pages/resturantfood/ResturantFood';
import Payments from './pages/payments/Payments';
import AddPayments from './pages/payments/AddPayments';
import Users from './pages/users/Users';
import AddUsers from './pages/users/AddUsers';
import TokenReset from './pages/Authentication/TokenReset';
import NewPassword from './pages/Authentication/NewPassword';
import ViewHotel from './pages/Hotels/ViewHotel';

function App() {
  const [loading, setLoading] = useState<boolean>(true);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);
  const navigate = useNavigate();
  const auth = localStorage.getItem('is auth');
  console.log(auth);
  useEffect(() => {
    if (auth == 'false') {
      navigate('/auth/signin');
    }

  }, [auth]);

  return loading ? (
    <Loader />
  ) : (
    <>
      <Routes>

        <Route
          index
          element={
            <>
              <PageTitle title="eCommerce Dashboard | syria" />
              <DefaultLayout> <ECommerce /> </DefaultLayout>
            </>
          }
        />
        {/* Hotels  */}
        <Route
          path="/hotels"
          element={
            <>
              <PageTitle title="Hotels " />
              <DefaultLayout><Hotels /></DefaultLayout>
            </>
          }
        />
        <Route
          path="/hotels/add"
          element={
            <>
              <PageTitle title="Add Hotels " />
              <DefaultLayout><AddHotel /></DefaultLayout>
            </>
          }
        />
                <Route
          path="/hotels/show/:id"
          element={
            <>
              <PageTitle title="show Hotel " />
              <DefaultLayout><ViewHotel /></DefaultLayout>
            </>
          }
        />
        {/* Hotels  */}

        {/* Transportations  */}
        <Route
          path="/transportations"
          element={
            <>
              <PageTitle title="Transportations " />
              <DefaultLayout> <Transportations /></DefaultLayout>
            </>
          }
        />
        <Route
          path="/transportations/add"
          element={
            <>
              <PageTitle title="Add transportations " />
              <DefaultLayout><AddTransportations /></DefaultLayout>
            </>
          }
        />
        {/* Transportations  */}
        {/* OptionalJourney  */}
        <Route
          path="/optionaljourney"
          element={
            <>
              <PageTitle title="optional journey " />
              <DefaultLayout><OptionalJourney /></DefaultLayout>
            </>
          }
        />
        <Route
          path="/optionaljourney/add"
          element={
            <>
              <PageTitle title="Add optional journey " />
              <DefaultLayout><AddOptionalJourney /></DefaultLayout>
            </>
          }
        />
        {/* OptionalJourney  */}
        {/* ConstTrip  */}
        <Route
          path="/consttrip"
          element={
            <>
              <PageTitle title="const trip  " />
              <DefaultLayout><ConstTrip /></DefaultLayout>
            </>
          }
        />
        <Route
          path="/consttrip/add"
          element={
            <>
              <PageTitle title="Add consttrip " />
              <DefaultLayout><AddConstTrip /></DefaultLayout>
            </>
          }
        />
        {/* ConstTrip  */}

        {/* tickets  */}
        <Route
          path="/tickets"
          element={
            <>
              <PageTitle title="tickets " />
              <DefaultLayout><Tickets /></DefaultLayout>
            </>
          }
        />
        <Route
          path="/tickets/add"
          element={
            <>
              <PageTitle title="Add tickets " />
              <DefaultLayout><AddTickets /></DefaultLayout>
            </>
          }
        />
        {/* tickets  */}
        {/* TripSchedual  */}
        <Route
          path="/tripschedual"
          element={
            <>
              <PageTitle title="Trip Schedual " />
              <DefaultLayout><TripSchedual /></DefaultLayout>
            </>
          }
        />
        <Route
          path="/tripschedual/add"
          element={
            <>
              <PageTitle title="addTrip Schedual " />
              <DefaultLayout><AddTripSchedual /></DefaultLayout>
            </>
          }
        />
        {/* TripSchedual  */}

        {/* resturant food  */}
        <Route
          path="/resturantfood"
          element={
            <>
              <PageTitle title="resturant food " />
              <DefaultLayout><ResturantFood /></DefaultLayout>
            </>
          }
        />
        <Route
          path="/resturantfood/add"
          element={
            <>
              <PageTitle title="add resturant food " />
              <DefaultLayout><AddResturantFood /></DefaultLayout>
            </>
          }
        />
        {/* resturant food   */}
        {/* payments  */}
        <Route
          path="/payments"
          element={
            <>
              <PageTitle title="payments" />
              <DefaultLayout><Payments /></DefaultLayout>
            </>
          }
        />
        <Route
          path="/payments/add"
          element={
            <>
              <PageTitle title="add payments" />
              <DefaultLayout><AddPayments /></DefaultLayout>
            </>
          }
        />
        {/* payments   */}
        {/* users  */}
        <Route
          path="/users"
          element={
            <>
              <PageTitle title="users" />
              <DefaultLayout><Users /></DefaultLayout>
            </>
          }
        />
        <Route
          path="/users/add"
          element={
            <>
              <PageTitle title="add users" />
              <DefaultLayout><AddUsers /></DefaultLayout>
            </>
          }
        />
        {/* users   */}
        <Route
          path="/calendar"
          element={
            <>
              <PageTitle title="Calendar | syria" />
              <DefaultLayout><Calendar /></DefaultLayout>
            </>
          }
        />
        <Route
          path="/profile"
          element={
            <>
              <PageTitle title="Profile | syria" />
              <DefaultLayout><Profile /></DefaultLayout>
            </>
          }
        />



        <Route
          path="/settings"
          element={
            <>
              <PageTitle title="Settings | syria" />
              <DefaultLayout><Settings /></DefaultLayout>
            </>
          }
        />
        <Route
          path="/chart"
          element={
            <>
              <PageTitle title="Basic Chart | syria" />
              <DefaultLayout><Chart /></DefaultLayout>
            </>
          }
        />
        


        <Route
          path="/auth/signin"
          element={
            <>
              <PageTitle title="Signin | syria" />
              <SignIn />
            </>
          }
        />
                <Route
          path="/auth/signup"
          element={
            <>
              <PageTitle title="Signup | syria" />
              <SignUp />
            </>
          }
        />
                        <Route
          path="/token"
          element={
            <>
              <PageTitle title="forget password | syria" />
              <TokenReset />
            </>
          }
        />
                                <Route
          path="/password"
          element={
            <>
              <PageTitle title="forget password | syria" />
              <NewPassword />
            </>
          }
        />

      </Routes>
    </>
  );
}

export default App;
