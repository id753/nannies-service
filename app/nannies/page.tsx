// import Filter from "@/src/components/Filter/Filter";
import Catalog from "../../components/Catalog/Catalog";

interface PageProps {
  searchParams: Promise<{ [key: string]: string | undefined }>;
}

export const metadata = {
  title: "Nannies",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad sint perspiciatis cum, voluptates ducimus nemo facilis!",
};

const Nannies = async ({ searchParams }: PageProps) => {
  const filters = await searchParams;

  // const data = await getCars(1, 12, filters);

  // const brands = await getBrands();
  return (
    <section>
      <Catalog />
      {/* <Filter brands={brands} /> */}

      {/* {data.cars && data.cars.length > 0 ? ( */}
      {/* <Catalog
      key={JSON.stringify(filters)}
      initialCars={data.cars}
      totalPages={data.totalPages}
      /> */}
      {/* ) : (
        <p style={{ textAlign: "center", marginTop: "50px" }}>
          No cars found matching your criteria.
        </p>
      )} */}
    </section>
  );
};

export default Nannies;
