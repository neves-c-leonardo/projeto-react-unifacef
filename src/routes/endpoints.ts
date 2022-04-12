import Home from '../containers/home';
import { RouteProps } from 'react-router-dom';
import Sobre from '../containers/sobre';
import Combustivel from '../containers/combustivel';
import StarWarsDetails from '../containers/star-wars-details';
import StarWars from '../containers/star-wars';
import Register from '../containers/register';

const publicUrl = process.env.PUBLIC_URL;

interface EndPointsProps extends RouteProps {
  name?: string
}

export const endpoints: EndPointsProps[] = [
  { path: `${publicUrl}/`, component: Home, exact: true },
  { path: `${publicUrl}/home`, name: 'Home', component: Home, exact: true },
  { path: `${publicUrl}/sobre`, name: 'Sobre', component: Sobre, exact: true },
  { path: `${publicUrl}/combustivel`, name: 'Combustivel', component: Combustivel, exact: true },
  { path: `${publicUrl}/star-wars/`, name:'Star Wars', component: StarWars, exact: true },
  { path: `${publicUrl}/star-wars/:id`, component: StarWarsDetails },
  { path: `${publicUrl}/cep/`, name:'Consulta CEP', component: Register, exact: true },
];