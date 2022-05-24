import {
  Content,
  Modal,
  Overlay,
  Button,
  List,
  IconExit,
  ListItem,
} from "./style";
import { api } from "../../services";

function Component({ order, resetData, close }) {
  async function sendData() {
    try {
      await api.post(`/orders/accept/${order.id}`, order);

      resetData();
      close();
    } catch (error) {
      console.log(error.response.data);
    }
  }

  return (
    <Modal>
      <Overlay />
      <Content>
        <IconExit onClick={close}>x</IconExit>
        <h1>Confirmar pedido</h1>

        <List>
          {order.items.map((item, j) => (
            <ListItem key={j}>
              <p>
                {item.quantity}x<strong>{item.title}</strong>
              </p>
            </ListItem>
          ))}
        </List>

        <div style={{ display: "flex", justifyContent: "center" }}>
          <Button type="button" onClick={close}>
            Deletar
          </Button>
          <Button confirm type="button" onClick={() => sendData()}>
            Confirmar
          </Button>
        </div>
      </Content>
    </Modal>
  );
}

export default function ({ open, ...props }) {
  return <>{open && <Component {...props} />}</>;
}
