import { useArticleData } from "@/internal-api/articleData";
import { Divider } from "@mui/material";
import Skeleton from "@mui/material/Skeleton";
import { Box } from "@mui/system";
import {
  SkeletonArticlesContainer,
  SkeletonLeftContainer,
  SkeletonRightContainer,
} from "./styles";

export default function SkeletonArticles() {
  const { isLoading } = useArticleData();

  return (
    isLoading && (
      <div>
        {[...Array(3)].map((_, index) => (
          <Box key={index} mb={2}>
            <SkeletonArticlesContainer>
              <SkeletonLeftContainer>
                <Skeleton animation="wave" variant="rectangular" height={80} />
                <Skeleton
                  animation="wave"
                  variant="rectangular"
                  height={200}
                  style={{ marginBottom: 20, marginTop: 20 }}
                />
                <Skeleton
                  animation="wave"
                  variant="rectangular"
                  height={30}
                  width="70%"
                />
              </SkeletonLeftContainer>
              <SkeletonRightContainer>
                <Skeleton
                  variant="rectangular"
                  animation="wave"
                  sx={{
                    height: {
                      xs: "250px",
                      sm: "300px",
                      md: "350px",
                    },
                  }}
                />
              </SkeletonRightContainer>
            </SkeletonArticlesContainer>
            <Box px={3}>
              <Divider
                sx={{
                  backgroundColor: (theme) => theme.palette.dividerBackground,
                  height: "1px",

                  color: (theme) => theme.palette.text.primary,
                }}
              />
            </Box>
          </Box>
        ))}
      </div>
    )
  );
}
