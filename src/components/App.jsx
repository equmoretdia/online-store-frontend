import { AppRouter } from './AppRouter/AppRouter';
import { NavBar } from './NavBar/NavBar';

export const App = () => {
  return (
    <div>
      <NavBar />
      <AppRouter />
    </div>
  );
};
