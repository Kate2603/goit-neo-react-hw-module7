import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchContacts } from "./redux/contactsOps";
import { selectLoading, selectError } from "./redux/contactsSlice";
import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactList from "./components/ContactList/ContactList";
import { TailSpin } from "react-loader-spinner";
import styles from "./App.module.css";

const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      {isLoading && <TailSpin color="#00BFFF" height={50} width={50} />}
      {error && <p className={styles.error}>Error: {error}</p>}
      <ContactList />
    </div>
  );
};

export default App;
