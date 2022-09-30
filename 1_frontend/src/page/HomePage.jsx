import Form from "../components/Form";
import Table from "../components/Table";
import { StyledMain } from "./HomePage.styled";

const AppointmentPage = () => {
  return (
    <StyledMain>
      <div>
        <Form />
        <Table />
      </div>
    </StyledMain>
  );
};

export default AppointmentPage;
