import React, { useState } from "react";
import UserNav from "../components/UserNav";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
const UserDemo = () => {
  return (
    <div>
     <UserNav/> 
      <Hero/>
      <Footer />
    </div>
  );
};

export default UserDemo;
