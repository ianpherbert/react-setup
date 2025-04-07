import { Button, Typography } from "@mui/material";
import { useCallback, useState } from "react";

function App() {

  const [count, setCount] = useState(0);

  const updateDate = useCallback(()=> {
    setCount(a => a +1);
  },[setCount])

  return (
    <>
      <Typography data-testid='countDisplay'>{String(count)}</Typography>
      <Button onClick={updateDate}>increment</Button>
    </>
  )
}

export default App
