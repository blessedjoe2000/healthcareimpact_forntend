import { Box } from "@mui/material";
import { styled } from "@mui/system";

export const FooterContainer = styled(Box)`
  display: flex;
  justify-content: space-around;
  padding: 20px 0;
  text-align: center;
`;

export const FooterCopyright = styled(Box)`
  /* padding: 20px 0;
  text-align: center; */
`;

export const ModalContainer = styled(Box)`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 500px;
  transform: translate(-50%, -50%);
  background-color: #021526;
  color: #fff;
  box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
  padding: 2rem;
`;

export const ModalTitle = styled(Box)`
  font-size: 1.5rem;
  font-weight: 600;
  text-align: center;
`;
