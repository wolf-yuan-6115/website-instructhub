/* @refresh reload */
import { render } from 'solid-js/web';

import "@/src/index.css";
import App from "@/src/App";
import { Route, Router } from '@solidjs/router';
import LoginPage from '@/src/page/auth/login/login';

const root = document.getElementById('root');

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error(
    'Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got misspelled?',
  );
}

render(
  () => (
      <Router>
          <Route path="/" component={App} />
          <Route path="/login" component={LoginPage} />
      </Router>
  ),
  root!
);
