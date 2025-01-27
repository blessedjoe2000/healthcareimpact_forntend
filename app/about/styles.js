import { Button, Typography } from "@mui/material";
import { Box, styled } from "@mui/system";

export const AboutTitle = styled(Box)`
  font-size: 3rem;
  text-align: center;
  font-weight: 700;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const ContactContainer = styled(Box)`
  font-size: 1rem;
`;

export const VisionMissionContainer = styled(Box)`
  font-size: 2rem;
  text-align: center;
  padding-top: 1rem;
  font-weight: 600;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

export const ContactTitle = styled(Box)`
  font-size: 2.5rem;
  padding-top: 2rem;
  padding-bottom: 1rem;
  font-weight: 700;

  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
`;

export const ContactDetailsContainer = styled(Box)`
  text-align: center;
`;

export const ContactDetails = styled(Typography)`
  font-size: 1.1rem;
`;

export const IconItemsContainer = styled(Box)`
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 1rem;
  font-size: 1.1rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 2px;
    padding-top: 1rem;
  }
`;
export const IconContainer = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2px;
  padding: 0.5rem 0;

  @media (max-width: 768px) {
    padding: 2px 0;
  }
`;

export const ContactMessageContainer = styled(Box)`
  margin: 2rem 0;
`;
export const ContactMessage = styled(Box)`
  font-size: 1.5rem;
  text-align: center;
  padding: 1rem;
  font-weight: 500;

  @media (max-width: 768px) {
    padding-bottom: 0.5rem;
  }
`;
export const FormNameContainer = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const InputContainer = styled(Box)`
  width: 100%;
`;

export const FormButton = styled(Button)`
  padding: 5px 0.5rem;
  width: 100%;
  border-radius: 5px;
  font-weight: 500;
  font-size: 1rem;
`;
