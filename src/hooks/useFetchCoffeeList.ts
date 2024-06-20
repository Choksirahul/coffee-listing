import { useCallback, useEffect, useState } from "react";

import { ICoffeeList } from "../models/coffeeList";
import { getCoffeeListing } from "../services/coffeeListing";

export default function useFetchCoffeeList() {
  const [coffeeList, setCoffeeList] = useState<ICoffeeList[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchData = useCallback(async () => {
    setLoading(true);
    try {
      const coffeeLists: ICoffeeList[] = await getCoffeeListing();
      setCoffeeList(coffeeLists);
    } catch (err) {
      console.error("Error fetching coffee listings:", err);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, []);

  return { coffeeList, loading };
}
