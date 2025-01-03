import { Divider, Skeleton } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { SidebarSkeletonContainer } from "./styles";

export default function SkeletonSidebarArticles() {
  return (
    <SidebarSkeletonContainer>
      <Box mr={2} py={3}>
        <Divider orientation="vertical" />
      </Box>
      <div>
        <Skeleton
          animation="wave"
          variant="rectangular"
          width="100%"
          height={20}
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
            <Box>
              <Box>
                <Skeleton animation="wave" variant="rectangular" height={30} />
                <Skeleton animation="wave" variant="rectangular" height={100} />
              </Box>
              <Box>
                <Skeleton animation="wave" variant="circular" height={50} />
              </Box>
            </Box>
            <Divider />
          </Box>
        ))}
      </div>
    </SidebarSkeletonContainer>
  );
}
