import { parsebrl } from "../../utils";
import {
  ContainerTitle,
  DataButton,
  DataCard,
  DataContainer,
  DataInfo,
  DataTitle,
} from "./styles";

export default function ({ data, toggle }) {
  return (
    <>
      <ContainerTitle>Cardápio</ContainerTitle>
      <DataContainer>
        {data.map((el, i) => (
          <DataCard key={i}>
            <DataTitle>{el.title}</DataTitle>
            <DataInfo small>{el.id}</DataInfo>
            <DataInfo>Valor {parsebrl(el.price)}</DataInfo>
            <DataButton type="button" onClick={() => toggle(i)}>
              Pedir
            </DataButton>
          </DataCard>
        ))}
      </DataContainer>
    </>
  );
}
