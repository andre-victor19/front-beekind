import { useQuery } from "react-query";
import React, { createContext, useMemo, useState } from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import useTheme from "@mui/material/styles/useTheme";
import { findPlace } from "../services/principal";
import data from "../../data.json";

type PortalProviderProps = {
  children: React.ReactNode;
};

type Review = {
  author_name: string;
  author_url: string;
  language: string;
  original_language: string;
  profile_photo_url: string;
  rating: number;
  relative_time_description: string;
  text: string;
  time: number;
  translated: boolean;
};

export type PortalContextData = {
  handleChangeStatusSidebar(): void;
  isSidebarOpen: boolean;
  isMobile: boolean;
  isFetchingPlace: boolean;
  rating: number;
  urlMaps: string;
  reviews?: Review[];
  data: typeof data;
};

export const PortalContext = createContext<PortalContextData>(
  {} as PortalContextData
);

export function PortalProvider({ children }: PortalProviderProps) {
  const theme = useTheme();
  const [open, setOpen] = useState<boolean>(false);
  const [rating, setRating] = useState<number>(5);
  const [urlMaps, setUrlMaps] = useState<string>("");
  const [reviews, setReviews] = useState<Review[]>();
  const isMobile = useMediaQuery(theme.breakpoints.down("lg"));

  const placeInfo = useQuery(["place"], findPlace, {
    onSuccess: (response) => {
      setRating(response.rating);
      setUrlMaps(response.url);
      setReviews(response.reviews);
    },
  });

  const handleChangeStatusSidebar = () => {
    setOpen((prev) => !prev);
  };

  const PortalContextData = useMemo(() => {
    return {
      data,
      isFetchingPlace: placeInfo.isFetching,
      rating,
      urlMaps,
      reviews,
      isSidebarOpen: open,
      isMobile,
      handleChangeStatusSidebar,
    };
  }, [
    data,
    open,
    isMobile,
    placeInfo.isFetching,
    rating,
    urlMaps,
    reviews,
    handleChangeStatusSidebar,
  ]);

  return (
    <PortalContext.Provider value={PortalContextData}>
      {children}
    </PortalContext.Provider>
  );
}
