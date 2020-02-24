import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { library } from '@fortawesome/fontawesome-svg-core';
import * as serviceWorker from "./serviceWorker";

import { store, persistor } from "./store";
import App from "./App";

import { fas, faCalendarAlt, faExclamationTriangle, faEllipsisH, faTimes } from '@fortawesome/free-solid-svg-icons';
import { fab, faFacebookSquare, faTwitterSquare, faLinkedin, faGithub, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { far, faStickyNote } from '@fortawesome/free-regular-svg-icons';
import { faSun, faMoon, faFolderOpen, faSquare } from '@fortawesome/free-regular-svg-icons';
import {
    faUserCircle,
    faUserPlus,
    faUserEdit, 
    faSearch, 
    faHome, 
    faFolder, 
    faSortDown, 
    faInfoCircle, 
    faUsers, 
    faInbox,
    faEllipsisV,
    faCog,
    faEdit,
    faPen,
    faBars,
    faUndo,
    faBookmark,
    faBackspace,
    faChevronCircleLeft,
    faChevronCircleDown,
    faChevronCircleUp,
    faBell,
    faHamsa,
    faBox,
    faBoxOpen,
    faCube,
    faEye,
    faChartPie,
    faArrowsAlt,
    faArrowUp,
    faCompressArrowsAlt,
    faAngleDoubleLeft,
    faAngleDoubleRight,
    faCheck,
    faCheckSquare,
    faTrashAlt,
    faPlusCircle,
    faPlusSquare,
    faExclamationCircle,
    faClipboardList,
    faLock,
    faLockOpen,
    faStar
} from '@fortawesome/free-solid-svg-icons';

library.add(fas, 
  faCalendarAlt,
  faUserCircle,
  faUserPlus, 
  faUserEdit,
  faSearch, 
  faHome, 
  faFolder, 
  faSortDown, 
  faInfoCircle,
  faUsers, 
  faInbox,
  faEllipsisV,
  faEllipsisH,
  faCog,
  faEdit,
  faPen,
  faBars,
  faUndo,
  faBookmark,
  faBackspace,
  faChevronCircleLeft,
  faChevronCircleDown,
  faChevronCircleUp,
  faBell,
  faHamsa,
  faBox,
  faBoxOpen,
  faCube,
  faEye,
  faChartPie,
  faStickyNote,
  faArrowsAlt,
  faArrowUp,
  faCompressArrowsAlt,
  faAngleDoubleLeft,
  faAngleDoubleRight,
  faCheck,
  faCheckSquare,
  faTrashAlt,
  faPlusCircle,
  faPlusSquare,
  faExclamationTriangle,
  faExclamationCircle,
  faClipboardList,
  faLock,
  faLockOpen,
  faSquare,
  faStar
);
library.add(far, faSun, faMoon, faFolderOpen);
library.add(fab, faFacebookSquare, faTwitterSquare, faLinkedin, faGithub, faGoogle);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <PersistGate persistor={persistor}>
        <App />
      </PersistGate>
    </Router>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
