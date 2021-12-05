import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";

import {Body} from './Body';
import {Fleet} from './Fleet';
import {Services} from './Services';
import {News} from './News';

import BackToTop from './scrollTop';


const Main = (props) => (
    <div>
        <Routes>
            <Route path="/"         element={<Body />}      />
            <Route path="/fleet"    element={<Fleet />}     />
            <Route path="/services" element={<Services />}  />
            <Route path="/news"     element={<News />}      />
        </Routes>
        <BackToTop />
    </div>
)

export {Main};
