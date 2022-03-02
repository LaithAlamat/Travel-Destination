import Header from "../header/Header";
import Tours from "../tours/Tours";
import Footer from "../footer/Footer";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import TourDetails from "../TourDetails/TourDetails"

const Home = (props) => {
  return (
    <>
      <Header></Header>
      <Routes>
      <Route path="/" element={<Tours data={props.data} />} />
      <Route path="/:id" element={<TourDetails data={props.data} />} />
      </Routes>
      <Footer></Footer>
    </>
  );
};

export default Home;