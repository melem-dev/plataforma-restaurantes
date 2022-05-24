import { parsebrl } from "../../utils";
import {
  ContainerTitle,
  DataButton,
  DataCard,
  DataGrid,
  DataContainer,
  DataIconExit,
  DataInfo,
  DataTitle,
} from "./styles";

export default function ({ data, toggle, handler: { state, setQuantity } }) {
  return (
    <>
      {Object.keys(data).length >= 1 && (
        <>
          <ContainerTitle>Carrinho</ContainerTitle>
          <DataContainer>
            {Object.entries(data).map((el, i) => {
              const [id, item] = el;
              const quantity = Number(state[id].quantity);

              return (
                <DataCard key={i}>
                  <DataIconExit onClick={() => toggle(id, false)}>
                    x
                  </DataIconExit>
                  <DataTitle>{item.title}</DataTitle>
                  <DataInfo>Valor: {parsebrl(item.price)}</DataInfo>
                  <DataInfo>
                    Total: {parsebrl(item.price * Number(quantity))}
                  </DataInfo>
                  <DataInfo>Quantidade: {quantity}</DataInfo>
                  <DataInfo>{item.id}</DataInfo>
                  <DataGrid>
                    <DataButton
                      disabled={Number(quantity) <= 1}
                      onClick={() => setQuantity(id, quantity - 1)}
                      type="button"
                    >
                      -
                    </DataButton>
                    <DataButton
                      onClick={() => setQuantity(id, quantity + 1)}
                      type="button"
                    >
                      +
                    </DataButton>
                  </DataGrid>
                </DataCard>
              );
            })}
          </DataContainer>
        </>
      )}
    </>
  );
}
