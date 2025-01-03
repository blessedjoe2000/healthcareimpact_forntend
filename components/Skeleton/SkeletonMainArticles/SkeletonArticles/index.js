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
                <Skeleton
                  animation="wave"
                  variant="rectangular"
                  sx={{
                    height: {
                      xs: "15px",
                      sm: "30px",
                      md: "80px",
                    },
                  }}
                />
                <Skeleton
                  animation="wave"
                  variant="rectangular"
                  sx={{
                    height: {
                      xs: "80px",
                      sm: "100px",
                      md: "200px",
                    },
                  }}
                  style={{ marginBottom: 10, marginTop: 10 }}
                />
                <Skeleton
                  animation="wave"
                  variant="rectangular"
                  sx={{
                    height: {
                      xs: "10px",
                      sm: "20px",
                      md: "30px",
                    },
                    width: {
                      xs: "30%",
                      sm: "50%",
                      md: "70%",
                    },
                  }}
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
