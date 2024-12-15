import { Box, Button, Typography } from "@mui/material";
import React, { useState } from "react";

// hooks => react functions which has specific task
// example => useState, useEffect, useRef, useCallback, useMemo
// third-party hooks => redux => useSelector, useDispatch
// router => useNavigate

// ? event
// ? onClick, onChange, onKeyPress, onSubmit, onScroll

const Counter = () => {
  //   let count = 1;
  const [count, setCount] = useState(1);
  return (
    <Box>
      <Typography variant="h3" gutterBottom>
        This is a counter app
      </Typography>
      <Typography variant="h4">Count:{count}</Typography>
      <Button
        variant="contained"
        color="success"
        onClick={() => {
          let newCount = count + 1;
          setCount(newCount);
        }}
      >
        Increase count
      </Button>
    </Box>
  );
};

export default Counter;
