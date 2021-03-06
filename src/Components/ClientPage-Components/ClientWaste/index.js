import { useEffect } from "react";
import Api from "../../../Api";
import { useInfoWaste } from "../../../Providers/InfoWaste";
import { useAuth } from "../../../Providers/IsAuth";
import { useSecondModal } from "../../../Providers/SecondModal";
import { useUser } from "../../../Providers/user";
import { useUserWaste } from "../../../Providers/UserRes";
import { ListWasteClient } from "./style";

export const ClientListWaste = () => {
  const { userWaste, getUserWaste } = useUserWaste();
  const { openSecondModal } = useSecondModal();
  const { addInfoWaste } = useInfoWaste();
  const { user, addUser } = useUser();
  const { auth } = useAuth();


  const changeWaste = (item) => {
    addInfoWaste(item);
    openSecondModal();
  };
 

  useEffect(()=>{
    getUserWaste(user);
    Api.get(`/users/${user.id}`, {
          headers: { Authorization: `Bearer ${auth}` },
        }).then((res) => {
          addUser(res.data)
          localStorage.setItem("@Ecoleta_User", JSON.stringify(res.data))
        });
  },[user.length])

  return (
    <ListWasteClient>
      {userWaste.map(
        (item, index) =>
          item.status === "Pendente" && (
            <li onClick={() => changeWaste(item)} key={index}>
              <div className="div-img">
                <img src={item.image} />
              </div>
              <div className="info">
                <h3>{item.category}</h3>
                <p>
                  {item.measure} {item.category === "Óleo" ? "Litros" : "Kg"}
                </p>
                <p className="status">{item.status}</p>
              </div>
            </li>
          )
      )}
    </ListWasteClient>
  );
};
