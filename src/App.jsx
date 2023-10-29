import { useEffect, useState } from "react";
import Tabs from "./Tabs";
import Category from "./Category";

const url = "https://course-api.com/react-tabs-project";

const App = () => {
  const [jobs, setJobs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const [curItem, setCurItem] = useState(0);

  const fetchData = async () => {
    try {
      const resp = await fetch(url);
      const data = await resp.json();
      // console.log(data);
      setJobs(data);
      setIsLoading(false);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (isLoading) {
    return (
      <section className="jobs-center">
        <div className="loading"></div>
      </section>
    );
  }
  return (
    <section className="jobs-center">
      <Category jobs={jobs} curItem={curItem} setCurItem={setCurItem} />
      <Tabs jobs={jobs} curItem={curItem} />
    </section>
  );
};
export default App;
