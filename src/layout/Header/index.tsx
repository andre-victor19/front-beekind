import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import useTheme from "@mui/material/styles/useTheme";
import { usePortal } from "../../hooks/usePortal";
import headerImage from "../../assets/images/header.png";

type HeaderProps = {
  notifiesUnread?: number;
};

const Header = ({}: HeaderProps) => {
  const theme = useTheme();
  const { handleChangeStatusSidebar } = usePortal();

  return (
    <>
      <Stack
        test-id="appbar"
        direction="row"
        sx={{
          justifyContent: "space-between",
          alignItems: "center",
          padding: theme.spacing(1, 2),
          backgroundColor: "#F8F7F4",
          boxShadow: "0px 0px 25px rgba(0, 0, 0, 0.08)",
          zIndex: 2,
          background: "#F8F7F4",
        }}
        columnGap={2}
      >
        <>
          <Stack
            test-id="content-appbar-right"
            direction="row"
            spacing={2}
            justifyContent="space-between"
            alignItems="center"
            flex={1}
          >
            <img
              src={headerImage}
              alt="header-image"
              width="32"
              loading="lazy" // Carregamento sob demanda
            />
            <IconButton
              disableRipple
              color="secondary"
              onClick={handleChangeStatusSidebar}
            >
              <i className="fi fi-rr-menu-burger" />
            </IconButton>
          </Stack>
        </>
      </Stack>
    </>
  );
};

export default Header;
