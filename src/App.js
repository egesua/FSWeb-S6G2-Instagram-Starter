/* 
  Buradan başlayın ve iç içe geçmiş bileşenlere doğru ilerleyin.
  Projedeki tüm dosyalara kod eklenmesi gerekmez.
  Nerelerde değişiklik yapmanız gerektiğini anlamak için her dosyayı inceleyin.
*/

// State hook u import edin
import React, { useState } from "react";

// Gönderiler (çoğul!) ve AramaÇubuğu bileşenlerini import edin, çünkü bunlar App bileşeni içinde kullanılacak
import AramaCubugu from "./bilesenler/AramaCubugu/AramaCubugu";
import Gonderiler from "./bilesenler/Gonderiler/Gonderiler";

import sahteVeri from "./sahte-veri";
import "./App.css";

const App = () => {
  // Gönderi nesneleri dizisini tutmak için "gonderiler" adlı bir state oluşturun, **sahteVeri'yi yükleyin**.
  const [data, setData] = useState(sahteVeri);
  const [aramaKriteri, setAramaKriteri] = useState();


  const gonderiyiBegen = (gonderiID) => {

    console.log("gonderiyiBegen tetiklendi", gonderiID);

    const newData = [...data];

    newData.map((data) => {
      if(data.id === gonderiID) {
        data.likes += 1;
      }
      return data;
    })

    setData(newData);
    
    const handleSearch = (term) => {
      setAramaKriteri(term);
      console.log("handleSearch event", term);
      if(!term) {
        console.log("term yoksa");
        setData(sahteVeri);
      } else {
        const filteredGonderiler = data.filter((gonderi) => {
          return gonderi.username.includes(term);
        });
        setData(filteredGonderiler);
      }
    }
  };

  return (
    <div className="App">
      <AramaCubugu aramaKriteri = {aramaKriteri} aramaFonksiyonu = {handleSearch} />

      <Gonderiler gonderilerProp = {data} gonderiyiBegen = {gonderiyiBegen} />
    </div>
  );
};

export default App;
