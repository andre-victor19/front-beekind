import { Fragment, useMemo } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { usePortal } from "../../hooks/usePortal";
import { router } from "../../routes/routes";
import { findPathnameIcon, findPathname } from "../../utils/findPathname";

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { handleChangeStatusSidebar, isSidebarOpen } = usePortal();

  const routes = useMemo(() => {
    const options = router.routes
      .filter((route) => !route.id.includes("hidden"))
      .map((route) => ({
        id: route.id,
        path: route.path,
        name: findPathname(route.path!),
        icon: findPathnameIcon(route.path!),
      }));

    return options;
  }, [router]);

  const handleNavigate = (path: string) => {
    navigate(path, { replace: true });
    handleChangeStatusSidebar();
  };

  return (
    <>
      <Drawer
        anchor="right"
        open={isSidebarOpen}
        onClose={handleChangeStatusSidebar}
        PaperProps={{ sx: { minWidth: 240 } }}
      >
        <List
          disablePadding
          dense
          sx={{
            overflowX: "auto",
            overflowY: "hidden",
            backgroundColor: "#F8F7F4",
            flex: 1,
          }}
        >
          {routes.map((route) => (
            <Fragment key={route.id}>
              <ListItemButton
                disableTouchRipple
                sx={{ py: 1, px: 2 }}
                onClick={() => handleNavigate(route.path!)}
              >
                <Stack spacing={1} alignItems="center" direction="row" flex={1}>
                  <Typography
                    color={
                      location.pathname.includes(route.path!)
                        ? "secondary"
                        : undefined
                    }
                    variant="button"
                  >
                    <i
                      className={
                        location.pathname.includes(route.path!)
                          ? route.icon.replace("rr", "sr")
                          : route.icon
                      }
                      style={{
                        fontSize: "2.2ch",
                        borderRadius: "90px",
                        padding: "5px",
                      }}
                    />
                  </Typography>
                  <Typography color="secondary" variant="button">
                    {route.name}
                  </Typography>
                </Stack>
              </ListItemButton>
            </Fragment>
          ))}
        </List>
      </Drawer>
    </>
  );
};

export default Sidebar;
