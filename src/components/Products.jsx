import styled from "styled-components"
import { popularProducts } from "../Data"
import ProductItem from "./Product"

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-between;
`

const Products = () => {
  return (
    <Container>
        {popularProducts.map((item) => (
            <ProductItem item={item} key={item.id} />
        ))}
    </Container>
  )
}

export default Products