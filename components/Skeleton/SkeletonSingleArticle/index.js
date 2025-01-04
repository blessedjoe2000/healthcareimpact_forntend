import { Skeleton } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import {
  SkeletonAvatarAuthor,
  SkeletonDateAvatarAuthor,
  SkeletonSingleContainter,
} from "./styles";

export default function SkeletonSingleArticle() {
  return (
    <SkeletonSingleContainter>
      <Skeleton
        animation="wave"
        variant="rectangular"
        height={40}
        style={{ marginBottom: 10, marginTop: 20 }}
      />

      <Skeleton
        animation="wave"
        variant="rectangular"
        height={100}
        style={{ marginBottom: 10, marginTop: 30 }}
      />

      <SkeletonDateAvatarAuthor>
        <Skeleton
          animation="wave"
          variant="rectangular"
          height={40}
          width="30%"
          style={{ marginBottom: 10, marginTop: 20 }}
        />

        <SkeletonAvatarAuthor>
          <Skeleton
            animation="wave"
            variant="circular"
            height={50}
            width={50}
            style={{ marginBottom: 10, marginTop: 20 }}
          />

          <Skeleton
            animation="wave"
            variant="rectangular"
            height={40}
            width="20%"
            style={{ marginBottom: 10, marginTop: 20 }}
          />
        </SkeletonAvatarAuthor>
      </SkeletonDateAvatarAuthor>
      <Box>
        <Skeleton
          animation="wave"
          variant="rectangular"
          sx={{
            height: {
              xs: "250px",
              sm: "300px",
              md: "500px",
            },
          }}
          style={{ marginBottom: 10, marginTop: 10 }}
        />
        <Box>
          <Skeleton
            animation="wave"
            variant="rectangular"
            height={150}
            style={{ marginBottom: 10, marginTop: 20 }}
          />
          <Skeleton
            animation="wave"
            variant="rectangular"
            height={200}
            style={{ marginBottom: 10, marginTop: 20 }}
          />
          <Skeleton
            animation="wave"
            variant="rectangular"
            height={100}
            style={{ marginBottom: 10, marginTop: 20 }}
          />
          <Skeleton
            animation="wave"
            variant="rectangular"
            height={250}
            style={{ marginBottom: 10, marginTop: 20 }}
          />
          <Skeleton
            animation="wave"
            variant="rectangular"
            height={200}
            style={{ marginBottom: 10, marginTop: 20 }}
          />
        </Box>
      </Box>
    </SkeletonSingleContainter>
  );
}
