import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const AuthContext = createContext();
export const useAuthUser = () => {
  return useContext(AuthContext);
};
const UserContext = ({ children }) => {
  const [authUser, setAuthUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [token, setToken] = useState(localStorage.getItem("user-token"));

  useEffect(() => {
    console.log("triggered");
    setAuthUser(localStorage.getItem("user-token"))
  }, [authUser, token, loading]);

  const UserSignUp = async (value) => {
    setLoading(true);
    return await fetch("http://localhost:3001/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(value),
    })
      .then((response) => response.json())
      .then(() => {
        console.log("DB Success");
        setLoading(false);
      })
      .catch((e) => console.log(e, token, value));
  };

  const UserLogin = async (value) => {
    console.log(value);
    try {
      setLoading(true);
      const result = await axios
        .post(`http://localhost:3001/login`, value)
        .then((res) => {
          console.log(res?.data);
          if (res?.data?.token) {
            setAuthUser({
              ...authUser,
              token: res?.data?.token,
              id: res?.data?.id,
            });
            localStorage.setItem("user-token", res?.data?.token);
            setToken(res?.data?.token);
            setLoading(false);
          }
        });
      return result;
    } catch (err) {
      console.log(err?.response);
    }
  };

  const AddItemsToList = async (value) => {
    setLoading(true)
    await fetch("http://localhost:3001/item/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(value)
    })
      .then((response) => response.json())
      .then(() => {
        setLoading(false)
        console.log("Successful");
        window.location.reload();
      })
      .catch((e) => console.log(e, token));
  }

  const DeleteItemFromList = async (id) => {
    setLoading(true)
    await fetch(`http://localhost:3001/item/remove/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      }
    })
      .then((response) => response.json())
      .then(() => {
        console.log("Successful");
        setLoading(false)
        window.location.reload();
      })
      .catch((e) => console.log(e, token));
  }

  const logOut = () => {
    setLoading(true);
    localStorage.removeItem("user-token");
    setToken(null);
    setLoading(false);
  };

  const authInfo = {
    authUser,
    loading,
    logOut,
    UserSignUp,
    UserLogin,
    AddItemsToList,
    DeleteItemFromList
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default UserContext;
