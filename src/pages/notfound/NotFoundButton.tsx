import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const NotFoundButton = ({ title }: { title: string }) => {
  const navigate = useNavigate();
  return (
    <StyledWrapper>
      <button onClick={() => navigate("/")}>{title}</button>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  button,
  button::after {
    padding: 16px 20px;
    font-size: 18px;
    background: linear-gradient(135deg, #000000 0%, #333333 100%);
    border: 0;
    color: #ffffff;
    letter-spacing: 3px;
    line-height: 1;
    box-shadow: 8px 0px 0px #ffffff;
    outline: transparent;
    position: relative;
    border-radius: 6px;
  }`;

export default NotFoundButton;
