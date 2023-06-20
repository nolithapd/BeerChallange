import  MainPage   from "./components/MainPage";
import ViewBeer from "./components/ViewBeer";

const AppRoutes = [
  {
        index: true,
        element: <MainPage />
  },
    {
        path: '/view-beer',
        element: <ViewBeer />
    }
];

export default AppRoutes;
