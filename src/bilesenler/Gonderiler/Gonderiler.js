import React from "react";
import Gonderi from "./Gonderi";
import "./Gonderiler.css";

const Gonderiler = (props) => {
  // 🔥 Gönderiler'in ebeveyninin doğru değişkenleri doğru şekilde ilettiğine emin olun!
  const { gonderiyiBegen, gonderilerProp } = props;

  return (
    <div className="posts-container-wrapper">
      {gonderilerProp.map((gonderi) => {
        return (
          <Gonderi
          key = {gonderi.id}
          gonderiyiBegen = {gonderiyiBegen}
          gonderi = {gonderi}
          />
        );
      })}
      {/* Gönderi'nin çağırılmasında hangi propları kullanmanız gerektiğine dikkat edin! */}
    </div>
  );
};

export default Gonderiler;
