import * as React from 'react';
import './style.css';
import Contact from "./Components/Contact.jsx"

export default function App() {
  return (
    <div>
    
      <Contact
        img="https://cdn-icons-png.flaticon.com/512/146/146031.png"
        name="Thomas Müller"
        phone="(2022)444-1002"
        email="itsthomasM@gmail.com"
      />
      <Contact
        img= "https://cse.club/img/avatar1.png"
        name= "Ronaldo"
        phone="(0021)123 0348"
        email="ronaldo@gmail.com"
      />
      <Contact
        img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSVi_rlVd3xdaRY7KGwdWrHKldeZSHoPu9Q6HC4Wty2XXvny1KUKaaneplNRFWVkJ069I&usqp=CAU"
        name= "Neymar"
        phone="(0021)123 0349"
        email="Neymar@gmail.com"
      />
      <Contact
      img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTskZZRN73n7mIPS6dDsFkd8xsD_hw0k0Vh4CXVCD_2HmrBHAXbe4bkBKS-fI6qlWCd_7c&usqp=CAU"
      name= "Mbappe"
        phone="(0021)123 0350"
        email="mb@gmail.com"
      />
    </div>
  );
}
