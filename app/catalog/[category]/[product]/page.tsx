import {Container} from "@/components/shared/Container";
import {getAllProducts, getProductsByCategory} from "@/lib/api";

const ProductPage = async () => {

  const products = await getAllProducts();

  return (
    <>
      <Container>
        Test
      </Container>
    </>
  );
};

export default ProductPage;