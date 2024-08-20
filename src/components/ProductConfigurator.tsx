import React, { useEffect, useState } from "react";
import styled from "styled-components";
import productOptionsData from "../data/products.json";
import Summary from "./Summary"; // Import the Summary component

// Define styled components for layout and styling with theme values
const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  gap: 40px;
  padding: 40px;
  font-family: "Roboto", sans-serif;
`;

const ImageContainer = styled.div`
  flex: 1;
  img {
    width: 100%;
    max-width: 300px;
    height: auto;
  }
`;

const ConfiguratorContainer = styled.div`
  flex: 2;
`;

const Heading = styled.h1`
  font-size: 24px;
  color: #1f1f1f;
`;

const Description = styled.p`
  font-size: 21px;
  color: #363636;
  margin-bottom: 20px;
`;

const OptionSection = styled.div`
  margin: 20px 0;
`;

const SectionTitle = styled.h2`
  font-size: 21px;
  color: #363636;
  margin-bottom: 10px;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: center; /* Centers the buttons horizontally */
  align-items: center; /* Centers the buttons vertically */
  gap: 10px; /* Space between buttons */
  margin: 20px 0; /* Add some spacing above and below */
`;

const OptionButton = styled.button<{ selected: boolean }>`
  padding: 10px 20px;
  background-color: ${({ selected }) =>
    selected ? "#00CC99" : "#fff"}; // Selected background color
  border: 2px solid ${({ selected }) => (selected ? "#00CC99" : "#A3A3A3")}; // Border changes based on selection
  color: ${({ selected }) =>
    selected ? "#fff" : "#363636"}; // Text color for selected and default
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  min-width: 100px;
  text-align: center;

  &:hover {
    background-color: #00cc99; // Hover effect
    color: white;
  }
`;

const SummaryWrapper = styled.div`
  margin-top: 30px;
`;

interface Attribute {
  id: string;
  type: string;
  value: string | number;
  label: string;
  selectable: boolean;
}

interface Product {
  id: string;
  "product-label": string;
  "product-id": string;
  attributes: Attribute[];
  price: number;
}

interface Color {
  value: string;
  label: string;
}

const ProductConfigurator: React.FC = () => {
  const [productOptions, setProductOptions] = useState<any[]>([]);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [selectedLayout, setSelectedLayout] = useState<string | null>(null);
  const [selectedPrice, setSelectedPrice] = useState<number>(0);
  const [selectedPages, setSelectedPages] = useState<number>(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch the product options dynamically
    const fetchData = async () => {
      setProductOptions(productOptionsData.products); // We can adjust path from where Json needs to be fetched
      setLoading(false);
    };

    fetchData();
  }, []);

  // Extract unique colors and layouts
  const uniqueColors = productOptions
    .flatMap((product) =>
      product.attributes.filter((attr) => attr.type === "cover-colour")
    )
    .filter(
      (attr, index, self) =>
        self.findIndex((a) => a.value === attr.value) === index
    ); // Remove duplicates

  const uniqueLayouts = productOptions
    .flatMap((product) =>
      product.attributes.filter((attr) => attr.type === "paper-type")
    )
    .filter(
      (attr, index, self) =>
        self.findIndex((a) => a.value === attr.value) === index
    ); // Remove duplicates

  // Handle selection of color or layout, update state dynamically based on selections
  useEffect(() => {
    if (selectedColor && selectedLayout) {
      const selectedProduct = productOptions.find(
        (product) =>
          product.attributes.some(
            (attr) =>
              attr.value === selectedColor && attr.type === "cover-colour"
          ) &&
          product.attributes.some(
            (attr) =>
              attr.value === selectedLayout && attr.type === "paper-type"
          )
      );

      if (selectedProduct) {
        setSelectedPrice(selectedProduct.price); // Update price dynamically
        const pageAttribute = selectedProduct.attributes.find(
          (attr) => attr.type === "page-count"
        );
        if (pageAttribute) {
          setSelectedPages(pageAttribute.value); // Update pages dynamically
        }
      }
    }
  }, [selectedColor, selectedLayout, productOptions]);

  if (loading) {
    return <p>Loading...</p>; // Show loading state while data is being fetched
  }

  const product = productOptions.length ? productOptions[0] : null;

  // Handle selection of color and layout, and update price/pages dynamically
  const handleSelection = (color: string, layout: string) => {
    const selectedProduct = productOptions.find(
      (product) =>
        product.attributes.some(
          (attr) => attr.value === color && attr.type === "cover-colour"
        ) &&
        product.attributes.some(
          (attr) => attr.value === layout && attr.type === "paper-type"
        )
    );

    if (selectedProduct) {
      setSelectedColor(color);
      setSelectedLayout(layout);
      setSelectedPrice(selectedProduct.price); // Update price dynamically
      const pageAttribute = selectedProduct.attributes.find(
        (attr) => attr.type === "page-count"
      );
      if (pageAttribute) {
        setSelectedPages(pageAttribute.value); // Update pages dynamically
      }
    }
  };

  // Create dynamic heading based on selected color and layout
  const setHeading = `Hardcover Notebook${
    selectedColor ? ` - ${selectedColor}` : ""
  }${selectedLayout ? `(${selectedLayout})` : ""}`;

  console.log("productOptions", productOptions);
  return (
    <Container>
      <ImageContainer>
        <img
          src="https://github.com/moo-print/frontend-tech-test-data/blob/main/ProductShot.jpeg?raw=true"
          alt="Notebook"
        />
      </ImageContainer>

      <ConfiguratorContainer>
        <div>
          {product ? (
            <>
              <Heading>{setHeading}</Heading>
              {/* Other product details and configuration options */}
            </>
          ) : (
            <p>No product found</p> // Handle case where no product data is found
          )}
        </div>

        <Description>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id quam
          quam.
        </Description>

        <OptionSection>
          <SectionTitle>Choose your colour</SectionTitle>
          <ButtonGroup>
            {uniqueColors.map((attr) => (
              <OptionButton
                data-testid={`color-${attr.label}`}
                key={attr.value}
                selected={selectedColor === attr.value} // Use value to track selection
                onClick={() => setSelectedColor(attr.value)} // Set color by value
              >
                {attr.label}
              </OptionButton>
            ))}
          </ButtonGroup>
        </OptionSection>

        <OptionSection>
          <SectionTitle>Choose your page layout</SectionTitle>
          <ButtonGroup>
            {uniqueLayouts.map((attr) => (
              <OptionButton
                data-testid={`layout-${attr.label}`}
                key={attr.value}
                selected={selectedLayout === attr.value} // Use value to track selection
                onClick={() => setSelectedLayout(attr.value)} // Set layout by value
              >
                {attr.label}
              </OptionButton>
            ))}
          </ButtonGroup>
        </OptionSection>

        {/* Pass the selected data to the Summary component */}
        <SummaryWrapper>
          <Summary
            color={selectedColor}
            layout={selectedLayout}
            price={selectedPrice}
            pages={selectedPages}
          />
        </SummaryWrapper>
      </ConfiguratorContainer>
    </Container>
  );
};

export default ProductConfigurator;
