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

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Image
          src="https://s3-eu-west-1.amazonaws.com/tpd/logos/60eb4ffc134d2a0001cc0aa0/0x0.png"
          width="100"
          height="100"
        />
      </div>
      <CustomTable columns={columns} rows={products} />;
    </>
  );
}
