import * as React from "react";
import Box from "@mui/material/Box";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import ColorLensIcon from "@mui/icons-material/ColorLens";
import InvertColorsTwoToneIcon from "@mui/icons-material/InvertColorsTwoTone";
import { GlobalContext } from "@/context/GlobalContext";
import { cn } from "@/lib/utils";
import { ETheme } from "@/types/theme";
import { toCapitalize } from "@/utils/helper";

interface IAction {
  icon: React.ReactNode;
  name: ETheme;
}

const actions: IAction[] = [
  { icon: <InvertColorsTwoToneIcon className="text-white" />, name: ETheme.LIGHT },
  { icon: <InvertColorsTwoToneIcon className="text-black" />, name: ETheme.DARK },
  { icon: <InvertColorsTwoToneIcon className="text-red-600" />, name: ETheme.RED },
  { icon: <InvertColorsTwoToneIcon className="text-blue-700" />, name: ETheme.BLUE },
  { icon: <InvertColorsTwoToneIcon className="text-amber-500" />, name: ETheme.ORANGE },
];

export default function ChangeTheme() {
  const { theme, setTheme } = React.useContext(GlobalContext)!;
  const handleClick = (t_color: ETheme) => {
    setTheme(t_color);
  };

  return (
    <div className="fixed bottom-0 right-0">
      <Box sx={{ height: 320, transform: "translateZ(0px)", flexGrow: 1 }}>
        <SpeedDial
          ariaLabel="SpeedDial basic example"
          sx={{ position: "absolute", bottom: 16, right: 16 }}
          icon={<ColorLensIcon />}
        >
          {actions.map((action) => (
            <SpeedDialAction
              key={action.name}
              icon={action.icon}
              tooltipTitle={toCapitalize(action.name)}
              onClick={() => handleClick(action.name)}
              className={cn(
                "bg-slate-300/80 hover:bg-slate-300/40",
                theme === action.name && "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500",
              )}
            />
          ))}
        </SpeedDial>
      </Box>
    </div>
  );
}
