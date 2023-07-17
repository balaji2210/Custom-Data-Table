import CustomTable from "@/components/table/Table";
import { Image, Tooltip } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";

const columns = [
  "ID",
  "Title",
  "Brand",
  "Price",
  "Rating",
  "Description",
  "Image",
];

const data = [
  { id: 1, name: "Balaji", age: 22 },
  { id: 2, name: "Steve", age: 23 },
  { id: 3, name: "Smith", age: 24 },
  { id: 4, name: "Rahul", age: 25 },
  { id: 5, name: "Ravi", age: 26 },
  { id: 6, name: "Kiran", age: 27 },
  { id: 7, name: "Kalyan", age: 28 },
  { id: 8, name: "Jai", age: 29 },
];

export default function Home() {
  const [products, setProducts] = useState([]);

  const fetchData = async () => {
    const { data } = await axios.get(`https://dummyjson.com/products`);
    if (data?.products?.length) {
      const temp = [];
      data?.products?.forEach((item) => {
        temp?.push({
          id: item?.id || "NA",
          title: item?.title || "NA",
          brand: item?.brand || "NA",
          price: item?.price || "NA",
          rating: item?.rating || "NA",
          description:
            (
              <div style={{ width: "25rem" }}>
                <Tooltip label={item?.description}>
                  {item?.description?.slice(-50)?.concat("...")}
                </Tooltip>
              </div>
            ) || "NA",
          image: (
            <div style={{ width: "150px" }}>
              <Image
                borderRadius="full"
                boxSize="50px"
                src={item?.thumbnail}
                alt={item?.thumbnail}
              />
            </div>
          ),
        });
      });
      setProducts(temp);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return <CustomTable columns={columns} rows={products} />;
}
