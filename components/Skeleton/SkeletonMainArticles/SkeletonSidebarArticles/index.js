import { Divider, Skeleton } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { SideSkeletonAndAvatar, SideSkeletonContainer } from "./styles";

export default function SkeletonSidebarArticles() {
  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        marginTop: 2,
      }}
    >
      <Box mr={2} py={3}>
        <Divider orientation="vertical" />
      </Box>
      <SideSkeletonContainer>
        <Skeleton
          animation="wave"
          variant="rectangular"
          width="40%"
          height={30}
          style={{ marginBottom: 10 }}
        />
        <Divider
          sx={{
            backgroundColor: (theme) => theme.palette.dividerBackground,
            height: "2px",
            color: (theme) => theme.palette.text.primary,
          }}
        />

        {[...Array(5)].map((_, index) => (
          <Box key={index}>
            <SideSkeletonAndAvatar>
              <Box sx={{ width: "100%" }}>
                <Skeleton
                  animation="wave"
                  variant="rectangular"
                  height={50}
                  style={{ marginBottom: 10, marginTop: 20 }}
                />
                <Skeleton
                  animation="wave"
                  variant="rectangular"
                  height={120}
                  style={{ marginBottom: 20, marginTop: 20 }}
                />
              </Box>
              <Box>
                <Skeleton variant="circular" width={50} height={50} />
              </Box>
            </SideSkeletonAndAvatar>
            <Divider />
          </Box>
        ))}
      </SideSkeletonContainer>
    </Box>
  );
}
