import { database } from "../firebase/firebase";
import { FETCH_ROOMS, SET_LOADING } from "./types";

const fetchRooms = (data) => ({
  type: FETCH_ROOMS,
  data,
});

const setLoading = () => ({
  type: SET_LOADING,
});
