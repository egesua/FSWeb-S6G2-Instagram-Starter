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
  const [posts, setPosts] = useState(sahteVeri);
  const [search, setSearch] = useState();
  const searchChangeHandler = (e) => {
    const {value} = e.target;
    setSearch(value);
    const searchResult = sahteVeri.filter((item) => {
      return item.username.includes(search);
    });
    setPosts(searchResult);
  };

  const [begenilenler, setBegenilenler] = useState([]);

  const gonderiyiBegen = (gonderiID) => {

    const guncelPosts = posts.map((item) => {
      if(item.id === gonderiID) {
        if(!begenilenler.includes(gonderiID)) {
          item.likes++;
          setBegenilenler([...begenilenler, gonderiID]);
        } else {
          item.likes--;
          begenilenler.splice(begenilenler.indexOf(gonderiID), 1)
          setBegenilenler([...begenilenler]);
        }
      }
      return item;
    });

    setPosts(guncelPosts);

  };
    
  return (
    <div className="App">
      <AramaCubugu search = {search} changeHandler = {searchChangeHandler} />

      <Gonderiler gonderiyiBegen = {gonderiyiBegen} gonderiler = {posts} />
    </div>
  );
};

export default App;
