import { useEffect, useState } from "react";
import { useUserAuth } from "../context/UserAuthContext";

const useLoggedInUser = () => {
  const [loggedInUser, setLoggedInUser] = useState({});
  const { user } = useUserAuth();
  const email = user?.email;

  useEffect(() => {
    // !TODO - update backend URL
    // fetch(`http://localhost:5000/loggedInUser?email=${email}`)
    fetch(`${process.env.REACT_APP_API_URL}/loggedInUser?email=${email}`)
      .then((res) => res.json())
      .then((data) => setLoggedInUser(data));
  }, [email]);

  return [loggedInUser, setLoggedInUser];
};

export default useLoggedInUser;
