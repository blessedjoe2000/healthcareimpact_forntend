"use client";

import { ReactQueryProviders } from "./react-query-provider";
import { ThemeProvider } from "../components/providers/themeProvider/ThemeProvider";
import { Box } from "@mui/material";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./globals.css";
import { SearchProvider } from "@/components/providers/searchProvider/SearchProvider";
import { Toaster } from "react-hot-toast";
import ScrollToTop from "@/components/ScrollToTop";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          <SearchProvider>
            <ReactQueryProviders>
              <Toaster position="top-right" />
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  minHeight: "100vh",
                }}
              >
                <Navbar />
                <Box sx={{ flex: 1 }}>{children}</Box>
                <ScrollToTop />
                <Footer />
              </Box>
            </ReactQueryProviders>
          </SearchProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
